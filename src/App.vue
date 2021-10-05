
<template>
  <RouterLink to="/">
    Home
  </RouterLink>
  <RouterLink to="/about">
    About
  </RouterLink>
  <RouterLink
    :to="{ name: 'docsId',
           params:{id:'8888'}, 
           query:{name: 'Leon', age:90, email:'leon@abc.com'}}">
    Document ID
  </RouterLink>

  <button @click="$router.push({name:'Home'})">
    Home
  </button>
  <button @click="$router.push({name:'About'})">
    About
  </button>
  <RouterView />
  <Hello />
</template> 

<script>
import Hello from '~/components/Hello'


export default{
  components:{
    Hello,
  },
  data(){
    return{
    }
  },
  computed:{
    storeMsg(){
      return this.$store.state.msg
    },
      storeMessage(){
      return this.$store.state.message.message //네임스페이스.모듈
    },
  },
  methods:{
    increaseCounts(){
      this.$store.commit('increaseCounts')
    },
    fetchTodo(){
      this.$store.dispatch('fetchTodo')
    }
  }
}
</script>
