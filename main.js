
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


