export default{
    namespaced:true,
    state(){
        return{
            message:'Hello message'
        }
    },
    getters:{
        reversedMessageModule(state){
            return state.message.split('').reverse().join('')
        }
    },
    mutations:{
        updateMessageModule(state,newMessage){
            state.message=newMessage
        }
    },
    actions:{
        async fetchTodo({commit}){
            const todo = await fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            console.log(todo)
            commit('updateMessageModule',todo.title)
            }
    }
}