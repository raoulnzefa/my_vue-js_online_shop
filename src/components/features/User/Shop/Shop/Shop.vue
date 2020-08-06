<template>
    <ShopProductsList class="px-3" :products="products"></ShopProductsList>
</template>

<script>
    import ShopProductsList from "../ShopProductsList/ShopProductsList";

    export default {
        components: {
            ShopProductsList,
        },
        data() {
            return{

            }
        },
        props: {
            products: Array,
        },
    };
</script>

<style></style>