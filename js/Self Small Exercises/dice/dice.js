
console.log(dice())

alert("your roll a "+dice())

// a simple dice giving function

function dice()
{
    let d

    d = Math.random()*6
    d = Math.floor(d)
    d+=1
    return d
}