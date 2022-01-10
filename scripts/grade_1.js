var tableData = [
    {
        Semester:1, Classes:'Algebra and Analytical Geometry',
        Grade:10, Credits:5.00,
        Total_Credits:''
    },
    {
        Semester:1, Classes:'Algorithms and Data Structures I',
        Grade:10,Credits:6.00,
        Total_Credits:''
    },
    {
        Semester:1, Classes:'Computer Architecture',
        Grade:10,Credits:5.00,
        Total_Credits:''
    },
    {
        Semester:1, Classes:'English Language 1',
        Grade:10,Credits:2.00,
        Total_Credits:''
    },
    {
        Semester:1, Classes:'Logic for Computer Science',
        Grade:10,Credits:6.00,
        Total_Credits:''
    },
    {
        Semester:1, Classes:'Professional counseling and career guidance',
        Grade:10,Credits:1.00,
        Total_Credits:''
    },
    {
        Semester:1, Classes:'Programming I',
        Grade:10,Credits:6.00,
        Total_Credits:''
    },
    {
        Semester:1, Classes:'Sport 1',
        Grade:10,Credits:1.00,
        Total_Credits:''
    },
    {
        Semester:2, Classes:'Algorithms and Data Structures II',
        Grade:10,Credits:6.00,
        Total_Credits:''
    },
    {
        Semester:2, Classes:'Calculus',
        Grade:10,Credits:5.00,
        Total_Credits:''
    },
    {
        Semester:2, Classes:'English Language 2',
        Grade:10,Credits:2.00,
        Total_Credits:''
    },
    {
        Semester:2, Classes:'Formal Languages and Automata Theory',
        Grade:10,Credits:5.00,
        Total_Credits:''
    },
    {
        Semester:2, Classes:'Methods and Practices in Informatics',
        Grade:10,Credits:4.00,
        Total_Credits:''
    },
    {
        Semester:2, Classes:'Practice Stage I',
        Grade:10,Credits:2.00,
        Total_Credits:''
    },
    {
        Semester:2, Classes:'Programming II',
        Grade:10,Credits:6.00,
        Total_Credits:''
    },
    {
        Semester:2, Classes:'Sport 2',
        Grade:10,Credits:1.00,
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



