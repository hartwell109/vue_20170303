<template>
  <div>
    <h3>统计图表</h3>
    <section class="chart">
      <el-row>
        <el-col :span="12">
          <div id="chartColumn" style="width:100%; height:400px;"></div>
        </el-col>
        <el-col :span="12">
          <div id="chartBar" style="width:100%; height:400px;"></div>
        </el-col>
        <el-col :span="12">
          <div id="chartLine" style="width:100%; height:400px;"></div>
        </el-col>
        <el-col :span="12">
          <div id="chartPie" style="width:100%; height:400px;"></div>
        </el-col>
      </el-row>
    </section>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        chartColumn: null,
        chartBar: null,
        chartLine: null,
        chartPie: null,
        lineData: [120, 132, 101, 134, 90, 230, 210]
      }
    },
    created: function () {
      this.$scheduleJob('*/5 * * * * *', () => {
        let v = parseInt(Math.random() * 1000)
        console.log(v)
        this.lineData.shift()
        this.lineData.push(v)
      })
    },
    mounted: function () {
      var echarts = require('echarts')
      this.chartColumn = echarts.init(document.getElementById('chartColumn'))
      this.chartBar = echarts.init(document.getElementById('chartBar'))
      this.chartLine = echarts.init(document.getElementById('chartLine'))
      this.chartPie = echarts.init(document.getElementById('chartPie'))

      this.chartColumn.setOption({
        title: {
          text: '柱状统计图'
        },
        tooltip: {},
        xAxis: {
          data: ['产品A', '产品B', '产品C', '产品D', '产品E', '产品F']
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      })

      this.chartBar.setOption({
        title: {
          text: '横向柱状比较图',
          subtext: '一季度份数据比较'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          data: ['1月份', '2月份', '3月份']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01]
        },
        yAxis: {
          type: 'category',
          data: ['产品A', '产品B', '产品C', '产品D', '产品E', '总额']
        },
        series: [{
          name: '1月份',
          type: 'bar',
          data: [18203, 23489, 29034, 104970, 131744, 307440]
        }, {
          name: '2月份',
          type: 'bar',
          data: [19325, 23438, 31000, 121594, 134141, 329498]
        }, {
          name: '3月份',
          type: 'bar',
          data: [17325, 28438, 33000, 111594, 144141, 334498]
        }]
      })

      this.chartLine.setOption({
        title: {
          text: '折线图'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['纯利润', '毛利润', '销售额']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          name: '销售额',
          type: 'line',
          stack: '总量',
          data: this.lineData
        }, {
          name: '毛利润',
          type: 'line',
          stack: '总量',
          data: [220, 182, 191, 234, 290, 330, 310]
        }, {
          name: '纯利润',
          type: 'line',
          stack: '总量',
          data: [820, 932, 901, 934, 1290, 1330, 1320]
        }]
      })

      this.chartPie.setOption({
        title: {
          text: '饼状图',
          subtext: '项目开发时间安排',
          x: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['需求分析', '原型设计', '页面制作', '业务逻辑', '测试验收']
        },
        series: [{
          name: '访问来源',
          type: 'pie',
          radius: '55%',
          center: ['50%', '60%'],
          data: [{
            value: 10,
            name: '需求分析'
          }, {
            value: 8,
            name: '原型设计'
          }, {
            value: 8,
            name: '页面制作'
          }, {
            value: 12,
            name: '业务逻辑'
          }, {
            value: 3,
            name: '测试验收'
          }],
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }]
      })
    }
  }
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>

</style>
