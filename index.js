var start = window.performance.now();
function uuid(a) {
    return a ? (a ^ ((Math.random() * 16) >> (a / 4))).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, uuid);
}

var results = [];
for (var i = 0; i < 100; i++) {
    results.push(uuid())
}

var distResults = [...new Set(results)];

var dups = results.length - distResults.length;
var end = window.performance.now();
var time =((end - start)/1000).toFixed(2);
console.log(`GOT ${dups} DUPLICATES [in ${time} sec]`)
