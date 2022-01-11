var tableData = [
    {
        Semester:1, Classes:'Advanced Programming',
        Grade:250, Credits:5.00,
 
    },
    {
        Semester:1, Classes:'Artificial Intelligence',
        Grade:300,Credits:6.00,
     
    },
    {
        Semester:1, Classes:'Graphics and User Interfaces',
        Grade:150,Credits:3.00,

    },
    {
        Semester:1, Classes:'Network Administration',
        Grade:200,Credits:4.00,

    },
    {
        Semester:1, Classes:'Security and Criptography',
        Grade:200,Credits:4.00,

    },
    {
        Semester:1, Classes:'	Numerical Methods',
        Grade:250,Credits:5.00,

    },
    {
        Semester:2, Classes:'Web Technologies',
        Grade:300,Credits:6.00,

    },
    {
        Semester:2, Classes:'Information Systems for business development',
        Grade:250,Credits:5.00,

    },
    {
        Semester:2, Classes:'Sport 3',
        Grade:100,Credits:2.00,

    },
    {
        Semester:"TOTAL : ", Classes:'',
        Grade:'2000 lei',Credits:'40',

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



