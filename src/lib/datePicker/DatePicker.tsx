import { defineComponent, ref, computed } from "vue";
import { VInput, VIcon, VPopover } from "..";
import "./style/date-picker.css";
import helper from "./utils/dateHelper";

export type DateMode = "months" | "year" | "days";

const DatePicker = defineComponent({
  name: "DatePicker",
  components: { VInput, VIcon, VPopover },
  setup() {
    const mode = ref<DateMode>("days");
    const onclickYear = () => {
      mode.value = "year";
    };
    const onclickMonth = () => {
      mode.value = "months";
    };
    const dateValue = ref(new Date());
    const visibleDateList = computed(() => {
      const { year, month } = helper.getYearMonthDate(dateValue.value);
      const firstDate = helper.firstDayOfMonth(dateValue.value);
      const lastDate = helper.lastDayOfMonth(dateValue.value);

      const currentMonthList = ref<Date[]>([]);
      for (let i = firstDate.getDate(); i <= lastDate.getDate(); i++) {
        currentMonthList.value.push(new Date(year, month, i));
      }
      const lastMonthList = ref<Date[]>([]);
      const n = firstDate.getDay() === 0 ? 7 : firstDate.getDay() - 1;
      for (let i = 0; i < n; i++) {
        lastMonthList.value.push(new Date(year, month, -i));
      }
      const nextMonthList = ref<Date[]>([]);
      const m = 42 - currentMonthList.value.length - n;
      for (let i = 1; i <= m; i++) {
        nextMonthList.value.push(new Date(year, month + 1, i));
      }
      return [
        ...lastMonthList.value.reverse(),
        ...currentMonthList.value,
        ...nextMonthList.value,
      ];
    });
    return () => (
      <div class="border">
        <v-popover position="bottom">
          {{
            default: () => <v-input type="text" />,
            content: () => (
              <div class="v-date-picker-pop">
                <div class="v-date-picker-nav">
                  <span>
                    <v-icon name="left" />
                  </span>
                  <span class="flex">
                    <v-icon name="left" />
                    <v-icon name="left" />
                  </span>
                  <span onClick={onclickYear}>2021年</span>
                  <span onClick={onclickMonth}>8月</span>
                  <span class="flex">
                    <v-icon name="right" />
                    <v-icon name="right" />
                  </span>
                  <span>
                    <v-icon name="right" />
                  </span>
                </div>
                <div class="v-date-picker-panels">
                  {mode.value === "year" ? (
                    <div class="v-date-picker-content">年</div>
                  ) : mode.value === "months" ? (
                    <div class="v-date-picker-content">月</div>
                  ) : (
                    <div class="v-date-picker-content">
                      {visibleDateList.value.map((item) => {
                        return <span>{item.getDate()}</span>;
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
