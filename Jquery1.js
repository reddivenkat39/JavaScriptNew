// using recursion we can solve the factorial problem

var x = 5;
function myfunction(parm)
{
    if(parm==1)
    {
        return 1;
    }
    else
    {
    return parm*myfunction(parm-1);
    }
}

var value = myfunction(x);

console.log(value);