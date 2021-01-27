<template>
  <org-tree :data="data"></org-tree>
</template>
<script>
import { reactive, toRefs } from 'vue';
import { dataSource } from '@/components/org-tree/data-source';

export default {
  name: 'App',
  components: {},
  setup () {
    const state = reactive({
      data: dataSource
    });
    return {
      ...toRefs(state)
    };
  }
};
</script>

<style lang="scss">
#app {
}
</style>
