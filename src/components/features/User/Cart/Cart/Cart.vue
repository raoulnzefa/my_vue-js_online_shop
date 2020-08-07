<template>
    <CartProductsList class="p-3" :cart="cart"></CartProductsList>
</template>

<script>
    import CartProductsList from "../CartProductsList/CartProductsList";

    export default {
        components: {
            CartProductsList,
        },
        props: {
            cart: Array,
        },
    };
</script>

<style></style>