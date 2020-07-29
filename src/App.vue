<template>
  <div id="app">
    <TheHeader/>
    <div class="d-flex flex-row">
      <Shop class="w-75"></Shop>
      <Cart class="w-25" :appInfos="appInfos"></Cart>
    </div>
  </div>
</template>

<script>
  import TheHeader from "./components/TheHeader/TheHeader";
  import Shop from "./components/Shop/Shop/Shop";
  import Cart from "./components/Cart/Cart/Cart";

export default {
  name: 'App',
  components: {
    TheHeader,
    Shop,
    Cart,
  },
  data(){
    return{
      appInfos: "Je viens de ap (data bind)",
    }
  },
}
</script>

<style>
#app {
}
</style>
