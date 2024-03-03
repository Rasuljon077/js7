
let lorem = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia reprehenderit ab est! Facere, ipsam iste veritatis laudantium, consequuntur debitis nesciunt quaerat temporibus repellendus corrupti fugiat dicta fuga earum minima, natus incidunt voluptate dolorem. Aliquid explicabo unde porro dolor debitis nulla, omnis et, consequatur nesciunt fuga illum eos vel mollitia voluptate dolores tenetur repudiandae, nemo est. Quibusdam impedit tenetur in quis deleniti cupiditate quasi pariatur aut quas officiis qui, nam ad reiciendis provident quidem fuga fugit nobis tempore molestias voluptatibus error corporis. Fuga unde fugit repellendus aperiam quod, laudantium non saepe molestiae doloribus ea nostrum minima obcaecati eaque sunt similique laboriosam at iure praesentium ipsum. Similique nobis, in provident maiores nostrum illum veritatis fugit laudantium quod tempora harum repellat eveniet! Quia eaque, commodi distinctio aut exercitationem harum rem odio pariatur esse ullam, quas temporibus laudantium earum qui, quidem iste? Odio tenetur deleniti distinctio quod dolores architecto sapiente aliquam incidunt? Vel, jenfeiux d"

let arr = lorem.split('')
let count = 0
for (let i = 0; i < lorem.length; i++) {
    
  if (arr[i]== "o" || arr[i] == "a" || arr[i] == "u" || arr[i] == "i" || arr[i] == "e" || arr[i]== "O" || arr[i] == "A" || arr[i] == "U" || arr[i] == "I" || arr[i] == "E" ) {
    arr.splice(i,1)
    count++
    if (arr[i]== "o" || arr[i] == "a" || arr[i] == "u" || arr[i] == "i" || arr[i] == "e"|| arr[i] == "e") {
      arr.splice(i,1)
      count++
      if (arr[i]== "o" || arr[i] == "a" || arr[i] == "u" || arr[i] == "i" || arr[i] == "e") {
        arr.splice(i,1)
        count++
      }
    }
  } 
    
}
let string = arr.join("")

console.log(string);
console.log(count);

