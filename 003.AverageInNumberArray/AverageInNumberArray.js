/**
 * 
 * @param {number[]} n 
 */
 function GetAverage(n) {
    if (n.length <= 1) throw new RangeError("Always will return infinity due to the array having one item.");
    let l = n.length, s = 0, i = 0;
    while (i <= l - 1) {
        s += n[i];
        i++;
    }
    return s / l;
}
