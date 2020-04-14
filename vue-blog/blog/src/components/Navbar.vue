<template>
    <div class="navbar">
        <div class="title">
            <h1>码蜂社博客</h1>
        </div>
        <ul>
            <li><router-link to="/">主页</router-link></li>
            <li><router-link to="/about">关于</router-link></li>
        </ul>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="stylus" scoped>
    .navbar{
        display flex
        margin 1rem 5rem
        border-bottom 1px solid #efefef
        .title{
            width 66.6%
            h1{
                margin-left 2rem
                color #333
                font-weight 400
            }
        }
        ul{
            width 33.4%
            display flex
            align-items center
            li{
                list-style none
                margin-left 2rem
                a{
                    font-size 1.5rem
                    color #333
                    text-decoration none;
                }
            }
        }
    }
</style>
