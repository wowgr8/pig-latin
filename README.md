Description: vowels

1. Check one word if it starts with a vowel.
2. add "way" to a word starting with a vowel.
3. Execute the above for multiple words.


Test: "Return True if it starts with a vowel."
Code: 
    word = "old"
    pigLatin(word)
Expected Output: True

Test: "Return False if it starts with a consonant."
Code: 
    word = "cat"
    pigLatin(word)
Expected Output: False

Test: "if it starts with a vowel than add "way" to it."
Code:
    word = "old"
    pigLatin(word)
Expected Output: "oldway"

Test: "if it starts with a consonant than move the first letter to the end."
Code:
    word = "cat"
    pigLatin(word)
Expected Output: "atc"

Test: "if it starts with a consonant than move all leading consonants to the end."
Code:
    word = "draw"
    pigLatin(word)
Expected Output: "awdr"

Test: "if it starts with a consonant than move all leading consonants to the end and add 'ay' to it."
Code:
    word = "cat"
    pigLatin(word)
Expected Output: "atcay"

Test: "if it starts 'qu' than move "qu" to the end and add 'ay' to it."
Code:
    word = "queen"
    pigLatin(word)
Expected Output: "eenquay"



    


Description: constonant

1. Identify one word beggining with a constonant.
2. Identify all the letters in one word before there is a vowel.
3. Move those constonant before the first vowel to the end of the word and add "ay". 
4. Identify "qu" in first constonant then move them to the end of the word and add "ay".
5. Execute the above for multiple words.