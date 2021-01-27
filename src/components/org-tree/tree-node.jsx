const prefixCls = `org-tree-node`;
export default {
  name: 'TreeNode',
  props: {
    node: {
      type: Object,
      default: () => ({})
    }
  },
  setup (props, ctx) {
    const { node } = props;
    const { slots } = ctx;
    return () => {
      return (
        <div class={prefixCls}>
          <div class={`${prefixCls}-label`}>
            {node.label}
          </div>
          {
            node?.children?.length > 0 &&
            <div class={`${prefixCls}-children`}>
              <div class={`${prefixCls}-content`}>
                {slots.default()}
              </div>
              <div class={`${prefixCls}-children-expand`}>
                +
              </div>
            </div>
          }
        </div>
      );
    };
  }
};
