<script setup lang="ts">
defineProps<{
  steps: Array<{ label: string; title: string; href?: string }>;
}>();
</script>

<template>
  <ol class="deck-setup__steps">
    <li v-for="step in steps" :key="step.label">
      <span>{{ step.label }}</span>
      <a v-if="step.href" :href="step.href" target="_blank" rel="noreferrer">{{ step.title }}</a>
      <b v-else>{{ step.title }}</b>
    </li>
  </ol>
</template>
