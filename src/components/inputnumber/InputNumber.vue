<template>
    <InputNumber v-model="value" inputId="integeronly" />
</template>

<script setup>
import { ref } from "vue";
import InputNumber from 'primevue/inputnumber';
const value = ref();
</script>