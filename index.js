// Collection Functions (Arrays or Objects)
// 1. myEach
// myEach(collection, callback)
// Parameter(s): a collection (either an object or an array),  a callback function
// Return value: The original collection
// Behavior:Iterates over the collection of elements, passing each element in turn to the callback function. 
// Returns the original, unmodified, collection.
function myEach(collection, callback)
{
    //if collection is an array
    if(Array.isArray(collection))
    {
        //we go over each element of the array and pass the element on the callback
        for (let i=0;i<collection.length;i++)
        {
            callback(collection[i]);
        }
    }
    //if its an object 
    else
    {
        //we go over every key in this collection object
        for (let key in collection)
        {
            callback(collection[key]);
        }
    }
    return collection;
}

// 2. myMap
// myMap(collection, callback)
// Parameter(s):  a collection (either an object or an array),  a callback function
// Return value:  A new array
// Behavior: Produces a new array of values by mapping each value in collection through a 
// transformation function, callback. Returns the new array without modifying the original.
function myMap(collection, callback) 
{
    const newArray = [];
    //if collection is an array
    if (Array.isArray(collection)) 
    {
        //we go over every key in this collection object
        for (let i = 0; i < collection.length; i++) 
        {
            //Produces a new array of values by mapping each value in collection through a callback
            newArray.push(callback(collection[i], i, collection));
        }
    } 
    //if its an object , we can't use map on object, so will use push
    else 
    {
        // If it's an object, iterate over its keys
        for (let key in collection) 
        {
            if (collection.hasOwnProperty(key)) 
            { 
                //Produces a new array of values by mapping each value in collection through a callback
                newArray.push(callback(collection[key], key, collection));
            }
        }
    }
    return newArray;
}
// 3. myReduce
// myReduce(collection, callback, acc)
// Parameter(s): a collection (either an object or an array), a callback function
// a starting value for the accumulator (optional)
// Return value: A single value
// Behavior: Reduce iterates through a collection of values and boils it down into a single value. 
// acc (short for accumulator) starts at the value that's passed in as an argument, 
// and with each successive step is updated to the return value of callback. 
// If a start value is not passed to myReduce, the first value in the collection should be used as the start value.
// The callback is passed three arguments: the current value of acc, 
// the current element/value in our iteration, and a reference to the entire collection.
function myReduce(collection, callback, acc)
{
    //since the accumulator (optional) we set the if condition that check
   //first check in an incident its set meaning its not undefined
    if (Array.isArray(collection)) {
        if (acc !== undefined) {
            //means it follows the reduce rule, this mean we have to pass it to the reduce
            return collection.reduce((accumulator, current) => {
                return callback(accumulator, current, collection);
             //this next part we now pass the acc set in reduce to prevent it going to default
            }, acc);
        } else {
            //this part handle if the acc is not provided
            return collection.reduce((accumulator, current) => {
                return callback(accumulator, current, collection);
            //this next part we don't pass the acc since its not there and
            // reduce set it to default 
            });
        }
    //Now what of we have an object and npt an array
    } else {
        //first convert object to an array of values
        const values = Object.values(collection); 
        //then continue like we did the array part
        if (acc !== undefined) {
            return values.reduce((accumulator, current) => {
                return callback(accumulator, current, collection);
            }, acc);
        } else {
            return values.reduce((accumulator, current) => {
                return callback(accumulator, current, collection);
            });
        }
    }
}


// 4. myFind
// myFind(collection, predicate)
// a collection (either an object or an array), a predicate (a callback function that returns true or false)
// Return value:  A single value
// Behavior: Looks through each value in the collection, returning the first 
// one that passes a truth test (predicate) or undefined if no value passes the test. 
// The function should return as soon as it finds an acceptable element, 
// without traversing the rest of the collection.
function myFind(collection, predicate)
{
    // Start with if its an array, we use the find method directly
    if (Array.isArray(collection)) 
    {
        //find follows the predicate set and return true if its satisfied inthe array
        return collection.find(predicate);
    }
    // in case of object, we convert to array of values and use find
    else 
    {
        //first convert object to values
        //find method then does its thing and return boolean depending on predicate passed
        return Object.values(collection).find(predicate);
    }
}

// 5. myFilter
// myFilter(collection, predicate)
// a collection (either an object or an array), 
// a predicate (a callback function that returns true or false)
// Return value: An array
// Behavior: Looks through each value in the collection, returning an array of all the values 
// that pass a truth test (predicate). If no matching values are found, it should return an empty array.
function myFilter(collection, predicate)
{
    //its kind of like find so will just reproduce it here and replace find with filter
    if (Array.isArray(collection)) 
    {
        return collection.filter(predicate);
    }
    else 
    {
        return Object.values(collection).filter(predicate);
    }
}

// 6. mySize
// mySize(collection)
// Parameter(s): a collection (either an object or an array)
// Return value: An integer
// Behavior: Return the number of values in the collection.
function mySize(collection)
{
    //so the aim is to return number of values inthe collection
    //its like we counting
    if (Array.isArray(collection)) 
    {
        let all = collection.length;
        return all;
    }
    else 
    {
        let allO = Object.values(collection)
        return allO.length;
    }
}
// 7. myFirst
// myFirst(array, [n])
// Parameter(s): an array, an integer (optional)
// Return value: A single element OR an array
// Behavior: Returns the first element of an array. Passing n will return the first n elements of the array.
function myFirst(array, n)
{
    //the first route will go with the n is not defined so we just return the first element of the array
    if(n === undefined)
    {
        //picks first element of the array
        return array[0];
    } 
    //but give the n we have to take the first element and the nth
    else
    {
        //so we slice the array first we take the first element
        //next is we select elements upto the n provided, 
        // so if we have [1,2,5,6] and we given n as 3 will have [1,2,5]
        return array.slice(0, n);
    }
}


// 8. myLast
// myLast(array, [n])
// Parameter(s): an array, an integer (optional)
// Return value: A single element OR an array
// Behavior: Returns the last element of an array. Passing n will return the last n elements of the array.
function myLast(array, n)
{
    //its like the above so will reproduce but replace first element with last elemnt
    if(n === undefined)
        {
            //picks last element of the array
            // just a reminder you have to get the length of the array
            return array[array.length -1];
        } 
        else
        {
            //given n we slice it up to the last n elements of the array
            return array.slice(-n);
        }    
}

// 9 . BONUS: mySortBy
// mySortBy(array, callback)
// Parameter(s): an array, a callback function
// Return value: A new array
// Behavior: Returns a sorted copy of array, ranked in ascending order by
// the results of running each value through callback. 
// The values from the original array (not the transformed values) should be 
// returned in the sorted copy, in ascending order by the value returned by callback.

function mySortBy(array, callback)
{
    //first i will use ellipsses to make a copy of my array
    const myArray = [...array];

    //now we see the magic of sort by method
    return myArray.sort((c, m)=>{
        //just making sure i have new values since the values of origin array are not transformed
        const cvalue = callback(c);
        const mvalue = callback(m);

        //ascending order means smallers first the large last so will create a condition that check this
        if(cvalue < mvalue)
        {
            //it appear first
            return 1;
        }
        else if (cvalue > mvalue)
        {
            ////it appear last
            return -1;
        }
        else
        {
            // nothing changes
            return 0;
        }
    });
}

// 10. BONUS: myFlatten
// myFlatten(array, [shallow], newArr=[])
// Parameter(s): an array, a boolean value (optional), a new array (with an assigned default value of an empty array) that will contain the flattened elements
// Return value: The new array
// Behavior: Flattens a nested array (the nesting can be to any depth).
// If you pass true for the second argument, the array will only be flattened a single level.
function myFlatten(array, shallow = false, mynewArr=[])
{
    // Iterate through each element in the array
    for (let i = 0; i < array.length; i++) {
        // If the element is an array and shallow is false or undefined, recurse
        if (Array.isArray(array[i]) && !shallow) {
            // Recursively flatten nested arrays
            myFlatten(array[i], shallow, mynewArr);
        } else {
            // Otherwise, just push the element into the new array
            mynewArr.push(array[i]);
        }
    }

    // Return the flattened array
    return mynewArr;
}

//11. myKeys
// myKeys(object)
// Parameter(s): an object
// Return value: An array
// Behavior: Retrieve all the names of the object's enumerable properties.
function myKeys(object)
{
    const allKeys = [];
    for (let key in object)
    {
        //ensuring we retrieve all the names of the object's enumerable properties.
        //no inheratance allowed
        if (object.hasOwnProperty(key)) 
        {
            allKeys.push(key);
        }
        
    }
    return allKeys;
}

// 12. myValues
// myValues(object)
// Parameter(s): an object
// Return value: an array
// Behavior: Return all of the values of the object's properties.
function myValues(object)
{
    const allValues = [];
    for(let key in object)
    {
        if (object.hasOwnProperty(key)) 
        {
            allValues.push(object[key]);
        }
    }
    return allValues;
}
