/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
    let l = 0;
    let r = 0;
    let write = 0;
    let char = '';
    let count = 0;
    while (r < chars.length) {
        char = chars[l];
        if (chars[r] === char) {
            r++
        } else {
            count = r - l;
            chars[write] = char
            write++;
            if (count > 1) {
                let countString = count.toString().split("");

                for (let digit of countString) {
                    chars[write] = digit;
                    write++;
                }
            }
            l = r;
        }
    }
    count = r - l;

    chars[write] = char;
    write++;

    if (count > 1) {
        let countString = count.toString().split("");

        for (let digit of countString) {
            chars[write] = digit;
            write++;
        }
    }
    return write;
};