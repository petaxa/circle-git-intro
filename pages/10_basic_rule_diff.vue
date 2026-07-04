<script setup lang="ts">
import DeckSlide from "../components/DeckSlide.vue";
</script>

<template>
  <DeckSlide
    section-label="Gitの基本ルール"
    eyebrow="BASIC RULE"
    footer-label="VERSION CONTROL SYSTEM"
  >
    <div class="deck-centered">
      <p class="deck-statement deck-statement--small deck-statement--nowrap">
        <span class="deck-statement__segment deck-statement__segment--emphasis">差分</span>
        <span class="deck-statement__segment">が出るたびにそれを記録し続ける</span>
      </p>
    </div>
  </DeckSlide>
</template>
