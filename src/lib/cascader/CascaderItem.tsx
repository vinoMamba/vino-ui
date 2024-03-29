import {defineComponent, PropType, computed} from "vue";
import {SourceItem} from "./types";
import "./style/cascader.css";
import {VIcon} from "..";

const cascaderItemProps = {
    sourceList: {
        type: Array as PropType<SourceItem[]>,
    },
    selected: {
        type: Array as PropType<SourceItem[]>,
        default: () => [],
    },
    level: {
        type: Number,
        default: 0,
    },
};

const CascaderItem = defineComponent({
    name: "CascaderItem",
    components: {VIcon},
    props: cascaderItemProps,
    setup(props, {emit}) {
        const rightItem = computed(() => {
            const currentSelected = props.selected[props.level];
            if (currentSelected && currentSelected.children) {
                return currentSelected.children;
            } else {
                return null;
            }
        });
        const onClickLabel = (item: SourceItem) => {
            const copySelected: SourceItem[] = JSON.parse(
                JSON.stringify(props.selected)
            );
            copySelected[props.level] = item;
            copySelected.splice(props.level + 1);
            emit("updateSelected", copySelected);
        };
        const updateData = (newValue: SourceItem) => {
            emit("updateSelected", newValue);
        };
        return () => (
            <div class="v-cascader-item">
                <div class="left">
                    {props.sourceList?.map((item) => (
                        <div onClick={() => onClickLabel(item)} class="left-label">
                            <span class="px-4">{item.name}</span>
                            {item.isLeaf ? (
                                !item.isLeaf ? (
                                    <v-icon name="right"/>
                                ) : null
                            ) : item.children ? (
                                <v-icon name="right"/>
                            ) : null}
                        </div>
                    ))}
                </div>
                <div class="right">
                    {rightItem.value ? (
                        <CascaderItem
                            sourceList={rightItem.value}
                            level={props.level + 1}
                            selected={props.selected}
                            // @ts-ignore
                            onUpdateSelected={updateData}
                        />
                    ) : (
                        ""
                    )}
                </div>
            </div>
        );
    },
});

export default CascaderItem;
