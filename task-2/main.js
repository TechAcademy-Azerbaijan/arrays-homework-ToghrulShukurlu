const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
   
let max = arr[0]
for (let i = 1; i < arr.length; i++) {
    if (max < arr[i]) {
        max = arr[i]
    }
}
let index = arr.indexOf(max)
console.log(max);
console.log(index + 1);
  
});
