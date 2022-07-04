<template>
  <main>
    <div v-for="project in projectList" :key="project">{{project}}</div>
  </main>
</template>


<script>
  export default {
    data(){
      return {
        projectname: ""
      }
    },
    computed: {
      projectList (){
        return this.$store.state.projectList
      }
    },
  }
</script>