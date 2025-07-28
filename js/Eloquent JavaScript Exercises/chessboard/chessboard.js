let row = 8
let coloum = 8
let s = ""

for(let r = 0;r<row;r++)
{
    for(let c = 0;c<coloum;c++)
    {
      let a = r+c
      if(a%2 == 0)
      {
        s += " "
      }
      else
      {
        s += "#"
      }
    }
    
    s += "\n"

}

console.log(s)