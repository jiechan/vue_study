<template>
    <div>
        <p class="page_title">打印完成!</p>
        <button @click="next" class="main-btn">点一下</button>
    </div>
</template>
<script>
export default {
    methods: {
        next() {
            this.$router.push('/')
        }
    }
}
</script>
<style scoped>

</style>