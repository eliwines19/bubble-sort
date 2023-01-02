function bubbleSort(arr) {
    let swapped;
        do {
            swapped = false;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] > arr[i + 1]) {
                    let temp = arr[i];
                    arr[i] = arr[i + 1];
                    arr[i + 1] = temp;
                    swapped = true;
                }
            }
        } while (swapped);
    return arr;
}

var nums = [2,7,12,45,43,67,98,43,5,23,4,9,34,21,34,5];

console.log(bubbleSort(nums));

// returns [2, 4, 5, 5, 7, 9, 12, 21, 23, 34, 34, 43, 43, 45, 67, 98]