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
      <div class="deck-direct-share">
        <LocalPairDiagram
          file-label="file"
          download-label="ダウンロード"
          upload-label="アップロード"
          compact
        />
        <p class="deck-risk-note">
          <span class="deck-risk-note__label">ISSUE 01</span>
          <span class="deck-risk-note__text">
            作業中の変更が、相手のアップロードで上書きされるかもしれない
          </span>
        </p>
      </div>
    </div>
  </DeckSlide>
</template>
