<template>
    <div>
        <lottie :options="defaultOptions" :height="300" :width="300" v-on:animCreated="handleAnimation"/>
        <p class="page_title">人脸识别:)</p>
        <button @click="next" class="main-btn">点一下</button>
    </div>
</template>
<script>
import * as animationData from '@/assets/lottie/face_id.json';
export default {
    data() {
      return {
        defaultOptions: {animationData: animationData},
        animationSpeed: 1
      }
    },
    methods: {
        next() {
            this.$router.push('/licenselist');
        },
        handleAnimation: function (anim) {
            this.anim = anim;
        },
    }
}
</script>
<style scoped>

</style>