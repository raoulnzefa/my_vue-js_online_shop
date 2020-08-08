<template>
    <div class="product-container d-flex flex-column px-2">
        <div class="d-flex flex-row justify-content-center">
            <img :src="product.img" alt="image du macbook" style="height: 150px">
        </div>
        <div>
            <h3>{{ product.title }}</h3>
            <hr>
        </div>
        <div>
            {{ product.description }}
        </div>
        <div>
            <span>{{ product.price | price }}</span>
            <button @click="addOne(product)" class="btn btn-primary btn-sm float-right">Commander</button>
        </div>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex'

    export default {
        props: {
            product: Object,
        },
        methods: {
            ...mapMutations('cart', ['addOne'])
        },
    };
</script>

<style>
    .product-container {
        height: 500px;
        width: 33%;
    }
    @media screen and (max-width: 768px){
        .product-container {
            width: 50%;
        }
    }
</style>