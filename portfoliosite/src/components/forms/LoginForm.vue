<template>
    <div>
        <form @submit.prevent="handleLogin" class="form">
            <div class="mb-3">
                <label for="email" class="form-label">Email address</label>
                <input type="email" class="form-control" id="email" v-model="email">
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password" v-model="password">
            </div>
            <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" class="btn btn-success">Submit</button>

        </form>
    </div>
</template>


<script>
import axios from 'axios'

export default {
    name: 'LoginForm',
    data() {
        return {
            email: '',
            password: '',
            token: ''
        }
    },
    methods: {
        async handleLogin() {

            const data = {
                email: this.email,
                password: this.password
            }
            try {
                const response = await axios.post('http://localhost:4000/api/v1/user/login', data)
                if (response.status === 200) {
                    localStorage.setItem("token", response.data.token)
                }
                this.$swal("Login Successful")
                this.$store.dispatch("makeAuthenticated")
                this.$router.push("/profile")
            } catch (error) {
                if (error) {
                    this.$swal("Login Unsuccessful")
                }
            }


        }
    },
    mounted() {
        const isAuthenticated = this.$store.state.isAuthenticated
        if (isAuthenticated) {
            this.$route.push('/')
        }
    }
}
</script>