// ==========1-misol==========
// let k=12;
// let n=10;
// for(let i=1;i<=n;i++){
//     console.log(k);
// }


// ==========2-misol==========
// let a = 12;
// let b = 3;
// for (let i = b; i <= a; i++) {
//     console.log(i);
// }


// ==========3-misol==========
// let a = 25;
// let b = 5;
// for (let i = a - 1; i > b; i--) {
//     console.log(i);
// }


// ==========4-misol==========
// for (let i = 1; i <= 10; i++) {
//     console.log(`${i} kg konfet ${i*10000}so'm`);
// }


// ==========5-misol==========
// for (let i = 1; i <= 10; i++) {
//     console.log(`${i/10} kg konfet ${i*10000/10}so'm`);
// }


// ==========6-misol==========
// for (let i = 1; i <= 10; i++) {
//     console.log(`${1+i/10} kg konfet ${10000+i*10000/10}so'm`);
// }

// ==========7-misol==========
// let a = 10;
// let b = 100;
// let sum = 0;
// for (let i = a; i <= b; i++) {
//     sum += i;
// }
// console.log(`${a}dan ${b}gacha sonlar yig'indisi ${sum}`)


// ==========8-misol==========
// let a = 10;
// let b = 100;
// let p = 1;
// for (let i = a; i <= b; i++) {
//     p *= i;
// }
// console.log(`${a}dan ${b}gacha sonlar ko'paytmasi ${p}`)


// ==========9-misol==========
// let a = 1;
// let b = 10;
// let sum = 0;;
// for (let i = a; i <= b; i++) {
//     sum += i ** 2;
// }
// console.log(`${a}dan ${b}gacha sonlarni kvadratlarini yig'indisi ${sum}`)


// ==========10-misol==========
// let n = 10;
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//     sum += 1 / i;
// }
// console.log(`S=${sum}`);


// ==========11-misol==========
// let n = 10;
// for (let i = 1; i <= n; i++) {
//     if (i % 2 == 1) {
//         console.log(i);
//     }
// }


// ==========12-misol==========
// let n = 10;
// for (let i = 1; i <= n; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }


// ==========14-misol==========
// let n = 20;
// let num = 0;
// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= i; j++) {
//         if (i % j == 0) num++;
//     }
//     if (num > 2) {
//         console.log(i)
//     }
//     num = 0;
// }


// ==========15-misol==========
// let n = 10;
// for (let i = n; i >= 1; i--) {
//     console.log(i);
// }


// ==========16-misol==========
// let n = 100;
// for (let i = 0; i <= n; i++) {
//     if (i % 5 != 0) {
//         console.log(i);
//     }
// }


// ==========17-misol==========
// let n = 10;
// for (let i = 1; i <= n; i++) {
//     console.log(i ** 2);
// }


// ==========18-misol==========
// let n = 10;
// let sum = 0;
// let p = 1;
// for (let i = 1; i <= n; i++) {
//     p *= i;
//     sum += p;
// }
// console.log(`Summ= ${sum}`);


// ======misol-masala==========
// let n = 10;
// let x = 1.1;
// let sum = 1;
// let p = 1;
// for (let i = 1; i <= n; i++) {
//     p *= i;
//     sum += x * i / p;
// }
// console.log(`Summ= ${sum}`);


// ==========20-misol==========
// let n = 10;
// let x = 3;
// for (let i = 0; i <= n; i++) {
//     if (i % x == 0) {
//         console.log(i);
//     }
// }


// ==========21-misol==========

// // (1+2+3+...+n)(1,2,3,...,x)
// let n = 10;
// let x = 10;
// let p = 0;
// let s = "(";
// for (let i = 1; i <= n; i++) {
//     p += i;
// }
// for (let j = 1; j <= x; j++) {
//     if (j == 1) s += `${j}`;
//     else s += `,${j}`;
// }
// console.log(p + s + ")");
// ==========22-misol==========
// // 1*1+2*1+3*1+...+n*1,
// // 1*2+2*2+3*2+...+n*2,
// // 1*3+2*3+3*3+...+n*3,
// // 1*4+2*4+3*4+...+n*4,
// // 1*5+2*5+3*5+...+n*5,
// ==========23-misol==========
// // 1*x+2*x+3*x+...+n*x
// let n = 10;
// let x = 5;
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//     sum += i;
// }
// for (let j = 1; j <= x; j++) {
//     console.log(sum * j)
// }

// ==========24-misol==========
for (let i = 2; i <= 9; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i*j}`)
    }
} 