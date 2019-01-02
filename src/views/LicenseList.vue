<template>
    <div>
        <p class="page_title">打印列表{ }</p>
        <!-- <ul id="example-1">
            <li v-for="item in items" v-bind:key="item.id">
                {{ item.message }}
            </li>
        </ul> -->
        <button @click="next" class="main-btn">点一下</button>
    </div>
</template>
<script>
export default {
    methods: {
        data() {
            return {
                items: [
                { message: 'Foo' },
                { message: 'Bar' }
                ]
            }
        },
        next() {
            this.$router.push('/printing')
        }
    }
}
</script>
<style scoped>

</style>