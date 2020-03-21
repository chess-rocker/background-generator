var a = 5;
var b = a;
b++;

let obj = {a: 'a', b: 'b', c: {deep: 'try me'}};
let obj2 = Object.assign({}, obj);
let clone = {...obj};

obj.c = 5;