// https://github.com/janke-learning/truthiness/blob/master/operators-of-truthiness.md


{
  const pageTitle = 'truthiness operators';
  const header = document.createElement("h2");
  header.innerHTML = pageTitle;
  document.body.appendChild(header);
  console.groupCollapsed(pageTitle);
}


// careful!  this isn't quite like the 'or' you use in conversation
const orTests = [
  { name: '1, 1', args: [1, 1], expected: 1 },
  { name: '0, 1', args: [0, 1], expected: 1 },
  { name: '1, 0', args: [1, 0], expected: 1 },
  { name: '0, 0', args: [0, 0], expected: 0 },
  { name: 'NaN, "true"', args: [NaN, "true"], expected: "true" },
  { name: '"true", NaN', args: ["true", NaN], expected: "true" },
  { name: 'NaN, NaN', args: [NaN, NaN], expected: NaN },
  // complete these test cases
  { name: 'undefined,true', args: [undefined,true], expected: true },
  { name: 'undefined,undefined', args: [undefined,undefined], expected: undefined },
  { name: 'number,number', args: [0,1], expected: 1  },
  { name: 'false,false', args: [false,false], expected: false },
  { name: 'Infinity,1', args: [Infinity,1], expected: Infinity },
  { name: 'string,infinity', args: ['abcd',Infinity], expected: 'abcd' },
  { name: 'boolean,array', args: [false,[1]], expected: [1] },
  { name: '" A", true', args: ["A",true], expected: "A" },
];
function or(a, b) {
  return a || b;
}
or.quizzing = true;
evaluate(or, orTests);


// careful!  this isn't quite like the 'and' you use in conversation
const andTests = [
  { name: '1, 1', args: [1, 1], expected: 1 },
  { name: '0, 1', args: [0, 1], expected: 0 },
  { name: '1, 0', args: [1, 0], expected: 0 },
  { name: '0, 0', args: [0, 0], expected: 0 },
  { name: 'NaN, "true"', args: [NaN, "true"], expected: NaN },
  { name: '"true", NaN', args: ["true", NaN], expected: NaN },
  { name: 'NaN, NaN', args: [NaN, NaN], expected: NaN },
  // complete these test cases
  { name: 'null,1', args: [null,1], expected: null },
  { name: '1,1', args: [1,1], expected: 1 },
  { name: 'NaN,false', args: [NaN,false], expected: NaN },
  { name: 'true,true', args: [true,true], expected: true },
  { name: '0,0', args: [0,0], expected: 0 },
  { name: 'false,false', args: [false,false], expected: false },
  { name: '"ABC",true', args: ["ABC",true], expected: true },
  { name: '1e3,false', args: [1e3,false], expected: false },
];
function and(a, b) {
  return a && b;
}
and.quizzing = true;
evaluate(and, andTests);



const notTests = [
  { name: '1', args: [1], expected: false },
  { name: '0', args: [0], expected: true },
  { name: 'NaN', args: [NaN], expected: true },
  { name: '"hi!"', args: ['hi!'], expected: false },
  // complete these test cases
  { name: 'null', args: [null], expected: true },
  { name: '0', args: [0], expected: true },
  { name: '1e3', args: [1e3], expected: false },
  { name: 'Infinity', args: [Infinity], expected: false },
  { name: '300', args: [300], expected: false },
  { name: '"ABC"', args: ["ABC"], expected: false },
  { name: 'undefined', args: [undefined], expected: true },
  { name: '-1', args: [-1], expected: false },
];
function not(a) {
  return !a;
}
not.quizzing = true;
evaluate(not, notTests);


const ternaryTests = [
  { name: 'true', args: [true, 'true', 'false'], expected: 'true' },
  { name: 'false', args: [false, 'true', 'false'], expected: 'false' },
  { name: 'NaN', args: [NaN, 'first', 'second'], expected: 'second' },
  { name: '"hi!"', args: ['hi!', '?', ':'], expected: '?' },
  { name: '0', args: [0, 'truthy', 'falsey'], expected: 'falsey' },
  // complete these test cases
  { name: 'undefined', args: [undefined,'true', 'false'], expected: 'false' },
  { name: '1', args: [1,'first', 'second'], expected: 'first' },
  { name: '"ABC"', args: ["ABC",'t','f'], expected: 't' },
  { name: 'Infinity', args: [Infinity,'second','first'], expected: 'second' },
  { name: '1e3', args: [1e3,'true', 'false'], expected: 'true' },
  { name: '-2', args: [-2,'true', 'false'], expected: 'true' },
  { name: '100000', args: [100000,'true', 'false'], expected: 'true' },
  { name: 'false', args: [false,'true', 'false'], expected: 'false' },
  { name: '0', args: [0,'true', 'false'], expected: 'false' },
];
function ternary(a, b, c) {
  return a ? b : c;
}
ternary.quizzing = true;
evaluate(ternary, ternaryTests);


{
  console.groupEnd();
  document.body.appendChild(document.createElement('hr'));
}
