<template>
  <div>
    <br>
    Titre : <strong>{{ title }}</strong>, durée : <strong>{{ hours }}h</strong>, responsable : <strong>{{ responsable }}</strong>
    <button @click="removeToTodoList">Remove</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Task',
  props: ["id", "title", "hours", "responsable"],
  methods: {
    removeToTodoList: function () {
      this.$emit('removeToTodoList', {
        id: this.id,
      })
    },
  }
});
</script>