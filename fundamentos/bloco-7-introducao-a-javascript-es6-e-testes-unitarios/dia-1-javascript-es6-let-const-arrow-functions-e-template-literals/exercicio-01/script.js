const fatorial = 4;

const result = (fatorial) => {
    let newFatorial = 1;

    for(let i = 1; i <= fatorial; i += 1){
        newFatorial = newFatorial * i;
    }
    
    return newFatorial;
}

console.log(result(fatorial));

