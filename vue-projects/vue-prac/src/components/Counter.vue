<template>
    <div>
        <div>{{counter}}</div>
        <btn1 @plus="counter++"></btn1>
        <btn2 @plus="counter++"></btn2>
    </div>
</template>

<script>
import btn1 from './btn1'
import btn2 from './btn2'

export default {
  name: 'Counter',
  data () {
    return {
      counter: 0
    }
  },
  components: {
    btn1,
    btn2
  }
//   methods: {
//     plus: function () {
//       console.log('plus')
//       this.counter++
//     }
//   }
}
</script>

<style>

</style>
