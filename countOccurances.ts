export const countOccurences =<T> (arr:T[]):Map<T,number> => {
    const Occurences = new Map <T,number>();
    for (const item of arr){
        if (Occurences.has(item)){
            Occurences.set(item,Occurences.get(item)! + 1)
        }
        else {
            Occurences.set(item,1)
        }
    }
    return Occurences; 
}



const numbers: number[] = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4,4];
console.log("Occurrences:", countOccurences(numbers));