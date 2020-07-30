<template>
    <CartProductsList class="p-3" :cart="cart"></CartProductsList>
</template>

<script>
    import CartProductsList from "../CartProductsList/CartProductsList";
    import { eventBus } from "../../../main";

    export default {
        components: {
            CartProductsList,
        },
        data() {
            return {
                cart: Array,
            };
        },
        created() {
            this.cart = eventBus.cart;
            eventBus.$on("update:cart", (cart) => {
                this.cart = cart;
            })

        },
        props: {
        },
    };
</script>

<style></style>