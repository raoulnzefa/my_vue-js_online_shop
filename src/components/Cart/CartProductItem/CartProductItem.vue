<template>
    <div class="w-50 border cart-container">
        <h3>{{ title }}</h3>
        <p>{{ appInfos }}</p>
    </div>
</template>

<script>
    export default {
        props: {
            title: String,
            appInfos: String,
        },
    };
</script>

<style>
    .cart-container {
        height: 200px;
    }
</style>