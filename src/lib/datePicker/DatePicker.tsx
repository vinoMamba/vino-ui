import { defineComponent, ref } from "vue";
import { VInput, VIcon } from "..";
import "./style/date-picker.css";
import { clickOutsideDiretive, removeListener } from "../utils/clickOutside";
export type DateMode = "months" | "year" | "days";

const DatePicker = defineComponent({
  name: "DatePicker",
  components: { VInput, VIcon },
  directives: { clickOutside: clickOutsideDiretive },
  setup() {
    const popVisible = ref(false);
    const mode = ref<DateMode>("days");
    const onfocus = () => {
      popVisible.value = true;
    };
    const close = () => {
      popVisible.value = false;
    };
    const onclickYear = () => {
      mode.value = "year";
    };
    const onclickMonth = () => {
      mode.value = "months";
    };
    return () => (
      <div vClickOutside={close} class="border">
        <v-input type="text" onFocus={onfocus} />
        {popVisible.value ? (
          <div class="v-date-picker-pop">
            <div class="v-date-picker-nav">
              <span>
                <v-icon name="left" />
              </span>
              <span>
                <v-icon name="left" />
                <v-icon name="left" />
              </span>
              <span onClick={onclickYear}>2021年</span>
              <span onClick={onclickMonth}>8月</span>
              <span>
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
                <div class="v-date-picker-content">日</div>
              )}
            </div>
            <div class="v-date-picker-actions"></div>
          </div>
        ) : null}
      </div>
    );
  },
});

export default DatePicker;
