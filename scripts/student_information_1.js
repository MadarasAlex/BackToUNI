var tableData1 = [
    {
        Data:"Birthday", Response:"31-10-1958"
    },
    {
        Data:"Country", Response:'Romania'
    },
    {
        Data:"City", Response:'Sibiu'
    },
    {
        Data:"Gender", Response:'Masculine'
    },
    {
        Data:"Religion", Response:'Lutheran'
    },
    {
        Data:"Origin", Response:'Rural'
    },
    {
        Data:"Foreigner", Response:'NO'
    },
    {
        Data:"ID Number", Response:5581031242522
    },
    {
        Data:"Citizenship", Response:'Romania'
    },
    {
        Data:"IC Series", Response:'SB452901'
    },
    {
        Data:"Military situation", Response:'non-incorporable'
    },
]


var table = document.getElementById('body_1')

for(var i of tableData1)
{
    var row =   `<tr>
                    <th>${i.Data}</th>
                    <td>${i.Response}</td>
                </tr>`
    table.innerHTML += row
}