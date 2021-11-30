const sentence = "hello there from lighthouse labs";


// console.log return every iteration on a new line using the \n

// for (const char of sentence) {
//   console.log(char);
// }

// Instead, use process.stdout.write (which doesn't add a new line)

// for (const char of sentence) {
//   process.stdout.write(char)  ;
// } 
let delay = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay);
  delay += 50;
}
setTimeout(() => {
  process.stdout.write("\n");
}, delay); 





