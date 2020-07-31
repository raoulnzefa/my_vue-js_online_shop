<template>
  <div  id="app">
    <TheHeader />
    <div class="d-flex flex-column w-100">
      <Component :is="page" />
    </div>
  </div>
</template>

<script>
  import { eventBus } from "./main";
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
        page: eventBus.page,
      }
    },
    created() {
      eventBus.$on('update:page', (page) => {
        this.page = page;
      });
    },
  }
</script>

<style>
#app {
}
</style>
