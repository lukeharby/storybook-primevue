<template>
    <InputNumber v-model="value1" inputId="integeronly" />
    <InputNumber v-model="value2" inputId="withoutgrouping" :useGrouping="false" />
    <InputNumber v-model="value3" inputId="minmaxfraction" :minFractionDigits="2" :maxFractionDigits="5" />
    <InputNumber v-model="value4" inputId="minmax" :min="0" :max="100" />
</template>

<script>
import InputNumber from 'primevue/inputnumber';
</script>