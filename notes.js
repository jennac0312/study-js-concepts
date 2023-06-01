/*

UPDATE: uhhhhhh i just realized that these ntoes feel overwhelming. i didn't want them to but uhh lol
        these concepts are easier discussed than read tbh. so let's actually have a coversation about it
        (lets have a group study session)
__________________________________________________________________________________________________________
COVERS: 
    1. VARIABLES
    2. DECLARATION
    3. ASSIGNMENT
    4. DATA TYPES
        - STRING
        - NUMBER
        - BOOLEAN
        - ARRAY
        - OBJECT
        - UNDEFINED
        - NULL
        * typeof operator
__________________________________________________________________________________________________________

What is Javascript (js)?
    -a programming language


what is a programming language?
    - a set of instructions that tell a computer what to do


what is programming?
    - the process of writing those instructions that tell a computer what to do


**************************************************
** A COMPUTER DOES ONLY WHAT YOU TELL IT TO DO **
**************************************************

nothing more, nothing less.


SOME IMPORTANT TERMS TO KNOW
    1. Keyword - in JS syntax, there are reserved words that have a specific purpose 
        and cannot be used outside of said purpose. you will learn these as we go further into js.



A FEW THINGS TO KNOW ABOUT JS

    Asynchronus Language
        - what does that mean?
        - it means JS runs from top to bottom, line by line. One step at a time. (don't overthink this)

    
    SYNTAX
        - JS has specific grammar rules (like any other language)

        Some things to keep in mind
            1. get used to writing in lower case.
                - there is a time and a place for upper case (class constructors and we aren't there yet)
            2. get used to writing in camelCase
                - first letter of every word is capital (besides the first word)
                - example : thisIsMyExample
            3. get ready to learn some keywords
            4. get used to messing up!!! seriously js is confusing in the beginning. be easy on yourselves. learn through your mistakes




Let's start at where I think is the beginning

understand that javascript is a high level language. this means that it is written in terms that humans can read and understand. 
    the computer doesn't actually underatand javascript. 
    fortunately, behind the scenes, js is broken down into binary code that the computer understands. 
    (don't worry too much about this, but if you do care to know... go listen to leon noel lol)
____________________________________________________________________________________________________________________________________________________________________________________________

JAVASCRIPT ES6
    -javascript ECMAScript 2015. this is newest version of js and these are the rules we follow

____________________________________________________________________________________________________________________________________________________________________________________________

VARIABLES

    - we spoke about variables but what the heck is a variable?
    - variables are a reserved space in memory that hold a value for later referencing.

    - in simplest terms, what do variables do? 
        - variables STORE DATA!!!

    - when we create a variable we are creating a space in the computer's memory. 
        (rememeber we had to check the specs of our computer to make sure we had 50+ gb
            of storage for this class? that's why. js takes up space!!)


    COMMON PRACTICES TO KEEP IN MIND
        - variable names can be nearly anything (except keywords reserved by js for specific purposes)
        - variable names should describe the content it stores
            - this helps avoid unncessary confusion. 
            - helps readability
        - variable names should be written in camelCase (remember i said get used to it!)

____________________________________________________________________________________________________________________________________________________________________________________________

DECLARATION/ INITIATION (let, const)

    - the term for when we "create" a variable. in code terms we say "declare a variable" or "initiate a variable" (i say the first way usually)


    SYNTAX for declaration 
        - there are THREE(3) options for declaring/ initializing a variable
        - each keyword has a purpose
        1. var (deprecated, meaning we no longer use this. ES6 (the update) gave us better keywords to declare variables)

        2. let (use this when a variable is going to or might change. i say when i doubt, use this)

        3. const (short for constant. only use this when you do not want your variable to ever change 
            (code term is "reassign") use this when you do not want your variable to be reassigned)


        example declarations:
            let myName
            let age

        this is telling the computer to create a (empty) space in memory and call it myName. and create another space in memory called age.
        now, anytime we reference these variables the computer will search it's memory looking for myName and grab the value out of there

        ... but wait, we did not give it a value yet. we only DECLARED it

____________________________________________________________________________________________________________________________________________________________________________________________

ASSIGNMENT (=)

    - ASSIGNMENT OPERATOR IS =
    - when you see = THINK assignment!!! always!!!
    - the term for assigning (lol sorry maybe think "associating") a value to a declared variable
    - done with a single =

    - can be done in a single line at the same time declaration is done
        ** but understand that these are actually 2 different things happening!!

        we declare an 'age' variable with:
            let age
        we assign a value to the 'age' variable with:
            age = 25

        HOWEVER, they can be executed together in one line like:
            let age = 25

            ** essentially, we told the computer "hey, remember this word (aka variable) called 'age'. and also, remember it's value is 25"
                and the computer will always rememeber it!!
    


*************** SHORT SUMMARY *******************************************
    declaration is CREATING a "bucket" in memory and giving that "bucket" a name.

    assignment is dumping a VALUE in that bucket for later referencing.

    when you see = think ASSIGNMENT ALWAYS!!!!
*************************************************************************
____________________________________________________________________________________________________________________________________________________________________________________________

DATA TYPES

    - we know how to create variables now with declaration and assignment. but, what values can we assign to these variables?

    - thats where DATA TYPES come in
    - we understand that the value stored in variables is considered DATA, right? so now lets break down the different kinds of data


    -COMMON DATA TYPES
    1. STRING ( ''(single quotes), "" (double quotes), `` (backticks) )
    2. NUMBER (... self explanatory. literally a number)
    3. BOOLEAN (true, false)
    4. ARRAY ( [] )
    5. OBJECT ( {} )
    6. UNDEFINED
    7. NULL

____________________________________________________________________________________________________________________________________________________________________________________________

STRING ( '', "", `` )

    - denoted with ''(single quotes) ""(double quotes) ``(back ticks)
    - used to store TEXT
        * can also store number and symbols(has to be inside quotes/ticks)

    - examples:
        let myName = 'jenna'
        let username = 'student123'

        ** to drill into your head the data type practice reading it aloud as 
            "let my name equal STRING jenna". "let username equal STRING student123"
        ** ^^ this will help in the weird cases where we assign a number as a string. 
            (meaning we put a number in quotes... that's literally it)

        let age = '25'
        ** MAKE SURE to read this as "let age equal STRING 25" ..it'll help you out later i promise


        - when you see any type of quotes think STRING always!!!



        SOME THINGS TO KEEP IN MIND ABOUT STRINGS

            1. what happens when you are trying to assign a value that includes quotes?
                - common practice is to use "" (double quotes) on the outside and '' (single quotes) inside

                - example:
                    let mcdreamyQuote = "it's a beautiful day to save lives"

                    * notice double quotes on outside to let computer know, "hey this mcdreamyQuote variable i'm storing is a STRING data type"
                    * quotes mark the beginning and end of a string, therefore if the quote INSIDE matches the STARTING quote, it'll cut your string variable short
                    
                    don't take my word for it, test it out yourself
                        - open a new js file called testing.js or something. 
                            paste statement that declares and assigns mcdreamyQuote into the new file. 
                        ** notice (unless you changed your settings, that the value(what's written after the assignment operator (=)) is in pinkish letters. strings are in pink in vs code)
                            - now, erase the double quote at the beginning and end of the string. replace both with a sinlge quote '.
                                - do you notice the red squiggly line? 
                                    thankfully js is like microsoft word and google docs and doesn't let you get away with  errors.
                                - do you also notice how the pinkish letters are only on 'it'? 
                                    thats because since the string OPENED with a single quote, 
                                    it will END on the next single quote it sees. why? bc of js syntax. the way the language works. 

            2. how to never run into problems with cutting a string short by mistake?
                - well, i can't say never honeslty, but try using ``(backticks) more often, or altogether even. 
                ** plus, this will help with something called 'template literal syntax'



    TEMPLATE LITERALS ( `${}` )
        - string data type
        - whats the hype? 
            - template literals allow us to write strings while also allowing us to escape the string temporarily...
            - ummm what does that even mean? 
                - well, when you're writing a string with the basic quotes (single or double), 
                    js will think of everything inside the quotes as part of the quote.

                okay that didnt help much did it? lol

                - lets say that inside your quote you want to reference one of your variables from earlier. normally, you'd have to do something like this: 

                    let name = 'jenna'
                    console.log('hi, my name is ' + name + '. How are you today?')

                * notice how i have to START the quote(first single quote), and right before i reach the variable i am referencing,
                    i EXIT the string (via second single quote), CONCATENATE(more on this in a minute) the variable i need,
                    and re-enter(third single quote) and finish the string (fourth and final single quote.)
                    * yes the space between 'is ' and the closing quote is intentional (more on that when we get into concatenation) 
                    

                - however, with template literals there is special syntax that makes referencing a variable easier. watch:

                    let name = 'jenna'
                    console.log(`hi, my name is ${name}. How are you today?`)
                
                * ${} tells the computer "hey, the word(s) inside me are actually variables. grab and replace me with it's value please" 
                    and that's exaclty what the computer does. it finds the place in memory called 'name' and puts the variable's value in it's place

                    **** dont take my word for it, try it out yourself.

____________________________________________________________________________________________________________________________________________________________________________________________

NUMBERS 

    - number data type
    - nothing fancy, just literal numbers.
    - technically cannot hold an infinite value, but thats not important right now
        * google "number data type js mdn" if you want to geek out a little

    examples:

        let age = 25

        ** read this as "let age equal NUMBER 25"
        this will prevent future confusion when seeing something like:
            let age = '25'
            * this reads as "let age equal STRING 25". there is a difference.

    
    there is not much to say about numbers until we get into different operators

____________________________________________________________________________________________________________________________________________________________________________________________

BOOLEAN (true, false)
    - data type
    - only 2 different values true and false
    - useful for conditional statements


        examples:

            let canSing = false
            let canDance = false
            let isGoodAtMath = true

        ** you can read these as "let canSing equal BOOLEAN false". 
            "let canDance equal BOOLEAN false". 
            "let isGoodAtMath equal BOOLEAN true" but that isn't really necessary because true/false are both text
            and the only other variable type for text is STRING and you know these are not STRINGs because ??? there is no quotes!
        
        careful not to confuse these with something like:

            let canWhistle = 'false'

        ** this is NOT a boolean data type. why? think about how you would read this. "let canWhislte equal STRING false"
            - strings are a different data type. don't be fooled

************** SUMMARY ******************
true or false value
handy for conditionals
*****************************************

____________________________________________________________________________________________________________________________________________________________________________________________

ARRAY []
    * arrays are toasters (if you get it LOL if not watch Leon Noel)
    - data type
    - when you see [] brackets, think ARRAY
    - separate each item with , comma

    what is an array?
    - data type that can hold a list of data

    arrays are ordered
        - meaning each piece of data is associated with a number. starting at 0, incrementing by 1
        - "zero-based indexing"
            - code term for simply saying that the start of an array is associated with the number 0 and counts up by 1 from there on

        examples:

            let numbersArray = [63, 7, 22, 54, 85]

        ** read this as "let numbersArray equal ARRAY 1, 2, 3, 4, 5"
            * would be even better to read as "NUMBER 1, NUMBER 2, NUMBER 3" etc. just to solidify the data type in your head
        
            let mixedTypeArray = [3, 'jenna', '312', true]

        ** read this as "let mixedTypeArray equal ARRAY NUMBER 3, STRING jenna, STRING 312, BOOLEAN true"


        what is so special about arrays?
            - arrays are special because you can (relatively) easily access data from them

            okay, but why? what makes arrays easily accessible?
                - arrays come (yes built into the js language) with useful properties and methods (more on those in a bit)

    

    SYNTAX FOR ACCESSING DATA IN ARRAYS

        - arrayName[index number you want to access]

        examples

            let colors = ['red', 'orange', 'yellow']
            let firstColor = colors[0]
            let secondColor = colors[1]
            let lastColor = colors[2]

        ** "let colors equal ARRAY STRING red, STRING orange, STRING yellow"
            "let firstColor equal colors INDEX 0" "let secondColor equal colors INDEX 1" "let lastColor equal colors INDEX 2"


        what if our array was 1,000 variables long? how would we access the last value in that case?
            - thats where some array properties come into play
                ** google 'array properties mdn' (tbh i dont think there is that many.. 
                    however, there are tons and tons of methods... yes properties and methods are different)

                most commonly used property (in my opinion)
                    - the length property


        HOW TO USE LENGTH PROPERTY
            - arrayName.length (name of array followed by a period follow by length)
            - the length property returns a NUMBER data type
                - since it returns a number we can manipulate it with some arithmetic
                
            example:
                imagine this array listed every single animal in the world, and we want to know what the last animal is... this is how we'd do it:

                    let everyAnimalInTheWorld = ['lion', 'tiger', 'bear', 'shark']
                
                we know to access the first data in the array we use:

                    let firstAnimal = everyAnimalInTheWorld[0]

                why? because zero-based indexing. arrays count from 0


                to access the last item, we use:

                    let lastAnimal = everyAnimalInTheWorld[everyAnimalInTheWorld.length - 1]

                ** woah thats a little confusing huh? let's read it. "let lastAnimal equal everyAnimalInTheWorld INDEX everyAnimalInTheWorld dot length minus 1"

                    now that we can read it lets break it down
                    1. let lastAnimal, easy you know this. thats declartion.
                    2. = ... well that's assignment but uh what is it assigned to? whats the value?
                    3. everyAnimalInTheWorld[] ... okay the brackets let me know im doing something with an array and it's indexes(indices maybe? idk)
                        * but wait i thought indexes were numbers? not words
                    4. well, let's look inside the brackets [everyAnimalInTheWorld.length - 1]
                    5. [everyAnimalInTheWorld.length - 1]
                        - treat this like a math problem and read left to right
                        - everyAnimalInTheWorld.length ...okay i know this returns a number... but what number? 
                        - the actual length of the array!! it's very litral! 
                            this property counts how many total items are stored inside the array. (in our case 4... but imagine we dont know this)
                    6. okay so now inside our brackets we have [ 4 - 1 ] ... treat it like math. 4 - 1 evaluates to 3
                        ** why are we subtracting 1 though? remember arrays use zero based indexing. 
                            so we have to account for the length property counting from 1. this is done by subtracting 1
                    7. so what we really have here is :
                        let lastAnimal = everyAnimalInTheWorld[3]
                    
                    ** so the lastAnimal variable is equal to 'shark'

            ** if this isnt making sense that's okay. give yourself time. the more we use it the more it'll make sense


            practice with this code: log the first and last items to the console

                let shoppingList = [ 'mangoes', 'bananas', 'water', 'juice' ]
                let schoolSubjects = [ 'math', 'science', 'social studies', 'english']

    


    THERE ARE WAY TOO MANY METHODS TO GO OVER EACH
        - try to commit the main ones to memory (.push(), .shift(), .pop(), .unshift())

        -  there are even more special methods that allow us to iterate(loop) over arrays
            - ( .forEach(), .map(), .filter() ) look at mdn for more info (and leon noel js loop videos)

        - there is no shame in googling. EVER!! problem solving is a great skill. use this as an opportunity to improve yours



*************** SUMMARY ******************************************
    [] think ARRAY
    arrays count from 0
    can hold every data type (including other arrays)
    special because of many many built in properties and methods to manipulate data
*******************************************************************

____________________________________________________________________________________________________________________________________________________________________________________________

OBJECTS {}
    - mother of all data types (kind of a joke kind of not, you'll see later)
    - denoted with {} curly braces
    - like arrays, can store every other data type including other objects

    - collection of properties (... similar to the properties we use to interact with arrays but... we'll get into that later)
        - properties are made of key(or name): value pairs


        example:
            let student = {
                school: 'perscholas',
                course: 'software engineering',
                isTeacher: false,
                isLearning: true,
                currentGrades: [98, 98, 100]
            }

        ** this is how i personally would read this object 
            " let student equal OBJECT school is STRING perscholas, 
            course is STRING software engineering, isTeacher is BOOLEAN false,
            isLearning is BOOLEAN true, currentGrades is ARRAY NUMBER 98, NUMBER 98, NUMBER 100"
        so this is a bit tricky because the only thing declared in memory is a student OBJECT. 
            but within the student object we have properties that also hold value. 
            but these are only accessible THROUGH the student object

        - what does that mean?
            - to access the value of school we cannot simply console.log(school)
            - instead, to access the value of school we use :

            console.log(student.school)
            console.log(student['school'])


        ACCESSING DATA IN OBJECTS (two ways)
            1. dot notation
                console.log(student.school)
                    - "console dot log student dot school"
                    - this finds the value of school that is attached(.) to student and logging it to the console. 
                    - it searches the student object for a PROPERTY with the name/key of SCHOOL and logging its value, in this case 'perscholas

            2. backet notation
                console.log(student['school'])
                    - truthfully, i dont know how i would read this. i do know that i would see the [] brackets and think oh, im dealing with an array. 
                        HOWERVER, i would then notice the '' quotes and realize i'm actually dealing with an object.
                ** you may be thinking to yourself, wait quotes mean string. and you are right. is 'school' a string then? maybe i dont know actually. 
                    though, i do know that this [] bracket notation will not work without the ''quotes because javascript will think school is a variable and look for it in memory... 
                    which it is technically not in memory by itself. its only accessible through the student object
                *** lets rememeber to ask for clarity on this in class lol

            ** it gets a little more strange when you realize that the student object can also be declared and assigned with '' quotes around the property key/names like this:

                    let student = {
                        'school': 'perscholas',
                        'course': 'software engineering',
                        'isTeacher': false,
                        'isLearning': true,
                        'currentGrades': [98, 98, 100]
                    }

                    console.log(student.school)
                    console.log(student['school'])

                ** and accessed the same way. try it for yourself.


************************* SUMMARY ******************
{} think OBJECT
consist of properties
properties consist of key/name:value pairs
each property is separated by a , comma
accessed through DOT and BRACKET notation
*************************************************************
____________________________________________________________________________________________________________________________________________________________________________________________

UDNEFINED & NULL
    - DATA TYPES
    - these are confusing
    - they seem similar BUT THEY ARE DIFFERENT

    undefined is the computer saying "hey, i know this variable exists, because you declared it, but you never gave me a value to store in it"

    while null is the computer saying "i have no clue what you are even talking about"
    null is the intentional absence of value... i think

    
    UNDEFINED EXAMPLE:

        let myName
        console.log(myName)

        ** logs undefined to console. why? because the computer knows the variable myName exists but its "bucket" is empty. it has not yet been assigned
    
    NULL EXAMPLE:

        ** i cant really give an example for this because i dont fully understand it myself.
        ** my educated guess is that its like asking for a variable that has never been declared

        console.log(mysteryVariable)
        
        ** this will cause an error in the terminal. is that what null is? i dont know

____________________________________________________________________________________________________________________________________________________________________________________________

WHEN IN DOUBT ABOUT DATA TYPE, there is a handy OPERATOR at your disposal

    typeof
        - KEYWORD
        - returns STRING
        - purpose? to identify data types

        SYNTAX - typeof followed by a space and the data that is being evaluated

        how to use:
            
            typeof 77   -> evaluates to NUMBER
            typeof 'dog'  -> evaluates to STRING

        to see it in action try throwing it inside a console log:

            console.log(typeof 3) -> number
            console.log(typeof true) -> boolean
            console.log(typeof 'false') -> string (dont be tricked lol)


        can also be used to evaluate variables:

            let today = "wednesday"
            const independenceYear = 1777
            let motto

            console.log(typeof today) -> string
            console.log(typeof independenceYear) -> number
            console.log(typeof motto) -> undefined

____________________________________________________________________________________________________________________________________________________________________________________________
******************* SUMMARY ****************************


'' "" `` STRING
NUMBER .. self explanatory
true / false BOOLEAN
[] ARRAY
{} OBJECT



typeof when in DOUBT

*********************************************************



















*/
