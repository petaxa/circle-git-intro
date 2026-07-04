<script setup lang="ts">
defineProps<{
  users: string[];
  commitCount: number;
}>();
</script>

<template>
  <div class="deck-branch-congestion">
    <div class="deck-branch-users">
      <span v-for="user in users" :key="user">{{ user }}</span>
    </div>
    <div class="deck-shared-branch">
      <span v-for="index in commitCount" :key="index" class="deck-shared-branch__commit" />
    </div>
  </div>
</template>
