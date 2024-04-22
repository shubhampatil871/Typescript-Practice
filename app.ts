// let firstNumber: number = 34;
// let secondNumber: number = 69;

function addNumber(firstNumber:number,secondNumber:number):number{
    return firstNumber + secondNumber
}

// console.log(addNumber(34,69));

interface Person{
    name:string;
    age:number;
}


let john: Person = { name: "John", age: 30 };
let shubham :Person ={ name:"shubham",age:27};

// console.log(shubham);

//generics


function displayName<T>(name:T):T|any {
    const dis = console.log(name);
    return dis;
}

const disName:number = displayName(69);



const createPairs = <T,U> (first : T,second : U) => {
    return [first,second]
}


function displayFirstElement <T>(arr:T[]):T | undefined {
    if (arr.length > 0 ) {
        return arr[0]
    }
    else return undefined
}



const displayFirstElementArrow = <T> (arr:T[]):T | undefined => Array.length > 0 ? arr[0] : undefined;

console.log(createPairs(1,"shubham"));