var tableData = [
    {
        Semester:1, Classes:'Advanced Programming',
        Grade:10, Credits:5.00,
        Total_Credits:''
    },
    {
        Semester:1, Classes:'Artificial Intelligence',
        Grade:10,Credits:5.00,
        Total_Credits:''
    },
    {
        Semester:1, Classes:'Differential Equations',
        Grade:10,Credits:5.00,
        Total_Credits:''
    },
    {
        Semester:1, Classes:'Information Theory',
        Grade:10,Credits:5.00,
        Total_Credits:''
    },
    {
        Semester:1, Classes:'Methodology for Writing the BSc Thesis',
        Grade:10,Credits:3.00,
        Total_Credits:''
    },
    {
        Semester:1, Classes:'The history of private life in the Greek-Roman and Byzantine Antiquity',
        Grade:10,Credits:2.00,
        Total_Credits:''
    },
    {
        Semester:1, Classes:'Web Technologies',
        Grade:10,Credits:5.00,
        Total_Credits:''
    },
    {
        Semester:2, Classes:'BSc Thesis Preparation',
        Grade:10,Credits:5.00,
        Total_Credits:''
    },
    {
        Semester:2, Classes:'Graphics and User Interfaces',
        Grade:10,Credits:5.00,
        Total_Credits:''
    },
    {
        Semester:2, Classes:'Management Information Systems',
        Grade:10,Credits:5.00,
        Total_Credits:''
    },
    {
        Semester:2, Classes:'Network Administration',
        Grade:10,Credits:5.00,
        Total_Credits:''
    },
    {
        Semester:2, Classes:'Numerical Methods',
        Grade:10,Credits:5.00,
        Total_Credits:''
    },
    {
        Semester:2, Classes:'Security and Criptography',
        Grade:10,Credits:5.00,
        Total_Credits:''
    }
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



