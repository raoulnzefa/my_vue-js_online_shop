<template>
    <div class="d-flex flex-row justify-content-center p-5">
        <admin-product-form class="w-50" />
    </div>
</template>

<script>
    import AdminProductForm from "../AdminProductForm/AdminProductForm";

    export default {
        components: {
            AdminProductForm,
        },
        props: {
        },
    };
</script>

<style></style>