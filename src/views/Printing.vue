<template>
    <div>
        <p class="page_title">打印中...</p>
        <button @click="next" class="main-btn">点一下</button>
    </div>
</template>
<script>
export default {
    methods: {
        next() {
            this.$router.push('/finished');
        }
    }
}
</script>
<style scoped>

</style>