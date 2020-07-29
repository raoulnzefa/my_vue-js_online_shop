<template>
    <div class="w-25 border product-container d-flex flex-column">
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
            <span>{{ product.price }}</span>
            <button class="btn btn-primary btn-sm float-right">Commander</button>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
        },
        data() {
            return {
                product: {
                    img: 'url-image-mac-google',
                    title: 'MacBook',
                    description: "D'une finesse et d'une légèreté hors du commun, le MacBook Pro est encore plus rapide et plus puissant qu'avant.",
                    price: '1500 €',
                },
            };
        },
    };
</script>

<style>
    .product-container {
        height: 400px;
    }
</style>