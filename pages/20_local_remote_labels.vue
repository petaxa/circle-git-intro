<script setup lang="ts">
import DeckSlide from "../components/DeckSlide.vue";
import RemoteHubImage from "../components/RemoteHubImage.vue";
</script>

<template>
  <DeckSlide
    section-label="ローカルとリモート"
    eyebrow="LOCAL / REMOTE"
    footer-label="VERSION CONTROL SYSTEM"
  >
    <div class="deck-remote-image-stage">
      <RemoteHubImage
        server-label="リモートリポジトリ"
        local-label="ローカルリポジトリ"
        image-opacity="0.75"
      />
    </div>
  </DeckSlide>
</template>
