const arr=[12,2,4,5,7,8,6];
for(i=0;i<arr.length;i++)
{
    if(arr[i]%3 == 0)
        delete arr[i];
}
console.log(arr);