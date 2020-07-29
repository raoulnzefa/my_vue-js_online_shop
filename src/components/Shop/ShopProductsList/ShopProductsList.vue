<template>
    <div class="d-flex flex-row flex-wrap">
        <ShopProductItem></ShopProductItem>
        <ShopProductItem></ShopProductItem>
        <ShopProductItem></ShopProductItem>
        <ShopProductItem></ShopProductItem>
    </div>
</template>

<script>
    import ShopProductItem from "../ShopProductItem/ShopProductItem";

    export default {
        components: {
            ShopProductItem,
        },
        props: {
        },
    };
</script>

<style></style>
