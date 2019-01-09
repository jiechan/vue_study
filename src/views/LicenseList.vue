<template>
    <div>
        <p class="page_title">打印列表{<lottie style="display: inline-block;position: relative;top: 42px;left: 2px;" :options="defaultOptions" :height="100" :width="100" v-on:animCreated="handleAnimation"/>}</p>
            
        <div class="list-panel">
            <div v-for="item in items" v-bind:key="item.id" class="print-item">
            {{ item.message }}
             </div>
        </div>
        <button @click="next" class="main-btn">点一下</button>
    </div>
</template>
<script>
import * as animationData from '@/assets/lottie/material_wave_loading.json';
export default {
    data() {
      return {
        defaultOptions: {animationData: animationData},
        animationSpeed: 1,
        items: [
                    { message: 'Foo' },
                    { message: 'Bar' },
                    { message: 'Coo' }
                ]
      }
    },
    methods: {
        next() {
            this.$router.push('/printing')
        },
        handleAnimation: function (anim) {
            this.anim = anim;
        },
        stop: function () {
            this.anim.stop();
        },
        play: function () {
            this.anim.play();
        },
        pause: function () {
            this.anim.pause();
        // 暂停开始基本可以做到每帧都暂停
        },
        onSpeedChange: function () {
            this.animationSpeed++;
            this.anim.setSpeed(this.animationSpeed);
        },
        setDirection(){
            this.anim.setDirection(-1)
        // 1正向播放
        // 反向
        },
        gotoandStop(){
            this.anim.goToAndStop(1000,true)
        // 直接跳到某一帧,实现一些步骤的动画
        // 第一个值是基于时间的.true
        // 第一个值是基于帧的:false
        },
        gotoandplay(){
            this.anim.gotoAndPlay(100)
        }
    }
}
</script>
<style scoped>
.list-panel {
    position: relative;
}
.print-item {
    background: #fff;
    border: 1px solid #fff;
    height: 164px;
    width: 360px;
    border-radius: 10px;
    box-shadow: 0 0 30px rgba(0,0,0,0.2);
    margin-left: 31.5vw;
    margin-bottom: 20px;
}
</style>