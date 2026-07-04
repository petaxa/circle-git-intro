import { watch, type Ref } from "vue";
import { useLocalStorage } from "./useLocalStorage";

export type PlatformChoice = "win" | "unix";

let platformChoice: Ref<PlatformChoice> | undefined;

export function usePlatformChoice() {
  platformChoice ??= useLocalStorage<PlatformChoice>("circle-git-intro-platform", "unix");

  watch(
    platformChoice,
    (nextValue) => {
      if (nextValue !== "win" && nextValue !== "unix") {
        platformChoice!.value = "unix";
      }
    },
    { immediate: true },
  );

  function setPlatform(nextValue: PlatformChoice) {
    platformChoice!.value = nextValue;
  }

  return {
    platform: platformChoice,
    setPlatform,
  };
}
