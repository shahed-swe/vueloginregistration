<script setup>
import { RouterView } from 'vue-router'
import CustomNav from '@/components/CustomNav.vue';
</script>

<template>
  <header>
    <div class="wrapper">
      <!-- custom navigation -->
      <nav>
        <CustomNav />
      </nav>
    </div>
  </header>

  <!-- our view option -->
  <div class="container">
    <RouterView />
  </div>
</template>
