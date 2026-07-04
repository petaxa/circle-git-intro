<script setup lang="ts">
import DeckSlide from "../components/DeckSlide.vue";
import RemoteHubImage from "../components/RemoteHubImage.vue";
</script>

<template>
  <DeckSlide section-label="GitHub" eyebrow="GITHUB" footer-label="VERSION CONTROL SYSTEM">
    <div class="deck-remote-image-stage">
      <RemoteHubImage callout="サーバー管理がすごくめんどくさい" image-opacity="0.75" />
    </div>
  </DeckSlide>
</template>
