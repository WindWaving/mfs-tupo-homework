<template>
    <button id="btn2" @click="plusHandler">{{count}}</button>
</template>

<script>
export default {
  name: 'btn2',
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
