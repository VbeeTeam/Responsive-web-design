
option = {
    color: ['#3398DB'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['0', '1.0', '2.0', '3.0', '4.0', '5.0', '6.0','7.0','8.0','9.0','10.0',],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'直接访问',
            type:'bar',
            barWidth: '60%',
            data:[50, 102, 200, 334, 390, 330, 220,350,210,280,380]
        }
    ]
}

//初始化echarts实例
var myChart5 = echarts.init(document.getElementById("graphImg_two"));
//使用制定的配置项和数据显示图表
myChart5.setOption(option);