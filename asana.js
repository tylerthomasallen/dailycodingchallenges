const testArr = [[5, 7, 8, 6, 5],
[0, 0, 7, 0, 4],
[4, 6, 3, 4, 9],
[3, 1, 0, 5, 8]];

const hungryRabbit = (arr) => {
    let total = 0;
    let currPos;
    let currVal;
    
    const middleIndices = findMiddleIndices(arr);
    currPos = findNextPos(arr, middleIndices);
    currVal = arr[currPos[0]][currPos[1]]

    while (currVal !== 0) {
        total += currVal
        currPos = nextPotentialPos(arr, currPos);
        currPos = findNextPos(arr, currPos);
        currVal = arr[currPos[0]][currPos[1]];
        arr[currPos[0]][currPos[1]] = 0;
    }
    return total;
}

const nextPotentialPos = (arr, pos) => {
    console.log(pos[0][0]);
    console.log(pos[1][0]);
    let row = [];
    let col = [];

    if (arr[pos[0][0] + 1]) {
        row.push((pos[0][0] + 1));
        console.log('first')
    }

    if (arr[pos[0][0] - 1]) {
        row.push(pos[0][0] - 1)
        console.log('sec')
    }

    if (arr[pos[1][0] + 1]) {
        col.push(pos[1][0] + 1)
        console.log('third')
    }
    if (arr[pos[1][0] - 1]) {
        col.push(pos[1][0] -  1)
    }

    return [row, col];
}

const findMiddleIndices = (arr) => {
    const rowLength = arr.length;
    const colLength = arr[0].length;
    const rowMid = Math.floor(rowLength / 2);
    const colMid = Math.floor(colLength / 2);
    let rowReturnValue;
    let colReturnValue;

    rowLength % 2 === 0 ? rowReturnValue = [rowMid, rowMid - 1] : rowReturnValue = [rowMid]
    colLength % 2 === 0 ? colReturnValue = [colMid, colMid - 1] : colReturnValue = [rowMid]

    return [rowReturnValue, colReturnValue];
}

const findNextPos = (arr, indices) => {
    let highest = 0;
    let nextPos;
    indices[0].forEach(row => {
        indices[1].forEach(col => {
            if (arr[row][col] > highest) {
                highest = arr[row][col];
                nextPos = [[row], [col]]
            }
        })
    })

    return nextPos;
}

hungryRabbit(testArr);