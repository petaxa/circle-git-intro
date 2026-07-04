<script setup lang="ts">
import DeckSlide from "../components/DeckSlide.vue";

const flowSteps = [
  { label: "01", title: "init" },
  { label: "02", title: "edit" },
  { label: "03", title: "add" },
  { label: "04", title: "commit" },
  { label: "05", title: "push" },
  { label: "06", title: "pull" },
];
</script>

<template>
  <DeckSlide
    section-label="開発の流れと具体的なコマンド"
    eyebrow="COMMAND FLOW"
    footer-label="VERSION CONTROL SYSTEM"
  >
    <div class="deck-centered">
      <h1 class="deck-command-title">開発の流れと具体的なコマンド</h1>
      <p class="deck-note deck-note--lead">代表的なコマンドを流れに沿って紹介します</p>
      <ol class="deck-mini-flow">
        <li v-for="step in flowSteps" :key="step.label">
          <span>{{ step.label }}</span>
          <b>{{ step.title }}</b>
        </li>
      </ol>
    </div>
  </DeckSlide>
</template>
