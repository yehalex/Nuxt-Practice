<template>
    <div>
        <h2>About</h2>
        <!-- <button class="btn" @click="callAPI">Retrieve API</button> -->
        {{ data }}
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue'

    const { data } = await useFetch('/api/currency/GBP')

    
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