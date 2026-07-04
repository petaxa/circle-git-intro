<script setup lang="ts">
import DeckSlide from "../components/DeckSlide.vue";
</script>

<template>
  <DeckSlide
    section-label="なぜGitが必要なのか"
    eyebrow="WHY GIT"
    footer-label="VERSION CONTROL SYSTEM"
  >
    <div class="deck-centered">
      <ol class="deck-recap">
        <li v-click>
          <span class="deck-recap__index">01</span>
          <span class="deck-recap__keyword">記録</span>
          <span class="deck-recap__text">誰がいつ何をしたのかを残す</span>
        </li>
        <li v-click>
          <span class="deck-recap__index">02</span>
          <span class="deck-recap__keyword">更新</span>
          <span class="deck-recap__text">同時に変更しても、差分を見て合わせる</span>
        </li>
        <li v-click>
          <span class="deck-recap__index">03</span>
          <span class="deck-recap__keyword">履歴</span>
          <span class="deck-recap__text">過去のソースコードを保持して戻れる</span>
        </li>
      </ol>
    </div>

    <template #overlay>
      <p class="deck-summary-label">まとめると...</p>
    </template>
  </DeckSlide>
</template>
