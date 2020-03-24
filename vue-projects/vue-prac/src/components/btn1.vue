<template>
    <button id="btn1" @click="plusHandler">{{count}}</button>
</template>

<script>
export default {
  name: 'btn1',
  data () {
    return {
      count: 0
    }
  },
  methods: {
    plusHandler: function () {
      this.count++
      this.$emit('plus')
    }
  }
}
</script>
