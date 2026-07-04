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
  <DeckSlide section-label="ハンズオン" eyebrow="MAC / LINUX" footer-label="WORKSHOP">
    <div class="deck-centered">
      <p class="deck-step-title deck-step-title--hands-on">GitHubのログイン状態を確認する</p>
      <CommandBlock command="gh auth status" variant="hands-on" />
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
