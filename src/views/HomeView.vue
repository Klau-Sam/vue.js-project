<template>
  <div class="home">
    <list-of-tasks/>
    <nav>
      <router-link to="/add"><button>Add new task</button></router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import ListOfTasks from '@/components/ListOfTasks.vue'

export default {
  name: 'HomeView',
  components: {
    ListOfTasks
  }
}
</script>
