<template>
    <div>
        <p class="page_title">人脸识别:)</p>
        <button @click="next" class="main-btn">点一下</button>
    </div>
</template>
<script>
export default {
    methods: {
        next() {
            this.$router.push('/licenselist');
        }
    }
}
</script>
<style scoped>

</style>