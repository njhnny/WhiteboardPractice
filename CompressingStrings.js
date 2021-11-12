function compressString(input) {
  //create variable to tally up number of times a character repeats
  let repeats = 1;
  //create variable for output
  let output = "";
  //for each character, check if it is === to the one after it
  for (let i = 0; i < input.length; i++) {
    if (input[i + 1] === input[i]) {
  //if so, add 1 to the repeat value
      repeats++;
    } else {
  //if character occurs only once, add directly to output
      if (repeats === 1) {
        output += input[i];
  //for repeated characters add repeats, then the character
      } else {
        output += repeats + input[i];
      }
  //reset the repeats counter
      repeats = 1;
    }
  }
  //return the compressed string
  return output;
}
compressString(`aabcbbbaaaaaabcccccdddddddbbba`)

//works