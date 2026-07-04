<script setup lang="ts">
import BranchCongestionDiagram from "../components/BranchCongestionDiagram.vue";
import DeckSlide from "../components/DeckSlide.vue";

const changes = ["目的Aの途中経過", "目的Bの途中経過", "目的Cの途中経過"];
</script>

<template>
  <DeckSlide section-label="ブランチ" eyebrow="BRANCH" footer-label="VERSION CONTROL SYSTEM">
    <div class="deck-centered">
      <BranchCongestionDiagram :users="changes" :commit-count="5" />
      <p class="deck-caption deck-caption--strong">複数の目的の途中経過を同じ場所に置くと混線</p>
    </div>
  </DeckSlide>
</template>
