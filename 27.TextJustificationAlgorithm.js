// 27. Text Justification Algorithm
// Problem: Implement a text justification algorithm.


function fullJustify(words, maxWidth) {
    let result = [];
    let currentLine = [];
    let currentLength = 0;

    for (let word of words) {
        if (currentLength + word.length + currentLine.length > maxWidth) {
            let spaces = maxWidth - currentLength;
            if (currentLine.length === 1) {
                result.push(currentLine[0] + " ".repeat(spaces));
            } else {
                let spaceBetween = Math.floor(spaces / (currentLine.length - 1));
                let extraSpaces = spaces % (currentLine.length - 1);

                for (let i = 0; i < currentLine.length - 1; i++) {
                    currentLine[i] += " ".repeat(spaceBetween);
                    if (i < extraSpaces) {
                        currentLine[i] += " ";
                    }
                }
                result.push(currentLine.join(''));
            }
            currentLine = [];
            currentLength = 0;
        }
        currentLine.push(word);
        currentLength += word.length;
    }

    result.push(currentLine.join(" ") + " ".repeat(maxWidth - currentLength - (currentLine.length - 1)));
    return result;
}

// Test case
const words = ["This", "is", "an", "example", "of", "text", "justification."];
const maxWidth = 16;
console.log(fullJustify(words, maxWidth));


// Explanation:
// -Justifies text by adjusting spaces between words to ensure each line is exactly maxWidth characters.
// -For the last line, words are left-aligned and the remaining space is distributed at the end.