<template>
    <div>
        <lottie :options="defaultOptions" :height="200" :width="200" v-on:animCreated="handleAnimation"/>
        <p class="page_title">打印完成!</p>
        <button @click="next" class="main-btn">点一下</button>
    </div>
</template>
<script>
import * as animationData from '@/assets/lottie/Check Mark Success Data.json';
export default {
    data() {
      return {
        defaultOptions: {animationData: animationData},
        animationSpeed: 1,
        loop: false
      }
    },
    methods: {
        next() {
            this.$router.push('/')
        },
        handleAnimation: function (anim) {
            this.anim = anim;
        },
    }
}
</script>
<style scoped>

</style>