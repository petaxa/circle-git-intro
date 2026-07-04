<script setup lang="ts">
import DeckSlide from "../components/DeckSlide.vue";
import RemoteHubImage from "../components/RemoteHubImage.vue";
</script>

<template>
  <DeckSlide
    section-label="ローカルとリモート"
    footer-label="VERSION CONTROL SYSTEM"
    variant="default"
  >
    <div class="deck-remote-image-stage">
      <RemoteHubImage compact />
      <p class="deck-caption">みんなのソースコードをまとめておくだけのgitリポジトリを用意しよう</p>
    </div>
  </DeckSlide>
</template>
