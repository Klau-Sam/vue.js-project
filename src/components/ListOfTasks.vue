<template>
  <div>
    <h1>List of tasks</h1>
    <ul>
        <li v-for="task in tasks" :key="task.id" :class="{ done: task.done }">
            <router-link :to="{ name: 'details', params: { id: task.id }}">
                <h3>{{ task.title }}</h3>
            </router-link>
            <h4>Done: </h4>
            <input type="checkbox" :checked="task.done" @change="onChange(task.id)"/>
        </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import store from '../store'
export default {
  name: 'ListOfTasks',
  props: {
  },
  computed: mapState([
      'tasks'
  ]),
  methods: {
    onChange(id) {
      store.dispatch('markAsDone', id)
    }
  }
}
</script>

<style scoped>
h3 {
  margin: 10px 0 10px;
}
ul {
  list-style-type: none;
  padding: 2rem;
}
li {
  padding-left: 2rem;
  background-color: #42b983;
  background-position: 0 0;
  background-repeat: no-repeat;
  border: 0.1rem black solid;
}
.done {
  background-color: #777777;
}
a {
  color: #5242b9;
}
</style>
