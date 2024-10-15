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
function quicksort(array) {
    if (array.length <= 1) {
        return array;
    }
    let top = 0;
    let lo = 0;
    let hi = arrary.length - 1;
    let stack = [];

    stack [top] = low;
    stack[++top] = hi;

    while (top >= 0) {
        hi = stack[top--];
        lo = stack[top--];

        let pivot = partition(array, lo, hi);
        if (pivot - 1 > lo) {
            stack[++top] = lo;
            stack[++top] = pivot - 1;
        }
        if (pivot + 1 < hi) {
            stack[++top] = pivot + 1;
            stack[++top] = hi;
        }
    }
    return array;
}
