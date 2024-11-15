// task 4
// creat interface
interface Product{
  name: string
  price: number
}

// create function to calculate total price of products (return number)
// استخدمت reduce الطريقة الاولى
function getTotalPrice1(products: Product[]) : number {
  return products.reduce((totat, product) => totat + product.price , 0)
}

// استخدمت for الطريقة الثانية
function getTotalPrice2(products: Product[]) : number {
  let total = 0;
  for (let product of products) {
    total += product.price;
  }
  return total;
}



// test
const products: Product[] = [
  {name: 'Apple', price: 2.5},
  {name: 'Orange', price: 1.75},
  {name: 'Banana', price: 1.25}
]
console.log(getTotalPrice1(products));
console.log(getTotalPrice2(products));


// --------------------------------------------------------------------

// task 5
function isValidEmail(email: string): boolean {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;
  //^=> البداية 
  // $=> النهاية
  // \. => لوضع النقطة اجباري
  // {2,} => معناها اجباري حرفين أو أكثر لاسم الامتداد
  // [] => ما بين هذه الأقواس القيم المسموح استخدامها
  return regex.test(email)
}

//test
console.log(isValidEmail('mar8.@m.com'));


// necessary instructions on how to run the code (you must install node before)
// 1- npm install typescript --save-dev => install TS
// 2- npx tsc --init => creact tsconfig.json file (ts compilor)
// 3- npx tsc product.ts => convert TS to JS by creacting prodect.js file
// 4- node product.js => run the code