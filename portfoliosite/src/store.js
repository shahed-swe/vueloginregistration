import { createStore } from 'vuex'


const store = createStore({
    state(){
        const token = localStorage.getItem("token")

        return {
            isAuthenticated: token  ? true : false,
            projectList : ['first project', 'second project','third project']
        }
    },
    mutations:{
        ADD_PROJECT(state, payload){
            state.projectList.push(payload)
        },
        MAKE_AUTHENTICATED(state){
            state.isAuthenticated = true
        },
        MAKE_UNAUTHENTICATED(state){
            state.isAuthenticated = false
        }
    },
    actions:{
        addProject(context, data){
            context.commit("ADD_PROJECT", data)
        },
        makeAuthenticated(context){
            context.commit("MAKE_AUTHENTICATED")
        },
        makeUnAuthenticated(context){
            context.commit("MAKE_UNAUTHENTICATED")
        }
    },

})

export default store