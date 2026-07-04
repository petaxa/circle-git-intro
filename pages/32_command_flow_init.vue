<script setup lang="ts">
import CommandBlock from "../components/CommandBlock.vue";
import DeckSlide from "../components/DeckSlide.vue";
</script>

<template>
  <DeckSlide
    section-label="開発の流れと具体的なコマンド"
    eyebrow="COMMAND FLOW"
    footer-label="VERSION CONTROL SYSTEM"
  >
    <div class="deck-centered">
      <p class="deck-step-title">Gitリポジトリを作成</p>
      <CommandBlock command="git init" />
    </div>
  </DeckSlide>
</template>
