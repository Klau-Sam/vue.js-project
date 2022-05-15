<template>
  <div class="add">
    <h3>Please give the title of a new task</h3>
    <input type="text" v-model="title" @focus="onInput"/>
    <button @click="onClick">Add task</button>
    <h4 class="is-added" v-if="isAdded">Task added successfully.</h4>
    <h4 class="is-empty" v-if="isEmpty">Title cannot be empty.</h4>
  </div>
  <router-link to="/"><button class="main-page">Back to main page</button></router-link>
</template>

<script>
import store from '../store'
export default {
  name: 'AddView',
  data() {
    return {
      title: '',
      isAdded: false,
      isEmpty: false
    }
  },
  methods: {
    onClick() {
        if (this.title.trim() === '') {
          this.isEmpty = true;
          this.isAdded = false;
        } else {
          this.isEmpty = false;
          this.isAdded = true;
          store.dispatch('addNewTask', this.title);
          this.title = '';
        }
      },
    onInput() {
      this.isEmpty = false;
      this.isAdded = false;
    }
  }
}
</script>

<style>
.main-page {
  margin: 40px 0 0;
}
.is-empty {
  color: red;
}
.is-added {
  color: green;
}
</style>
