<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <div class="custom-nav">
        <ul class="nav justify-content-center py-3 bg-secondary">
            <li class="nav-item px-2 mx-2">
                <RouterLink to="/" class="nav-item">Home</RouterLink>
                <RouterLink to="/profile" class="nav-item">Profile</RouterLink>
                <RouterLink v-if="!authenticated" to="/login" class="nav-item">Login</RouterLink>
                <RouterLink v-if="!authenticated" to="/registration" class="nav-item">Registration
                </RouterLink>
                <RouterLink v-if="authenticated" @click="logout" to="#logout" class="nav-item">Logout
                </RouterLink>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    methods: {
        logout() {
            localStorage.removeItem("token")
            this.$store.dispatch("makeUnAuthenticated")
        }
        
    },
    computed:{
        authenticated(){
            return this.$store.state.isAuthenticated
        }
    }
}
</script>

<style>
.nav-item {
    margin-left: 1rem;
    text-decoration: none;
    color: white
}
</style>