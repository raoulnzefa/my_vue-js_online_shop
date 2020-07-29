<template>
    <div class="d-flex flex-row flex-wrap">
        <CartProductItem title="test Cart props" :appInfos="appInfos"></CartProductItem>
        <CartProductItem :appInfos="appInfos"></CartProductItem>
        <CartProductItem title="test Cart props"></CartProductItem>
        <CartProductItem title="test Cart props"></CartProductItem>
        <CartProductItem></CartProductItem>
    </div>
</template>

<script>
    import CartProductItem from "../CartProductItem/CartProductItem";

    export default {
        components: {
            CartProductItem,
        },
        props: {
            appInfos: String,
        },
    };
</script>

<style></style>