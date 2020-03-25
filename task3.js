function counter()
{
    var inputval=document.getElementById("INPUT").value;
    var vow="aeiouAEIOU";
    var num="0123456789";
    var cons="BCDFGHJKLMNPQRSTVWXYZbcdfghjklmnpqrstvwxyz"
    var vc=0;
    var nc=0;
    var cc=0;
    var sc=0;
    var spc=0;
    for(i=0;i<inputval.length;i++)
    {
        if(vow.indexOf(inputval[i])!=-1)
        vc+=1;
        else if(inputval[i]==' ')
        spc+=1
        else if(num.indexOf(inputval[i])!=-1)
        nc+=1;
        else  if(cons.indexOf(inputval[i])!=-1)
        cc+=1;
        else
        sc+=1;
    }
    document.getElementById("vow").textContent=vc;
    document.getElementById("con").textContent=cc;
    document.getElementById("num").textContent=nc;
    document.getElementById("spac").textContent=spc;
    document.getElementById("spec").textContent=sc;
    
}
