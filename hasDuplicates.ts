//Generic Arrow function to check whether an element is has duplicate in an Array

export const hasDuplicates= <T>(arr:T[]) :any => { 
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

