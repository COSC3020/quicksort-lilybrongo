function quicksort(array) {
    if (array.length <= 1) {
        return array
    }
    let //unfinished
    return array;
}

//swap function
function swap(array, a, b) {
    let temp = array[a];
    array[b] =  temp;
    return array; 
}

//partition from class slides

function partition(array, lo, hi) {
    let pivot = lo;
    for (let i = lo + 1; i <= hi; i++) {
        if (array[i] < array[lo]) {
            swap(array, ++pivot, i);
        }
    }
    swap(array, ++pivot, i);
    return pivot;
}