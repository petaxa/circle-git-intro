<script setup lang="ts">
import ClickSetupSteps from "../components/ClickSetupSteps.vue";
import DeckSlide from "../components/DeckSlide.vue";
import PlatformSwitch from "../components/PlatformSwitch.vue";

const platformOptions = [
  { value: "win" as const, label: "Win" },
  { value: "unix" as const, label: "Mac/Linux" },
];

const steps = [
  {
    label: "01",
    title: "GitHub CLIをインストールする",
    command: "winget install --id GitHub.cli",
    detail: "winget install --id GitHub.cli",
  },
];
</script>

<template>
  <DeckSlide
    section-label="github cliのインストール"
    eyebrow="WINDOWS"
    title="Windows: GitHub CLIを入れる"
    footer-label="WORKSHOP"
    variant="default"
  >
    <div class="deck-setup">
      <ClickSetupSteps :steps="steps" />
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
