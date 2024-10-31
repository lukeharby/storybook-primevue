<template>
    <ColorPicker v-model="color" />
</template>

<script setup>
import { ref } from "vue";
import ColorPicker from 'primevue/colorpicker';
const color = ref();
</script>
