function fibs(n) {
    const arr = [];

    let a = 0;
    let b = 1;

    arr.push(a);
    arr.push(b);

    let count = 2;
    while (count < n) {
        const temp = a + b;

        arr.push(temp);

        a = b;
        b = temp;

        count++;
    }

    return arr;
}

function fibsRec(n) {
    arr = [];

    arr[0] = 0;
    arr[1] = 1;

    for (let i = 2; i < n; i++) {
        arr[i] = arr[i - 2] + arr[i - 1];
    }

    return arr;
}

console.log(fibsRec(8));
