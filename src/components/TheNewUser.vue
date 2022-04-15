<template>
  <div>
    <input v-model="firstName" placeholder="First Name">
    <input v-model="lastName" placeholder="Last Name">
    <button @click="addToUserList">Add</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'TheNewUser',
  data() {
    return {
      firstName: '',
      lastName: '',
    }
  },
  methods: {
    addToUserList: function () {
      if (this.firstName !== '' && this.lastName) {
          this.$emit('addToUserList', {
          firstName: this.firstName,
          lastName: this.lastName
      })
      }
    }
  },
});
</script>