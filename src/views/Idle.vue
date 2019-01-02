<template>
    <div>
        <img alt="Vue logo" src="../assets/logo.png">
        <p class="page_title">This is an ABP demo</p>  
        <p class="page_title">开始</p>
        <button @click="next" class="main-btn">点一下</button>
    </div>
</template>
<script>
export default {
    methods: {
        next() {
            this.$router.push('/scanidcard')
        }
    }
}
</script>
<style scoped>

</style>
