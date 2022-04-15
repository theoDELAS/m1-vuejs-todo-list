import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    todoList: [
      { title: "Faire la cuisine", hours: 10, responsable: "Thomas Le Naour" },
      { title: "Faire les courses", hours: 5, responsable: "Alex Boisseau" },
      { title: "Faire la vaisselle", hours: 7, responsable: "Sascha Salles" }
    ],
    userList: [
      { firstName: "Alex", lastName: "Boisseau" },
      { firstName: "Thomas", lastName: "Le Naour" },
      { firstName: "Sascha", lastName: "Salles" }
    ]
  },
  getters: {
  },
  mutations: {
    increment(state) {
      state.count++
    },
    addTask(state, task) {
      state.todoList.push(task)
    },
    removeTask(state, taskId) {
      state.todoList.splice(taskId, 1)
    },
    addUser(state, user) {
      state.userList.push(user)
    },
    removeUser(state, userId) {
      state.userList.splice(userId, 1)
    },
  },
  actions: {
  },
  modules: {
  }
})
