<script setup lang="ts">
defineProps<{
  sectionLabel?: string;
  subtitle?: string;
  footerLabel?: string;
}>();
</script>

<template>
  <section class="slidev-layout circle-cover">
    <header v-if="$slots.section || sectionLabel" class="circle-cover__section">
      <span class="circle-cover__section-label">
        <slot name="section">{{ sectionLabel }}</slot>
      </span>
      <span class="circle-cover__section-line" aria-hidden="true" />
    </header>

    <main class="circle-cover__content">
      <h1 class="circle-cover__title">
        <slot name="title" />
      </h1>
    </main>

    <footer v-if="$slots.footer || footerLabel" class="circle-cover__footer">
      <span class="circle-cover__footer-label">
        <slot name="footer">{{ footerLabel }}</slot>
      </span>
      <span class="circle-cover__footer-line" aria-hidden="true" />
    </footer>
  </section>
</template>

<style scoped>
.circle-cover {
  --circle-cover-ink: #121722;
  --circle-cover-muted: rgba(48, 47, 44, 0.58);
  --circle-cover-rule: rgba(123, 116, 104, 0.48);

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
      ellipse at 64% 42%,
      rgba(255, 255, 255, 0.96) 0%,
      rgba(255, 255, 255, 0.88) 36%,
      rgba(246, 241, 234, 0.82) 100%
    ),
    linear-gradient(180deg, #faf8f2 0%, #fffdfa 48%, #f6f1ea 100%);
  color: var(--circle-cover-ink);
  font-family:
    "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Yu Gothic", Meiryo, sans-serif;
  text-align: left;
}

.circle-cover::before,
.circle-cover::after {
  position: absolute;
  inset: 0;
  content: "";
  pointer-events: none;
}

.circle-cover::before {
  z-index: -2;
  background:
    radial-gradient(circle at 5% 8%, rgba(170, 156, 132, 0.18), transparent 30%),
    radial-gradient(circle at 95% 6%, rgba(190, 174, 150, 0.14), transparent 30%),
    radial-gradient(circle at 50% 112%, rgba(156, 137, 112, 0.18), transparent 42%);
}

.circle-cover::after {
  z-index: -1;
  opacity: 0.25;
  background-image: radial-gradient(rgba(39, 34, 27, 0.12) 0.45px, transparent 0.5px);
  background-size: 5px 5px;
}

.circle-cover__section {
  position: absolute;
  top: 2.65rem;
  left: 3.9rem;
  display: flex;
  align-items: center;
  gap: 1.15rem;
  color: var(--circle-cover-muted);
  font-family: "Courier New", Courier, monospace;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  line-height: 1;
}

.circle-cover__section-line {
  display: block;
  width: 10.8rem;
  height: 0.125rem;
  background: var(--circle-cover-rule);
}

.circle-cover__content {
  position: absolute;
  top: 42.8%;
  left: 3.95rem;
  max-width: calc(100% - 7.9rem);
}

.circle-cover__title {
  margin: 0;
  background: none;
  color: var(--circle-cover-ink);
  font-size: 5.45rem;
  font-weight: 850;
  letter-spacing: 0;
  line-height: 0.96;
  text-wrap: balance;
  -webkit-text-fill-color: currentColor;
}

.circle-cover__footer {
  position: absolute;
  right: 4.5rem;
  bottom: 3.15rem;
  left: 3.95rem;
  display: flex;
  align-items: center;
  gap: 1.25rem;
  color: var(--circle-cover-muted);
  font-family: "Courier New", Courier, monospace;
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.42em;
  line-height: 1;
  text-transform: uppercase;
}

.circle-cover__footer-label {
  flex: 0 0 auto;
  white-space: nowrap;
}

.circle-cover__footer-line {
  display: block;
  flex: 1 1 auto;
  height: 0.075rem;
  background: var(--circle-cover-rule);
}
</style>
