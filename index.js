const diagnolSum = (matrix) => {
    var l2r = r2l = i = k = l = totalSum = 0;
    var length = matrix.length - 1;
    while (i < matrix.length && k < matrix.length && l >= 0) {
        l2r += matrix[i][i];
        r2l += matrix[k][length];

        if(i == k && i == length){
            totalSum -= matrix[i][i];
        }
        
        i++;
        k++;
        length--;
    }

    totalSum += l2r;
    totalSum += r2l;

    return totalSum;
}

var arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

console.log(diagnolSum(arr));