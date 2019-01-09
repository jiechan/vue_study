<template>
    <div>
        <lottie :options="defaultOptions" :height="400" :width="400" v-on:animCreated="handleAnimation"/>
        <p class="page_title">扫描身份证</p>
        <button @click="next" class="main-btn">点一下</button>
    </div>
</template>
<script>
import * as animationData from '@/assets/lottie/triib_lehuzo.json';
export default {
    data() {
      return {
        defaultOptions: {animationData: animationData},
        animationSpeed: 1
      }
    },
    methods: {
        next() {
            this.$router.push('scanface');
        },
        handleAnimation: function (anim) {
            this.anim = anim;
        },
    }     
}
</script>
<style scoped>

</style>
