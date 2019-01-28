<template>
    <div>
        <div class="search-group">
            <span class="search-box">
                <form action="">
                    <input class="search-input" type="search" autocomplete="off" placeholder="搜索菜号或菜名" 
                    @keyup.enter="showLoadingLayer" onkeypress="if(event.keyCode == 13) return false;">
                </form>
            </span>
            <button class="cancel-btn" v-on:click="hideLoadingLayer">取消</button>   
        </div>

        <div class="loading-layer" v-show="showloading">    
            <lottie :options="defaultOptions" :height="200" :width="200" v-on:animCreated="handleAnimation"/>
        </div>   

        <!-- <div class="choice-group">
            <span class="choice-btn" v-for="item in choices" v-bind:class="currentcode === item.code ? 'active-btn': '' "
            v-bind:key="item.code" @click="choosed(item)">{{item.name}}</span>
        </div>

        <div style="background: grey; height: 10px"></div>

        <div v-for="spec in specs" v-bind:key="spec.index"> 
            <p>{{spec.label}}</p>
            <div class="choice-group">
                <span class="choice-btn" v-for="detail in spec.details" v-bind:class="currentSpec.includes(detail.name) ? 'active-btn': '' "
                v-bind:key="detail.code" @click="selectSpec(detail, spec.label)">{{detail.name}}</span>
            </div>
        </div> -->

        <button @click="increaseToStore">加一加</button>
        <p>{{currentStoreCount}}</p>
        <button @click="decreaseToStore">减一减</button>

        <div v-for="license in licenses" v-bind:key="license.index"> 
            <p>{{license.name}}</p>
        </div>
    </div>
</template>
<script>
import * as animationData from '@/assets/lottie/animation-w512-h512.json';
export default {
    data() {
      return {
        showloading: false,
        defaultOptions: {animationData: animationData},
        animationSpeed: 1,
        currentChoiceCode: "",
        activeSpecs: [],
        activeSpecStr: "",
        choices: [
            {"code":"s01","name":"香蕉"},
            {"code":"s02","name":"苹果"},
            {"code":"s03","name":"菠萝"}
        ],
        specs: [
            {
                "label":"组1",
                "details":[
                    {"code":"s00","name":"曲奇"},
                    {"code":"s01","name":"蛋糕"},
                    {"code":"s02","name":"橡皮糖"}
                ]
            },
            {
                "label":"组2",
                "details":[
                    {"code":"x10","name":"蘑菇"},
                    {"code":"x11","name":"番茄"},
                ]
            },
            {
                "label":"组3",
                "details":[
                    {"code":"p20","name":"可乐"},
                    {"code":"p21","name":"雪碧"},
                    {"code":"p22","name":"啤酒"},
                    {"code":"p23","name":"豆奶"},
                ]
            }
        ],
        licenses: []
      }
    },
    created() {
        // this.$http.post("http://120.79.225.29:8085/getLicenseDetail",{"pripid":"370212000022016020258191"}).then(res=>{
        //         // eslint-disable-next-line
        //     console.log(res.data);
        // });
        this.$http.get("http://120.79.225.29:8085/getLicenseList",{params: {"cerno":"320621199204070538"}}).then(res=>{
                // eslint-disable-next-line
            console.log(res.data);
            this.licenseList = res.data;
        });
    },
    computed: {
        currentcode() {
            if(this.currentChoiceCode === "") {
                return this.choices[0].code;
            } else {
                return this.currentChoiceCode;
            }
        },
        currentSpec() {
            // alert(this.activeSpecs);
            for(let item of this.activeSpecs){
                 /* eslint-disable */ 
                this.activeSpecStr += item.name;
            }
            // eslint-disable-next-line
            console.log(this.activeSpecStr);
            if(this.activeSpecStr === "") {
                for(let item of this.specs){
                    this.activeSpecStr += item.details[0].name;
                    let o = new Object();
                    o.label = item.label;
                    o.code = item.details[0].code;
                    o.name = item.details[0].name;
                    this.activeSpecs.push(o);
                }
            }
            return this.activeSpecStr;
        },
        currentStoreCount() {
            return this.$store.state.count;
        }
    },
    methods: {
        handleAnimation: function (anim) {
            this.anim = anim;
        },
        hideLoadingLayer: function () {
            this.showloading = false;
        },
        showLoadingLayer: function () {
            this.showloading = true;
        },
        choosed: function (item) {
            
            // console.log(item);
            this.currentChoiceCode = item.code;
        },
        selectSpec(detail, grouplabel) {
            this.activeSpecStr = '';
            // console.log(detail);
            for(var i = this.activeSpecs.length -1; i >= 0 ; i--) {
                if(this.activeSpecs[i].label == grouplabel) {
                    this.activeSpecs.splice(i, 1);
                }
            }
            let o = new Object();
            o.label = grouplabel;
            o.code = detail.code;
            o.name = detail.name;
            this.activeSpecs.push(o);
            // eslint-disable-next-line
            console.log(this.activeSpecs);
        },
        increaseToStore() {
            this.$store.dispatch('increment')
        },
        decreaseToStore() {
            this.$store.dispatch('decrement')
        }
    }
}
</script>
<style scoped>
/* 不显示搜索框 X 清除按钮 */
::-webkit-search-cancel-button {  
    display: none; 
}
.search-group {
    background: #2196F3;
    padding: 10px 0 10px 10px;
}
.search-box {
    background: lightgray;
    display: inline-block;
    border: none;
    border-radius: 18px;
    outline: none;
}
.search-input {
    height: 36px;
    width: calc(100vw - 60px);
    border: none;
    outline: none;
    background: #fff url(../assets/img/search.png) 8px 5px no-repeat;
    background-size: 28px;
    border-radius: 18px;
    padding: 0 14px 0 40px;
    box-sizing: border-box;
    vertical-align: middle;
    line-height: 22px;
}
.cancel-btn {
    width: 50px;
    padding: 10px 0 10px 0;
    background: none;
    border: none;
    color: #eee;
    outline: none;
    vertical-align: middle;
    display: inline-block;
    box-sizing: content-box;
}
.list-panel {
    position: relative;
}
.print-item {
    background: #fff;
    border: 1px solid #fff;
    height: 15vh;
    width: 80vw;
    border-radius: 10px;
    box-shadow: 0 0 30px rgba(0,0,0,0.2);
    margin-left: 10vw;
    margin-bottom: 20px;
}
.loading-layer {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}
.choice-group {
    height: 40px;
    padding: 10px;
    line-height: 40px;
}
.choice-btn {
    height: 40px;
    background: #f5f5f5;
    border: none;
    border-radius: 6px;
    display: inline-block;
    min-width: 80px;
    margin-right: 20px; 
    color: #333;
}
.active-btn {
    background: rgba(35, 149, 255, 0.2);
    color: rgb(35, 149, 255);
}
</style>