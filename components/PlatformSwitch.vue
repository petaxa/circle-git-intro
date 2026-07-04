<script setup lang="ts">
import { usePlatformChoice, type PlatformChoice } from "../composables/usePlatformChoice";

defineProps<{
  ariaLabel: string;
  options: Array<{ value: PlatformChoice; label: string }>;
}>();

const { platform, setPlatform } = usePlatformChoice();
</script>

<template>
  <div class="platform-switch" :aria-label="ariaLabel">
    <button
      v-for="option in options"
      :key="option.value"
      class="platform-switch__button"
      :class="{ 'platform-switch__button--active': platform === option.value }"
      type="button"
      :aria-pressed="platform === option.value"
      @click="setPlatform(option.value)"
    >
      {{ option.label }}
    </button>
  </div>
</template>

<style scoped>
.platform-switch {
  display: inline-grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  width: 12.8rem;
  padding: 0.24rem;
  border: 1px solid rgba(123, 116, 104, 0.28);
  background: rgba(255, 253, 250, 0.88);
  box-shadow: 0 0.8rem 2.4rem rgba(32, 28, 21, 0.075);
}

.platform-switch__button {
  min-height: 2.1rem;
  border: 0;
  background: transparent;
  color: rgba(48, 47, 44, 0.62);
  font-family: "Courier New", Courier, monospace;
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  line-height: 1;
  text-transform: uppercase;
}

.platform-switch__button--active {
  background: #121722;
  color: #fffdfa;
}
</style>
