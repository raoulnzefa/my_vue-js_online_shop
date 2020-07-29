<template>
    <div class="d-flex flex-row flex-wrap">
        <CartProductItem></CartProductItem>
        <CartProductItem></CartProductItem>
        <CartProductItem></CartProductItem>
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
        },
    };
</script>

<style></style>