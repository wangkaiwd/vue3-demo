import TreeNode from './tree-node';

export default {
  name: 'OrgTree',
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  },
  components: {
    TreeNode
  },
  setup (props) {
    const { data } = props;
    const renderChildren = (children) => {
      return children.map(child => {
        return renderNode(child);
      });
    };
    const renderNode = (node) => {
      return (
        <TreeNode node={node}>
          {node.children && renderChildren(node.children)}
        </TreeNode>
      );
    };
    return () => <div class="org-tree">{renderNode(data)}</div>;
  }
};
