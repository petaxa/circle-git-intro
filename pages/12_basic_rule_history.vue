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
        コミットを積み重ねることで、変更の歴史ができる
      </p>
      <div class="deck-timeline">
        <div class="deck-timeline__commit">
          <span class="deck-timeline__label">commit 01</span>
          <span class="deck-timeline__title">はじめ</span>
        </div>
        <div class="deck-timeline__commit">
          <span class="deck-timeline__label">commit 02</span>
          <span class="deck-timeline__title">追加</span>
        </div>
        <div class="deck-timeline__commit">
          <span class="deck-timeline__label">commit 03</span>
          <span class="deck-timeline__title">修正</span>
        </div>
        <div class="deck-timeline__commit">
          <span class="deck-timeline__label">commit 04</span>
          <span class="deck-timeline__title">完成</span>
        </div>
      </div>
    </div>
  </DeckSlide>
</template>
