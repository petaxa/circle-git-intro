<script setup lang="ts">
defineProps<{
  ariaLabel: string;
  branchLabel: string;
  mergeLabel: string;
}>();
</script>

<template>
  <svg class="deck-branch-merge" viewBox="0 0 760 300" role="img" :aria-label="ariaLabel">
    <path class="deck-branch-merge__line" d="M72 170 H650" />
    <path
      class="deck-branch-merge__line deck-branch-merge__line--feature"
      d="M235 170 C285 72 430 72 505 170"
    />
    <g>
      <circle
        v-for="x in [72, 178, 235, 505, 650]"
        :key="x"
        class="deck-branch-merge__node"
        :cx="x"
        cy="170"
        r="13"
      />
      <circle
        v-for="node in [
          { x: 321, y: 101 },
          { x: 401, y: 101 },
        ]"
        :key="'feature-' + node.x"
        class="deck-branch-merge__node deck-branch-merge__node--feature"
        :cx="node.x"
        :cy="node.y"
        r="13"
      />
    </g>
    <text class="deck-branch-merge__label" x="210" y="62">{{ branchLabel }}</text>
    <text class="deck-branch-merge__label" x="470" y="230">{{ mergeLabel }}</text>
  </svg>
</template>
