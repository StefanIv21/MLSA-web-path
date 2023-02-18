const arr=[10,2,4,5,7,8,3];
/*
var i;
for(i=0;i<arr.length;i++)
{
    var a =arr[i];
    a=a*2;
    arr[i]=a;
}

*/
var z=0;
arr.forEach(element =>{
    arr[z]=element*2;
    z++;
});
console.log(arr);