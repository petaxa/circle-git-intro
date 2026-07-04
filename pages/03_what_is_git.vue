<script setup lang="ts">
import DeckSlide from "../components/DeckSlide.vue";
</script>

<template>
  <DeckSlide
    section-label="Gitとは何なのか"
    eyebrow="WHAT IS GIT"
    footer-label="VERSION CONTROL SYSTEM"
  >
    <div class="deck-centered">
      <p class="deck-statement what-is-git-statement">バージョン管理を行うためのツール</p>
    </div>
  </DeckSlide>
</template>

<style scoped>
.what-is-git-statement {
  white-space: nowrap;
  text-wrap: nowrap;
}
</style>
