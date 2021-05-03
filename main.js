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
    for (let i = 0; i < numArray.length; i ++) {
        numArray[i] = numArray[i].toString();
        numLength = numArray[i].length;
         for (let j = 0; j < numLength; j++) {
             numArray[i] = numArray[i].slice(1) + digitToStringMap[numArray[i][0]];
        }
    }
    return numArray;
}

numArray = process.argv.slice(2);
result = numsToString(numArray).join();
console.log(result);
