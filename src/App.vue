<template>
  <div  id="app">
    <TheHeader/>
  </div>
</template>

<script>
  import TheHeader from "./components/TheHeader/TheHeader";

export default {
  name: 'App',
  components: {
    TheHeader,
  },
  data(){
    return{
    }
  },
}
</script>

<style>
#app {
}
</style>
