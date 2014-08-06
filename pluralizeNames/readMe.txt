You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement a function likes(), which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:

likes([]); // must return "no one likes this"
likes(['Peter']); // must return "Peter likes this"
likes(['Jacob', 'Alex']); // must return "Jacob and Alex like this"
likes(['Max', 'John', 'Mark']); // must return "Max, John and Mark like this"
likes(['Alex', 'Jacob', 'Mark', 'Max']); // must return "Alex, Jacob and 2 others like this"
