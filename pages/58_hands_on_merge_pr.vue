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
    title: "Pull Requestを作成する",
    image: {
      src: "images/create-pr.png",
      alt: "Pull Requestを作成するGitHub画面",
    },
  },
  {
    label: "02",
    title: "Pull Requestをマージする",
    image: {
      src: "images/merge-pr.png",
      alt: "Pull RequestをマージするGitHub画面",
    },
  },
];
</script>

<template>
  <DeckSlide
    section-label="ハンズオン"
    eyebrow="HANDS ON"
    title="GitHubでPull Requestを進める"
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
