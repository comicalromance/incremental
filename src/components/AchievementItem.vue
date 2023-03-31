<script setup>
</script>

<template>
  <div>
    <el-tooltip placement="top" effect="light">
        <template #content>
            <span class="title"><slot name="title"></slot></span>
            <br/>
            <span class="requirement"><slot name="requirement"></slot></span>
            <br/>
            <slot name="description"></slot>
            
        </template>
        <el-card class="box-card" shadow="hover">
            <span class="icon"><slot name="icon"></slot></span>
        </el-card>
    </el-tooltip>
  </div>
</template>

<style scoped>
  .title {
    font-size: 1rem;
  }
  .enabled .box-card {
    background-color: lightgreen !important;
  }

  .enabled .box-card:hover {
    cursor: pointer;
  }
  

  .box-card {
    background-color: #cccccc;
    width: 80px;
    height: 80px;
    top: 0;
  }


  </style>