<script setup lang="ts">
import { usePlatformChoice } from "../composables/usePlatformChoice";
import UnixSlide from "./41_github_cli_install.unix.vue";
import WinSlide from "./41_github_cli_install.win.vue";

const { platform } = usePlatformChoice();
</script>

<template>
  <WinSlide v-if="platform === 'win'" />
  <UnixSlide v-else />
</template>
