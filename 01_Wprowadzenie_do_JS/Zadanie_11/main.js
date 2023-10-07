const arr = [1, 2, 3, 4, 5, 6, 7];

function f(arr) {
    var sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum)
    var avg = sum / arr.length;
    for (let i = 0; i < arr.length; i++) {
        console.log(Math.abs(arr[i] - avg))
    }
}

f(arr)