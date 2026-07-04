<script setup lang="ts">
defineProps<{
  fileLabel: string;
  downloadLabel: string;
  uploadLabel: string;
  compact?: boolean;
}>();
</script>

<template>
  <div class="deck-local-pair" :class="{ 'deck-local-pair--compact': compact }">
    <div class="deck-person-file deck-person-file--self">
      <div class="deck-person" aria-hidden="true">
        <span class="deck-person__head" />
        <span class="deck-person__body" />
      </div>
      <div class="deck-file">{{ fileLabel }}</div>
    </div>

    <div class="deck-transfer">
      <div class="deck-transfer__arrow deck-transfer__arrow--download">
        <span>{{ downloadLabel }}</span>
        <b>→</b>
      </div>
      <div class="deck-transfer__arrow deck-transfer__arrow--upload">
        <b>←</b>
        <span>{{ uploadLabel }}</span>
      </div>
    </div>

    <div class="deck-person-file">
      <div class="deck-person" aria-hidden="true">
        <span class="deck-person__head" />
        <span class="deck-person__body" />
      </div>
      <div class="deck-file">{{ fileLabel }}</div>
    </div>
  </div>
</template>
