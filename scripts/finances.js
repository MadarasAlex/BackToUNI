var tableData = [
    {
        Semester:1, Classes:'Algebra and Analytical Geometry',
        Grade:250, Credits:5.00,
        Total_Credits:''
    },
    {
        Semester:1, Classes:'Algorithms and Data Structures I',
        Grade:250,Credits:5.00,
        Total_Credits:''
    },
    {
        Semester:1, Classes:'Computer Architecture',
        Grade:150,Credits:3.00,
        Total_Credits:''
    },
    {
        Semester:1, Classes:'English Language 1',
        Grade:100,Credits:2.00,
        Total_Credits:''
    },
    {
        Semester:1, Classes:'Logic for Computer Science',
        Grade:200,Credits:4.00,
        Total_Credits:''
    },
    {
        Semester:1, Classes:'Professional counseling and career guidance',
        Grade:250,Credits:5.00,
        Total_Credits:''
    },
    {
        Semester:1, Classes:'Programming I',
        Grade:250,Credits:5.00,
        Total_Credits:''
    },
    {
        Semester:1, Classes:'Sport 1',
        Grade:250,Credits:5.00,
        Total_Credits:''
    },
    {
        Semester:2, Classes:'Algorithms and Data Structures II',
        Grade:250,Credits:5.00,
        Total_Credits:''
    },
    {
        Semester:2, Classes:'Calculus',
        Grade:250,Credits:5.00,
        Total_Credits:''
    },
    {
        Semester:2, Classes:'English Language 2',
        Grade:250,Credits:5.00,
        Total_Credits:''
    },
    {
        Semester:2, Classes:'Formal Languages and Automata Theory',
        Grade:250,Credits:5.00,
        Total_Credits:''
    },
    {
        Semester:2, Classes:'Methods and Practices in Informatics',
        Grade:250,Credits:5.00,
        Total_Credits:''
    },
    {
        Semester:2, Classes:'Practice Stage I',
        Grade:250,Credits:5.00,
        Total_Credits:''
    },
    {
        Semester:2, Classes:'Programming II',
        Grade:250,Credits:5.00,
        Total_Credits:''
    },
    {
        Semester:2, Classes:'Sport 2',
        Grade:50,Credits:1.00,
        Total_Credits:''
    },
    {
        Semester:"TOTAL : ", Classes:'',
        Grade:'3300 lei',Credits:'66',

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



