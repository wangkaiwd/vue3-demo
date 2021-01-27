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
        <div class="org-tree-node">
          <div class="org-tree-node-label">
            {node.label}
          </div>
          {
            node?.children?.length > 0 &&
            <div className="org-tree-node-children">
              {slots.default()}
            </div>
          }
        </div>
      );
    };
  }
};
