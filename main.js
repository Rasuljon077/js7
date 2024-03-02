// // let a = []
// let box = ""
// let user = prompt("dell ")

// let arr = user.split("dell ")

// for (let i = 0; i < arr.length; i++) {

//   if (arr[i]== "dell") {
//     arr.split(1, 1)
//   }
//   console.log(arr);
    
//     // if (arr[i]=="add" || arr[i]=="dell") {
        
//     // }
    
// }
// // console.log(a);

// let srt = "lorem ipsum dolor sit amet. "
// console.log(srt);
// let a = prompt("rasuljon hasan ")
// console.log(a);
// let arr = srt.split('r')
// let arrr = a.split(" ") 
// for (let i = 0; i < srt.lenth; i++) {
  
//     if (condition) {
        
//     }

// }

let lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dolorem minima numquam cumque facere aspernatur"


let o = "o" 
let a = "a"
let u = "u"
let i = "i"
let e = "e"
let arr = lorem.split('')
for (let i = 0; i < lorem.length; i++) {
    
  if (arr[i]== o || arr[i] == a || arr[i] == u || arr[i] == i || arr[i] == e ) {
    arr.splice(i,1)
  }
    
}
let string = arr.join("")
console.log(string);
