import { defineComponent, computed, PropType, unref } from "vue";
import { VInput, VIcon, VPopover, VButton } from "..";
import "./style/date-picker.css";
import { useDate } from "./hooks/useDate";

const datePickerProps = {
  value: {
    type: Date as PropType<Date>,
  },
} as const;

const DatePicker = defineComponent({
  name: "DatePicker",
  components: { VInput, VIcon, VPopover, VButton },
  props: datePickerProps,
  setup(props, { emit }) {
    const display = computed(() => {
      const { year, month } = useDate(props.value || new Date());
      return `${unref(year)}年 ${unref(month) + 1}月`;
    });
    const visibleDateList = computed(() => {
      const { firstTime } = useDate(props.value || new Date());
      const visibleDateList = [];
      for (let i = 0; i < 42; i++) {
        visibleDateList.push(new Date(firstTime.value + i * 3600 * 24 * 1000));
      }
      return visibleDateList;
    });
    const onclickItem = (date: Date) => {
      emit("update:value", date);
    };
    const formatDate = computed(() => {
      if (props.value === undefined) {
        return "";
      }
      const { year, month, day } = useDate(props.value);
      return `${year.value}/${month.value + 1}/${
        day.value < 10 ? `0${day.value}` : day.value
      }`;
    });
    const changeYearMonth = (options: { year: number; month: number }) => {
      const { year, month, day } = useDate(props.value || new Date());
      const { year: year1, month: month1 } = options;
      const newDate = new Date(
        unref(year) + year1,
        unref(month) + month1,
        unref(day)
      );
      emit("update:value", newDate);
    };
    const onclickToday = () => {
      const { year, month, day } = useDate(new Date());
      const date = new Date(unref(year), unref(month), unref(day));
      emit("update:value", date);
    };
    const onclickClear = () => {
      emit("update:value", undefined);
    };
    return () => (
      <div>
        <v-popover position="bottom">
          {{
            default: () => <v-input value={formatDate.value} type="text" />,
            content: () => (
              <div class="v-date-picker-pop">
                <div class="v-date-picker-nav">
                  <span onClick={() => changeYearMonth({ year: -1, month: 0 })}>
                    <v-icon name="left-left" />
                  </span>
                  <span onClick={() => changeYearMonth({ year: 0, month: -1 })}>
                    <v-icon name="left" />
                  </span>
                  <span>{display.value}</span>
                  <span onClick={() => changeYearMonth({ year: 0, month: 1 })}>
                    <v-icon name="right" />
                  </span>
                  <span onClick={() => changeYearMonth({ year: 1, month: 0 })}>
                    <v-icon name="right-right" />
                  </span>
                </div>
                <div class="v-date-picker-panels">
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
                                    "v-date-picker-item": true,
                                    "v-date-picker-current-month":
                                      item.getMonth() ===
                                      (props.value || new Date()).getMonth(),
                                    "v-date-picker-selected":
                                      item.getTime() ===
                                      (props.value || new Date()).getTime(),
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
                </div>
                <div class="v-date-picker-actions">
                  <v-button theme="text" size="small" onClick={onclickClear}>
                    清除
                  </v-button>
                  <v-button theme="text" size="small" onClick={onclickToday}>
                    今天
                  </v-button>
                </div>
              </div>
            ),
          }}
        </v-popover>
      </div>
    );
  },
});

export default DatePicker;
