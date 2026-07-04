<script setup lang="ts">
defineProps<{
  uploadLabel: string;
  downloadLabel: string;
  focus?: boolean;
  serverLabel?: string;
  localLabel?: string;
  callout?: string;
}>();
</script>

<template>
  <div class="deck-remote" :class="{ 'deck-remote--focus': focus }">
    <svg
      class="deck-remote__svg"
      :viewBox="localLabel ? '0 0 840 430' : '0 0 840 370'"
      role="img"
      aria-label="リモートリポジトリとローカルリポジトリの図"
    >
      <path class="deck-remote__connector" d="M235 265 C310 220 340 205 420 190" />
      <path class="deck-remote__connector" d="M605 265 C530 220 500 205 420 190" />
      <path
        class="deck-remote__connector deck-remote__connector--down"
        d="M420 205 C340 220 305 245 235 292"
      />
      <path
        class="deck-remote__connector deck-remote__connector--down"
        d="M420 205 C500 220 535 245 605 292"
      />

      <g class="deck-remote__server-node">
        <rect x="330" y="48" width="180" height="118" rx="10" />
        <rect x="356" y="74" width="128" height="66" rx="4" />
        <rect x="312" y="172" width="216" height="16" rx="8" />
      </g>

      <g class="deck-remote__person deck-remote__person--accent">
        <circle cx="185" cy="267" r="31" />
        <path d="M130 355 C135 316 154 302 185 302 C216 302 235 316 240 355 Z" />
      </g>
      <g class="deck-remote__person">
        <circle cx="655" cy="267" r="31" />
        <path d="M600 355 C605 316 624 302 655 302 C686 302 705 316 710 355 Z" />
      </g>

      <g class="deck-remote__arrow-head deck-remote__arrow-head--up">
        <path d="M420 190 L398 181 L410 205 Z" />
        <path d="M420 190 L442 181 L430 205 Z" />
      </g>
      <g class="deck-remote__arrow-head deck-remote__arrow-head--down">
        <path d="M235 292 L255 281 L250 306 Z" />
        <path d="M605 292 L585 281 L590 306 Z" />
      </g>

      <text class="deck-remote__label deck-remote__label--left-up" x="235" y="226">
        {{ uploadLabel }}
      </text>
      <text class="deck-remote__label deck-remote__label--left-down" x="282" y="281">
        {{ downloadLabel }}
      </text>
      <text class="deck-remote__label deck-remote__label--right-up" x="545" y="226">
        {{ uploadLabel }}
      </text>
      <text class="deck-remote__label deck-remote__label--right-down" x="485" y="281">
        {{ downloadLabel }}
      </text>
      <text v-if="serverLabel" class="deck-remote__server-label" x="420" y="34">
        {{ serverLabel }}
      </text>
      <text v-if="callout" class="deck-remote__callout" x="420" y="232">{{ callout }}</text>
      <text v-if="localLabel" class="deck-remote__local-label" x="420" y="402">
        {{ localLabel }}
      </text>
    </svg>
  </div>
</template>
