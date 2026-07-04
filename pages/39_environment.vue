<script setup lang="ts">
import DeckSlide from "../components/DeckSlide.vue";
import EnvironmentSelector from "../components/EnvironmentSelector.vue";

const environmentOptions = [
  {
    value: "win" as const,
    label: "Win",
    text: "Git Bashを使って進める",
  },
  {
    value: "unix" as const,
    label: "Mac/Linux",
    text: "ターミナルを使って進める",
  },
];
</script>

<template>
  <DeckSlide
    section-label="環境選択"
    eyebrow="SETUP"
    title="使っている環境を選択"
    footer-label="WORKSHOP"
    variant="default"
  >
    <div class="deck-environment">
      <p class="deck-environment__lead">この選択は以降の手順表示に使います</p>
      <EnvironmentSelector aria-label="表示する環境" :options="environmentOptions" />
    </div>
  </DeckSlide>
</template>
