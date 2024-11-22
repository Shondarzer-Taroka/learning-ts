let troli = (a: string, b: string): string => {
    return a + b
}

function hwel(a: string, b: string): string {
    return a + b
}

// // optional property

function optionalProperty(a: number, b: number, c: string): string {
    return `${c + ' ' + (a + b)}`
}


// // rest parameteres

function resLearning(...numbers: number[]): number {
    return numbers.reduce((total, num) => total + num, 0)
}

console.log(resLearning(2, 3, 4, 5, 6, 787));


// // overloading

// function getInfo(name: string): string;
// function getInfo(age: number): number;

// function getInfo(value: string | number): string {
//     if (typeof value === 'string') {
//         return `Name: ${value}`;
//     }

//     else {
//         return `Age: ${value}`;
//     }

// }
// console.log(getInfo("Alice"));

function getInfo(name: string): string;
function getInfo(age: number): string;
function getInfo(value: string | number): string {
  if (typeof value === "string") {
    return `Name: ${value}`;
  } else {
    return `Age: ${value}`;
  }
}


// // Asynchronous Functions

async function asynfunctionints(url:string):Promise<string> {
  const res=await fetch(url)
  const data=await res.json()
  return data
}

asynfunctionints('https://jsonplaceholder.typicode.com/users')
.then(data=> console.log(data)
)


console.log(getInfo("Alice")); // Output: Name: Alice
console.log(getInfo(25));      // Output: Age: 25



// console.log(troli('kkk','opoo'));
// console.log(hwel('poli','shiio'));


