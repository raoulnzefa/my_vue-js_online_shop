<template>
    <div class="w-25 border product-container d-flex flex-column">
        <div class="d-flex flex-row justify-content-center">
            <img :src="img" alt="image du macbook" style="height: 150px">
        </div>
        <div>
            <h3>{{ title }}</h3>
            <hr>
        </div>
        <div>
            {{ description }}
        </div>
        <div>
            <span>{{ price }}</span>
            <button class="btn btn-primary btn-sm float-right">Commander</button>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            id: Number,
            img:  String,
            title: String,
            description: String,
            price: Number,
        },
    };
</script>

<style>
    .product-container {
        height: 400px;
    }
</style>