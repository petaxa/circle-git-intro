<script setup lang="ts">
import { usePlatformChoice, type PlatformChoice } from "../composables/usePlatformChoice";

defineProps<{
  ariaLabel: string;
  options: Array<{ value: PlatformChoice; label: string; text: string }>;
}>();

const { platform, setPlatform } = usePlatformChoice();
</script>

<template>
  <div class="deck-environment__options" :aria-label="ariaLabel">
    <button
      v-for="option in options"
      :key="option.value"
      class="deck-environment__option"
      :class="{ 'deck-environment__option--active': platform === option.value }"
      type="button"
      :aria-pressed="platform === option.value"
      @click="setPlatform(option.value)"
    >
      <span class="deck-environment__option-label">{{ option.label }}</span>
      <span class="deck-environment__option-text">{{ option.text }}</span>
    </button>
  </div>
</template>
