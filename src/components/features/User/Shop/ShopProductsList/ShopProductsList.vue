<template>
    <div class="d-flex flex-row flex-wrap">
        <template v-for="product in products">
            <ShopProductItem :key="product.id" :product="product"/>
        </template>
    </div>
</template>

<script>
    import ShopProductItem from "../ShopProductItem/ShopProductItem";

    export default {
        components: {
            ShopProductItem,
        },
        props: {
            products: Array,
        },
    };
</script>

<style></style>
