import { defineComponent, ref, computed, PropType } from "vue";
import { VInput, VIcon, VPopover } from "..";
import "./style/date-picker.css";
import helper from "./utils/dateHelper";

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
    const onclickYear = () => {
      mode.value = "year";
    };
    const onclickMonth = () => {
      mode.value = "months";
    };
    const visibleDateList = computed(() => {
      const firstDate = helper.firstDayOfMonth(props.value);
      const weekOfFirst = firstDate.getDay() === 0 ? 6 : firstDate.getDay() - 1;
      const firstTime = firstDate.getTime() - weekOfFirst * 3600 * 24 * 1000;
      const visibleDateList = [];
      for (let i = 0; i < 42; i++) {
        visibleDateList.push(new Date(firstTime + i * 3600 * 24 * 1000));
      }
      return visibleDateList;
    });
    const getDate = (date: Date) => {
      emit("update:value", date);
    };
    return () => (
      <div class="border">
        <v-popover position="bottom">
          {{
            default: () => (
              <v-input value={props.value.toString()} type="text" />
            ),
            content: () => (
              <div class="v-date-picker-pop">
                <div class="v-date-picker-nav">
                  <span>
                    <v-icon name="left-left" />
                  </span>
                  <span class="flex">
                    <v-icon name="left" />
                  </span>
                  <span>
                    <span onClick={onclickYear}>2021年</span>
                    <span onClick={onclickMonth}>8月</span>
                  </span>
                  <span>
                    <v-icon name="right" />
                  </span>
                  <span>
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
                          return <span>{i}</span>;
                        })}
                      </div>
                      {[0, 1, 2, 3, 4, 5].map((i) => {
                        return (
                          <div>
                            {visibleDateList.value
                              .slice(i * 7, i * 7 + 7)
                              .map((item) => {
                                return (
                                  <span onClick={() => getDate(item)}>
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
