var tableData = [
    {
        Semester:1, Classes:'Databases I',
        Grade:250, Credits:5.00,
        Total_Credits:''
    },
    {
        Semester:1, Classes:'Programming III',
        Grade:250,Credits:5.00,
        Total_Credits:''
    },
    {
        Semester:1, Classes:'Computer Networks',
        Grade:150,Credits:3.00,
        Total_Credits:''
    },
    {
        Semester:1, Classes:'Management of Change',
        Grade:100,Credits:2.00,
        Total_Credits:''
    },
    {
        Semester:1, Classes:'Probability and Statistics',
        Grade:200,Credits:4.00,
        Total_Credits:''
    },
    {
        Semester:1, Classes:'Graph Theory and Combinatorics',
        Grade:250,Credits:5.00,
        Total_Credits:''
    },
    {
        Semester:2, Classes:'Team Project',
        Grade:250,Credits:5.00,
        Total_Credits:''
    },
    {
        Semester:2, Classes:'Programming for mobile devices',
        Grade:250,Credits:5.00,
        Total_Credits:''
    },
    {
        Semester:2, Classes:'Sport 2',
        Grade:250,Credits:5.00,
        Total_Credits:''
    },
        {
        Semester:"TOTAL : ", Classes:'',
        Grade:'1950 lei',Credits:'39',

    },
]




var table = document.getElementById('body')

for(var i of tableData)
{
    var row =   `<tr>
                    <td>${i.Semester}</td>
                    <td>${i.Classes}</td>
                    <td>${i.Grade}</td>
                    <td>${i.Credits}</td>
                </tr>`
    table.innerHTML += row
}



