<template>
  <div>
    <img :src="source" />
    <div>{{msg}}</div>
    <button v-on:click="hitit()">CLICK</button>
  </div>
</template>
<script>
import imgurl1 from '../assets/emoji_kids_01.png'
import imgurl2 from '../assets/emoji_kids-02.png'
import imgurl3 from '../assets/emoji_kids-03.png'
import setInterval from 'timers'
export default {
  name: 'changePic',
  data () {
    return {
      msg: 'nihao',
      source: imgurl1,
      piclist: [
        imgurl1, imgurl2, imgurl3
      ]
    }
  },
  methods: {
    hitit: function () {
      var index = 0
      setInterval(() => function () {
        console.log(this)
        this.source = this.piclist[(index++) % 3]
      }, 1000)
    }
  }
}
</script>
