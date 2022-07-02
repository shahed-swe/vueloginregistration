

<template>
    <div>
        <form @submit.prevent="handleSubmit" class="form">
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Name</label>
                <input type="text" class="form-control" id="name" v-model="name" >
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="email" v-model="email" >
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Phone Number</label>
                <input type="text" class="form-control" id="phone" v-model="phone">
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="password" v-model="password">
            </div>
            <button type="submit" class="btn btn-success">Submit</button>

        </form>
    </div>
</template>


<script>
import axios from 'axios'
export default {
    name: 'RegistrationForm',
    data() {
        return {
            name: '',
            email: '',
            phone: '',
            password: ''
        }
    },
    methods: {
        async handleSubmit() {
            const data = {
                name: this.name,
                email: this.email,
                phone: this.phone,
                password: this.password,
            }
            try{
                const config = {
                    headers: {
                        "Content-Type":"application/json",
                        "Accept":"application/json"
                    }
                }
                const response = await axios.post("http://localhost:4000/api/v1/user/registration", data, config)
                if(response.status === 201 && response.data.status){
                    this.$swal("Registration Successfull")
                }
            }

            catch(error){
                if(error){
                    console.log(error)
                    this.$swal("Registration Unsuccessful")
                }
            }
            
        }
    }
}
</script>