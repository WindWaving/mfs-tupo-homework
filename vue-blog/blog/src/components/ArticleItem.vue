<template>
    <div class="aitem">
        <h1>前端自动化测试探索</h1>
        <div class="sub">
            <span>前端</span>.
            <span>6.17.2017</span>.
            <span>浏览</span>
            <span>37</span>
        </div>
        <div class="content">
            <p>
                首先本文不会探讨单元测试方向，因为单测已经有完善的工具体系。但前端开发中，除了一些框架和库，愿意去写单测的少之又少。另外单测维护成本较高，而且也没法满足前端测试的所有需求。 用户可以基于 tag 来快速筛选感兴趣的文章，文章也可以依照 而且人工设置难免不规范和不完全。
            </p>
        </div>
        <div class="view">
            |<router-link to="/Article">查看文章</router-link>|
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="stylus" scoped>
.aitem{
    text-align center
    margin-bottom 4rem
    width 100%
    h1{
        color #333
        font-size 1.5rem
        font-weight 400
    }
    .sub{
        margin 1.5rem
        span{
            font-size .8rem
            color #666
        }
    }
    .content{
        text-align justify
        margin 2rem 0
    }
    .view{
        a{
            color black
            text-decoration none
            margin 1rem
        }
    }
}
</style>
