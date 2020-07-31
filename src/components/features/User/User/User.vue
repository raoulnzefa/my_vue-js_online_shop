<template>
    <div>
        <div class="d-flex flex-row">
            <Shop class="w-75"></Shop>
            <Cart class="w-25"></Cart>
        </div>
    </div>
</template>

<script>
    import Shop from "../Shop/Shop/Shop";
    import Cart from "../Cart/Cart/Cart";

    export default {
        components: {
            Shop,
            Cart,
        },
        props: {
        },
    };
</script>

<style></style>