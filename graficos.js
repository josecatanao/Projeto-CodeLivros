//Grafico de barras dos livros de Literatura;

var graficoBarraLi= document.getElementById("GraficoBarraLI");

var x = new Chart(graficoBarraLi,{
    type: 'bar',
    data: {
        labels: ['PHP POO', 'PHYTON', 'NODE JS'],
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

//grafico de pizza dos livros de informatica

var graficoPizzaLi = document.getElementById("GraficosPizzaLI");

var y = new Chart(graficoPizzaLi,{
    type: 'pie',
    data: {
        labels: ['PHP POO', 'PHYTON', 'NODE JS'],
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


//graficos de barras dos livros de Informatica

var graficoBarraTI= document.getElementById("GraficoBarraTI");

var x = new Chart(graficoBarraTI,{
    type: 'bar',
    data: {
        labels: ['QUINCAS BORBA', 'ESSA GENTE', 'O ESPELHO'],
        datasets: [{
            label: 'Livros Mais Vendidos de Informatica',
            data: [320, 200, 600],
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

//grafico de pizza dos livros de informatica

var graficoPizzaTI = document.getElementById("GraficosPizzaTI");

var y = new Chart(graficoPizzaTI,{
    type: 'pie',
    data: {
        labels: ['Livro1', 'Livro 2', 'Livro 3'],
        datasets: [{
            label: 'Livros Mais Vendidos de Literatura',
            data: [320, 200, 600],
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
