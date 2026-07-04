<script setup lang="ts">
import ClickSetupSteps from "../components/ClickSetupSteps.vue";
import DeckSlide from "../components/DeckSlide.vue";

const steps = [
  {
    label: "01",
    title: "ログインを開始する",
    command: "gh auth login",
    detail: "gh auth login",
  },
  {
    label: "02",
    title: "GitHub.comを選ぶ",
    detail: [
      { kind: "code", text: "What account do you want to log into?" },
      { kind: "text", text: " では GitHub.com を選ぶ" },
    ],
  },
  {
    label: "03",
    title: "SSHを選ぶ",
    detail: [
      { kind: "code", text: "What is your preferred protocol for Git operations?" },
      { kind: "text", text: " では SSH を選ぶ" },
    ],
  },
  {
    label: "04",
    title: "ブラウザで認証する",
    detail: [
      { kind: "code", text: "Login with a web browser" },
      { kind: "text", text: " を選び、表示されたコードをGitHubに入力する" },
    ],
  },
];
</script>

<template>
  <DeckSlide
    section-label="gh auth login"
    eyebrow="GITHUB CLI"
    title="GitHub CLIでSSHログインする"
    footer-label="WORKSHOP"
    variant="default"
  >
    <div class="deck-setup">
      <ClickSetupSteps :steps="steps" />
    </div>
  </DeckSlide>
</template>
