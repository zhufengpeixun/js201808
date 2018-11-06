// es7 语法
// ... 展开运算符
let  obj1 = {a:1,b:2};
let newObj = {...obj1};// 这是一个新的对象；
console.log(obj1===newObj);
//  在JS中只要遇到{}、[] 都会开辟一个新的空间地址；
console.log({}=={});
//  去重； 数组的去重；
// 课下的思考题
let  ary = [{a:1,b:2},{a:1,b:3},{a:1,b:4},{a:1,b:2}];
//Object.assign
// 如果属性相同，后面的会把前面的覆盖；如果对象中不存在，就相当于新增；
let o ={a:1,b:3};
let h = {a:2,c:5};
let  u = {...h,...o};
console.log(u);//{}


