<template>
    <div class="d-flex flex-row justify-content-between">
        <span>{{ item.title }}</span>
        <span><strong>{{ item.price | price }}</strong></span>
        <button @click="deleteOne(item.id)" class="close">
            <span>&times;</span>
        </button>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex';

    export default {
        props: {
            item: Object,
        },
        methods: {
            ...mapMutations('cart', ['deleteOne'])
        },
    };
</script>

<style>
</style>