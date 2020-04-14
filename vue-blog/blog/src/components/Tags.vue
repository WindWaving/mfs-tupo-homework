<template>
    <div class="tags">
        <h2>标签</h2>
        <ul>
            <li><router-link to='/Article'>前端</router-link></li>
            <li><router-link to='/Article'>css</router-link></li>
            <li><router-link to='/Article'>Nodejs</router-link></li>
            <li><router-link to='/Article'>UI</router-link></li>
            <li><router-link to='/Article'>数据库</router-link></li>
            <li><router-link to='/Article'>爬虫</router-link></li>
            <li><router-link to='/Article'>Java</router-link></li>
        </ul>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="stylus" scoped>
 .tags{
     padding 1rem 2rem
     h2{
         font-weight 400
         font-size 1.2rem
     }
     ul{
         padding 0
         li{
             list-style none
             padding .1rem .2rem
             border 1px solid green
             float left
             margin-right .3rem
             margin-bottom .3rem
             a{
                 text-decoration none
                 color black
                 font-size .9rem
             }
         }
     }
 }
</style>
