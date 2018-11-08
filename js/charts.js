option = {
    title: {
        // text: '折线图堆叠'
    },
    tooltip: {
        // trigger: 'axis'
    },
    legend: {
        data:['Sales','Page Views']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['0','5','10','15','20','25','30']
    },
    yAxis: {
        type: 'value',
        min:0,
        max:200
    },
    series: [
        {
            name:'Sales',
            type:'line',
            stack: '总量',
            data:[50, 30, 70, 90, 100, 80, 48,60]
        },
        {
            name:'Page Views',
            type:'line',
            stack: '总量',
            data:[60, 40, 80, 100, 70, 90, 80]
        }
    ]
}

//初始化echarts实例
var myChart3 = echarts.init(document.getElementById("graphImg_one"));
//使用制定的配置项和数据显示图表
myChart3.setOption(option);
$(window).resize(function(){
    myChart3.resize();
})