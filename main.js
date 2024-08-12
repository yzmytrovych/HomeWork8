

function capitalizeStrings(words)
{
    let result = [];
   for(let i=0; i<words.length;i++)
   {
       let temp = words[i].charAt(0).toUpperCase() ;
       result.push(temp + words[i].toLowerCase().slice(1));
   }
   return  result;
}

const words = ["apple", "banaNA", "kiWi", "ORANGE"];
console.log(capitalizeStrings(words)); // ["Apple", "Banana", "Kiwi",

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

function capitalizeStrings(array1, array2)
{
    let result = [];
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (array1[i] === array2[j]) 
                result.push(array1[i]);
        }
    }
    return  result;
}
console.log(findCommonElements(array1, array2)); // [3, 4, 5]




