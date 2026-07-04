<script setup lang="ts">
import DeckSlide from "../components/DeckSlide.vue";
</script>

<template>
  <DeckSlide
    section-label="開発の流れと具体的なコマンド"
    eyebrow="COMMAND FLOW"
    footer-label="VERSION CONTROL SYSTEM"
  >
    <div class="deck-centered">
      <p class="deck-step-title">ソースコードを変更</p>
      <div class="deck-command-card">
        <span>ファイルを編集</span>
      </div>
    </div>
  </DeckSlide>
</template>
