<template>
    <div class="barBg">
        <div class="left">XXX综合平台</div>
        <div class="right">
            <div class="btn" :class="nowIndex === index ? 'actived' : ''" v-for="(item, index) in tabList" :key="item.id"
                @click="clickTab(item.router, index)">
                <span>{{ item.name }}</span>
            </div>

        </div>

    </div>
</template>

<script lang="ts" setup>
// 引入路由
import { useRouter } from 'vue-router'
import { ref } from 'vue';
//全局中引入这个方法
const router = useRouter()
const nowIndex = ref(0)
console.log(nowIndex.value)
//声明一个函数
const clickTab = (e, index) => {
    console.log(e)
    nowIndex.value = index
    router.push(e)
}
const tabList = [
    { id: "1", name: '首页', router: '/home', },
    { id: "3", name: '综合商城', router: '/mine', },
    { id: "2", name: '我的主页', router: '/mine', },

]


</script>

<style lang="scss" scoped>
.barBg {
    padding: 50px 3px;
    display: flex;
    justify-content: space-between;

    .left {
        font-size: 28px;
        line-height: 19px;
        color: #ffffff;
    }

    .actived {
        padding-bottom: 23px;
        border-bottom: 4px solid #ffff;
        border-radius: 2px;
        font-weight: bold
    }

    .right {
        display: flex;
        justify-content: space-between;

        .btn {
            display: flex;
            vertical-align: middle
        }

        div {
            margin-right: 29px;

        }

        div:nth-child(3) {
            margin-right: 0;
        }

    }

}
</style>