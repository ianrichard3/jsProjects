const timeInterval = 1000;
const decimales = 2;
const divideToDecimal = 10**decimales*10;
const totalTime = 10;

const wait = function(i){
    prom = new Promise((resolve, reject) => {setTimeout(() => resolve(i), timeInterval)})
    return prom
}

async function timer(timeToCount){
    start = timeToCount*1000/timeInterval;
    for (let i = start; i >= 0; i--){
        // await setTimeout(() => console.log(i), timeInterval)
        if (i === start){
            process.stdout.write(i*timeInterval/divideToDecimal+"\r");
            continue;
        }
        await wait(i*timeInterval/divideToDecimal).then(m => {
            // console.log(m)
            process.stdout.clearLine(0);
            process.stdout.cursorTo(0);
            process.stdout.write(m+"\r");
        })
        // console.log(i)
    }
}

timer(totalTime);
process.stdout.write("Hello, World");
process.stdout.clearLine(0);
process.stdout.cursorTo(0);
process.stdout.write("\n");