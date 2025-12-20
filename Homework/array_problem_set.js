// This week, I want you to focus on 7 basic array algorithms. These are core skills that show up everywhere in JavaScript, interviews.

 

 

//  Reverse an array in place

function reverse_array(arr){
  last = arr.length - 1
  // console.log(arr)
  for (i = 0; i < Math.floor(arr.length/2); i+=1){
    
    temp = arr[last - i];
    arr[last - i] = arr[i];
    arr[i] = temp;
    //console.log(arr);
  }
  
}

// Example:

// Input: [1, 2, 3, 4]

// Output: [4, 3, 2, 1]

 

//  Replace a value at a given index

 function replace_array_val(arr, index, val){
  
  if(index >= arr.length){
    console.log("Out of range!");
    return;
  }
  arr[index] = val;
}

// Example:

// Input: ([10, 20, 30], index = 1, value = 99)

// Output: [10, 99, 30]
 

//  Change all values in an array to a given element

function replace__all_array_vals(arr, val){
  
  for (i = 0; i < arr.length; i += 1){
    arr[i] = val;
  }
  
}

// Example:

// Input: ([1, 2, 3], 0)

// Output: [0, 0, 0]

 

//  Remove the first element from an array (without using .shift())

function remove_first_element(arr){
  temp = [];
  if ( 0 >= arr.length){
    console.log("No Values in array");
    return;
  }
  
  for( i = 1; i < arr.length; i+=1){
    temp.push(arr[i]);
    
  }
  arr = temp;
  // console.log(arr);
}

// Example:

// Input: [5, 6, 7]

// Output: [6, 7]

 

 

//  Find the largest number in an array

function largest_number_in_array(arr){
   if ( 0 >= arr.length){
    console.log("No Values in array");
    return;
  }
  
  max = arr[0];
  for (i = 1; i < arr.length; i+=1){
    if (arr[i] > max){
      max = arr[i];
    } 
  }
  //console.log(max);
}

// Example:

// Input: [3, 9, 2, 5]

// Output: 9

 

 

//  Count how many times a value appears

function number_of_occurrences(arr, val){
   if ( 0 >= arr.length){
    console.log("No Values in array");
    return;
  }
  
  occurrences = 0;
  for (i = 0; i < arr.length; i+=1){
    if (arr[i] === val){
      occurrences += 1;
    } 
  }
  //console.log(occurrences);
}
// Example:

// Input: ([1, 2, 2, 3, 2], 2)

// Output: 3

 

 

//  Create a new array with only even numbers

function just_even_numbers(arr){
   if ( 0 >= arr.length){
    console.log("No Values in array");
    return;
  }
  
  temp = [];
  for (i = 0; i < arr.length; i+=1){
    if (!(arr[i] % 2)){
      temp.push(arr[i]);
    } 
  }
  
  arr = temp;
  //console.log(arr);
}

// Example:

// Input: [1, 2, 3, 4, 5, 6]

// Output: [2, 4, 6] 

// All solutions should be written as functions
// Avoid built-in methods unless discussed in class