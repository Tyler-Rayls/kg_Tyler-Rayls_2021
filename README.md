phoneticNums = []
dictionary = map of digit to phonetic
for i, num of enumerate num_array
    num to String
    add empty string to phoneticNums
    for char of num
        phoneticNums[i] += dictionary[char]
print phoneticNums
