class  A {
    constructor(){
        this.a = 10;
        this.b = 100;
    }
    // 原型上的方法
    getA(){

    }
    getB=()=>{
        // 该方法十一个箭头函数；
    }
    static d = 18
}
console.log(A.d);
class B extends A{
    constructor(){
        super();
    }
    getB(){
    }
}
let a = new A;
let b = new B;
console.log(a);//{a:10,b:100}
console.log(b);
b.getA();
a.getA();
A.prototype.getA();
// 继承： 原型继承  call继承  寄生组合继承 es6继承；
// 函数： 普通函数、构造函数、对象；
function HH() {

}
HH.c = 19;
