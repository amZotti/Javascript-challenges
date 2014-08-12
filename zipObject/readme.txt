 implement the zipObject function that enables such results

zipObject(['fred', 'barney'], [30, 40])
=> { 'fred': 30, 'barney': 40 }

zipObject([['fred', 30], ['barney', 40]])
=> { 'fred': 30, 'barney': 40 }
The zipObject creates an object composed from arrays of keys and values. It is
provided with either a single two dimensional array, i.e. [[key1, value1],
[key2, value2]] or with two arrays, one of keys and one of corresponding values.

