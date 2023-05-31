/*
1. what is a variable?
    - a reserved space in memory that holds a value for later reference


2. how is a variable created and given value? (hint: 2 steps)
    1. declaration
    2. assignment


3. what 3 keywords are used for declaration?
    - var, let, const
    1a. which keyword is deprecated and should no longer be used? why?
        -var. ES6 standards
    1b. which keyword allows a variable to be changed/reassigned?
        - let
    1c. which keyword does not allow a variable to be changed/reassigned?
        -const


4. whats the difference between assignment and declaration?
    - assignment gives value. declaration gives a place in memory.


5. what operator is used for assignment?
    - =

6. answer declaration or assignment or both:
    a. let name
        - declaration
    b. name = 'spongebob'
        - assignment
    c. const birthYear = 1998
        - both
    d. favoriteColor = 'green'
        - assignment
    e. myDogsName = 'puppy'
        - assignment
    f. let myFavoriteFruit = 'mango'
        - both
    g. const birthday
        - declaration


7. what does = make you think?   
    - assignment


8. what 3 ways indicate that a variable value is a STRING?    
    - ''(single quotes) ""(double quotes) ``(backticks)


9. how do you read the line of code:
    a. let age = 25
        - "let age equal NUMBER 25"
    b. const birthYear = "1998"
        - "const birthYear equals STRING 1998"
    c. let favoriteSinger = 'Adele'
        - "let favoriteSinger equal STRING Adele"
    d. const birthMonth = "March"
        - "const birthMonth equals STRING March"


10. what convention do we use for naming variables?
    - camelCase


11. what are the 7 common data types?
    - string, number, boolean, array, object, undefined, null


12. what does [] make you think?
    - array


13. what does {} make you think?
    - object


14. what data type can only have 1 of 2 values?
    - boolean (can only have true OR false)


15. what data type(s) can store every other data type?
    - arrays AND objects

16. what data type uses `${}`?
    - strings
    16a. what is the specific name when using `${}`?
        - template literals
    16b. what is the benefit of this syntax?
        - easily 'escape' back into javascript variables, without concatenation


17. identify the data type:
    a. false
        - boolean
    b. '25'
        - string
    c. 'true'
        -string... notice the quotes! lol if i got you :p
    d. 2023
        - number
    e. ['up', 'down', 'left', 'right']
        - array
    f. true
        - boolean
    g. [2, 4, 'chipotle']
        - array
    h. { a: 1, b: 2, c: 3}
        - object


18. what is zero-based indexing?
    - how javascript counts position of items in an array. starts at 0, instead of 1(like normal counting)


19. what will be logged to the console?

    let randomList = [ 5, 12, '22', true, [1,2,3], 'first', 'la la la']

        a. console.log(randomList.length)
            - 7
        b. console.log(randomList[3])
            - true
        c. console.log(randomList[7])
            - undefined (tricky so let me explain briefly. there are only 7 items total in this array. that is why the length is 7. and therefore the last item has an index of 6. the 7th index doesn't really exist... except it does, sort of. under the hood, since this is an array our computer is holding an extra empty "bucket" in memory after the last item 'la la la'. why? because arrays are always accepting more data. so this 7th index does technically exist. btu it does not have a value yet(or ever). 
            BILL GATES TOASTER!!! https://www.youtube.com/watch?v=YUQUGtUbwMY&list=PLBf-QcbaigsJysJ-KFZvLGJvvW-3sfk1S&index=17 1:38:20  )
        

        d. how would you console.log() the last item in the list?
            - console.log(randomList[randomList.length - 1])


20. true or false: const variables can be reassigned?
    - false

21. true of false: let variables can be reassigned?
    - true

22. true or false: a variable can be declared multiple times?
    - false... i didn't explicitly say this in the notes (sorry)

*/
