function countBs(s)
{
    let n = 0
    for(let a = 0 ; a < s.length;a++)
    {
        if(s[a] == "B")
        {
            n += 1
        }
    }
    return n
}

function countChar(s,c)
{
    let n = 0
    for(let a = 0 ; a < s.length;a++)
    {
        if(s[a] == c)
        {
            n += 1
        }
    }

    return n
}

function countBs2(s)
{
    let n
    n = countChar(s,"B")
    return n
}

console.log(countBs("neam"))
console.log(countChar("this is the best things evers","s"))
console.log(countBs2("BluebigB")) 