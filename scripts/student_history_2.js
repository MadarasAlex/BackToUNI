var xValues = ["Weighted Mean", "Average Mean", "Total Credit", "Credit Points"];
var yValues = [25, 39, 44, 74, 15];

new Chart("Bar_2_1", {
    type: "bar",
    data: {
        labels: xValues,
        datasets: [{
            data: yValues,
            backgroundColor: "Green",

            borderWidth: 1,
            borderColor: 'Black',

            hoverBorderWidth: 3,
            hoverBorderColor: '#777',
            hoverBackgroundColor: 'Yellow'
        }],
    },
    options: {
        legend: {display: false},
        title: {
            display: true,
            text: "Semester 1",
            fontSize: 25
        },
        layout:{
            padding:{
                left: 20,
                right: 30,
                top: 5,
                bottom: 10
            }
        }
    }
});
var y2Values = [52, 100, 50, 32, 30];
new Chart("Bar_2_2", {
    type: "bar",
    data: {
        labels: xValues,
        datasets: [{
            data: y2Values,
            backgroundColor: "Green",

            borderWidth: 1,
            borderColor: 'Black',

            hoverBorderWidth: 3,
            hoverBorderColor: '#777',
            hoverBackgroundColor: 'Yellow'
        }],
    },
    options: {
        legend: {display: false},
        title: {
            display: true,
            text: "Semester 2",
            fontSize: 25
        },
        layout:{
            padding:{
                left: 20,
                right: 30,
                top: 5,
                bottom: 10
            }
        }
    }
});

Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontColor = "Black";
