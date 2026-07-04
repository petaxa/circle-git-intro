<script setup lang="ts">
import { usePlatformChoice } from "../composables/usePlatformChoice";
import UnixSlide from "./40_git_download.unix.vue";
import WinSlide from "./40_git_download.win.vue";

const { platform } = usePlatformChoice();
</script>

<template>
  <WinSlide v-if="platform === 'win'" />
  <UnixSlide v-else />
</template>
