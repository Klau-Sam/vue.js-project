<template>
  <div class="details">
    <h1>Here are some details about the task with id {{ this.$route.params.id }}</h1>
    <h3>Title: {{ getTaskTitle }}</h3>
    <nav>
      <router-link to="/"><button>Close</button></router-link>
    </nav>
  </div>
</template>

<script>
import store from '../store'
export default {
  name: 'DetailsView',
  computed: {
    getTaskTitle() {
      const task = store.state.tasks.find((task) => task.id.toString() === this.$route.params.id);
      return task ? task.title : '';
    }
  }
}
</script>