<template>
    <div class="article">
        <h1>前端自动化测试探索</h1>
        <div class="sub">
            <span>前端</span>.
            <span>6.17.2017</span>.
            <span>浏览</span>
            <span>37</span>
        </div>
        <div class="content">
            <p>
                 随着屏幕的大小变换，内容区域的元素会匹配屏幕重新布局，就是我们说的自适应效果。我们在.col列中追加class类就可以实现自适应效果。如超小屏幕(xs)、超大屏幕(xl)。栅格系统首先会匹配移动手机版小屏幕，所以每个.col都需要一个class如：.xs-*，这样的话如果大屏幕的类没有设置，它就会使用这个.xs-*。
            </p>
            <p>
                本文不会探讨单元测试方向，因为单测已经有完善的工具体系。但前端开发中，除了一些框架和库，愿意去写单测的少之又少。另外单测维护成本较高，而且也没法满足前端测试的所有需求。
            用户可以基于
            首先本文不会探讨
            </p>
            <p>
                单元测试方向，因为单测已经有完善的工具体系。但前端开发中，除了一些框架和库，愿意去写单测的少之又少。另外单测维护成本较高，而且也没法满足前端测试的所有需求。
            用户可以基于 tag 来快速筛选感兴趣的文章，文章也可以依照 而且人工设置难免不规范和不完全。
            </p>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="stylus" scoped>
.article{
    text-align center
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
}
</style>
