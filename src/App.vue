<template>
  <div  id="app">
    <TheHeader>
      <Admin />
    </TheHeader>
    <User />
  </div>
</template>

<script>
  import TheHeader from "./components/TheHeader/TheHeader";
  import User from "./components/features/User/User/User";
  import Admin from "./components/features/Admin/Admin/Admin";

export default {
  name: 'App',
  components: {
    TheHeader,
    User,
    Admin,
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
