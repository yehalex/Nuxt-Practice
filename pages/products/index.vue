<template>
    <div>
        <div class="grid grid-cols-4 gap-5">
            <div v-for="product in products">
                <ProductCard :product/>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    definePageMeta({
        layout: 'products'
    })

    // fetch products, and store it to variable products
    const { data:products } = await useFetch('https://fakestoreapi.com/products')

    // overwrite head
    useHead({
        title: 'Merch',
        meta: [
            {name: 'description', content: 'Nuxt 3 Merch'}
        ]
    })
</script>

<style scoped>
    h2 {
        margin-bottom:20px;
        font-size: 36px;
    }
    p {
        margin: 20px 0;
    }
</style>