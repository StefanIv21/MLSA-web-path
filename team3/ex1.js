function maxnumber(x,y,z)
{
    max=y;
    if(x>y)
        max=x;
    if(z>max)
        max=z;
    return max;
}

console.log(maxnumber(-20,-10,-30));