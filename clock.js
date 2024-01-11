let ampm=document.getElementById("ampm")
function getclock()
{
    let dt=new Date();
    let hr=dt.getHours();
    let mn=dt.getMinutes();
    let sc=dt.getSeconds();
    if(hr>12)
    {
        hr=hr-12;
        ampm='PM';
    }
    document.getElementById('hours').innerHTML=padzero(hr);
    document.getElementById('minutes').innerHTML=padzero(mn);
    document.getElementById('sec').innerHTML=padzero(sc);
}
function padzero(val)
{
    return val<10?"0"+val:val;
}
setInterval(getclock,500);