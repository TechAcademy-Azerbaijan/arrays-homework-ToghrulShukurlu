const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
      arr = arr.split(" ").map(Number);
    let count = 0
    while (arr.length > 0) {
        count++
        let x = arr[0]
        arr.unshift()
        console.log(arr);
        while (arr.includes(x)) {
            index = arr.indexOf(x)
            arr.splice(index, 1)
        }
    }
    console.log(count);

  
});
