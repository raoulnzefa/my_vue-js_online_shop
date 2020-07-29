<template>
    <CartProductsList class="p-3" :appInfos="appInfos"></CartProductsList>
</template>

<script>
    import CartProductsList from "../CartProductsList/CartProductsList";

    export default {
        components: {
            CartProductsList,
        },
        props: {
            appInfos: String,
        },
    };
</script>

<style></style>