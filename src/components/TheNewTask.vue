<template>
  <div class="input-container">
    <input v-model="title" placeholder="Titre">
    <input v-model="hours" value="0" type="number">
    <select name="responsable" v-on:change="onChangeResponsable($event)">
      <option disabled selected>Sélectionner un responsable</option>
      <option v-for="(user, index) in userList" :key="index">{{user.firstName}} {{user.lastName}}</option>
    </select>
    <button @click="addToTodoList">Add</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'TheNewTask',
  data() {
    return {
      title: '',
      hours: 0,
      responsable: '',
      userList: this.$store.state.userList
    }
  },
  methods: {
    onChangeResponsable: function(e: any){
      var name = e.target.options[e.target.options.selectedIndex].text;
      this.responsable = name;
    },
    addToTodoList: function () {
      if (this.title !== '' && this.hours !== 0 && this.responsable !== '') {
          this.$emit('addToTodoList', {
          title: this.title,
          hours: this.hours,
          responsable: this.responsable
      })
      }
    }
  },
});
</script>