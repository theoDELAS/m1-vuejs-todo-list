<script lang="ts">
import Vue from 'vue';
import NewTask from './NewTask.vue';
import Task from './Task.vue';

export default Vue.extend({
  components: {
    NewTask,
    Task
  },
  data() {
    return {
      todosList: [
        {
          title: "Alex",
          hours: 10,
          responsable: "TLN"
        }
      ]
    }
  },
  name: 'TodoList',
  methods: {
    addToTodoList: function(_task: any) {
      this.$set(this.todosList, this.todosList.length, _task);
    },
    removeToTodoList: function(_id: any) {
      this.todosList.splice(_id, 1);
    },
  }
});
</script>

<template>
  <div>
    <NewTask @addToTodoList="addToTodoList" />
    <div v-for="(task, index) in todosList" :key="index">
      <Task :id="index" :title="task.title" :hours="task.hours" :responsable="task.responsable" @removeToTodoList="removeToTodoList" />
    </div>
  </div>
</template>