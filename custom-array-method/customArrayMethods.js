/******** Custom Map Function **********/

function map(array = [], callback){
    let resultArray = [];
    for(let i=0; i<array.length; i++){
        let result = callback(array[i]);
        resultArray.push(result);
    }
    return resultArray;
}

let resultArray = map([1,2,3,4], (i) => i * 2);
console.log(resultArray);


/******** Custom Foreach Function **********/

function forEach(array=[], callback) {
    for(let i=0; i<array.length; i++){
        callback(array[i]);
    } 
}

forEach([1,2,3,4], (i) => console.log(i));


/******** Custom Filter Function **********/

function filter(array=[], callback) {
    let resultArray = []
    for(let i=0; i<array.length; i++){
        let result = callback(array[i]);
        if(result){
            resultArray.push(array[i]); 
        }
    }
    return resultArray;
}

let filteredArray = filter([1,2,3,4], (i) => i>3);
console.log(filteredArray);
