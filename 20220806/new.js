//  ===================

  //原型式繼承 2022.08.06  52:00

  var Person=function(name){
    this.name=name;
  };


  //sayHello加在person裡面不是p
  //因為p裡面的屬性prototype 和Person屬性prototype指向同一個地方
  Person.prototype.sayHello=function(){
    return "Hi,I'm" +this.name;
  };
  
let p=new Person('Kuro');
console.log(p.sayHello());

// 解決： 物件的框架屬性是一樣 ,長相重複要一直重新定義 
//模仿其他程式語言做出 new

//new
 p={}; //new創空物件 做出空間讓p裡面的屬性prototype 和Person屬性prototype指向同一個地方
//並指派給this
// 若在Person.prototype加上sayHello功能
// p 本身沒有sayHello會去找prototype有沒有sayHello公能 
p.prototype=Person.prototype;   //p裡面的prototype
//空物件的屬性prototype設成new的對象
//prototype chain

//函式建構式 person 本身是函式
Person('Kuro')
this.name='kuro'
{
name:'kuro'
}
;

// js 的class不是一般的定義檔 模板類別
//他實際上還是個物件原型式繼承(語法糖)



function User(name){
//this ={};

//加上方法或屬性 to this
this.name=name;
this.isAdmin=false;

//return this;
}

//回傳this 給user
let user=new User('Jack');

alert(user.name); //Jack
alert(user.isAdmin); //false




let user1={
  name:'Jack',
  isAdmin:false,
}


// 相當於下面三行  let user2 = new User('Amy')
let user2={
  name:'Taja',
  isAdmin:true,
}




