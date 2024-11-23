
function removeDuplicateCharacters(string) {
  return string
    .split('') // Convert the string into an array of characters
    .filter((item, pos, self) => self.indexOf(item) === pos) // Keep only unique characters
    .join(''); // Join the unique characters back into a string
}


console.log(removeDuplicateCharacters('baraban')); // Output: "barn"


// Explanation:

// Splitting the String: We break the string into individual characters.
// Filtering Unique Characters: The filter() method keeps only characters that appear at their first index.
// Joining the Unique Characters: Finally, we combine the unique characters back into a string.