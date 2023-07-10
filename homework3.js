/// task 1

function task1(arr){
    if(arr.every(i => !isNaN(i))){
        if(arr.length > 1){
            const max = Math.max(...arr)
            const min = Math.min(...arr)
            return max - min;
        }
        return 0;
    }
    throw new TypeError("array should contain only numbers.");
}
try{
const result = task1([1, 2, 3, -4])

    // console.log(result)
}
catch(err){
    console.error(err)
}

/// task 2

function task2 (str, num){
    if(typeof str !== "string"){
        throw new TypeError("first parameter should be a string.")
    }
    if(isNaN(num)){
        throw new TypeError("second parameter should be a number.")
    }
    const arrOfWords = str.split(" ");
    const resultArray = arrOfWords.filter(word => word.length > num);
    return resultArray;
}
try{
    // console.log(task2(
    //     `Lorem Ipsum is simply dummy text of the
    //     printing and typesetting industry. Lorem Ipsum 
    //     has been the industry's standard dummy text 
    //     ever since the 1500s, when an unknown printer 
    //     took a galley of type and scrambled it to make 
    //     a type specimen book. It has survived not only 
    //     five centuries, but also the leap into electronic 
    //     typesetting, remaining essentially unchanged. It was 
    //     popularized in the 1960s with the release of Leeriest 
    //     sheets containing Lorem Ipsum passages, and more recently 
    //     with desktop publishing software like Lauds PageMaker including 
    //     versions of Lorem Ipsum.`, 5))
}
catch(err){
    console.error(err);
}

/// task 3

function task3 (str1, str2){
    if(typeof str1 !== "string"){
        throw new TypeError("first parameter should be a string.")
    }
    if(typeof str2 !== "string"){
        throw new TypeError("second parameter should be a string.")
    }
    const regex = new RegExp(`${str2}$`)
    return regex.test(str1);
}

try{
    // console.log(task3("str", "r"))
}
catch(err){
    console.error(err);
}

/// task 4

function averages (arr){
    if(arr.every(i => !isNaN(i)) && arr.every(i => Number.isInteger(i))){
        let resArray = [];
        for(let i = 0; i < arr.length - 1; i++){
            resArray.push((arr[i] + arr[i+1])/2);
        }
        return resArray;
    }
    throw new TypeError("array should contain only integer numbers.");
}

try{
    // console.log(averages([1,2,3,4,5,6]));
}
catch(err){
    console.error(err);
}

// task 5

// task 5.1

function countVowels(str){
    if(typeof str !== "string"){
        throw new TypeError("parameter should be a string.")
    }
    return str.match(/[euioa]/g).length;
}

try{
    // console.log(countVowels("Celebration"));
}
catch(err){
    console.error(err);
}

// task 5.2

function removeABC(str){
    if(typeof str !== "string"){
        throw new TypeError("parameter should be a string.");
    }
    if(/[a-c]/g.test(str)){
        return str.replace(/[a-c]/g, '');
    }
    return null;
}

try{
    // console.log(removeABC("This might be a bit hard"));
}
catch(err){
    console.error(err);
}

// task 6

function compareNumbers(a, b) {
    return a - b;
}

function difference(arr1, arr2){
    if(arr1.some(i => isNaN(i))){
        throw new TypeError("first array should contain only numbers")
    }
    if(arr2.some(i => isNaN(i))){
        throw new TypeError("second array should contain only numbers")
    }
    let resultArray = [];
    resultArray = [...arr1];

    arr2.forEach(i => {
        if(!resultArray.includes(i)){
            resultArray.push(i);
        }
    });
    resultArray.sort(compareNumbers);
    return resultArray;
}

try{
    // console.log(difference([1, 2, 3], [100, 2, 1, 10]));
}
catch(err){
    console.error(err);
}

// task 7

function reverseObject(obj){
    if (typeof(obj) !== "object"){
        throw new TypeError("parameter should be an object");
    }
    const resArray = Object.entries(obj).map(([key, value]) => [value, key]);
    return Object.fromEntries(resArray);
}

try{
    // console.log(reverseObject({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}));
}
catch(err){
    console.error(err);
}

// task 8

function calculateDifference(stolenThings, insuredSum){
    if (typeof(stolenThings) !== "object"){
        throw new TypeError("first parameter should be an object");
    }
    if(Object.keys(stolenThings).length == 0){
        throw new Error("Your object of stolen things should be filled.");
    }
    if(isNaN(insuredSum)){
        throw new TypeError("second parameter should be a number.");
    }
    const stolenCost = Object.values(stolenThings);
    const stolenSum = sumOfArray(stolenCost);
    if(stolenSum > insuredSum){
        return stolenSum - insuredSum;
    }
    return "Sum of stolen things should be bigger than insure sum";
}

function sumOfArray(arr){
    let sum = 0;
    for(i in arr){
        sum += arr[i];
    }
    return sum;
}

try{
    // console.log(calculateDifference({ skate: 200, painting: 200, shoes: 100 }, 400));
}
catch(err){
    console.error(err);
}

// task 9

function doesBrickFit(aBrick, bBrick, cBrick, widthWhole, heightWhole){
    const validationArray = [aBrick, bBrick, cBrick, widthWhole, heightWhole];
    if(validationArray.some(i => isNaN(i))){
        throw new TypeError("all parameters should be a number.");
    }
    if(validationArray.some(i => {return i <= 0})){
        throw new Error("all parameters should be more than zero.");
    }
    const brickSizes = [aBrick, bBrick, cBrick];
    const wholeSize = [widthWhole, heightWhole];
    brickSizes.sort(compareNumbers);
    wholeSize.sort(compareNumbers);

    if(brickSizes[0] <= wholeSize[0] && brickSizes[1] <= wholeSize[1]){
        return true;
    }
    return false;
}

try{
    // console.log(doesBrickFit(4,1,1,1,1))
}
catch(err){
    console.error(err);
}

// task 10

try{///get last element of array
    const string = String.raw`C:\Users\ivanf\t\myfile.txt`;
    const splittedString = string.split("\\");
    const res = splittedString[splittedString.length-1].slice(0, splittedString[splittedString.length-1].indexOf("."))
    // console.log(res)

}
catch(err){
    console.error(err);
}

// task 11

function validationByCaesarsCipher(str1, str2){
    if(typeof str1 !== "string"){
        throw new TypeError("first parameter should be a string.")
    }
    if(typeof str2 !== "string"){
        throw new TypeError("second parameter should be a string.")
    }
    for(let i = 0; i < str1.length; i++){
        const newStr = str2.slice(-i) + str2.slice(0, -i);
        if(str1===newStr){
            return true;
        }
    }
    return false;
}

try{
    // console.log(validationByCaesarsCipher("abcd", "dabc"))
}
catch(err){
    console.error(err);
}

// task 12

function getTheNearestNumbers(arr){
    if(arr.some(i => isNaN(i))){
        throw new TypeError("array should contain only numbers")
    }
    if(arr.length%2!=0){
        throw new Error("array should contain 2n numbers")
    }
    arr.sort(compareNumbers)
    let subtractionArray = [];

    for(let i = 0; i < arr.length - 1; i++){
        subtractionArray.push(arr[i+1] - arr[i])
    }
    const index = subtractionArray.indexOf(Math.min(...subtractionArray))
    return [arr[index], arr[index+1]]
}

try{
    // const a = [1,3,6,2,7,9];
    // while(a.length > 0){
    // const [b, c] = getTheNearestNumbers(a);
    // console.log(b,c)
    // a.splice(a.indexOf(b), 1);
    // a.splice(a.indexOf(c), 1);
    // }
}
catch(err){
    console.error(err);
}

// task 13

function gameWithString(str){
    if(typeof(str) != "string"){
        throw new TypeError("parameter should be a string");
    }

    //a
    let newStr = str.toLocaleLowerCase();
    newStr = newStr[0].toUpperCase() + newStr.slice(1)

    //b
    const urlDetector = /((https:\/\/)|(www.))[^\s]+/g;
    newStr = newStr.replace(urlDetector, "[посилання заборонено]")

    //c
    const gmailDetector = /[^\s]+@+[^\s]+.((com)|(ua)|(edu))/g;
    newStr = newStr.replace(gmailDetector, "[контакти заборонено]")

    //d
    const numberDetector = /\d\d\d\d+/g;
    newStr = newStr.replace(numberDetector, "")
    console.log(newStr.length, str.length)
    if(newStr.length > str.length){
        let iterator = 0;
        const idI=window.setInterval(()=>{
            alert("Вам потрібна допомога?"); 
            iterator++; 
            if(iterator===5){
                window.clearTimeout(idI);
            }},5000);
    }
    return newStr;
}

try{
    // console.log(gameWithString("Lorem Ipsum 1 12is123 1234simply DUMMY text of the printing and typesetting industry. https://regexr.com ff www.regexr.com f ivan.fedoniuk.kn.2021@lpnu.ua ivan@g.com"))
}
catch(err){
    console.error(err);
}

// task 14

function bracketCounter(str){
    if(typeof(str) != "string"){
        throw new TypeError("parameter should be a string");
    }
    const strArray = str.split("");
    let counter = 0;
    for(i in strArray){
        if(strArray[i] === "("){
            counter++;
        }
        if(strArray[i] === ")"){
            counter--;
        }
        if(counter < 0){
            return "Brackets is not balanced";
        }
    }
    if(counter !== 0){
        return "Brackets is not balanced";
    }
    const resStr = strArray.join("");
    return resStr;
}

try{
    const answer = bracketCounter("(123(321(45)3)3)");
    const h1Element = document.querySelector(".task14");
    h1Element.innerHTML = answer;
}
catch(err){
    console.error(err);
}

// task 15
function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function GetRandomArray(arr, num){
    let resArray = []
    for(let i = 0; i < num; i++){
        resArray.push(getRandomElement(arr))
    }
    return resArray;
}

function getPassword(){
    const up = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    const low = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    const dig = ['0','1','2','3','4','5','6','7','8','9'];

    const passwordLength = Math.floor(Math.random() * 14 + 6);
    const passwordUpAmount = Math.floor(Math.random() * (passwordLength - 1 - 2) + 2);
    let maxAmountOfDigits = 5;

    if((passwordLength - 1 - passwordUpAmount) < 5){
        maxAmountOfDigits = passwordLength - 1 - passwordUpAmount;
    }

    const passwordDigitsAmount = Math.floor(Math.random() * maxAmountOfDigits)
    const restAmount = passwordLength - 1 - passwordUpAmount - passwordDigitsAmount;
    const underscore = "_";

    const upArray = GetRandomArray(up, passwordUpAmount);
    const digitsArray = GetRandomArray(dig, passwordDigitsAmount)
    const restArray = GetRandomArray(low, restAmount);

    const resultPassArray = [underscore, ...upArray, ...digitsArray, ...restArray];

    
    let i = true;
    while(i){
        resultPassArray.sort(() => 0.5 - Math.random());
        for(let j = 0; j< resultPassArray.length-1; j++){
            if(typeof(resultPassArray[j])==="number" && typeof(resultPassArray[j+1])==="number"){
                i = true;
                break;
            }
            i = false;
        }

    }
    const answer = resultPassArray.join("");
    return answer;
}

// console.log(getPassword());

// task 16

function gameWithArray(arr){
    if(arr.some(i => isNaN(i))){
        throw new TypeError("array should contain only numbers")
    }
    arr.sort(compareNumbers);
    let resArray = [arr[0]];
    for(let i = 0; i < arr.length - 2 ; i++){
        resArray.push(null);
    }
    arr.shift();
    arr.reverse();
    resArray.push(...arr);
    return resArray;
}

try{
    // array = [1, 5, 3, 4, 7];
    // console.log(gameWithArray(array));
}
catch(err){
    console.error(err);
}

// task 17

function getFrequencyOfSymbols(str){
    if(typeof(str) != "string"){
        throw new TypeError("parameter should be a string");
    }
    let frequencyArr = [];
    const strArr = str.split('');
    for(i in strArr){
        if(!frequencyArr.includes(strArr[i])){
            frequencyArr.push(strArr[i]);
        }
    }
    let object = {};
    frequencyArr.forEach((key) => object[key] = 0);

    for(i in strArr){
        object[strArr[i]] = object[strArr[i]] + 1;
    }
    const sortedObject = Object.fromEntries(Object.entries(object).sort(compareArrayNumbers))
    const resultArray = Object.entries(sortedObject).reverse();
    const resultString = getArrayOfAllSymbols(resultArray).join('')
    return resultString
}

function getArrayOfAllSymbols(arr){
    let resArr = [];
    for(i in arr){
        for(let j = 0; j< arr[i][1]; j++){
            resArr.push(arr[i][0])
        }
    }
    return resArr;
}

function compareArrayNumbers(a, b){
    return a[1] - b[1];
}

try{
    // console.log(getFrequencyOfSymbols("Lorem Ipsum is simply dummy text of the printing and typesetting industry."))
}
catch(err){
    console.log(err);
}

// task 18

function maxCommonString(str1, str2){
    if(typeof str1 !== "string"){
        throw new TypeError("first parameter should be a string.")
    }
    if(typeof str2 !== "string"){
        throw new TypeError("second parameter should be a string.")
    }
    let string = "";
    let maxCommon = ""
    for (let i = 0; i < str1.length; i++) {
        string += str1[i];
        if(str2.includes(string)){
            if(i == str1.length - 1 && maxCommon.length < string.length){
                maxCommon = string;
                break
            }
            continue;
        }
        else{
            maxCommon = string.slice(0,-1);
            string = ""
            i--;
        }  
    }
    return maxCommon
}

try{
    // const string1 = "DDDIpsumfDoloremq"
    // const string2 = "wwIpsumfjirDoloremq"
    // console.log(maxCommonString(string1, string2))
}
catch(err){
    console.error(err);
}

// task 19

function getCaesarCode(str, num){
    if(typeof str !== "string"){
        throw new TypeError("first parameter should be a string.")
    }
    if(typeof num !== "number"){
        throw new TypeError("second parameter should be a number.")
    }
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
        'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    if(num >= alphabet.length/2){
        num = num%(alphabet.length/2)
    }
    let resString = "";
    for (let i = 0; i < str.length; i++) {
        resString += alphabet[alphabet.indexOf(str[i]) + num]
    }
    return resString;
}


try{
    // console.log(getCaesarCode("hello", 2))
}
catch(err){
    console.error(err);
}

//task 20

function anagram(str1, str2){
    if(typeof(str1) !== "string"){
        throw TypeError("first parameter should be a string");
    } 
    if(typeof(str2) !== "string"){
        throw TypeError("second parameter should be a string");
    } 
    if(str1.length != str2.length){
        throw Error("Strings should have identical length");
    }

    while(str1.length > 0) {
        if(str2.includes(str1[0])){
            str1 = str1.replace(str1[0], "")
            sre2 = str2.replace(str1[0], "")
        }
        else{
            return "Those strings are not anagrams"
        }
    }
    return "Those are anagrams"
}

try{
    // console.log(anagram("hello", "loleh"))
}
catch(err){
    console.error(err);
}

// task 21

const University = {
    title: "LPNU",
    rector: "Bobalo Yuriy",
    students: [],

    addStudent: (id, name, faculty, course=1)=>{
        const student = {id: id, name: name, faculty: faculty, course: course}
        University.students.push(student);
    },

    removeStudent: (id)=>{
        University.students = University.students.filter((student)=> {
            return student.id != id
        })
    },

    getStudentData: (id) => {
        const res = University.students.filter((student)=> {
            return student.id == id
        })
        return res;
    },

    getStudentsByCourse: (course) => {
        const res = University.students.filter((student)=> {
            return student.course == course
        })
        return res;
    },

    getStudentsByFaculty: (faculty) => {
        const res = University.students.filter((student)=> {
            return student.faculty == faculty
        })
        return res; 
    }

};
try{
    // University.addStudent(10, "Ivan Fedoniuk", "computer science", 3);
    // University.addStudent(11, "Mychailo Kotlarevskiy", "computer science");
    // University.addStudent(12, "Serhiy Zhadan", "Filology", 3);
    // University.addStudent(13, "Taras Shevchenko", "computer science", 2);
    // University.addStudent(14, "Elon Musk", "Management", 3);

    // console.log(University.getStudentData(10));
    // console.log(University.getStudentsByCourse(3));
    // University.removeStudent(10)
    // console.log(University.getStudentsByFaculty("computer science"));
}
catch(err){
    console.error(err);
}
// task 22

function statistics(str){
    if(typeof str !== "string"){
        throw new TypeError("first parameter should be a string.")
    }
    const arrOfWords = str.split(" ");
    console.log("Num of words:" + arrOfWords.length);

    const arrOfSentences = str.split(".");
    console.log("Num of sentences:" + arrOfSentences.length);

    console.log("Num of symbols:" + str.length);
    let frequencyArr = []
    for(i in arrOfWords){
        if(!frequencyArr.includes(arrOfWords[i])){
            frequencyArr.push(arrOfWords[i]);
        }
    }
    let object = {};
    frequencyArr.forEach((key) => object[key] = 0);

    for(i in arrOfWords){
        object[arrOfWords[i]] = object[arrOfWords[i]] + 1;
    }
    const sortedObject = Object.fromEntries(Object.entries(object).sort(compareArrayNumbers))
    const resultArray = Object.entries(sortedObject).reverse();
    return resultArray[2]
}

try{
    // console.log(statistics(`Lorem Ipsum is simply dummy text of the
    //     printing and typesetting industry. Lorem Ipsum 
    //     has been the industry's standard dummy text 
    //     ever since the 1500s, when an unknown printer 
    //     took a galley of type and scrambled it to make 
    //     a type specimen book. It has survived not only 
    //     five centuries, but also the leap into electronic 
    //     typesetting, remaining essentially unchanged. It was 
    //     popularized in the 1960s with the release of Leeriest 
    //     sheets containing Lorem Ipsum passages, and more recently 
    //     with desktop publishing software like Lauds PageMaker including 
    //     versions of Lorem Ipsum.`));
}
catch(err){
    console.error(err);
}




