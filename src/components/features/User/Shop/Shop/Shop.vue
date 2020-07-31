<template>
    <ShopProductsList class="px-3" :products="products"></ShopProductsList>
</template>

<script>
    import ShopProductsList from "../ShopProductsList/ShopProductsList";
    import { eventBus } from "../../../../../main";

    export default {
        components: {
            ShopProductsList,
        },
        data() {
            return{
                products: [],
            }
        },
        created() {
          this.products = eventBus.products;
          eventBus.$on('update:products', (products) => {
              this.products = products;
          })
        },
        props: {
        },
    };
</script>

<style></style>