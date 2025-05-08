// 给定一个 m x n 的矩阵，如果一个元素为 0 ，则将其所在行和列的所有元素都设为 0 。请使用 原地 算法。
const setZeroes = function(matrix) {
    const m = matrix.length
    const n = matrix[0].length  // m n分别代表行和列
    let row = false 
    let col = false // row col分别代表第一行 第一列是否需要变成0

    for(let i=0; i<n; i++){ // 这检查第一行
        if(matrix[0][i] === 0){
            row = true
            break
        }
    }
    for(let j=0; j<m; j++){ // 这检查第一列
        if(matrix[j][0] === 0){
            col = true
            break
        }
    }

    for(let i=1; i<n; i++){ //这里检查剩余的数组
        for(let j =1; j<m; j++){
            if(matrix[i][j] === 0){ // 如果有值为0，则将对应的第一行和第一列中的数字记为0
                matrix[i][0] = 0
                matrix[0][j] = 0
            }
        }
    }

    // 根据第一行和第一列的标记，将对应的行和列置零
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }


    // 最后处理第一行和第一列
    if (row) {
        for (let j = 0; j < n; j++) {
            matrix[0][j] = 0;
        }
    }

    if (col) {
        for (let i = 0; i < m; i++) {
            matrix[i][0] = 0;
        }
    }
    return matrix
}

matrix = [[1,1,1],[1,0,1],[1,1,1]]
console.log(setZeroes(matrix)) //[[1,0,1],[0,0,0],[1,0,1]]