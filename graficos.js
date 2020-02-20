var ctx = document.getElementById('myChartinfo1').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['PHP POO', 'Phyton Automatize', 'JavaScript'],
        datasets: [{
            label: 'Livros Mais Vendidos de informatica',
            data: [300, 470, 600],
            backgroundColor: ['rgba(255, 99, 132, 1)','rgba(54, 162, 235, 1)','rgba(255, 206, 86, 1)'],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

var ctx = document.getElementById('myChartinfo2').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['PHP POO', 'Phyton Automatize', 'JavaScript'],
        datasets: [{
            label: 'Livros Mais Vendidos de Literatura',
            data: [300, 470, 600],
            backgroundColor: ['rgba(255, 99, 132, 1)','rgba(54, 162, 235, 1)','rgba(255, 206, 86, 1)'],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});


