import { createStore } from 'vuex'

const constant = {
    ADD_PROJECT: "ADD_PROJECT",
    REMOVE_PROJECT: "REMOVE_PROJECT",
    MAKE_AUTHENTICATED: "MAKE_AUTHENTICATED",
    MAKE_UNAUTHENTICATED: "MAKE_UNAUTHENTICATED",
}


const store = createStore({
    state() {
        const token = localStorage.getItem("token")

        return {
            isAuthenticated: token ? true : false,
            projectList: []
        }
    },
    mutations: {
        ADD_PROJECT(state, payload) {
            state.projectList.push(payload)
        },
        REMOVE_PROJECT(state, payload) {
            const itemIndex = state.projectList.findIndex(value => value === payload?.taskname)
            state.projectList.splice(itemIndex)
        },
        MAKE_AUTHENTICATED(state) {
            state.isAuthenticated = true
        },
        MAKE_UNAUTHENTICATED(state) {
            state.isAuthenticated = false
        }
    },
    actions: {
        addProject(context, data) {
            context.commit(constant.ADD_PROJECT, data)
        },
        removeProject(context, data) {
            context.commit(constant.REMOVE_PROJECT, data)
        },
        makeAuthenticated(context) {
            context.commit(constant.MAKE_AUTHENTICATED)
        },
        makeUnAuthenticated(context) {
            context.commit(constant.MAKE_UNAUTHENTICATED)
        }
    },

})

export default store