const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    let arr2 = []
for (let index = 0; index < arr.length; index++) {
    if (index % 2 != 1) {
        arr2.push(arr[index])
    }
}
console.log(...arr2);
  
});
