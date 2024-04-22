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

// console.log(createPairs(1,"shubham"));

function displayFirstElement <T>(arr:T[]):T | undefined {
    if (arr.length > 0 ) {
        return arr[0]
    }
    else return undefined
}


const displayFirstElementArrow = <T> (arr:T[]):T | undefined => Array.length > 0 ? arr[0] : undefined;


console.log(displayFirstElement([2,4,6,8]));
console.log(displayFirstElementArrow([4,6,8,9]));


type dataPair = {
    id : number ,
    data : string
}

const hasDuplicates= <T>(arr:T[]) :any => { 
    const set = new Set<T>();
    for (const item of arr) {
        if(set.has(item)){
            return true;
        }
        set.add(item);
    }
    return false;
    ;
}

console.log(hasDuplicates([,1,3,2,4,5,6,7,8,9]));
