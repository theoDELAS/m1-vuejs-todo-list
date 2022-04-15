<script lang="ts">
import Vue from 'vue';
import TheNewUser from './TheNewUser.vue';
import User from './User.vue';
import store from '@/store';

export default Vue.extend({
  components: {
    TheNewUser,
    User
  },
  data() {
    return {
      userList: this.$store.state.userList
    }
  },
  name: 'TodoList',
  methods: {
    addToUserList: function(_user: any) {
      store.commit('addUser', _user)
    },
    removeToUserList: function(_id: any) {
      store.commit('removeUser', _id)
    },
  }
});
</script>

<template>
  <div>
    <TheNewUser @addToUserList="addToUserList" />
    <div v-for="(user, index) in userList" :key="index">
      <User :id="index" :firstName="user.firstName" :lastName="user.lastName" @removeToUserList="removeToUserList" />
    </div>
  </div>
</template>