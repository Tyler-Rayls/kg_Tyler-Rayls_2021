phoneticNums = []
dictionary = map of digit to phonetic
for i, num of enumerate num_array
    num to String
    add empty string to phoneticNums
    for char of num
        phoneticNums[i] += dictionary[char]
print phoneticNums

Time Complexity: O(nm)
	- where n is the size of the num_array
	- where 1 <= m <= max # of digits in a number

Space Complexity: O(n)
	- an additional array of size n is used
