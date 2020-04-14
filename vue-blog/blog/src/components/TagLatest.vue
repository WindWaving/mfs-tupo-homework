<template>
  <div class="latest">
    <h2>近期文章</h2>
    <ul class="late-list">
        <li><router-link to='/Article'>JavaScript 最新特性实现的三大黑科技</router-link></li>
        <li><router-link to='/Article'>使用 Node.js 对文本内容分词和关键词抽取</router-link></li>
        <li><router-link to='/Article'>轻松管理你的 Node 版本</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
 .latest{
   padding 1rem 2rem
   h2{
     font-weight 400
     font-size 1.2rem
   }
   ul{
     padding 0
     li{
       list-style none
       a{
         text-decoration none
         color black
         font-size .9rem
       }
     }
   }
 }
</style>
