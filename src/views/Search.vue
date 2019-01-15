<template>
    <div>
        <div class="search-group">
            <span class="search-box">
                <form action="">
                    <input class="search-input" type="search" autocomplete="off" placeholder="搜索菜号或菜名" 
                    @keyup.enter="showLoadingLayer" onkeypress="if(event.keyCode == 13) return false;">
                </form>
            </span>
            <button class="cancel-btn" v-on:click="hideLoadingLayer">取消</button>   
        </div>

        <div class="loading-layer" v-show="showloading">    
            <lottie :options="defaultOptions" :height="200" :width="200" v-on:animCreated="handleAnimation"/>
        </div>        
    </div>
</template>
<script>
import * as animationData from '@/assets/lottie/animation-w512-h512.json';
export default {
    data() {
      return {
        showloading: false,
        defaultOptions: {animationData: animationData},
        animationSpeed: 1,
      }
    },
    methods: {
        handleAnimation: function (anim) {
            this.anim = anim;
        },
        hideLoadingLayer: function () {
            this.showloading = false;
        },
        showLoadingLayer: function () {
            this.showloading = true;
        },
    }
}
</script>
<style scoped>
/* 不显示搜索框 X 清除按钮 */
::-webkit-search-cancel-button {  
    display: none; 
}
.search-group {
    background: #2196F3;
    padding: 10px 0 10px 10px;
}
.search-box {
    background: lightgray;
    display: inline-block;
    border: none;
    border-radius: 18px;
    outline: none;
}
.search-input {
    height: 36px;
    width: calc(100vw - 60px);
    border: none;
    outline: none;
    background: #fff url(../assets/img/search.png) 8px 5px no-repeat;
    background-size: 28px;
    border-radius: 18px;
    padding: 0 14px 0 40px;
    box-sizing: border-box;
    vertical-align: middle;
    line-height: 22px;
}
.cancel-btn {
    width: 50px;
    padding: 10px 0 10px 0;
    background: none;
    border: none;
    color: #eee;
    outline: none;
    vertical-align: middle;
    display: inline-block;
    box-sizing: content-box;
}
.list-panel {
    position: relative;
}
.print-item {
    background: #fff;
    border: 1px solid #fff;
    height: 15vh;
    width: 80vw;
    border-radius: 10px;
    box-shadow: 0 0 30px rgba(0,0,0,0.2);
    margin-left: 10vw;
    margin-bottom: 20px;
}
.loading-layer {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}
</style>