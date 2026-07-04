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
        <ol class="deck-risk-grid">
          <li>
            <span class="deck-risk-grid__label">ISSUE 01</span>
            <span class="deck-risk-grid__title">変更が上書きされる</span>
            <span class="deck-risk-grid__text">
              直接やり取りすると、相手の更新で変更が消えることがある
            </span>
          </li>
          <li>
            <span class="deck-risk-grid__label">ISSUE 02</span>
            <span class="deck-risk-grid__title">相手のPCに依存する</span>
            <span class="deck-risk-grid__text">相手のPCが閉じると、その時点で共有が止まる</span>
          </li>
        </ol>
      </div>
    </div>
  </DeckSlide>
</template>
