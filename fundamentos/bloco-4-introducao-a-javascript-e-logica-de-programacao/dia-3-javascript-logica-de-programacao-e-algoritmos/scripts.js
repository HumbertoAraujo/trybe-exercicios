const number = 10;
let result = 0;
let aux = 0;
for (let index = number; index >= 1; index -= 1){
    if (index - 1 != 0){
        if (index == number){
            aux += index * (index -1); 
        } else {
            result = aux * (index -1)
            aux = result;
        }
}
}
console.log(result);