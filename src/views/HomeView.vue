<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <TheTodoList />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import TheTodoList from '@/components/TheTodoList.vue'; // @ is an alias to /src

export default Vue.extend({
  name: 'HomeView',
  components: {
    TheTodoList,
  },
});
</script>
