function range(start,end)
{
    let a = []
    let n = start
    for(let i = 0;i<(end-start)+1;i++)
    {
        a[i] = n
        n += 1;
    }

    return a
}

function sum2(a)
{
    let s = 0
    let n
    for(let i = 0 ;i < a.length;i++)
    {
        n = a[i]
        s += a[i]
    }

    return s
}

console.log(range(0,3))
console.log(sum2(range(1,10)))

