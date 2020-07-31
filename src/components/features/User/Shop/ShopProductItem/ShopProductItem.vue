<template>
    <div class="w-25 product-container d-flex flex-column px-2">
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
            <span>{{ product.price }} €</span>
            <button @click="addProductToCart" class="btn btn-primary btn-sm float-right">Commander</button>
        </div>
    </div>
</template>

<script>
    import { eventBus } from "../../../../../main";

    export default {
        props: {
            product: Object,
        },
        methods: {
            addProductToCart() {
                eventBus.addProductToCart({...this.product});
            },
        },
    };
</script>

<style>
    .product-container {
        height: 400px;
    }
</style>