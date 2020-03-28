function find()
{
    var x=document.getElementById('Input').value.split(",").map(Number);
    // console.log(x);
    var y=document.getElementById('Input').value;
    var len=(y.length+1)/2;
    var max=x[0];
    var sum=0;
    var avg=0.0;
    for(i=0;i<len;i++)
    {
        if(x[i]>max)
        max=x[i];
        sum+=x[i];
    }
    avg=sum/len;

    console.log("Sum = ", sum);
    console.log("Average = ", avg);
    console.log("Max = ", max);
    alert("Press f12 and check the answers on the console.");

    // document.getElementById('sum').textContent=sum;
    // document.getElementById('avg').textContent=avg;
    // document.getElementById('max').textContent=max;
}
