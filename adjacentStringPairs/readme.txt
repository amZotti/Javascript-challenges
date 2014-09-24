Supplied with a single string, return the number of all adjacent pairs in that string.

The words within the string are separated by whitespace.

The function should be case-insensitive (i.e., the input string "orange OrAnGe" is a match).

Some example input/output:

//returns 0
countAdjacentPairs('') 

// returns 1
countAdjacentPairs('cat dog dog') 

// returns 1 (The first pair has been matched, and will be ignored from then on).
countAdjacentPairs('dog dog dog') 

// returns 2
countAdjacentPairs('cat cat dog dog cat')
