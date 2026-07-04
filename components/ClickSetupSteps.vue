<script setup lang="ts">
import { useSlideContext } from "@slidev/client";
import VClickGap from "@slidev/client/builtin/VClickGap.vue";
import { computed } from "vue";
import CommandBlock from "./CommandBlock.vue";

type SetupStep = {
  command?: string;
  detail?: SetupStepDetail;
  href?: string;
  image?: SetupStepImage;
  label: string;
  title: string;
};

type SetupStepDetail = string | SetupStepDetailNode[];

type SetupStepImage = {
  alt: string;
  src: string;
};

type SetupStepDetailNode = {
  kind: "code" | "text";
  text: string;
};

const props = defineProps<{
  steps: SetupStep[];
}>();

const { $clicks } = useSlideContext();

const activeStep = computed(() => {
  if ($clicks.value < 1) {
    return 0;
  }

  return Math.min($clicks.value, props.steps.length);
});

const activeDetail = computed(() =>
  activeStep.value > 0 ? props.steps[activeStep.value - 1] : undefined,
);

const activeDetailNodes = computed<SetupStepDetailNode[]>(() => {
  const detail = activeDetail.value?.detail;

  if (!detail) {
    return [];
  }

  if (typeof detail === "string") {
    return [{ kind: "text", text: detail }];
  }

  return detail;
});

const activeDetailText = computed(() =>
  activeDetailNodes.value.map((detailNode) => detailNode.text).join(""),
);

const stepColumns = computed(() => Math.min(Math.max(props.steps.length, 1), 4));
</script>

<template>
  <div class="deck-click-setup" :style="{ '--deck-click-setup-columns': stepColumns }">
    <VClickGap :size="steps.length + 1" />
    <ol class="deck-setup__steps deck-click-setup__steps">
      <li
        v-for="(step, index) in steps"
        :key="step.label"
        :class="{
          'deck-click-setup__step--active': activeStep === index + 1,
          'deck-click-setup__step--dimmed': activeStep > 0 && activeStep !== index + 1,
        }"
      >
        <span>{{ step.label }}</span>
        <a v-if="step.href" :href="step.href" target="_blank" rel="noreferrer">{{ step.title }}</a>
        <b v-else>{{ step.title }}</b>
      </li>
    </ol>

    <div
      class="deck-click-setup__detail"
      :class="{ 'deck-click-setup__detail--empty': !activeDetail }"
    >
      <template v-if="activeDetail">
        <CommandBlock v-if="activeDetail.command" :command="activeDetail.command" variant="setup" />
        <img
          v-else-if="activeDetail.image"
          class="deck-click-setup__detail-image"
          :src="activeDetail.image.src"
          :alt="activeDetail.image.alt"
        />
        <a
          v-else-if="activeDetail.href"
          class="deck-click-setup__detail-link"
          :href="activeDetail.href"
          target="_blank"
          rel="noreferrer"
        >
          {{ activeDetailText }}
        </a>
        <p v-else class="deck-click-setup__detail-text">
          <template v-for="(detailNode, index) in activeDetailNodes" :key="index">
            <code v-if="detailNode.kind === 'code'" class="deck-click-setup__detail-code">{{
              detailNode.text
            }}</code>
            <span v-else>{{ detailNode.text }}</span>
          </template>
        </p>
      </template>
    </div>
  </div>
</template>
