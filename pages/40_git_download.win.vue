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
    title: "Git公式ページを開く",
    detail: "https://git-scm.com/downloads/winへアクセスする",
    href: "https://git-scm.com/downloads/win",
  },
  {
    label: "02",
    title: "Standalone Installerを選ぶ",
    detail: "Standalone Installerを選ぶ",
  },
  {
    label: "03",
    title: "インストーラを実行する",
    detail: "ダウンロードしたインストーラを実行する",
  },
  {
    label: "04",
    title: "コマンドを実行して確認する",
    command: "git -v",
    detail: "最後にコマンドプロンプトでバージョンが表示されればOK",
  },
];
</script>

<template>
  <DeckSlide
    section-label="Gitのダウンロード"
    eyebrow="WINDOWS"
    title="Windows: Git Bashを用意する"
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
