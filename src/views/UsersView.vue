<template>
  <div class="users">
    <TheUserList />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import TheUserList from '@/components/TheUserList.vue'; // @ is an alias to /src

export default Vue.extend({
  name: 'UsersView',
  components: {
    TheUserList,
  },
});
</script>
