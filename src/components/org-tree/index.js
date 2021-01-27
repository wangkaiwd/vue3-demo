import OrgTree from './org-tree';
import './org-tree.scss';

const install = (app) => {
  app.component(OrgTree.name, OrgTree);
};

export default install;
