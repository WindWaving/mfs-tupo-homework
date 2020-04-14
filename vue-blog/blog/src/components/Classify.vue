<template>
    <div class="classify">
        <h2>文章归档</h2>
        <ul>
            <li><router-link to='/Article'>2017年6月 (6)</router-link></li>
            <li><router-link to='/Article'>2017年5月 (8)</router-link></li>
            <li><router-link to='/Article'>2017年4月 (12)</router-link></li>
            <li><router-link to='/Article'>2017年3月 (9)</router-link></li>
            <li><router-link to='/Article'>2017年2月 (2)</router-link></li>
        </ul>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="stylus" scoped>
  .classify{
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
