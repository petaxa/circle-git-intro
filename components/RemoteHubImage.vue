<script setup lang="ts">
defineProps<{
  callout?: string;
  compact?: boolean;
  localLabel?: string;
  serverLabel?: string;
  imageOpacity?: string;
}>();
</script>

<template>
  <figure class="deck-remote-image-frame" :class="{ 'deck-remote-image-frame--compact': compact }">
    <img
      class="deck-remote-image"
      src="/images/remote-hub-diagram.svg"
      alt="リモートリポジトリとローカルリポジトリの図"
      :style="{ opacity: imageOpacity }"
    />
    <figcaption v-if="serverLabel" class="deck-remote-image-label deck-remote-image-label--server">
      {{ serverLabel }}
    </figcaption>
    <figcaption v-if="localLabel" class="deck-remote-image-label deck-remote-image-label--local">
      {{ localLabel }}
    </figcaption>
    <figcaption v-if="callout" class="deck-remote-image-callout">
      {{ callout }}
    </figcaption>
  </figure>
</template>
