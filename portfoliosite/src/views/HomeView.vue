<template>
  <main class="mt-2">
    <div class="row border pt-3 pb-3 ps-2 pe-1">
      <div class="col-6 p-0">
        <form @submit.prevent="addprojects">

          <label for="">Task Name</label>
          <input type="text" class="form-control" v-model="taskname" placeholder="Enter Task">
          <label for="">Task Description</label>
          <textarea cols="5" rows="3" class="form-control" v-model="description" placeholder="Description"></textarea>
          <button class="btn btn-primary shadow-none mt-2">Add Task</button>
        </form>
      </div>
    </div>
    <div class="row mt-3">
      <div v-for="project in projectList" :key="project" @click="showFullItem(project)"
        class="card col-12 col-lg-3 col-md-6 me-2 mb-2">
        <div class="card-style">
          <div>{{ project.taskname }}</div>
          <button class="btn btn-primary shadow-none" @click="removeProject(project?.taskname)">Delete</button>
        </div>
      </div>
    </div>
    <div class="row">Full Task Details</div>
    <div class="row">
      <div v-if="fullDetails.taskname" class="row col-lg-3">
        <div class="card pt-3 pb-3 ps-4">
          <div class="card-item">
            Task Name: {{ fullDetails.taskname }}
          </div>
          <div class="card-details">
            Description: {{ fullDetails.description }}
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<!-- style -->
<style>
.card-style {
  margin: 3rem 0 1rem 1rem;
}
</style>

<script>
export default {
  data() {
    return {
      taskname: "",
      description: "",
      fullDetails: {},
    }
  },
  methods: {
    addprojects() {
      const data = {
        taskname: this.taskname,
        description: this.description
      }
      this.$store.dispatch("addProject", data)
      this.taskname = ""
      this.description = ""
    },
    removeProject(taskname) {
      this.$store.dispatch("removeProject", taskname)

    },
    showFullItem(item) {
      this.fullDetails = item
    }
  },
  computed: {
    projectList() {
      return this.$store.state.projectList
    }
  },
}
</script>

