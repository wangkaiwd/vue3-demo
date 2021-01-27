import { createApp } from 'vue';
import App from './App.vue';
import OrgTree from '@/components/org-tree';

const app = createApp(App);
app.use(OrgTree);
app.mount('#app');

