<script setup lang="ts">
import CommandBlock from "../components/CommandBlock.vue";
import DeckSlide from "../components/DeckSlide.vue";
import PlatformSwitch from "../components/PlatformSwitch.vue";

const platformOptions = [
  { value: "win" as const, label: "Win" },
  { value: "unix" as const, label: "Mac/Linux" },
];
</script>

<template>
  <DeckSlide section-label="ハンズオン" eyebrow="HANDS ON" footer-label="WORKSHOP">
    <div class="deck-centered">
      <p
        class="deck-step-title deck-step-title--hands-on deck-step-title--wide deck-step-title--compact deck-step-title--nowrap"
      >
        mainブランチをGitHubへアップロードする
      </p>
      <CommandBlock command="git push -u origin main" variant="hands-on" />
      <p class="deck-note">ローカルのコミットがリモートに置かれる</p>
    </div>

    <template #overlay>
      <PlatformSwitch
        class="deck-platform-switch"
        aria-label="表示する環境"
        :options="platformOptions"
      />
    </template>
  </DeckSlide>
</template>
