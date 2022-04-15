<script lang="ts">
import Vue from 'vue';
import TheNewTask from './TheNewTask.vue';
import Task from './Task.vue';
import store from '@/store';

export default Vue.extend({
  components: {
    TheNewTask,
    Task
  },
  data() {
    return {
      todoList: this.$store.state.todoList
    }
  },
  name: 'TodoList',
  methods: {
    addToTodoList: function(_task: any) {
      store.commit('addTask', _task)
    },
    removeToTodoList: function(_id: any) {
      store.commit('removeTask', _id)
    },
  }
});
</script>

<template>
  <div>
    <TheNewTask @addToTodoList="addToTodoList" />
    <div v-for="(task, index) in todoList" :key="index">
      <Task :id="index" :title="task.title" :hours="task.hours" :responsable="task.responsable" @removeToTodoList="removeToTodoList" />
    </div>
  </div>
</template>