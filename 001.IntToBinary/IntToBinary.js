function IntToHex(number) {
    let output = "";
    // ckecks if number is a int (a number with no decimals), if no return null;
    let IsInt = Math.floor(number) === number;
    if (!IsInt) return null;

    while (number !== 0) {
        // set the number right
        number /= 16;
        // calculate the remainder
        let r = (number * 16) % 16


        if (15 < r || 0 > r) {
            // this is not supposed to have happend
            throw new Error("Invalid remainder value.");
        }

        // if higher then 9 then need A to F characters
        switch (r) {
            case 10:
                output += "A"
                break;
            case 11:
                output += "B"
                break;
            case 12:
                output += "C"
                break;
            case 13:
                output += "D"
                break;
            case 14:
                output += "E"
                break;
            case 15:
                output += "F"
                break;
            default:
                output += r.toString();
                break;
        }

        number = Math.floor(number);
    }

    // reverse function for the end
    function reverse(str) {
        let o = "";
        for (let i = str.length - 1; i >= 0; i--) {
            o += str[i];
        }
        return o;
    }

    return reverse(output);
}
