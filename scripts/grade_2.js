var tableData = [
    {
        Semester:1, Classes:'Advanced Data Structures',
        Grade:10, Credits:4.00,
        Total_Credits:'',
    },
    {
        Semester:1, Classes:'Databases I',
        Grade:10,Credits:5.00,
        Total_Credits:''
    },
    {
        Semester:1, Classes:'English Language 3',
        Grade:10,Credits:2.00,
        Total_Credits:''
    },
    {
        Semester:1, Classes:'Graph Theory and Combinatorics',
        Grade:10,Credits:5.00,
        Total_Credits:''
    },
    {
        Semester:1, Classes:'Individual Project',
        Grade:10,Credits:2.00,
        Total_Credits:''
    },
    {
        Semester:1, Classes:'Programming I',
        Grade:10,Credits:6.00,
        Total_Credits:''
    },
    {
        Semester:1, Classes:'Operating Systems I',
        Grade:10,Credits:5.00,
        Total_Credits:''
    },
    {
        Semester:1, Classes:'Programming III',
        Grade:10,Credits:5.00,
        Total_Credits:''
    },
    {
        Semester:1, Classes:'Sport 3',
        Grade:10,Credits:1.00,
        Total_Credits:''
    },
    {
        Semester:1, Classes:'The Gothic and the fantastic in british and American literature',
        Grade:10,Credits:2.00,
        Total_Credits:''
    },
    {
        Semester:2, Classes:'Computer Networks',
        Grade:10,Credits:5.00,
        Total_Credits:''
    },
    {
        Semester:2, Classes:'Geography of music: a spatio-temporal incursion and pop musical culture behaviors',
        Grade:10,Credits:2.00,
        Total_Credits:''
    },
    {
        Semester:2, Classes:'Logical and Functional Programming',
        Grade:10,Credits:4.00,
        Total_Credits:''
    },
    {
        Semester:2, Classes:'Practice Stage II',
        Grade:10,Credits:6.00,
        Total_Credits:''
    },
    {
        Semester:2, Classes:'Probability and Statistics',
        Grade:10,Credits:4.00,
        Total_Credits:''
    },
    {
        Semester:2, Classes:'Programming for mobile devices',
        Grade:10,Credits:4.00,
        Total_Credits:''
    },
    {
        Semester:2, Classes:'Software Engineering',
        Grade:10,Credits:5.00,
        Total_Credits:''
    },
    {
        Semester:2, Classes:'Sport 4',
        Grade:10,Credits:1.00,
        Total_Credits:''
    },
    {
        Semester:2, Classes:'Team Project',
        Grade:10,Credits:2.00,
        Total_Credits:''
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
                    <td>${i.Grade * i.Credits}</td>
                </tr>`
    table.innerHTML += row
    
}



