google.charts.load('current', {'packages': ['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['Subjects', 'Credits'],
        ['Advanced Python Programming', 6],
        ['Artificial Intelligence', 5],
        ['Web Technologies', 4],
        ['Differential Equations', 4],
        ['Introduction to Blockchain', 4],
        ['Methodologies for BSc Thesis', 3]

    ]);

    var options = {
        title: "Subjects' Chart",
        isStacked: true,
        legend: {
            position: 'none'
        },
        colors: ['#1294F2', '#8EC585', '#395141', '#7B3C29', '#43619A', '#FD0000']
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);


}
