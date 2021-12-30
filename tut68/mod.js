console.log("This is module");

function average(array) {
    sum = 0;
    array.forEach(element => {
        sum += element;
    });
    return sum / array.length;
}

module.exports = {
    avg: average,
    name: "aRVIND",
    sem: "1",
}