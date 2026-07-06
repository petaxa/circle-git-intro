<script setup lang="ts">
import { computed, onBeforeUnmount, ref } from "vue";

type ShellToken = {
  kind: "argument" | "command" | "option" | "placeholder" | "space" | "string";
  value: string;
};

const props = withDefaults(
  defineProps<{
    command: string;
    language?: string;
    variant?: "default" | "setup" | "hands-on";
  }>(),
  {
    language: "bash",
    variant: "default",
  },
);

const copied = ref(false);
let copiedTimer: ReturnType<typeof setTimeout> | undefined;

function tokenizeShellLine(command: string) {
  let commandSeen = false;

  return Array.from(command.matchAll(/"[^"]*"|'[^']*'|\s+|\S+/g)).map<ShellToken>((match) => {
    const value = match[0];

    if (/^\s+$/.test(value)) {
      return { kind: "space", value };
    }

    if (!commandSeen) {
      commandSeen = true;
      return { kind: "command", value };
    }

    if (/^["'].*["']$/.test(value)) {
      return { kind: "string", value };
    }

    if (/^<.*>$/.test(value)) {
      return { kind: "placeholder", value };
    }

    if (value.startsWith("-")) {
      return { kind: "option", value };
    }

    return { kind: "argument", value };
  });
}

const shellLines = computed(() => {
  return props.command.split(/\r?\n/).map((line) => tokenizeShellLine(line));
});

const isCompact = computed(() => {
  return Math.max(...props.command.split(/\r?\n/).map((line) => line.length)) > 54;
});
const isMultiline = computed(() => shellLines.value.length > 1);

function copyCommandWithFallback() {
  if (typeof document !== "undefined") {
    const copyListener = (event: ClipboardEvent) => {
      event.clipboardData?.setData("text/plain", props.command);
      event.preventDefault();
    };

    document.addEventListener("copy", copyListener);
    const textArea = document.createElement("textarea");
    textArea.value = props.command;
    textArea.style.position = "fixed";
    textArea.style.top = "0";
    textArea.style.left = "-9999px";
    document.body.appendChild(textArea);
    window.focus();
    textArea.focus();
    textArea.select();
    textArea.setSelectionRange(0, props.command.length);
    const didCopy = document.execCommand("copy");
    document.body.removeChild(textArea);
    document.removeEventListener("copy", copyListener);
    return didCopy;
  }

  return false;
}

async function copyCommand() {
  let didCopy = false;

  try {
    const clipboard =
      typeof window !== "undefined" && window.navigator ? window.navigator.clipboard : undefined;

    if (clipboard) {
      await clipboard.writeText(props.command);
      didCopy = true;
    } else {
      didCopy = copyCommandWithFallback();
    }
  } catch {
    didCopy = copyCommandWithFallback();
  }

  if (!didCopy) {
    return;
  }

  copied.value = true;
  if (copiedTimer) {
    clearTimeout(copiedTimer);
  }
  copiedTimer = setTimeout(() => {
    copied.value = false;
  }, 1200);
}

onBeforeUnmount(() => {
  if (copiedTimer) {
    clearTimeout(copiedTimer);
  }
});
</script>

<template>
  <div
    class="deck-command-card deck-command-card--shell"
    :class="{
      'deck-command-card--setup': variant === 'setup',
      'deck-command-card--hands-on': variant === 'hands-on',
      'deck-command-card--compact': isCompact,
      'deck-command-card--multiline': isMultiline,
    }"
  >
    <span class="deck-command-card__chrome" aria-hidden="true" />
    <button
      type="button"
      class="deck-command-card__copy"
      :aria-label="copied ? 'コピーしました' : 'コマンドをコピー'"
      :title="copied ? 'コピーしました' : 'コマンドをコピー'"
      @click="copyCommand"
    >
      <svg v-if="copied" aria-hidden="true" viewBox="0 0 24 24">
        <path d="M20 6 9 17l-5-5" />
      </svg>
      <svg v-else aria-hidden="true" viewBox="0 0 24 24">
        <rect x="9" y="9" width="10" height="10" rx="2" />
        <path d="M5 15V7a2 2 0 0 1 2-2h8" />
      </svg>
    </button>
    <code :class="`language-${language}`">
      <span
        v-for="(line, lineIndex) in shellLines"
        :key="lineIndex"
        class="deck-command-card__line"
      >
        <span class="deck-command-card__prompt" aria-hidden="true">$</span>
        <span
          v-for="(token, tokenIndex) in line"
          :key="tokenIndex"
          :class="`deck-command-card__token deck-command-card__token--${token.kind}`"
          >{{ token.value }}</span
        >
      </span>
    </code>
  </div>
</template>
