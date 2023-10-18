const arr1 = [23.9,22.6,16.6,87.5];
const arr2 = [43,27,19,89,150];

function arrSort(arr)
{
    arr.sort((a,b)=>b-a);
    return arr;
}

console.log(arrSort(arr1));
console.log(arrSort(arr2));