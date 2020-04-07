const sentence = "hello there from lighthouse labs";

for (const char of sentence) {
  let timer = 0;
  setTimeout(() => {
    process.stdout.write(char);
  }, timer)
  timer += 50;
}
setTimeout(() => {
  console.log();
},0);

