<template>
  <div class="profile">
    <input type="text" v-model="projectname">
    <button @click="addproject">Add</button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      projectname: ''
    }
  },
  methods:{
    addproject(){
      this.$store.dispatch("addProject", this.projectname)
    }
  }

}
</script>
