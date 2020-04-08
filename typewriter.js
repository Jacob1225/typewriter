const typewriter = function(sentence) {
  for (const char of sentence) {
     let timer = 0;
     setTimeout(() => {process.stdout.write(char);
     }, timer);    
     timer += 50;
   }
   // process.stdout.write("\n")
   setTimeout(() => {
     console.log();
   }, 0);
 
 }
 const sentence = 'Hello from lighthouse labs';
 typewriter(sentence);