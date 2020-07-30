<template>
    <div class="d-flex flex-row justify-content-between p-2 px-5">
        <span>{{ item.title }}</span>
        <span><strong>{{ item.price }} €</strong></span>
    </div>
</template>

<script>
    export default {
        props: {
            item: Object,
        },
    };
</script>

<style>
</style>