import { onMounted, ref, watch, type Ref } from "vue";

export function useLocalStorage<T>(key: string, defaultValue: T): Ref<T> {
  const value = ref(defaultValue) as Ref<T>;
  const ready = ref(false);

  onMounted(() => {
    const storedValue = window.localStorage.getItem(key);

    if (storedValue !== null) {
      try {
        value.value = JSON.parse(storedValue) as T;
      } catch {
        value.value = defaultValue;
      }
    }

    ready.value = true;
  });

  watch(
    value,
    (nextValue) => {
      if (!ready.value || typeof window === "undefined") {
        return;
      }

      window.localStorage.setItem(key, JSON.stringify(nextValue));
    },
    { deep: true },
  );

  return value;
}
