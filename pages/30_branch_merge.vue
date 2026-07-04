<script setup lang="ts">
import BranchMergeDiagram from "../components/BranchMergeDiagram.vue";
import DeckSlide from "../components/DeckSlide.vue";
</script>

<template>
  <DeckSlide section-label="ブランチ" eyebrow="BRANCH" footer-label="VERSION CONTROL SYSTEM">
    <div class="deck-centered">
      <BranchMergeDiagram
        aria-label="ブランチとマージの図"
        branch-label="枝分かれさせて開発"
        merge-label="統合タイミングで合流"
      />
    </div>
  </DeckSlide>
</template>
