function isVowel(letter) {
    const vowels = ["a", "e", "i", "o","u"];
    for (let i = 0; i < vowels.length; i++) {
        if (letter === vowels[i]) {
            return true;
        }
    }
    return false;
}


function pigLatin(word) {
    const letters = word.split("");
    let firstHalf;
    let secHalf;
    let position;
    if (isVowel(letters[0])) {
        return word + "way";
    } else { // starts with a consonant
      if ((letters[0] === "q") && (letters[1] === "u")) {
        return (word.substr(2)) + "quay";
      } 
      firstHalf = letters[0];
      position = 1;
        for (let i = 1; i < letters.length; i++) {
            if (isVowel(letters[i])) {
                position = i;
                break;
            }
            // } else {
            //     firstHalf = firstHalf + letters[i];
            // }
        }
        firstHalf = word.substr(0,position);
        secHalf = word.substr(position);
        // secHalf = letters[position];
        // for (let i = position +1; i < letters.length; i++) {
        //     secHalf = secHalf + letters[i];
        // };
        return secHalf + firstHalf + "ay";
    };
}


