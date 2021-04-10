let str = `In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the 
            visual form of a document or a typeface without relying on 
            meaningful content. Lorem ipsum may be used as a placeholder before final copy is available`;

/* 

str.split(' ') 
    pusedo code
    oput = {word: 1}

    {
        in : 1,
        publihing : 1
    }

    for(let i= 0; i< str.length; i++) {
        ooput[key] = (output[key] + 1 || 1)
    }

    return output;
*/

function change(str) {
    let arr = str.split(' ');
    console.log(arr)
    let output = {}
    for(let i = 0; i< arr.length; i++) {
        
        output[arr[i]] = ((output[arr[i]] + 1) || 1)
    }

    return output
}

console.log(change(str))






