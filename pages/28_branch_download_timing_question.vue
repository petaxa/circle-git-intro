<script setup lang="ts">
import BranchCongestionDiagram from "../components/BranchCongestionDiagram.vue";
import DeckSlide from "../components/DeckSlide.vue";

const changes = ["目的Aの途中経過", "目的Bの途中経過", "目的Cの途中経過"];
</script>

<template>
  <DeckSlide section-label="ブランチ" eyebrow="BRANCH" footer-label="VERSION CONTROL SYSTEM">
    <div class="deck-centered deck-question-content--dimmed">
      <p class="deck-statement deck-statement--small deck-statement--nowrap">
        作業中はダウンロードしない！
      </p>
      <div class="deck-download-timing">
        <BranchCongestionDiagram :users="changes" :commit-count="5" />
        <div class="deck-download-batch">
          <span
            class="deck-download-batch__arrow deck-download-batch__arrow--icon"
            aria-hidden="true"
          />
          <span class="deck-download-batch__label">
            任意のタイミングで<br />
            複数のコミットを一気にダウンロード
          </span>
          <span class="deck-download-batch__local">手元の作業へまとめて反映</span>
        </div>
      </div>
    </div>

    <template #overlay>
      <p class="deck-center-callout">本当に？？</p>
    </template>
  </DeckSlide>
</template>
