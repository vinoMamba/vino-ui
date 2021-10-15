import { ref, computed } from "vue";
export const useDate = (date: Date) => {
  const year = ref(date.getFullYear());
  const month = ref(date.getMonth());
  const day = ref(date.getDate());
  const firstDayOfMonth = computed(() => new Date(year.value, month.value, 1));
  const lastDayOfMonth = computed(
    () => new Date(year.value, month.value + 1, 0)
  );
  const weekOfFirst = computed(() => {
    return firstDayOfMonth.value.getDay() === 0
      ? 6
      : firstDayOfMonth.value.getDay() - 1;
  });
  const firstTime = computed(() => {
    return (
      firstDayOfMonth.value.getTime() - weekOfFirst.value * 3600 * 24 * 1000
    );
  });

  return {
    year,
    month,
    day,
    firstDayOfMonth,
    lastDayOfMonth,
    weekOfFirst,
    firstTime,
  };
};
