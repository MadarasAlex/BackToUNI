var tableData1 = [
    {
        Data:"Diploma", Response:'High School Diploma'
    },
    {
        Data:"Graduation year", Response:'1979'
    },
    {
        Data:"BAC Average", Response:9.88
    },
    {
        Data:"Awards", Response:'NO'
    },
    {
        Data:"Origin", Response:'Admission'
    },
    {
        Data:"Admission session", Response:'July 2019'
    },
    {
        Data:"Faculty", Response:'Mathematics-Informatics'
    },
    {
        Data:"Profile", Response:'Informatics in English'
    },
    {
        Data:"Year", Response:2
    },
    {
        Data:"Group", Response:1
    },
    {
        Data:"Registration number", Response:'IE1901'
    },
    {
        Data:"Situation", Response:'Founded by Goverment'
    },
    {
        Data:"Status", Response:'Currently registered'
    },
]


var table = document.getElementById('body_2')

for(var i of tableData1)
{
    var row =   `<tr>
                    <th>${i.Data}</th>
                    <td>${i.Response}</td>
                </tr>`
    table.innerHTML += row
}