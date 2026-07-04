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
    title: "Homebrewをインストールする",
    command:
      '/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"',
    detail: "入っていない人だけHomebrewをインストールする",
  },
  {
    label: "02",
    title: "GitHub CLIをインストールする",
    command: "brew install gh",
    detail: "brew install gh",
  },
  {
    label: "03",
    title: "バージョンを確認する",
    command: "gh --version",
    detail: "gh --version",
  },
];
</script>

<template>
  <DeckSlide
    section-label="github cliのインストール"
    eyebrow="MAC / LINUX"
    title="Mac/Linux: GitHub CLIを入れる"
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
