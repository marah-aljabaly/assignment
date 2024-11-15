// task 2 
function summation(arr) {
  if(arr.length != 0) {  //check if the array is not empty
    let sum  = arr.reduce((acc, curr) => acc + curr, 0);
    let avg = (sum / arr.length).toFixed(2); //toFixed(2) لأخذ رقمين بعد الفاصلة 

    return "Total sum = "+ sum + ", avgerage of the numbers = "+ avg;
  }
  else {
    return "Array is empty";
  }
}

// test
let arrayOfNum = [1, 2, 3, 4, 1, 5];
console.log(summation(arrayOfNum));

// -------------------------------------------------------------------

// task 3
function removeDuplication1(arr) {
 return [...new Set(arr)]
  //Set(arr)=> store uniqe value and remove the duplicated, returm object 
  // ... => convert the object to the array 
}

// another way (لو كبرت المصفوفة هاي الطريقة بتاخد وقت أكبر  ف يفضل استخدم الطريقة الاولى)
function removeDuplication2(arr) {
  return arr.filter((value, index) => arr.indexOf(value) === index);
}

// test
let arrayOfString = ["marah", "farah", "gaza", "marah"];
console.log(removeDuplication1(arrayOfString));
console.log(removeDuplication2(arrayOfString));
