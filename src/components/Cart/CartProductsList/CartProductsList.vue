<template>
    <div class="d-flex flex-column flex-wrap p-1">
        <h5 class="border-bottom pb-3">Mon panier</h5>
        <cart-product-item v-for="item in cart" :key="item.id" :item="item"></cart-product-item>
        <template v-if="cart.length">
            <hr class="w-100">
            <span>Total : {{total}} €</span>
        </template>
    </div>
</template>

<script>
    import CartProductItem from "../CartProductItem/CartProductItem";

    export default {
        components: {
            CartProductItem,
        },
        computed: {
            total() {
                return this.cart.reduce((total, value) => total += value.price, 0);
            }
        },
        props: {
            cart: Array,
        },
    };
</script>

<style></style>