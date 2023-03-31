<template>
  <div>
    <el-tooltip placement="top" effect="light">
        <template #content>
            <span class="title"><slot name="title"></slot></span>
            <span class="cost"><slot name="cost">Ho</slot></span>
            <br/>
            <slot name="description">Hey</slot>
            
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
  .cost {
    float: right;
    font-size: 1rem;
  }

  .enabled .box-card {
    background-color: white !important;
  }

  .enabled .box-card:hover {
    cursor: pointer;
  }

  .bought {
    opacity: 0.2;
  }
  
  .el-popper {
    width: 15rem !important;
  }
  .box-card {
    background-color: #cccccc;
    width: 60px;
    height: 60px;
    top: 0;
  }


  </style>