<template>
  <v-chart :options="polar" />
</template>

<script>
import ECharts from 'vue-echarts'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/polar'
import mongoose from 'mongoose'
// const mongoose = require('mongoose')
const DBURL = 'mongodb://localhost:27017'
const QuesDB = 'zhihu-questions'
var findres;
(async () => {
  await mongoose.connect(DBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  const MyModel = mongoose.model(QuesDB)
  findres = await MyModel.find({}, { followers: 1, cnts: 1, _id: 0 }).toArray()
  console.log(findres)
})()

export default {
  name: 'HelloWorld',
  components: {
    'v-chart': ECharts
  },
  data () {
    return {
      line: {
        title: {
          text: '知乎问题关注者——回答数量关系图'
        },
        tooltip: {},
        xAxis: {},
        yAxis: {},
        series: [
          {
            name: '关注者——回答数',
            type: 'line',
            data: []
          }
        ]
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.echarts {
  width: 100%;
  height: 100%;
}
</style>
