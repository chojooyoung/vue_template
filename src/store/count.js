export default{
    namespaced:true,
    state(){
        return{
            moduleCount:1
        }
    },
    mutations:{
        increaseCount(state){
            state.moduleCount+=1
        },
        decreaseCount(state){
            state.moduleCount-=1
        },
    }
}