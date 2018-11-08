option = {
    title : {
        // text: '饼图程序调用高亮示例',
        // x: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'right',
        data: ['美国','印度尼西亚','荷兰人','日本','朝鲜的','法国','中国']
    },
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            // label:{
            //     normal:{
            //         position:"inner"
            //     }
            // },
            data:[
                {value:500, name:'美国20%'},
                {value:300, name:'印度尼西亚6%'},
                {value:500, name:'荷兰人26%'},
                {value:200, name:'日本6%'},
                {value:200, name:'朝鲜的5%'},
                {value:700, name:'法国32%'},
                {value:400, name:'中国5%'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};

// app.currentIndex = -1;
setInterval(function () {

    var dataLen = option.series[0].data.length;
    // 取消之前高亮的图形
    myChart.dispatchAction({
        type: 'downplay',
        seriesIndex: 0,
        dataIndex: app.currentIndex
    });
    app.currentIndex = (app.currentIndex + 1) % dataLen;
    // 高亮当前图形
    myChart.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: app.currentIndex
    });
    // 显示 tooltip
    myChart.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: app.currentIndex
    });
}, 1000);


//初始化echarts实例
var myChart2 = echarts.init(document.getElementById("pie_chartRight"));

//使用制定的配置项和数据显示图表
myChart2.setOption(option);


