<template>
    <div style="background: grey">
        <lottie :options="defaultOptions" :height="400" :width="400" v-on:animCreated="handleAnimation"/>
        <p class="page_title">打印中...</p>
        <button @click="next" class="main-btn">点一下</button>
    </div>
</template>
<script>
import * as animationData from '@/assets/lottie/print.json';
export default {
    data() {
      return {
        defaultOptions: {animationData: animationData},
        animationSpeed: 1
      }
    },
    methods: {
        next() {
            this.$router.push('/finished');
        },
        handleAnimation: function (anim) {
            this.anim = anim;
        },
    }
}
</script>
<style scoped>

</style>