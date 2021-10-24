<template>
      <AddTask v-show="showAddTask"
      @add-task="addTask"/>
    <Tasks @toggle-reminder="toggleReminder" @delete-task="deleteTask" :tasks="tasks" />
</template>

<script>
import Tasks from '../components/Tasks'
import AddTask from '../components/AddTask'
export default {
    name: 'Home',
    props:{
        showAddTask: Boolean,
    },
    components: {
        Tasks,
        AddTask
    },
    data() {
        return{
            tasks: [],
        }
    },
      methods: {
    async addTask(task){
      const res = await fetch('api/tasks', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(task),
      })
      const data = await res.json()
      this.tasks = [...this.tasks, data]
    },
    async deleteTask(id) {
      // for each task that does not equal the task id above ^ keep it all except for the task with that exact id.
      if(confirm('Are you sure?')){
        const res = await fetch(`api/tasks/${id}`, {
        method: "DELETE"
        })
        
        res.status === 200 ? (this.tasks = this.tasks.filter((task) => task.id !== id)) : alert('Error deleting task')
        
      
      }
    },
    async toggleReminder(id) {
      const taskToToggle = await this.fetchTask(id)
      const updTask = {...taskToToggle, reminder: !taskToToggle.reminder}

      const res = await fetch(`api/tasks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(updTask)
      })

      const data = await res.json()
      // toggling green highlighting to toggle reminder as either true or false
      // return array of updated tasks
      // for each task, check to see if task.id = the id passed in. 
      // If it is, return array of objects where we change the reminder to the opposite of whatever the current task reminder is set to
      // else, return initial task
      this.tasks = this.tasks.map((task) => task.id === id ? {...task, reminder: data.reminder} : task)
    },
    async fetchTasks() {
      const res = await fetch('api/tasks')

      const data = await res.json()

      return data
    },
    async fetchTask(id) {
      const res = await fetch(`api/tasks/${id}`)
      const data = await res.json()

      return data
    },    
  },
 async created() {
    this.tasks = await this.fetchTasks()
  }
}
</script>
