<script setup lang="ts">
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
      <p class="deck-step-title deck-step-title--hands-on">ファイルを変更する</p>
      <div class="deck-command-card deck-command-card--hands-on">
        <span>好きなファイルを編集</span>
      </div>
      <p class="deck-note">まだGitには記録されていない</p>
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
