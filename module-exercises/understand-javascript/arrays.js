{
  const pageTitle = 'arrays';
  const header = document.createElement("h2");
  header.innerHTML = pageTitle;
  document.body.appendChild(header);
  console.groupCollapsed(pageTitle);
}

function example_comparingArrays() {
  let a = [0, 1];
  let b = [0, 1];
  console.assert(a !== b, 'a should not strictly equal b');

  b = a;
  console.assert(a === b, 'a should strictly equal b');

  // it's not about the contents of the array
  // it's about the array the variable points to
}
evaluate(example_comparingArrays);


function example_swappingArrayReferences() {
  let a = ["b"], b = ["a"], temp = null;

  // swap the arrays to which each variable points
  temp = a;
  a = b;
  b = temp;

  console.assert(a[0] === 'a', 'a[0] should store "a"');
  console.assert(b[0] === 'b', 'b[0] should store "b"');
}
evaluate(example_swappingArrayReferences);


function example_swappingArrayValues() {
  let a = ["b"], b = ["a"], temp = null;

  // swap the arrays to which each variable points
  temp = a[0];
  a[0] = b[0];
  b[0] = temp;

  console.assert(a[0] === 'a', 'a[0] should store "a"');
  console.assert(b[0] === 'b', 'b[0] should store "b"');
}
evaluate(example_swappingArrayValues);


function example_garbageCollectingArrays() {
  // if no variables reference an array, it disappears

  let pointer1 = ['hi!'];
  let pointer2 = pointer1;

  pointer1 = null;
  pointer2 = null;

  // never to come back again
  // this is the only way to truly delete an array
}
evaluate(example_garbageCollectingArrays);


function passTheAssertions1() {
  ; // declare and assign a1
  ; // declare and assign a2
  console.assert(a1 === a2, 'a1 should strictly equal a2');

  ; // declare and assign b1
  ; // declare and assign b2
  console.assert(b1 !== b2, 'b1 should not strictly equal b2');

  // ---

  ; // write one line to pass the assertions
  console.assert(a1[0] === a2[0], 'a1[0] should strictly equal a2[0]');
  console.assert(a1[0] === 'hi!', 'a1.x should strictly equal "hi!"');

  ; // write two lines to pass the assertions
  ;
  console.assert(b1[0] === b2[0], 'b1[0] should strictly equal b2[0]');
  console.assert(b1[0] === 'bye!', 'b1.x should strictly equal "bye!"');
}
evaluate(passTheAssertions1);


function passTheAssertions2() {
  const value1 = 5;
  let reference1 = [];

  ; // write this line
  console.assert(value2 === value1, "value1 should strictly equal value2");

  ; // write this line
  console.assert(reference2 === reference1, "reference1 should strictly equal reference2");

  value2 = value2 + 1; // write this line
  console.assert(value1 !== null, "value1 should strictly equal ___");

  ; // write this line
  console.assert(reference1[0] === reference2[0], "references[0] should be strictly equal");
  console.assert(reference1[0] === 'hi!', "reference1[0] should be strictly equal to 'hi!'");

  ; // write this line
  console.assert(reference1 === reference2, "references should be strictly equal");

  // remove the array from memory
  ; // write this line
  ; // write this line
}
evaluate(passTheAssertions2);


function passTheAssertions3() {
  ; // write this line
  ; // write this line
  console.assert(arr1 !== arr2, 'the variables should not be strictly equal');
  console.assert(arr1[1] === arr2[1], 'their first entries should be the same');
  console.assert(arr1[1] === 'B', 'arr1[1]] should be "B"');

  const index = 0;
  console.assert(arr1[index] === arr2[index], 'arr1[index] should strictly equal arr2[index]');
  console.assert(arr1[index] === 'A', 'arr1[index] should be "A"');

  ; // write this line
  ; // write this line
  console.assert(arr1[arr2[2]] === 'B', 'arr2[2] should be "B"s index in arr1');
  console.assert(arr1[arr2[2]] === arr2[arr1[2]], 'some tricky nested thing should be true');

  ; // write this line
  console.assert(arr1 !== arr2, 'arr1 should strictly equal arr2');
  console.assert(arr3 !== arr1, 'arr3 should not strictly equal arr`');
  console.assert(arr3 === arr2, 'arr3 should strictly equal arr2');
  console.assert(arr3[index] === arr1[0], 'arr3[index] should strictly equal arr1[0]');

  ; // write this line
  console.assert(arr3[2] === arr2[index], 'arr3[2] should strictly equal arr2[index]');
}
evaluate(passTheAssertions3);


{
  console.groupEnd();
  document.body.appendChild(document.createElement('hr'));
}
