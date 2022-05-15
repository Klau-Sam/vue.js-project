import { createStore } from 'vuex'

const store = createStore({
  state: {
    tasks: [
      { id: 1, title: "todo app vue cli" , done: false },
      { id: 2, title: "add vue router" , done: false  },
      { id: 3, title: "add adding task feature" , done: false }
    ],
  },
  getters: {
  },
  mutations: {
    addNewTask (state, newTitle) {
      state.tasks.push({ id: state.tasks.length + 1, title: newTitle, done: false })
    },
    markAsDone (state, id) {
      const index = state.tasks.findIndex((task) => task.id === id)
      if (typeof index !== 'undefined') {
        state.tasks[index].done = !state.tasks[index].done
      }
    }
  },
  actions: {
    addNewTask (context, newTitle) {
      context.commit('addNewTask', newTitle)
    },
    markAsDone(context, id) {
      context.commit('markAsDone', id)
    }
  },
  modules: {
  }
})

export default store
