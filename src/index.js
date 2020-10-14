module.exports = function toReadable (number) {
    let res;
    let numberLength = number.toString().length;
    let zeroToNine = {
      0: "zero",
      1: "one",
      2: "two",
      3: "three",
      4: "four",
      5: "five",
      6: "six",
      7: "seven",
      8: "eight",
      9: "nine"
    }

    let tenToNineteen = {
        0: "ten",
        1: "eleven",
        2: "twelve",
        3: "thirteen",
        4: "fourteen",
        5: "fifteen",
        6: "sixteen",
        7: "seventeen",
        8: "eighteen",
        9: "nineteen"
    }

    let dozens = {
        1: "ten",
        2: "twenty",
        3: "thirty",
        4: "forty",
        5: "fifty",
        6: "sixty",
        7: "seventy",
        8: "eighty",
        9: "ninety"
    }

    switch(numberLength) {
        case 1:
            res = zeroToNine[number];
            break
        case 2:
            if (number.toString()[0] === "1") {
                res = tenToNineteen[number.toString()[1]];
            }
            else if (number.toString()[1] === "0") {
                res = dozens[number.toString()[0]];
            }
            else {
                res = `${dozens[number.toString()[0]]} ${zeroToNine[number.toString()[1]]}`;
            }
            break
        case 3:
            if (number.toString()[1] === "0" && number.toString()[2] === "0") {
                res = `${zeroToNine[number.toString()[0]]} hundred`;
            }
            else if (number.toString()[1] === "0") {
                res = `${zeroToNine[number.toString()[0]]} hundred ${zeroToNine[number.toString()[2]]}`;
            }
            else if (number.toString()[1] === "1") {
                res = `${zeroToNine[number.toString()[0]]} hundred ${tenToNineteen[number.toString()[2]]}`;
            }
            else {
                if (number.toString()[2] === "0") {
                    res = `${zeroToNine[number.toString()[0]]} hundred ${dozens[number.toString()[1]]}`;
                }
                else {
                    res = `${zeroToNine[number.toString()[0]]} hundred ${dozens[number.toString()[1]]} ${zeroToNine[number.toString()[2]]}`;
                }
            }
            break
        default:
            return -1;
            break
    }

    return res;
}
