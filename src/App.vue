<template>
  <div  id="app">
    <TheHeader />
    <div class="d-flex flex-column w-100">
      <RouterView />
    </div>
  </div>
</template>

<script>
  import TheHeader from "./components/TheHeader/TheHeader";

  export default {
    name: 'App',
    components: {
      TheHeader,
    },
  }
</script>

<style>
#app {
}
</style>
