<template>
    <div>
        <a @click="onClick" :href="path"><slot></slot></a>
    </div>
</template>

<script>
export default {
  props: {
    path: {
      type: String,
      required: true
    }
  },
  methods: {
    onClick (e) {
      e.preventDefault()
      let path = this.path
      window.history.pushState(null, null, path)
      this.$root.curRoute = path
    }
  }
}
</script>
