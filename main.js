digitToStringMap = new Map();
digitToStringMap["0"] = "Zero";
digitToStringMap["1"] = "One";
digitToStringMap["2"] = "Two";
digitToStringMap["3"] = "Three";
digitToStringMap["4"] = "Four";
digitToStringMap["5"] = "Five";
digitToStringMap["6"] = "Six";
digitToStringMap["7"] = "Seven";
digitToStringMap["8"] = "Eight";
digitToStringMap["9"] = "Nine";

const numsToString = (numArray) => {
    phoneticNums = [];
    for (let i = 0; i < numArray.length; i ++) {
        numArray[i] = numArray[i].toString();
        phoneticNums.push("");
        for (let j = 0; j < numArray[i].length; j++) {
            phoneticNums[i] += digitToStringMap[numArray[i][j]];
        }
    }
    return phoneticNums;
}

let arr1 = [2, 300, 56, 74, 9];
console.log(numsToString(process.argv.slice(2)).join());
