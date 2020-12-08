



function swap(items, firstIndex, secondIndex){
    const temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
}


function Bubble (arr) {

    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
           if (arr[i] > arr[j]) {
               swap(arr[i],arr[j]);
           }
        }
    }

    let ans = []
    ans[0] = arr[0]
    ans[1] = arr[((arr.length/2) % 2 === 0) ? arr.length/2-1  : (arr.length + 1)/2-1]
    ans[2] = arr[arr.length - 1]

    return ans
}

let arr = [];

for (let i = 0; i < 5; i++) {
    arr[i] = Math.random();
}

console.log(Bubble(arr))

