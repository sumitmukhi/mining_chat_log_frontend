Morris.Bar({
    element: 'graph-bar',
    data: [
        {x: '2014 Q1', y: 3, z: 2, a: 3},
        {x: '2014 Q2', y: 2, z: null, a: 1},
        {x: '2014 Q3', y: 0, z: 2, a: 4},
        {x: '2014 Q4', y: 2, z: 4, a: 3}
    ],
    xkey: 'x',
    ykeys: ['y', 'z', 'a'],
    labels: ['Y', 'Z', 'A'],
    barColors:['#E67A77','#D9DD81','#79D1CF']


});



var day_data = [
    {"elapsed": "Chennai", "value": 467},
    {"elapsed": "Hyderabad", "value": 238},
    {"elapsed": "Bangalore", "value": 479},
    {"elapsed": "Delhi", "value": 291},
    {"elapsed": "Mumbai", "value": 402},
    {"elapsed": "Goa", "value": 1253},
    {"elapsed": "Manali", "value": 115},
    {"elapsed": "Kolkata", "value": 163},
];
Morris.Line({
    element: 'graph-line',
    data: day_data,
    xkey: 'elapsed',
    ykeys: ['value'],
    labels: ['value'],
    lineColors:['#1FB5AD'],
    parseTime: false
});




// Use Morris.Area instead of Morris.Line
Morris.Area({
    element: 'graph-area-line',
    behaveLikeLine: false,
    data: [
        {x: '2014 Q1', y: 3, z: 3},
        {x: '2014 Q2', y: 2, z: 1},
        {x: '2014 Q3', y: 2, z: 4},
        {x: '2014 Q4', y: 3, z: 3},
        {x: '2014 Q5', y: 3, z: 4}
    ],
    xkey: 'x',
    ykeys: ['y', 'z'],
    labels: ['Y', 'Z'],
    lineColors:['#E67A77','#79D1CF'],



});





// Use Morris.Area instead of Morris.Line
Morris.Donut({
    element: 'graph-donut',
    data: [
        {value: 1253, label: 'Goa', formatted: '1253 Chats' },
        {value: 479, label: 'Bangalore', formatted: '479 Chats' },
        {value: 238, label: 'Hyderabad', formatted: '238 Chats' },
        {value: 467, label: 'Chennai', formatted: '467 Chats' },
        {value: 291, label: 'Delhi', formatted: '291 Chats' },
        {value: 402, label: 'Mumbai', formatted: '402 Chats' },
        {value: 163, label: 'Kolkata', formatted: '163 Chats' },
        {value: 115, label: 'Manali', formatted: '115 Chats' },
    ],
    backgroundColor: '#fff',
    labelColor: '#1fb5ac',
    colors: [
        '#E67A77','#D9DD81','#79D1CF','#95D7BB'
    ],
    formatter: function (x, data) { return data.formatted; }
});



// Use Morris.Area instead of Morris.Line
Morris.Area({
    element: 'graph-area',
    behaveLikeLine: true,
    gridEnabled: false,
    gridLineColor: '#dddddd',
    axes: true,
    fillOpacity:.7,
    data: [
        {period: '2010 Q1', iphone: 10, ipad: 10, itouch: 10},
        {period: '2010 Q2', iphone: 1778, ipad: 7294, itouch: 18441},
        {period: '2010 Q3', iphone: 4912, ipad: 12969, itouch: 3501},
        {period: '2010 Q4', iphone: 3767, ipad: 3597, itouch: 5689},
        {period: '2011 Q1', iphone: 6810, ipad: 1914, itouch: 2293},
        {period: '2011 Q2', iphone: 5670, ipad: 4293, itouch: 1881},
        {period: '2011 Q3', iphone: 4820, ipad: 3795, itouch: 1588},
        {period: '2011 Q4', iphone: 25073, ipad: 5967, itouch: 5175},
        {period: '2012 Q1', iphone: 10687, ipad: 34460, itouch: 22028},
        {period: '2012 Q2', iphone: 1000, ipad: 5713, itouch: 1791},


    ],
    lineColors:['#E67A77','#D9DD81','#79D1CF'],
    xkey: 'period',
    ykeys: ['iphone', 'ipad', 'itouch'],
    labels: ['iPhone', 'iPad', 'iPod Touch'],
    pointSize: 0,
    lineWidth: 0,
    hideHover: 'auto'

});





