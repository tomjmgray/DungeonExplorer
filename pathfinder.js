
const base = [];
for( let i = 0; i < 10; i++) {
    base.push([]);
    for (let j = 0; j < 10; j++) {
        base[i].push(null)
        // base[base.length - 1].push(rand(5, 1))
    }
};

function rand(max, min) {
    return Math.floor((Math.random() * max) + min)
}

let t = [rand(9, 0), rand(9,0)]
let c1 = [rand(9, 0), rand(9,0)]
let c2 = [rand(9, 0), rand(9,0)]
let c3 = [rand(9, 0), rand(9,0)]
let p = [rand(9, 0), rand(9,0)]

console.table(base)
console.log(t,
    //  c1, c2, c3, p
     )


let tries = 0;
let path = [];

function resetBoard(){
    base.forEach((row, iR) => {
        row.forEach((index, jR) => {
            base[iR][jR] = null
        })
    })
}

export default function pathfinder(start, c1, c2, c3, c4, c5, p) {
    console.time()
    resetBoard()
    base[start[0]][start[1]] = rand(5, 1);
    nextStep(start[0], start[1])
    console.log('PLACED PATH',)
    console.table( base);
    let bad = false
    
    if (
        base[c1[0]][c1[1]] == null || 
        base[c2[0]][c2[1]] == null ||
        base[c3[0]][c3[1]] == null ||
        base[c4[0]][c4[1]] == null ||
        base[c5[0]][c5[1]] == null ||
        base[p[0]][p[1]] == null
    ) {
        console.log('bad')
        bad = true;
        base.forEach((row, iR) => {
            row.forEach((index, jR) => {
                base[iR][jR] = null
            })
        })
        console.table(base)
        return pathfinder(start)
        
    }
    for (let i = 0; i < 10; i++) {
        for(let j = 0; j < 10; j++) {
            if (
                1 == 2
                
                ) {
                return pathfinder(t)
            } else if (base[i][j] == null) {
                base[i][j] = rand(5, 1)
            }
        }

    }
    console.log('Populated Table')
    console.table(base)
    console.timeEnd();
    return base
};

function nextStep(x, y) {
    tries ++;
    if (tries > 300000) {
        return
    }
    let placedStep = false;
    let localTries = 0;
    // up = 0, right = 1, down = 2, left = 3
   
    // creates an array of all available spots around the space
    let dirsArr = [[], [], [], []]
    
    // populates dirsArr
    for (let i = 0; i < 4; i++) {
        switch(i) {
                case 0:
                    
                    for (let j = y - 1; j >= 0; j--) {
                        if (dirsArr[i]?.length < 5) {
                            let val = base[x][j]
                            
                            dirsArr[i].push(val);
                        }
                        
                    }
                    break;
                case 1:
                    for (let j = x + 1; j < 10; j++) {
                        if (dirsArr[i]?.length < 5) {
                            let val = base[j][y]
                            dirsArr[i].push(val)
                        }
                        
                    }
                    break;
                case 2:
                    
                    for (let j = y + 1; j < 10; j++) {
                        if (dirsArr[i]?.length < 5) {
                            let val = base[x][j]
                           
                            dirsArr[i].push(val);
                        }
                        
                    }
                    break;
                case 3:
                    for (let j = x -1; j >= 0; j--) {
                        
                        if (dirsArr[i]?.length < 5) {
                            let val = base[j][y]
                            dirsArr[i].push(val)
                        }
                        
                    }
                    break;
            }
    };
    // console.log(dirsArr)
    while (!placedStep && localTries < 1000) {
        let dir = rand(4, 0);
        let len = rand(dirsArr[dir].length, 1);
        if (tryStep(x, y, dir, len)) {
            placedStep = true
            // console.log(placedStep, dir, len);
            switch (dir) {
                case 0:
                    if (base[x][y - len] == null) {
                        base[x][y - len] = len;
                        nextStep(x, y - len)
                    }
                    break;
                case 1:
                    if (base[x + len][y] == null) {
                        base[x + len][y] = len;
                        nextStep(x + len, y)
                    }
                    break;
                case 2:
                    if (base[x][y + len] == null) {
                        base[x][y + len] = len;
                        nextStep(x, y + len)
                    }
                    break;
                    
                case 3:
                    if (base[x - len][y] == null) {
                        base[x - len][y] = len;
                        nextStep(x - len, y)
                    }
                    break;
            }
        } else {
            localTries++;
        }
    }
};

// pathfinder(t, c1, c2, c3, p)

function tryStep(x, y, dir, len) {
    let good = true
    switch(dir) {
        case 0:
            if (y - len < 0 || base[x][y - len] !== null) {
                good = false
            }
            break;
        case 1:
            if (x + len >= 10 || base[x + len][y] !== null) {
                good = false
            }
            break;
        case 2:
            if (y + len >= 10 || base[x][y + len] !== null) {
                good = false
            }
            break;
            
        case 3:
            if (x - len < 0 || base[x - len][y] !== null) {
                good = false
            }
            break;
    };
    return good
}



//test tryStep

// console.log(
//     'up good', tryStep(5 ,4, 0, 2),
//     'up bad', tryStep(5 ,4, 0, 7),
//     'right good', tryStep(5 ,4, 1, 2),
//     'right bad', tryStep(5 ,4, 1, 7),
//     'down good', tryStep(5 ,4, 2, 2),
//     'down bad', tryStep(5 ,4, 2, 7),
//     'left good', tryStep(5 ,4, 3, 2),
//     'left bad', tryStep(5 ,4, 3, 7),
// )
