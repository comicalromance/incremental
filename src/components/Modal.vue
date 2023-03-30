<template>
    <div className="modal_wrapper">
        <div className="modal">
            <slot></slot>
        </div>
    </div>
</template>

<style scoped>
.modal{
    width: 300px;
    height: 100px;
    border-radius: 10px;
    background-color: white;
    padding: 20px 20px;
    z-index: 1200;
    text-align: center;
}
.modal_wrapper {
    background-color: rgba(0,0,0,0.6);
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    position: fixed;
    top: 0;
    left: 0;
}

</style>