<script setup>
import Modal from './Modal.vue';
</script>

<template>
    <Modal>
        <slot></slot>
        <el-button @click="$emit('closeThis')" class="margin close">Close</el-button>
    </Modal>
</template>

<style scoped>
.close {
    float: right;
    margin-left: 1rem;
}
.margin {
    margin-top: 1rem;
}
</style>