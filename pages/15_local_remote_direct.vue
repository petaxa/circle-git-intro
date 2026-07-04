<script setup lang="ts">
import DeckSlide from "../components/DeckSlide.vue";
import LocalPairDiagram from "../components/LocalPairDiagram.vue";
</script>

<template>
  <DeckSlide
    section-label="ローカルとリモート"
    eyebrow="LOCAL / REMOTE"
    footer-label="VERSION CONTROL SYSTEM"
  >
    <div class="deck-centered">
      <LocalPairDiagram
        file-label="file"
        download-label="ダウンロード"
        upload-label="アップロード"
      />
    </div>
  </DeckSlide>
</template>
