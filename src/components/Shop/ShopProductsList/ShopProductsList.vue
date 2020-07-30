<template>
    <div class="d-flex flex-row flex-wrap">
        <template v-for="product in products">
            <ShopProductItem
                    :key="product.id"
                    :img="product.img"
                    :title="product.title"
                    :description="product.description"
                    :price="product.price"
            />
        </template>
    </div>
</template>

<script>
    import ShopProductItem from "../ShopProductItem/ShopProductItem";

    export default {
        components: {
            ShopProductItem,
        },
        props: {
            products: Array,
        },
    };
</script>

<style></style>
