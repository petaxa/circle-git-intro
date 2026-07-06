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
        GitHubリポジトリの場所を登録する
      </p>
      <CommandBlock
        command="git remote add origin git@github.com:&lt;ユーザー名&gt;/first-repo.git"
        variant="hands-on"
      />
      <section class="deck-note">
        <p>origin は登録したリモートリポジトリの名前</p>
        <p class="deck-note">「&lt;ユーザー名&gt;」は&lt;&gt;も含めて置き換える</p>
      </section>
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
