var Home = function () {
    var self = this;
    self.initHome = function () {

   
        
        $("#viewadd").click(function () {
            $("#viewhidden").removeClass("hidden");
            $("#viewhidden-content").removeClass("hidden");
            $("#viewadd").addClass("hidden");

        })
        $("#viewhidden").click(function () {
            $("#viewhidden").addClass("hidden");
            $("#viewhidden-content").addClass("hidden");
            $("#viewadd").removeClass("hidden");

        })
    }

}
var TheodoiThuChi = function () {
    var self = this;
    self.initTheodoiThuChi = function () {
        var ctx1 = $('#mychartFL1');
        var myChart = new Chart(ctx1, {
            type: 'bar',
            data: {
                labels: ['Chi', 'Thu'],
                datasets: [{
                    data: [23, 68],
                    backgroundColor: [
                        'green',
                        'red',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        display: false,
                    }]
                    
                },
                legend: {
                    display: false,
                },
                 layout: {
                    padding: {
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0
                    }
                }
                  
            }
        });
        //
        var ctx2 = $('#mychartFL2');
        var myChart = new Chart(ctx2, {
            type: 'bar',
            data: {
                labels: ['Chi', 'Thu'],
                datasets: [{
                    data: [75, 28],
                    backgroundColor: [
                        'green',
                        'red',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        display: false,
                    }]

                },
                legend: {
                    display: false,
                },
                layout: {
                    padding: {
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0
                    }
                }

            }
        });
        //
        var ctx3 = $('#mychartFL3');
        var myChart = new Chart(ctx3, {
            type: 'bar',
            data: {
                labels: ['Chi', 'Thu'],
                datasets: [{
                    data: [41, 52],
                    backgroundColor: [
                        'green',
                        'red',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        display: false,
                        drawborder: {
                            display: false,
                        }
                    }]

                },
                legend: {
                    display: false,
                },
                layout: {
                    padding: {
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0
                    }
                }

            }
        });
        //
        var ctx4 = $('#mychartFL4');
        var myChart = new Chart(ctx4, {
            type: 'bar',
            data: {
                labels: ['Chi', 'Thu'],
                datasets: [{
                    data: [86, 32],
                    backgroundColor: [
                        'green',
                        'red',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        display: false,
                    }]

                },
                legend: {
                    display: false,
                },
                layout: {
                    padding: {
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0
                    }
                }

            }
        });
        //
    }

}
var Other = function () {
    var self = this;
    self.initOther = function () {
        $("#rowThuChi").click("oke")
    }

}