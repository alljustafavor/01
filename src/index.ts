// function addTwo(num: number): number {
//   return num + 2
// }

// // function getUpper(val: string) {
// //   return val.toUpperCase()
// // }

// // function signUpUser(name: string, email: string, password: string, subscribed: boolean) {
// //   return {
// //     name,
// //     email,
// //     password,
// //     subscribed,
// //   }
// // }

// console.log(addTwo(5))
// // console.log(getUpper("joe"))
// // console.log(signUpUser("Leo", "anyuser@user.com", "Hashed256", true))\

// const loginUser = (name: string, email: string, isPaid: boolean = false): object => {
//   return {
//     name,
//     email,
//     isPaid,
//   }
// }

// console.log(loginUser("joe", "noblett@any.com"))

// function getValue(myVal: number): boolean | string {
//   if(myVal > 5) {
//     return true
//   }
//   return "200 OK"
// }

// const getHello = (s: string): string => {
//   return ""
// }

// const heros = ["thor", "ironman", "batman"];

// console.log(heros.map((hero): string => {
//   return `hero: ${hero}`
// }))

// function consoleError(errmsg: string): void {
//     console.log(errmsg)
// }
// consoleError("referr")

// function handleError(errmsg: string): never {
//     throw new Error(errmsg)
// }
// handleError("referr")

//Objects

// const User = {
//   name: "joe",
//   email: "noblett@email.com",
//   isActive: true,
// }

// // function createUser({name: string, isPaid: boolean}) {

// // } 

// // createUser({name: 'joe', isPaid: true})

// function createCourse(name: string, isPaid: boolean):{name: string, isPaid: boolean} {
//   return {
//     name,
//     isPaid
//   }
// }

// console.log(createCourse("Study Better", true))


// const bubbleSort = (inputArr: readonly number[]): readonly number[] => {
//     let len = inputArr.length;
//     let swapped;
//     let arr = [...inputArr]; // create a copy of the input array
//     do {
//         swapped = false;
//         for (let i = 0; i < len; i++) {
//             if (arr[i] > arr[i + 1]) {
//                 let tmp = arr[i];
//                 arr[i] = arr[i + 1];
//                 arr[i + 1] = tmp;
//                 swapped = true;
//             }
//         }
//     } while (swapped);
//     return arr;
// };

// Usage
// const originalArray: readonly number[] = [6, 5, 3, 1, 8, 7, 2, 4];
// const sortedArray = bubbleSort(originalArray);
// console.log(sortedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8]


// const bubbleSort = (arr: readonly number[]): readonly number[] => {
//     const sortedArray = [...arr]; // create a copy of the input array
//     const sortPass = (array: number[], i = 0, didSwap = false): readonly number[] => {
//         if (i < array.length - 1) {
//             if (array[i] > array[i + 1]) {
//                 [array[i], array[i + 1]] = [array[i + 1], array[i]]; // swap elements
//                 return sortPass(array, i + 1, true);
//             } else {
//                 return sortPass(array, i + 1, didSwap);
//             }
//         } else if (didSwap) {
//             return sortPass(array, 0, false);
//         } else {
//             return array;
//         }
//     };
//     return sortPass(sortedArray);
// };

// // Usage
// const originalArray: readonly number[] = [6, 5, 3, 1, 8, 7, 2, 4];
// const sortedArray = bubbleSort(originalArray);
// console.log(sortedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8]


// type User = {
//   name: string,
//   email: string,
//   isActive: boolean,
// }

// function createUser(user: User): User {
//   return user
// }

// createUser({name: 'Joe', email: 'favor@favor.com', isActive: true})




// type User = {
//   readonly _id: number,
//   readonly name: string,
//   readonly email: string,
//   readonly isActive: boolean,
//   readonly cardDetails?: number
// }

// const myUser: User = {
//   _id: Date.now(),
//   name: 'Joe',
//   email: 'favor@favor.com',
//   isActive: true
// }

// function updateUser<T extends keyof User>(user: User, key: T, newValue: User[T]): User{
//   return {
//     ...user,
//     [key]: newValue,
//   };
// } 
// const myUserUpdated = updateUser(myUser,'cardDetails', 78499478128792);

// console.log('Old :', myUser);
// console.log('Updated: ', myUserUpdated)

//Arrays

// const heros: readonly string[] = [];

// function appendArr(arr: readonly string[], value: string): string[] {
//   const appendedArr = [...arr, value];
//   return appendedArr;
// }
// const updated = appendArr(heros, "Thor");
// const updated2 = appendArr(updated, "Iron Man");
// console.log(updated2)

// union type

// const score: number | string =  33;

// const addToScore = (score: number | string, value: number): number => {
//   let numericScore = typeof score === 'string' ? parseInt(score) : score;
//   const updatedScore = numericScore + value;
//   return updatedScore;
// }

// console.log(addToScore(score, 67));

//Union types

// type User = {
//   name: string,
//   id: number
// }

// type Admin = {
//   username: string,
//   id: number
// }

// const powerUser: User | Admin = {
//   name: 'Joe',
//   id: 1234,
// }

// console.log(powerUser)

// function getDbId(id: number | string): string {
//   return (`DB id is: ${id}`);
// }

// console.log(getDbId(45))

//tuples 

// const isPalindrome = (str: string): [string, boolean] => {
//   const reversedStr = str.split('').reverse().join('');
//   return [reversedStr, str === reversedStr] 
// }

// const myStr = 'racecar';
// const isStrPalindrome = isPalindrome(myStr);
// console.log(isStrPalindrome);

// const user: (string | number)[] = [1, "hc"]


// let user: [string, number, boolean];

// user = [true, "OK", 200];

// let rgb: [number, number, number] = [255, 125, 133];

// console.log(rgb)

// type User = readonly [number, string];

// const newUser: User = [1, "email@email.com"] as const;
// newUser.push(true)
// console.log(newUser)

// emums

// const enum SeatChoice {
//   AISLE,
//   MIDDLE,
//   WINDOW
// }

// const hcSeat = SeatChoice.AISLE

// interface

// interface User {
//   readonly db_id: number;
//   email: string;
//   readonly user_id: number;
//   readonly google_token?: string;
//   // readonly start_trail?: () => string
//   start_trail(): string;
//   getCoupon(name: string): number
// }

// interface User {
//   githubToken: string
// }

// interface Admin extends User {
//   role: "admin"
// }

// const user_one: User | Admin = {role: "admin",db_id: 1, email: "f@f.com", user_id: 12, githubToken: "320jfd09f3k-302",
//   start_trail: () => {
//     return "trail started";
//   },
//   getCoupon: (value: "winter10") => {
//     return parseInt(value)
//   }
// }


class User {
    email: string;
    name: string;
    city: string = "";
    constructor(email: string, name: string) {
        this.email = email;
        this.name = name;

    };
}

const joe = new User("j@j.com","Joe")
joe.city = "Louisville"

console.log(joe) 

