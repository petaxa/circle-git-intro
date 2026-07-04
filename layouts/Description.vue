<script setup lang="ts">
withDefaults(
  defineProps<{
    sectionLabel?: string;
    eyebrow?: string;
    title?: string;
    lead?: string;
    footerLabel?: string;
    variant?: "default" | "center" | "statement";
  }>(),
  {
    variant: "default",
  },
);
</script>

<template>
  <section class="slidev-layout circle-description" :class="`circle-description--${variant}`">
    <header v-if="$slots.section || sectionLabel" class="circle-description__section">
      <span class="circle-description__section-label">
        <slot name="section">{{ sectionLabel }}</slot>
      </span>
      <span class="circle-description__section-line" aria-hidden="true" />
    </header>

    <main class="circle-description__content">
      <h1 v-if="$slots.title || title" class="circle-description__title">
        <slot name="title">{{ title }}</slot>
      </h1>
      <p v-if="$slots.lead || lead" class="circle-description__lead">
        <slot name="lead">{{ lead }}</slot>
      </p>
      <div class="circle-description__body">
        <slot />
      </div>
    </main>

    <footer v-if="$slots.footer || footerLabel" class="circle-description__footer">
      <span class="circle-description__footer-label">
        <slot name="footer">{{ footerLabel }}</slot>
      </span>
      <span class="circle-description__footer-line" aria-hidden="true" />
    </footer>
  </section>
</template>

<style scoped>
.circle-description {
  --circle-description-ink: #121722;
  --circle-description-muted: rgba(48, 47, 44, 0.6);
  --circle-description-soft: rgba(48, 47, 44, 0.08);
  --circle-description-rule: rgba(123, 116, 104, 0.46);
  --circle-description-paper: #fffdfa;

  box-sizing: border-box;
  position: absolute;
  inset: 0;
  isolation: isolate;
  width: 100%;
  height: 100%;
  min-height: 100%;
  overflow: hidden;
  padding: 0;
  background:
    radial-gradient(
      ellipse at 68% 42%,
      rgba(255, 255, 255, 0.98) 0%,
      rgba(255, 255, 255, 0.9) 42%,
      rgba(246, 241, 234, 0.84) 100%
    ),
    linear-gradient(180deg, #faf8f2 0%, #fffdfa 50%, #f6f1ea 100%);
  color: var(--circle-description-ink);
  font-family:
    "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Yu Gothic", Meiryo, sans-serif;
  text-align: left;
}

.circle-description::before,
.circle-description::after {
  position: absolute;
  inset: 0;
  content: "";
  pointer-events: none;
}

.circle-description::before {
  z-index: -2;
  background:
    radial-gradient(circle at 6% 8%, rgba(170, 156, 132, 0.17), transparent 30%),
    radial-gradient(circle at 96% 8%, rgba(190, 174, 150, 0.13), transparent 28%),
    radial-gradient(circle at 50% 116%, rgba(156, 137, 112, 0.17), transparent 44%);
}

.circle-description::after {
  z-index: -1;
  opacity: 0.22;
  background-image: radial-gradient(rgba(39, 34, 27, 0.12) 0.45px, transparent 0.5px);
  background-size: 5px 5px;
}

.circle-description__section {
  position: absolute;
  top: 2.65rem;
  left: 3.9rem;
  display: flex;
  align-items: center;
  gap: 1.15rem;
  color: var(--circle-description-muted);
  font-family: "Courier New", Courier, monospace;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  line-height: 1;
}

.circle-description__section-line {
  display: block;
  width: 10.8rem;
  height: 0.125rem;
  background: var(--circle-description-rule);
}

.circle-description__content {
  position: absolute;
  top: 6.6rem;
  right: 5.1rem;
  left: 3.95rem;
}

.circle-description--center .circle-description__content,
.circle-description--statement .circle-description__content {
  top: 50%;
  transform: translateY(-50%);
}

.circle-description__title {
  max-width: 64rem;
  margin: 0;
  background: none;
  color: var(--circle-description-ink);
  font-size: 3.35rem;
  font-weight: 850;
  letter-spacing: 0;
  line-height: 1.05;
  text-wrap: balance;
  -webkit-text-fill-color: currentColor;
}

.circle-description__lead {
  max-width: 50rem;
  margin: 1.15rem 0 0;
  color: var(--circle-description-muted);
  font-size: 1.35rem;
  font-weight: 500;
  line-height: 1.55;
}

.circle-description__body {
  margin-top: 2.2rem;
}

.circle-description--center .circle-description__body {
  margin-top: 0;
}

.circle-description--statement .circle-description__body {
  margin-top: 1.7rem;
}

.circle-description__footer {
  position: absolute;
  right: 4.5rem;
  bottom: 3.15rem;
  left: 3.95rem;
  display: flex;
  align-items: center;
  gap: 1.25rem;
  color: var(--circle-description-muted);
  font-family: "Courier New", Courier, monospace;
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.42em;
  line-height: 1;
  text-transform: uppercase;
}

.circle-description__footer-label {
  flex: 0 0 auto;
  white-space: nowrap;
}

.circle-description__footer-line {
  display: block;
  flex: 1 1 auto;
  height: 0.075rem;
  background: var(--circle-description-rule);
}

:deep(.circle-big-statement) {
  max-width: 60rem;
  margin: 0;
  font-size: 2.15rem;
  font-weight: 750;
  letter-spacing: 0;
  line-height: 1.45;
}

:deep(.circle-big-statement strong) {
  font-size: 1.2em;
  font-weight: 900;
}

:deep(.circle-note) {
  max-width: 48rem;
  margin: 1.4rem 0 0;
  color: var(--circle-description-muted);
  font-size: 1.15rem;
  line-height: 1.65;
}

:deep(.circle-card-grid) {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.15rem;
  width: 100%;
  max-width: 66rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

:deep(.circle-card-grid--two) {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

:deep(.circle-card) {
  min-height: 9.2rem;
  padding: 1.35rem 1.35rem 1.45rem;
  border: 1px solid rgba(123, 116, 104, 0.24);
  background: rgba(255, 253, 250, 0.68);
  box-shadow: 0 1.1rem 3rem rgba(32, 28, 21, 0.055);
}

:deep(.circle-card__label) {
  display: block;
  margin: 0 0 1.05rem;
  color: var(--circle-description-muted);
  font-family: "Courier New", Courier, monospace;
  font-size: 0.66rem;
  font-weight: 700;
  letter-spacing: 0.42em;
  line-height: 1.2;
  text-transform: uppercase;
}

:deep(.circle-card__title) {
  margin: 0;
  color: var(--circle-description-ink);
  font-size: 1.55rem;
  font-weight: 850;
  letter-spacing: 0;
  line-height: 1.25;
}

:deep(.circle-card__text) {
  margin: 0.8rem 0 0;
  color: var(--circle-description-muted);
  font-size: 1rem;
  line-height: 1.55;
}

:deep(.circle-flow) {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.9rem;
  max-width: 66rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

:deep(.circle-flow__step) {
  position: relative;
  min-height: 9rem;
  padding: 1.2rem 1rem;
  border-top: 0.1rem solid var(--circle-description-rule);
}

:deep(.circle-flow__step:not(:last-child)::after) {
  position: absolute;
  top: 1.1rem;
  right: -0.68rem;
  color: var(--circle-description-muted);
  content: "→";
  font-family: "Courier New", Courier, monospace;
  font-size: 1.4rem;
}

:deep(.circle-flow__number) {
  display: block;
  color: var(--circle-description-muted);
  font-family: "Courier New", Courier, monospace;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.28em;
}

:deep(.circle-flow__title) {
  display: block;
  margin-top: 1rem;
  font-size: 1.45rem;
  font-weight: 850;
  letter-spacing: 0;
  line-height: 1.22;
}

:deep(.circle-flow__text) {
  display: block;
  margin-top: 0.65rem;
  color: var(--circle-description-muted);
  font-size: 0.96rem;
  line-height: 1.45;
}

:deep(.circle-two-column) {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.3rem;
  max-width: 66rem;
}

:deep(.circle-column) {
  min-height: 11.8rem;
  padding: 1.35rem 1.45rem;
  border: 1px solid rgba(123, 116, 104, 0.24);
  background: rgba(255, 253, 250, 0.7);
}

:deep(.circle-column__title) {
  margin: 0;
  font-size: 1.85rem;
  font-weight: 850;
  letter-spacing: 0;
  line-height: 1.2;
}

:deep(.circle-column__text) {
  margin: 1rem 0 0;
  color: var(--circle-description-muted);
  font-size: 1.08rem;
  line-height: 1.65;
}

:deep(.circle-problem-list) {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  max-width: 66rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

:deep(.circle-problem-list li) {
  padding: 1.2rem 1.25rem;
  border-left: 0.16rem solid var(--circle-description-rule);
  background: rgba(255, 253, 250, 0.54);
  color: var(--circle-description-ink);
  font-size: 1.12rem;
  font-weight: 700;
  line-height: 1.55;
}

:deep(.circle-final-word) {
  margin: 0;
  font-size: 5rem;
  font-weight: 900;
  letter-spacing: 0;
  line-height: 1;
}

:deep(.circle-keyword-row) {
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
  margin-top: 2.1rem;
}

:deep(.circle-keyword) {
  display: inline-flex;
  align-items: center;
  min-height: 2.4rem;
  padding: 0 1rem;
  border: 1px solid rgba(123, 116, 104, 0.28);
  color: var(--circle-description-muted);
  font-family: "Courier New", Courier, monospace;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.24em;
  text-transform: uppercase;
}

:deep(.circle-diagram) {
  display: flex;
  align-items: center;
  max-width: 66rem;
  min-height: 16rem;
}

:deep(.circle-diagram--center) {
  justify-content: center;
}

:deep(.circle-diagram--between) {
  justify-content: space-between;
}

:deep(.circle-equation) {
  display: flex;
  align-items: baseline;
  gap: 2rem;
  font-weight: 900;
  letter-spacing: 0;
  line-height: 1;
}

:deep(.circle-equation__main) {
  font-size: 6rem;
}

:deep(.circle-equation__symbol) {
  color: var(--circle-description-muted);
  font-family: "Courier New", Courier, monospace;
  font-size: 3.1rem;
  letter-spacing: 0;
}

:deep(.circle-equation__answer) {
  font-size: 4.35rem;
}

:deep(.circle-node-row) {
  display: flex;
  align-items: stretch;
  gap: 1.2rem;
  max-width: 66rem;
}

:deep(.circle-node) {
  display: grid;
  min-width: 9.8rem;
  min-height: 9.8rem;
  place-items: center;
  border: 1px solid rgba(123, 116, 104, 0.28);
  background: rgba(255, 253, 250, 0.7);
  box-shadow: 0 1.1rem 3rem rgba(32, 28, 21, 0.055);
  color: var(--circle-description-ink);
  font-size: 2rem;
  font-weight: 850;
  letter-spacing: 0;
  line-height: 1.15;
  text-align: center;
}

:deep(.circle-node--small) {
  min-width: 7.5rem;
  min-height: 7.5rem;
  font-size: 1.55rem;
}

:deep(.circle-node--ghost) {
  border-style: dashed;
  background: rgba(255, 253, 250, 0.35);
  color: var(--circle-description-muted);
}

:deep(.circle-arrow) {
  display: grid;
  min-width: 2.9rem;
  place-items: center;
  color: var(--circle-description-muted);
  font-family: "Courier New", Courier, monospace;
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 1;
}

:deep(.circle-timeline) {
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1.9rem;
  width: 50rem;
  margin-top: 1rem;
  padding-top: 4.3rem;
}

:deep(.circle-timeline::before) {
  position: absolute;
  top: 6.15rem;
  right: 3.4rem;
  left: 3.4rem;
  height: 0.1rem;
  background: var(--circle-description-rule);
  content: "";
}

:deep(.circle-commit) {
  position: relative;
  display: grid;
  min-height: 8.7rem;
  place-items: start center;
  text-align: center;
}

:deep(.circle-commit::before) {
  position: absolute;
  top: 1.25rem;
  left: calc(50% - 0.6rem);
  width: 1.2rem;
  height: 1.2rem;
  border: 0.18rem solid var(--circle-description-ink);
  border-radius: 999px;
  background: var(--circle-description-paper);
  content: "";
}

:deep(.circle-commit__label) {
  margin-top: 3.45rem;
  color: var(--circle-description-muted);
  font-family: "Courier New", Courier, monospace;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.22em;
  text-transform: uppercase;
}

:deep(.circle-commit__title) {
  margin-top: 0.45rem;
  font-size: 1.45rem;
  font-weight: 850;
  letter-spacing: 0;
}

:deep(.circle-pc-gap) {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 9rem minmax(0, 1fr);
  gap: 1.8rem;
  align-items: center;
  width: 52rem;
  max-width: 100%;
  min-height: 12rem;
}

:deep(.circle-pc-gap__device) {
  display: grid;
  min-height: 9.2rem;
  place-items: center;
  border: 1px solid rgba(123, 116, 104, 0.28);
  background: rgba(255, 253, 250, 0.72);
  box-shadow: 0 1.1rem 3rem rgba(32, 28, 21, 0.055);
  font-size: 2rem;
  font-weight: 850;
  letter-spacing: 0;
}

:deep(.circle-pc-gap__center) {
  display: grid;
  justify-items: center;
  gap: 0.8rem;
}

:deep(.circle-pc-gap__mark) {
  display: grid;
  width: 4.6rem;
  height: 4.6rem;
  place-items: center;
  border: 1px dashed rgba(123, 116, 104, 0.46);
  border-radius: 999px;
  color: var(--circle-description-muted);
  font-family: "Courier New", Courier, monospace;
  font-size: 2.8rem;
  font-weight: 700;
  line-height: 1;
}

:deep(.circle-pc-gap__label) {
  color: var(--circle-description-muted);
  font-family: "Courier New", Courier, monospace;
  font-size: 0.64rem;
  font-weight: 700;
  letter-spacing: 0.24em;
  line-height: 1.3;
  text-align: center;
  text-transform: uppercase;
}

:deep(.circle-remote-map) {
  display: grid;
  grid-template-columns: 10rem 3.2rem 13rem 3.2rem 10rem;
  grid-template-rows: repeat(2, 5.2rem);
  gap: 1.1rem 1rem;
  align-items: center;
  width: 42rem;
  max-width: 100%;
  margin-left: 1.2rem;
}

:deep(.circle-remote-map__node),
:deep(.circle-remote-map__hub) {
  display: grid;
  height: 100%;
  place-items: center;
  border: 1px solid rgba(123, 116, 104, 0.28);
  background: rgba(255, 253, 250, 0.72);
  box-shadow: 0 1.1rem 3rem rgba(32, 28, 21, 0.055);
  color: var(--circle-description-ink);
  font-weight: 850;
  letter-spacing: 0;
}

:deep(.circle-remote-map__node) {
  font-size: 1.65rem;
}

:deep(.circle-remote-map__hub) {
  grid-row: 1 / span 2;
  grid-column: 3;
  min-height: 7.4rem;
  border-color: rgba(18, 23, 34, 0.45);
  font-size: 2rem;
}

:deep(.circle-remote-map__arrow) {
  display: grid;
  place-items: center;
  color: var(--circle-description-muted);
  font-family: "Courier New", Courier, monospace;
  font-size: 2.1rem;
  font-weight: 700;
  line-height: 1;
}

:deep(.circle-final-word--solo) {
  font-size: 6.2rem;
}
</style>
