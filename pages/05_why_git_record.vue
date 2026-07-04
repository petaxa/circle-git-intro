<script setup lang="ts">
import DeckSlide from "../components/DeckSlide.vue";
</script>

<template>
  <DeckSlide
    section-label="なぜGitが必要なのか 1/3"
    footer-label="VERSION CONTROL SYSTEM"
    variant="center"
  >
    <div class="deck-centered">
      <p class="deck-statement deck-statement--small deck-statement--nowrap">
        <span class="deck-statement__segment deck-statement__segment--emphasis">誰が</span>
        <span class="deck-statement__segment deck-statement__segment--emphasis">いつ</span>
        <span class="deck-statement__segment deck-statement__segment--emphasis">何を</span>
        <span class="deck-statement__segment">したのかを</span>
        <span class="deck-statement__segment deck-statement__segment--emphasis">記録</span>
        <span class="deck-statement__segment">しておくため</span>
      </p>
    </div>
  </DeckSlide>
</template>
