<template>
  <div>
    <br>
    Prénom : <strong>{{ firstName }} {{ lastName }}</strong>
    <button @click="removeToUserList">Remove</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'User',
  props: ["id", "firstName", "lastName"],
  methods: {
    removeToUserList: function () {
      this.$emit('removeToUserList', {
        id: this.id,
      })
    },
  }
});
</script>