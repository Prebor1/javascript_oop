import { muvelet, muveletLetrehoz } from "./functions.js";

const input1 = document.createElement('input');
document.body.appendChild(input1);
 
const input2 = document.createElement('input');
document.body.appendChild(input2);
 
const div = document.createElement('div');
document.body.appendChild(div);
 
const button = document.createElement('button');
button.innerText = "NAGY PIROS GOMB"
document.body.appendChild(button);
 
button.addEventListener('click', function() {
    const inputVal1 = Number(input1.value);
    const inputVal2 = Number(input2.value);

    const p = document.createElement('p');
    //p.innerText = muvelet(input1.value, input2.value, (szam1, szam2) => {return szam1 + szam2});
    const result = muvelet(inputVal1,inputVal2,muveletLetrehoz('+'));
    p.innerText = result;
    div.appendChild(p);
})


const fv = muveletLetrehoz('+');
console.log(fv(1,2)) //3

// const result = callback(a,b)
// return {result : result}
