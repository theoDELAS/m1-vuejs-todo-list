<template>
  <div>
    <h1>{{ msg }}</h1>
    <input v-model="title" placeholder="Titre">
    <input v-model="hours" value="0" type="number">
    <select name="responsable" v-on:change="onChangeResponsable($event)">
      <option disabled value="">Sélectionner un responsable</option>
      <option>Res 1</option>
      <option>Res 2</option>
      <option>Res 3</option>
    </select>
    <button @click="addToTodoList">Add</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'NewTask',
  props: {
    msg: String,
  },
  data() {
    return {
      title: '',
      hours: 0,
      responsable: ''
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
    },
  },
});
</script>