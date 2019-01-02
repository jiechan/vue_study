<template>
    <div>
        <p class="page_title">扫描身份证</p>
        <button @click="next" class="main-btn">点一下</button>
    </div>
</template>
<script>
export default {
   methods: {
       next() {
           this.$router.push('scanface');
       }
   } 
}
</script>
<style scoped>

</style>
