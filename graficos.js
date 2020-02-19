//grafico de barras dos livros de literatura

var BarraLiteratura= document.getElementById("GraficoBarraLI");

var ax = new Chart(BarraLiteratura,{
    type: 'bar',
    data: {
        labels: ['Nove Noites', 'Essa Gente', 'Quincas borba'],
        datasets: [{
            label: 'Livros Mais Vendidos de Literatura',
            data: [300, 400, 600],
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
        },
    }
});

//grafico pizza dos livros de literatura

var PizzaLiteratura = document.getElementById("GraficosPizzaLI");

var ay = new Chart(PizzaLiteratura,{
    type: 'pie',
    data: {
        labels: ['Nove Noites', 'Essa Gente', 'Quincas borba'],
        datasets: [{
            label: 'Livros Mais Vendidos de Literatura',
            data: [300, 400, 600],
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


//graficos de barras dos livros de informatica

var BarraInformatica= document.getElementById("barrainformatica");

var gx = new Chart(BarraInformatica,{
    type: 'bar',
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
        },
    }
});

//grafico pizza dos livros de literatura

var PizzaInformatica = document.getElementById("pizzainformatica");

var gy = new Chart(PizzaInformatica,{
    type: 'pie',
    data: {
        labels: ['PHP POO', 'Phyton Automatize', 'JavaScript'],
        datasets: [{
            label: 'Livros Mais Vendidos de Literatura',
            data: [300, 400, 600],
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




