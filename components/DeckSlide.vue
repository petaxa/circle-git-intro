<script setup lang="ts">
import Cover from "../layouts/Cover.vue";
import Description from "../layouts/Description.vue";

withDefaults(
  defineProps<{
    layout?: "cover" | "description";
    sectionLabel?: string;
    eyebrow?: string;
    title?: string;
    subtitle?: string;
    footerLabel?: string;
    variant?: "default" | "center" | "statement";
  }>(),
  {
    layout: "description",
    variant: "statement",
  },
);
</script>

<template>
  <div class="deck-page">
    <Cover
      v-if="layout === 'cover'"
      :section-label="sectionLabel"
      :subtitle="subtitle"
      :footer-label="footerLabel"
    >
      <template #title>
        <slot name="title">{{ title }}</slot>
      </template>
    </Cover>

    <Description
      v-else
      :section-label="sectionLabel"
      :eyebrow="eyebrow"
      :title="title"
      :footer-label="footerLabel"
      :variant="variant"
    >
      <slot />
    </Description>

    <slot name="overlay" />
  </div>
</template>

<style>
.deck-page {
  position: absolute;
  inset: 0;
}

.deck-platform-switch {
  position: absolute;
  z-index: 5;
  top: 2.3rem;
  right: 3.9rem;
}

.deck-centered {
  display: grid;
  justify-items: start;
  gap: 1.6rem;
  width: min(68rem, 100%);
}

.deck-question-content--dimmed {
  opacity: 0.75;
}

.deck-center-callout {
  position: absolute;
  z-index: 6;
  top: 47%;
  left: 50%;
  margin: 0;
  color: #121722;
  font-size: 5.8rem;
  font-weight: 950;
  letter-spacing: 0;
  line-height: 1;
  text-align: center;
  text-shadow:
    0.08rem 0.08rem 0 #fffdfa,
    -0.08rem 0.08rem 0 #fffdfa,
    0.08rem -0.08rem 0 #fffdfa,
    -0.08rem -0.08rem 0 #fffdfa,
    0 0.55rem 1.6rem rgba(32, 28, 21, 0.2);
  transform: translate(-50%, -50%);
  white-space: nowrap;
}

.deck-summary-label {
  position: absolute;
  z-index: 5;
  top: 6.9rem;
  left: 3.95rem;
  margin: 0;
  color: #121722;
  font-size: 2rem;
  font-weight: 850;
  letter-spacing: 0;
  line-height: 1;
}

.deck-section-cover {
  display: grid;
  width: 100%;
  place-items: center;
  text-align: center;
}

.deck-section-cover__title {
  max-width: 60rem;
  margin: 0;
  background: none;
  color: #121722;
  font-size: 5.2rem;
  font-weight: 900;
  letter-spacing: 0;
  line-height: 1.05;
  text-align: center;
  -webkit-text-fill-color: currentColor;
}

.deck-statement {
  max-width: 66rem;
  margin: 0;
  color: #121722;
  font-size: 3.5rem;
  font-weight: 850;
  letter-spacing: 0;
  line-height: 1.28;
  text-wrap: balance;
}

.deck-statement--nowrap {
  white-space: nowrap;
  text-wrap: nowrap;
}

.deck-statement--large {
  font-size: 4.6rem;
}

.deck-statement--small {
  font-size: 2.35rem;
  line-height: 1.42;
}

.deck-statement--xsmall {
  font-size: 2.05rem;
  line-height: 1.38;
}

.deck-statement--tiny {
  font-size: 1.75rem;
  line-height: 1.42;
}

.deck-statement--muted {
  color: rgba(48, 47, 44, 0.58);
  font-size: 1.75rem;
}

.deck-statement__segment {
  display: inline-block;
  margin-right: 0.3em;
}

.deck-statement__segment--emphasis {
  font-size: 1.38em;
  font-weight: 950;
}

.deck-note {
  max-width: 54rem;
  margin: 0;
  color: rgba(48, 47, 44, 0.62);
  font-size: 1.18rem;
  font-weight: 600;
  line-height: 1.6;
}

.deck-note--lead {
  font-size: 1.3rem;
}

.deck-recap {
  display: grid;
  width: min(64rem, 100%);
  margin: 0;
  padding: 0;
  list-style: none;
}

.deck-recap li {
  display: grid;
  grid-template-columns: 4.4rem 10rem minmax(0, 1fr);
  align-items: baseline;
  column-gap: 1.25rem;
  min-height: 5.1rem;
  padding: 1rem 0 1.05rem;
  border-bottom: 0.075rem solid rgba(123, 116, 104, 0.38);
}

.deck-recap li:first-child {
  border-top: 0.075rem solid rgba(123, 116, 104, 0.38);
}

.deck-recap__index {
  color: rgba(48, 47, 44, 0.56);
  font-family: "Courier New", Courier, monospace;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  line-height: 1;
}

.deck-recap__keyword {
  color: #121722;
  font-size: 2.38rem;
  font-weight: 950;
  letter-spacing: 0;
  line-height: 1.05;
}

.deck-recap__text {
  color: rgba(18, 23, 34, 0.82);
  font-size: 1.36rem;
  font-weight: 750;
  letter-spacing: 0;
  line-height: 1.42;
}

.deck-commit-callout {
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-left: 5.5rem;
}

.deck-commit-callout__pointer {
  color: rgba(48, 47, 44, 0.62);
  font-family: "Courier New", Courier, monospace;
  font-size: 3.1rem;
  font-weight: 700;
  line-height: 1;
}

.deck-commit-callout__word {
  color: #121722;
  font-size: 4.6rem;
  font-weight: 950;
  letter-spacing: 0;
  line-height: 1;
}

.deck-timeline {
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1.8rem;
  width: min(54rem, 100%);
  padding-top: 3.6rem;
}

.deck-timeline::before {
  position: absolute;
  top: 5.2rem;
  right: 3.3rem;
  left: 3.3rem;
  height: 0.1rem;
  background: rgba(123, 116, 104, 0.48);
  content: "";
}

.deck-timeline__commit {
  position: relative;
  display: grid;
  min-height: 7rem;
  place-items: start center;
  text-align: center;
}

.deck-timeline__commit::before {
  position: absolute;
  top: 1rem;
  left: calc(50% - 0.58rem);
  width: 1.16rem;
  height: 1.16rem;
  border: 0.18rem solid #121722;
  border-radius: 999px;
  background: #fffdfa;
  content: "";
}

.deck-timeline__label {
  margin-top: 3.2rem;
  color: rgba(48, 47, 44, 0.58);
  font-family: "Courier New", Courier, monospace;
  font-size: 0.66rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.deck-timeline__title {
  margin-top: 0.38rem;
  color: #121722;
  font-size: 1.32rem;
  font-weight: 850;
  letter-spacing: 0;
}

.deck-local-pair {
  display: grid;
  grid-template-columns: 13rem 24rem 13rem;
  gap: 1.2rem;
  align-items: center;
}

.deck-local-pair--compact {
  transform: scale(0.82);
  transform-origin: left center;
}

.deck-person-file {
  display: grid;
  gap: 0.8rem;
  justify-items: center;
}

.deck-person {
  position: relative;
  width: 6.2rem;
  height: 7.4rem;
}

.deck-person__head,
.deck-person__body {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  background: #6f6a60;
}

.deck-person__head {
  top: 0;
  width: 2.7rem;
  height: 2.7rem;
  border-radius: 999px;
}

.deck-person__body {
  bottom: 0;
  width: 5.3rem;
  height: 4.2rem;
  border-radius: 2.4rem 2.4rem 0.42rem 0.42rem;
}

.deck-person-file--self .deck-person__head,
.deck-person-file--self .deck-person__body,
.deck-person--accent .deck-person__head,
.deck-person--accent .deck-person__body {
  background: #2f7f7a;
}

.deck-file {
  position: relative;
  display: grid;
  width: 6.6rem;
  height: 5rem;
  place-items: center;
  border: 1px solid rgba(123, 116, 104, 0.38);
  background: rgba(255, 253, 250, 0.78);
  color: rgba(48, 47, 44, 0.64);
  font-family: "Courier New", Courier, monospace;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.22em;
  text-transform: uppercase;
}

.deck-file::after {
  position: absolute;
  top: -1px;
  right: -1px;
  width: 1.3rem;
  height: 1.3rem;
  border-bottom: 1px solid rgba(123, 116, 104, 0.28);
  border-left: 1px solid rgba(123, 116, 104, 0.28);
  background: rgba(246, 241, 234, 0.9);
  content: "";
}

.deck-transfer {
  display: grid;
  gap: 1.25rem;
}

.deck-transfer__arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  color: rgba(48, 47, 44, 0.62);
  font-family: "Courier New", Courier, monospace;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  line-height: 1;
}

.deck-transfer__arrow b {
  color: #121722;
  font-size: 3rem;
  line-height: 1;
}

.deck-direct-share {
  display: grid;
  gap: 1.25rem;
  justify-items: start;
  width: min(64rem, 100%);
}

.deck-risk-note {
  display: grid;
  grid-template-columns: 5.8rem minmax(0, 1fr);
  align-items: baseline;
  column-gap: 1.25rem;
  width: min(58rem, 100%);
  margin: -0.15rem 0 0;
  padding: 1rem 0 0;
  border-top: 0.12rem solid rgba(18, 23, 34, 0.76);
}

.deck-risk-note__label,
.deck-risk-grid__label {
  color: rgba(48, 47, 44, 0.56);
  font-family: "Courier New", Courier, monospace;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  line-height: 1;
  text-transform: uppercase;
}

.deck-risk-note__text {
  color: #121722;
  font-size: 1.7rem;
  font-weight: 900;
  letter-spacing: 0;
  line-height: 1.36;
}

.deck-risk-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.05rem;
  width: min(64rem, 100%);
  margin: -0.1rem 0 0;
  padding: 0;
  list-style: none;
}

.deck-risk-grid li {
  display: grid;
  align-content: start;
  gap: 0.58rem;
  min-height: 7.6rem;
  padding-top: 0.95rem;
  border-top: 0.12rem solid rgba(18, 23, 34, 0.76);
}

.deck-risk-grid__title {
  color: #121722;
  font-size: 1.5rem;
  font-weight: 900;
  letter-spacing: 0;
  line-height: 1.16;
}

.deck-risk-grid__text {
  color: rgba(48, 47, 44, 0.72);
  font-size: 0.98rem;
  font-weight: 650;
  letter-spacing: 0;
  line-height: 1.52;
}

.deck-remote {
  width: 42rem;
  max-width: 100%;
}

.deck-remote--focus {
  width: 50rem;
}

.deck-remote--compact {
  width: 36rem;
}

.deck-remote__svg {
  display: block;
  width: 100%;
  height: auto;
  overflow: visible;
}

.deck-remote__connector {
  fill: none;
  stroke: #121722;
  stroke-linecap: round;
  stroke-width: 7;
}

.deck-remote__connector--down {
  stroke: #2f7f7a;
}

.deck-remote__server-node rect {
  fill: #fffdfa;
  stroke: #121722;
  stroke-width: 7;
}

.deck-remote__server-node rect:nth-child(3) {
  fill: #121722;
}

.deck-remote__person circle,
.deck-remote__person path {
  fill: #6f6a60;
}

.deck-remote__person--accent circle,
.deck-remote__person--accent path,
.deck-remote__arrow-head--down path {
  fill: #2f7f7a;
}

.deck-remote__arrow-head--up path {
  fill: #121722;
}

.deck-remote__label,
.deck-remote__server-label,
.deck-remote__local-label,
.deck-remote__callout {
  fill: rgba(48, 47, 44, 0.68);
  font-family:
    "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Yu Gothic", Meiryo, sans-serif;
  font-weight: 800;
  letter-spacing: 0;
}

.deck-remote__label {
  font-size: 22px;
  paint-order: stroke;
  stroke: rgba(255, 253, 250, 0.92);
  stroke-linejoin: round;
  stroke-width: 8px;
}

.deck-remote__server-label,
.deck-remote__local-label {
  fill: #121722;
  font-size: 28px;
  text-anchor: middle;
}

.deck-remote__callout {
  fill: #121722;
  font-size: 38px;
  font-weight: 950;
  paint-order: stroke;
  stroke: rgba(255, 253, 250, 0.94);
  stroke-linejoin: round;
  stroke-width: 10px;
  text-anchor: middle;
}

.deck-remote-image-stage {
  display: grid;
  justify-items: center;
  gap: 1.2rem;
  width: calc(100% + 9.05rem);
  margin-left: -3.95rem;
}

.deck-remote-image-frame {
  position: relative;
  display: grid;
  width: min(44rem, calc(100% - 8rem));
  max-height: 22rem;
  place-items: center;
  margin: 0;
}

.deck-remote-image-frame--compact {
  width: min(31rem, calc(100% - 8rem));
  max-height: 18rem;
}

.deck-remote-image {
  display: block;
  max-width: 100%;
  max-height: inherit;
  width: auto;
  height: auto;
  object-fit: contain;
}

.deck-remote-image-label {
  position: absolute;
  z-index: 1;
  color: #121722;
  font-size: 2.5rem;
  font-weight: 950;
  letter-spacing: 0;
  line-height: 1;
  paint-order: stroke;
  text-align: center;
  text-shadow:
    0 0 0.35rem rgba(255, 253, 250, 0.98),
    0 0 0.65rem rgba(255, 253, 250, 0.98);
  white-space: nowrap;
}

.deck-remote-image-label--server {
  top: 2rem;
  left: 50%;
  transform: translateX(-50%);
}

.deck-remote-image-label--local {
  left: 25%;
  bottom: 1.2rem;
}

.deck-remote-image-callout {
  position: absolute;
  z-index: 2;
  top: 18%;
  left: 50%;
  width: max-content;
  margin: 0;
  color: #121722;
  font-size: 2.95rem;
  font-weight: 950;
  letter-spacing: 0;
  line-height: 1.04;
  text-align: center;
  text-shadow:
    0.08rem 0.08rem 0 #fffdfa,
    -0.08rem 0.08rem 0 #fffdfa,
    0.08rem -0.08rem 0 #fffdfa,
    -0.08rem -0.08rem 0 #fffdfa,
    0 0.4rem 1.1rem rgba(32, 28, 21, 0.18);
  transform: translateX(-50%) rotate(-4deg);
  transform-origin: center;
  white-space: nowrap;
}

.deck-caption {
  max-width: 58rem;
  margin: 0;
  color: rgba(48, 47, 44, 0.64);
  font-size: 1.14rem;
  font-weight: 700;
  line-height: 1.5;
}

.deck-caption--strong {
  color: #121722;
  font-size: 2.05rem;
  font-weight: 900;
  letter-spacing: 0;
}

.deck-github-answer {
  display: flex;
  align-items: center;
  gap: 1.2rem;
}

.deck-github-answer__arrow {
  color: rgba(48, 47, 44, 0.62);
  font-size: 4.2rem;
  font-weight: 900;
  line-height: 1;
}

.deck-github-answer__word {
  color: #121722;
  font-size: 4.9rem;
  font-weight: 950;
  letter-spacing: 0;
  line-height: 1;
}

.deck-branch-congestion {
  display: grid;
  gap: 1.9rem;
  width: min(58rem, 100%);
}

.deck-branch-users {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

.deck-branch-users span {
  padding: 0.85rem 1rem;
  border: 1px solid rgba(123, 116, 104, 0.28);
  background: rgba(255, 253, 250, 0.68);
  color: rgba(48, 47, 44, 0.64);
  font-size: 0.92rem;
  font-weight: 800;
  letter-spacing: 0;
  line-height: 1.25;
  text-align: center;
}

.deck-shared-branch {
  position: relative;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  min-height: 6.4rem;
  align-items: center;
}

.deck-shared-branch::before {
  position: absolute;
  right: 4rem;
  left: 4rem;
  height: 0.16rem;
  background: #121722;
  content: "";
}

.deck-shared-branch__commit {
  z-index: 1;
  width: 1.45rem;
  height: 1.45rem;
  margin: 0 auto;
  border: 0.18rem solid #121722;
  border-radius: 999px;
  background: #fffdfa;
}

.deck-branch-merge {
  width: min(58rem, 100%);
  height: auto;
}

.deck-branch-merge__line {
  fill: none;
  stroke: #121722;
  stroke-linecap: round;
  stroke-width: 7;
}

.deck-branch-merge__line--feature {
  stroke: #2f7f7a;
}

.deck-branch-merge__node {
  fill: #fffdfa;
  stroke: #121722;
  stroke-width: 7;
}

.deck-branch-merge__node--feature {
  stroke: #2f7f7a;
}

.deck-branch-merge__label {
  fill: rgba(48, 47, 44, 0.68);
  font-family:
    "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Yu Gothic", Meiryo, sans-serif;
  font-size: 24px;
  font-weight: 800;
  letter-spacing: 0;
}

.deck-command-title {
  max-width: 60rem;
  margin: 0;
  background: none;
  color: #121722;
  font-size: 4.2rem;
  font-weight: 900;
  letter-spacing: 0;
  line-height: 1.12;
  -webkit-text-fill-color: currentColor;
}

.deck-mini-flow {
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 0.7rem;
  width: min(64rem, 100%);
  margin: 1rem 0 0;
  padding: 0;
  list-style: none;
}

.deck-mini-flow li {
  display: grid;
  gap: 0.55rem;
  min-height: 5.6rem;
  align-content: center;
  border-top: 0.12rem solid rgba(123, 116, 104, 0.5);
}

.deck-mini-flow span {
  color: rgba(48, 47, 44, 0.58);
  font-family: "Courier New", Courier, monospace;
  font-size: 0.64rem;
  font-weight: 700;
  letter-spacing: 0.14em;
}

.deck-mini-flow b {
  color: #121722;
  font-family: "Courier New", Courier, monospace;
  font-size: 1.22rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.deck-step-title {
  max-width: 62rem;
  margin: 0;
  color: #121722;
  font-size: 3.2rem;
  font-weight: 900;
  letter-spacing: 0;
  line-height: 1.24;
}

.deck-step-title--hands-on {
  font-size: 2.9rem;
}

.deck-step-title--nowrap {
  white-space: nowrap;
  text-wrap: nowrap;
}

.deck-step-title--wide {
  max-width: 100%;
}

.deck-step-title--compact {
  font-size: 2.5rem;
}

.deck-command-card {
  display: inline-grid;
  justify-self: center;
  max-width: 100%;
  min-height: 5.2rem;
  margin: 0;
  place-items: center;
  padding: 0 1.55rem;
  border: 1px solid rgba(123, 116, 104, 0.32);
  border-radius: 0.5rem;
  background: #121722;
  box-shadow: 0 1.1rem 3rem rgba(32, 28, 21, 0.11);
  color: #fffdfa;
  text-align: center;
}

.deck-command-card code,
.deck-command-card > span {
  color: currentColor;
  font-family: "Courier New", Courier, monospace;
  font-size: 2.25rem;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 1.2;
  white-space: nowrap;
}

.deck-command-card code {
  display: block;
}

.deck-command-card--setup code,
.deck-command-card--setup > span,
.deck-command-card--hands-on code,
.deck-command-card--hands-on > span {
  font-size: 1.95rem;
}

.deck-command-card--shell {
  position: relative;
  grid-template-rows: auto minmax(4.6rem, auto);
  min-width: min(24rem, 100%);
  min-height: 0;
  place-items: stretch;
  overflow: hidden;
  padding: 0;
  border-color: rgba(123, 116, 104, 0.2);
  background: #151a22;
  box-shadow: 0 1rem 2.5rem rgba(32, 28, 21, 0.13);
  text-align: left;
}

.deck-command-card--shell code {
  display: flex;
  align-items: center;
  padding: 0.92rem 1.25rem 1.02rem;
  color: #e9e4d8;
  font-family: "Courier New", Courier, monospace;
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 1.2;
  white-space: pre;
}

.deck-command-card--shell.deck-command-card--setup code,
.deck-command-card--shell.deck-command-card--hands-on code {
  font-size: 1.55rem;
}

.deck-command-card--shell.deck-command-card--setup,
.deck-command-card--shell.deck-command-card--hands-on {
  grid-template-rows: auto minmax(3.9rem, auto);
}

.deck-command-card--shell.deck-command-card--setup code,
.deck-command-card--shell.deck-command-card--hands-on code {
  padding-top: 0.78rem;
  padding-bottom: 0.86rem;
}

.deck-command-card--shell.deck-command-card--compact code {
  flex-wrap: wrap;
  row-gap: 0.12rem;
  font-size: 1.05rem;
  white-space: normal;
}

.deck-command-card--shell.deck-command-card--compact .deck-command-card__token {
  overflow-wrap: anywhere;
  white-space: pre-wrap;
}

.deck-command-card__chrome {
  display: block;
  min-height: 1.55rem;
  border-bottom: 1px solid rgba(246, 241, 234, 0.08);
  background: #11161d;
}

.deck-command-card__copy {
  position: absolute;
  top: 0.26rem;
  right: 0.42rem;
  display: grid;
  width: 1.1rem;
  height: 1.1rem;
  place-items: center;
  padding: 0;
  border: 1px solid rgba(233, 228, 216, 0.22);
  border-radius: 0.28rem;
  background: rgba(233, 228, 216, 0.08);
  color: rgba(233, 228, 216, 0.86);
  cursor: pointer;
}

.deck-command-card__copy:hover {
  border-color: rgba(233, 228, 216, 0.45);
  background: rgba(233, 228, 216, 0.16);
  color: #fffdfa;
}

.deck-command-card__copy:focus-visible {
  outline: 2px solid rgba(108, 161, 155, 0.9);
  outline-offset: 2px;
}

.deck-command-card__copy svg {
  width: 0.72rem;
  height: 0.72rem;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 2.1;
}

.deck-command-card__prompt {
  flex: 0 0 auto;
  margin-right: 0.82rem;
  color: #6ca19b;
}

.deck-command-card__token {
  white-space: pre;
}

.deck-command-card__token--command {
  color: #9eb7d0;
}

.deck-command-card__token--argument {
  color: #e9e4d8;
}

.deck-command-card__token--option {
  color: #c98f90;
}

.deck-command-card__token--placeholder {
  color: #c9b171;
}

.deck-command-card__token--string {
  color: #b9c9d8;
}

.deck-environment {
  display: grid;
  gap: 1.4rem;
  max-width: 62rem;
}

.deck-environment__lead {
  margin: 0;
  color: rgba(48, 47, 44, 0.62);
  font-size: 1.22rem;
  font-weight: 600;
  line-height: 1.55;
}

.deck-environment__options {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

.deck-environment__option {
  display: grid;
  min-height: 11.2rem;
  align-content: center;
  gap: 1rem;
  padding: 1.35rem;
  border: 1px solid rgba(123, 116, 104, 0.3);
  background: rgba(255, 253, 250, 0.72);
  box-shadow: 0 1.1rem 3rem rgba(32, 28, 21, 0.06);
  color: #121722;
  text-align: left;
}

.deck-environment__option--active {
  border-color: rgba(18, 23, 34, 0.58);
  background: #121722;
  color: #fffdfa;
}

.deck-environment__option-label {
  font-size: 2.4rem;
  font-weight: 900;
  letter-spacing: 0;
  line-height: 1;
}

.deck-environment__option-text {
  color: currentColor;
  font-size: 1.05rem;
  font-weight: 650;
  line-height: 1.5;
  opacity: 0.72;
}

.deck-setup {
  display: grid;
  gap: 1.35rem;
  max-width: 66rem;
}

.deck-setup__steps {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.85rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.deck-setup__steps li {
  display: grid;
  gap: 0.8rem;
  min-height: 8rem;
  align-content: start;
  padding: 1.05rem;
  border-top: 0.12rem solid rgba(123, 116, 104, 0.5);
  background: rgba(255, 253, 250, 0.52);
}

.deck-setup__steps span {
  color: rgba(48, 47, 44, 0.58);
  font-family: "Courier New", Courier, monospace;
  font-size: 0.66rem;
  font-weight: 700;
  letter-spacing: 0.16em;
}

.deck-setup__steps b {
  color: #121722;
  font-size: 1.13rem;
  font-weight: 850;
  letter-spacing: 0;
  line-height: 1.35;
}

.deck-setup__steps a {
  color: #121722;
  font-size: 1.13rem;
  font-weight: 850;
  letter-spacing: 0;
  line-height: 1.35;
  text-decoration: underline;
  text-decoration-color: rgba(47, 127, 122, 0.45);
  text-decoration-thickness: 0.12rem;
  text-underline-offset: 0.22rem;
}

.deck-click-setup {
  display: grid;
  gap: 1.35rem;
}

.deck-click-setup__steps {
  grid-template-columns: repeat(var(--deck-click-setup-columns, 4), minmax(0, 1fr));
}

.deck-click-setup__steps li {
  transition:
    opacity 180ms ease,
    transform 180ms ease,
    border-color 180ms ease;
}

.deck-click-setup__step--active {
  border-top-color: #121722;
  transform: translateY(-0.12rem);
}

.deck-click-setup__step--dimmed {
  opacity: 0.28;
}

.deck-click-setup__detail {
  display: grid;
  min-height: 6.4rem;
  place-items: center;
}

.deck-click-setup__detail--empty {
  visibility: hidden;
}

.deck-click-setup__detail-text,
.deck-click-setup__detail-link {
  max-width: 58rem;
  margin: 0;
  color: #121722;
  font-size: 1.62rem;
  font-weight: 900;
  letter-spacing: 0;
  line-height: 1.34;
  text-align: center;
}

.deck-click-setup__detail-link {
  text-decoration: underline;
  text-decoration-color: rgba(47, 127, 122, 0.45);
  text-decoration-thickness: 0.13rem;
  text-underline-offset: 0.28rem;
}

.deck-click-setup__detail-image {
  display: block;
  width: auto;
  max-width: min(64rem, 100%);
  max-height: 12rem;
  object-fit: contain;
  border: 1px solid rgba(123, 116, 104, 0.2);
  border-radius: 0.5rem;
  box-shadow: 0 1rem 2.6rem rgba(32, 28, 21, 0.12);
}

.deck-click-setup__detail-code {
  display: inline-block;
  max-width: 100%;
  padding: 0.08rem 0.38rem 0.14rem;
  border: 1px solid rgba(123, 116, 104, 0.2);
  border-radius: 0.35rem;
  background: #151a22 !important;
  color: #e9e4d8 !important;
  font-family: "Courier New", Courier, monospace !important;
  font-size: 0.9em;
  font-weight: 850;
  line-height: 1.12;
  overflow-wrap: anywhere;
  vertical-align: 0.04em;
}

.deck-download-timing {
  display: grid;
  gap: 0.9rem;
  width: min(58rem, 100%);
}

.deck-download-timing .deck-branch-congestion {
  width: 100%;
}

.deck-download-batch {
  display: grid;
  grid-template-columns: 3.3rem minmax(0, 1fr) 14rem;
  align-items: center;
  gap: 1rem;
  padding-top: 0.8rem;
  border-top: 0.12rem solid rgba(123, 116, 104, 0.42);
}

.deck-download-batch__arrow {
  color: #2f7f7a;
  font-size: 2.6rem;
  font-weight: 950;
  line-height: 1;
  text-align: center;
}

.deck-download-batch__arrow--icon {
  display: block;
  width: 2.6rem;
  height: 2.6rem;
  margin: 0 auto;
  background: currentColor;
  mask: url("/images/download.svg") center / contain no-repeat;
}

.deck-download-batch__label {
  color: #121722;
  font-size: 1.35rem;
  font-weight: 900;
  letter-spacing: 0;
  line-height: 1.35;
}

.deck-download-batch__local {
  display: grid;
  min-height: 4.1rem;
  place-items: center;
  border: 0.12rem solid #2f7f7a;
  background: rgba(47, 127, 122, 0.08);
  color: #121722;
  font-size: 1rem;
  font-weight: 850;
  letter-spacing: 0;
  line-height: 1.35;
  text-align: center;
}
</style>
