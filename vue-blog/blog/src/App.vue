<template>
  <div id="app">
    <navbar></navbar>
    <div class="container">
      <!-- <router-view></router-view> -->
      <div v-if="$route.path!='/about'">
        <div class="home">
          <div class="passages">
            <router-view></router-view>
            <!-- <article-list></article-list> -->
          </div>
          <div class="sidebar">
            <tag-latest></tag-latest>
            <classify></classify>
            <tags></tags>
          </div>
        </div>
      </div>

      <div v-else>
        <about></about>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import ArticleList from '@/components/ArticleList'
import Article from '@/components/Article'
import TagLatest from '@/components/TagLatest'
import Classify from '@/components/Classify'
import Tags from '@/components/Tags'
import About from '@/pages/About'
export default {
  name: 'App',
  components: {
    Navbar,
    ArticleList,
    Article,
    TagLatest,
    Classify,
    Tags,
    About
  }
}
</script>

<style lang="stylus">
.container {
  padding: 1rem 5rem;
   .passages{
    width 66.6%
    padding 1rem 2rem
    box-sizing border-box
    float left
  }
  .sidebar{
    width 33.4%
    float right
    padding 1rem
    box-sizing border-box
  }
}
</style>>
