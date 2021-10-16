import {
  defineComponent,
  ref,
  computed,
  PropType,
  unref,
  watchEffect,
} from "vue";
import { VInput, VIcon, VPopover } from "..";
import "./style/date-picker.css";
import { useDate } from "./hooks/useDate";

export type DateMode = "months" | "year" | "days";

const datePickerProps = {
  value: {
    type: Date as PropType<Date>,
    default: () => new Date(),
  },
} as const;

const DatePicker = defineComponent({
  name: "DatePicker",
  components: { VInput, VIcon, VPopover },
  props: datePickerProps,
  setup(props, { emit }) {
    const mode = ref<DateMode>("days");
    const display = computed(() => {
      const { year, month } = useDate(props.value);
      return `${unref(year)}年 ${unref(month) + 1}月`;
    });
    const onclickYear = () => {
      mode.value = "year";
    };
    const onclickMonth = () => {
      mode.value = "months";
    };
    const visibleDateList = computed(() => {
      const { firstTime } = useDate(props.value);
      const visibleDateList = [];
      for (let i = 0; i < 42; i++) {
        visibleDateList.push(new Date(firstTime.value + i * 3600 * 24 * 1000));
      }
      return visibleDateList;
    });
    const onclickItem = (date: Date) => {
      emit("update:value", date);
    };
    watchEffect(() => {});
    const formatDate = computed(() => {
      const { year, month, day } = useDate(props.value);
      return `${year.value}/${month.value + 1}/${
        day.value < 10 ? `0${day.value}` : day.value
      }`;
    });
    const onclickPrev = () => {
      const { year, month, day } = useDate(props.value);
      const newDate = new Date(unref(year), unref(month) - 1, unref(day));
      emit("update:value", newDate);
    };
    const onclickPrevYear = () => {
      const { year, month, day } = useDate(props.value);
      const newDate = new Date(unref(year) - 1, unref(month), unref(day));
      emit("update:value", newDate);
    };
    const onclickNext = () => {
      const { year, month, day } = useDate(props.value);
      const newDate = new Date(unref(year), unref(month) + 1, unref(day));
      emit("update:value", newDate);
    };
    const onclickNextYear = () => {
      const { year, month, day } = useDate(props.value);
      const newDate = new Date(unref(year) + 1, unref(month), unref(day));
      emit("update:value", newDate);
    };
    return () => (
      <div class="border">
        <v-popover position="bottom">
          {{
            default: () => <v-input value={formatDate.value} type="text" />,
            content: () => (
              <div class="v-date-picker-pop">
                <div class="v-date-picker-nav">
                  <span onClick={onclickPrevYear}>
                    <v-icon name="left-left" />
                  </span>
                  <span onClick={onclickPrev}>
                    <v-icon name="left" />
                  </span>
                  <span>{display.value}</span>
                  <span onClick={onclickNext}>
                    <v-icon name="right" />
                  </span>
                  <span onClick={onclickNextYear}>
                    <v-icon name="right-right" />
                  </span>
                </div>
                <div class="v-date-picker-panels">
                  {mode.value === "year" ? (
                    <div class="v-date-picker-content">年</div>
                  ) : mode.value === "months" ? (
                    <div class="v-date-picker-content">月</div>
                  ) : (
                    <div class="v-date-picker-content-day">
                      <div>
                        {["一", "二", "三", "四", "五", "六", "日"].map((i) => {
                          return (
                            <span class="v-date-picker-content-title">{i}</span>
                          );
                        })}
                      </div>
                      {[0, 1, 2, 3, 4, 5].map((i) => {
                        return (
                          <div>
                            {visibleDateList.value
                              .slice(i * 7, i * 7 + 7)
                              .map((item) => {
                                return (
                                  <span
                                    onClick={() => onclickItem(item)}
                                    class={{
                                      "v-date-picker-current-month":
                                        item.getMonth() ===
                                        props.value.getMonth(),
                                      "v-date-picker-selected":
                                        item.getTime() ===
                                        props.value.getTime(),
                                    }}
                                  >
                                    {item.getDate()}
                                  </span>
                                );
                              })}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
                <div class="v-date-picker-actions"></div>
              </div>
            ),
          }}
        </v-popover>
      </div>
    );
  },
});

export default DatePicker;
