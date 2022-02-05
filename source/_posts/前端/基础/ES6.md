---
title: ECMAScript 6.0精解
img: https://api.vvhan.com/api/acgimg
author: dearmsdan
url: /
categories:
- 前端基础
tags:
- javaScript
data: [{
       name: ''
       ,value: ''
       ,href: '/'
      }]
tips: [  
    '作者','','',''
  ]
---

ECMAScript 6.0 (以下简称ES6) 是JavaScript语言的下一代标准,已经在
2015年6月正式发布了。它的目标,是使得JavaScript语言可以用来编写复杂的
大型应用程序,成为企业级开发语言

ES6既是一个历史名词,也是一个泛指,含义是5.1版以后的JavaScript的下-
代标准,涵盖了ES2015,ES2016,ES2017等等,而ES2015则是正式名称,特
指该年发布的正式版本的语言标准

<!--more-->

## ES6介绍

ECMAScript 6.0 (以下简称ES6) 是JavaScript语言的下一代标准,已经在
2015年6月正式发布了。它的目标,是使得JavaScript语言可以用来编写复杂的
大型应用程序,成为企业级开发语言

ES6既是一个历史名词,也是一个泛指,含义是5.1版以后的JavaScript的下-
代标准,涵盖了ES2015,ES2016,ES2017等等,而ES2015则是正式名称,特
指该年发布的正式版本的语言标准



### ES6新特性

- let和const命令
- es6的模板字符串
- 增强的函数
- 扩展的字符串、对象、数组功能
- 解构赋值
- Symbol
- Map和Set
- 迭代器和生成器
- Promise对象
- Proxy对象
- async的用法
- 类class
- 模块化实现

### 浏览器的支持性

https://kangax.github.io/compat-table/es6/ 

### JS编译工具babel 

被称为下一代的JavaScript编译器。可以将es6的代码转换成es5的代码,从而让浏览器获得支持



## let和const命令

- let、const 与 var 的语法一致，都是声明变量

  - var : 声明变量有**变量提升**

    ```javascript
    var a;
    console.log(a);
    a = 2;
    // 此时输出的结果为 undefined 没有报错
    ```
    
  - var 可以重复声明，**具有覆盖性**
    
    ```javascript
    var a = 1;
    var a = 2;
    console.log(a);   // 输出结果为2
    ```
    
  - let: 声明变量**没有变量提升**
    
    ```javascript
    let a;
    console.log(a);
    a = 2;
    // 输出结果为Uncaught ReferenceError: a is not defined
    // 没有找到a变量
    ```
    
  - let 是个**块作用域**
  
    ```javascript
    console.log(a);
    if(true){
    	let a = 10;
    }
    // 输出结果为Uncaught ReferenceError: a is not defined
    // 没有找到a变量
    ```
  
  - let **不能重复声明**
  
    ```javascript
    let a = 2;
    let a = 3;
    // Uncaught SyntaxError: Identifier 'a' has already been declared
    // a已声明
    ```
  
  - const:  声明常量 一旦被声明 无法修改
  
    - const 与let 一样，**没有变量提升、不能重复声明、块作用域、不会污染全局变量**
  
- **在默认情况下使用const，在变量值需要被改变的时候使用let ，弃用var**



## 模板字符串



- 通过 模板字符串 ` ``  `  定义字符串内容
- 插入变量的方法： ` ${name(变量名)} `

```html
<div class="box"></div>

<script>
    const oBox = document.querySelector('.box');
    let id = 'x',
        name = 'Max';
    
	//js传统写法--- "<ul><li><p>id:" + id + "</p><p>name:" + name + "</p></li></ul>"
    
    let htmlStr = ` 
        <ul>
            <li>
                <p id='${id}'>${name}</p>
            </li>
        </ul>
        `;    //es6模板字符串写法

    oBox.innerHTML = htmlStr;
</script>
```



## 函数之默认值、剩余参数



- 带参数默认值的函数

  - ES5

    ```js
    // ES5 的写法
    function add(a,b){
    	a = a || 10;
    	b = b || 20;
    	return a+b;
    }
    console.log(add());   // 30
    console.log(add(5));  // 25
    console.log(add(5,5));// 10
    ```

  - ES6

    ```js
    
    // ES6 写法
    function add(a=10,b=20){
    	return a+b;
    }
    console.log(add());   // 30
    console.log(add(5));  // 25
    console.log(add(5,5));// 10
    ```

    

- 默认的表达式也可以是一个函数

  ```javascript
  function add(a=10,b=getVal(5)){
  	return a+b;
  }
  function getVal(val){
  	return var+5;
  }
  console.log(add());   // 20
  console.log(add(5));  // 15
  console.log(add(5,10));// 15
  ```

- 剩余参数

  > ES 5 获取形式参数使用 **Argument()** 获取 ,其值为数组的形式展示(伪数组)    
  > ES 6 获取形式参数方式用**剩余参数**  其值为数组的形式展示(Array实例)  
  > 剩余参数：由3个点...和一个紧跟着具名参数指定  ...keys

  - ES 5 argument() 实例

    ```javascript
    
    	// es5写法
    	function pick(obj) {
    	     let result = Object.create(null);
    	     for(let i = 1;i < arguments.length;i++){
    	         result[arguments[i]] = obj[arguments[i]]
    	     }
    	     return result;
    	 }
    	 let book = {
    	     title:'argument',
    	     author:'es5',
    	     year:2020
    	 }
    	 let bookData = pick(book,'title','year','author');
    	 console.log(bookData);
    ```

  - ES6 剩余参数 实例

    ```javascript
            function pick(obj, ...keys) {
                // ...keys 解决了arguments 的问题
                let result = Object.create(null);
                for (let i = 0; i < keys.length; i++) {
                    result[keys[i]] = obj[keys[i]];
                }
                return result;
            }
    
            let book = {
                title: '剩余参数',
                author: 'es6',
                year: 2020
            }
            let bookData = pick(book, 'year', 'author');
            console.log(bookData);
    ```

    >通过以上的例子可总结出，keys 收集该函数的第2个参数（因为第一个形式参数是个对象被映射到book）和所有后续参数  和 arguments对象之间的区别主要有三个：
    >
    >- 剩余参数只包含那些没有对应形参的实参，而 arguments 对象包含了所有形式参数。
    >- arguments对象不是一个真正的数组，而剩余参数是真正的 Array实例，也就是说你能够在它上面直接使用所有的数组方法，比如 sort，map，forEach或pop。
    >- arguments对象还有一些附加的属性 （如callee属性）

    

## 函数之扩展运算符、箭头函数

- 拓展运算符: ...

- 剩余运算符: 把多个独立的合并到一个数组中 ,通常放在函数的形参上

- 拓展运算符: 将一个数组分割，并将各个项作为分离的参数传给函数

  ```javascript
  	// ES5 使用apply 
          const maxNum = Math.max(20,30);
          console.log(maxNum);
  
          处理数组中的最大值，使用apply
          const arr = [10, 20, 50, 30, 90, 100, 40];
          console.log(Math.max.apply(null,arr));
  
      // es6 扩展运算法更方便
          console.log(Math.max(...arr));
  ```

  

### ES6 箭头函数

- es6 的箭头函数  使用 `=>` 来定义  function(){} 等于 （)=>{}

  ```javascript
   // 普通函数写法
  	let add = function (a,b){
          return a+b;
      }
   // 箭头函数写法
      let add = (a,b)=>{
          return a+b;
      }
   	// 箭头函数省略写法    	
      	// 一个参数
              let add = val =>{
                  return val+5;
              }
              // 一个参数省略大括号
              let add = val => val;
  			// 操作
              let add = val => (val+5);
      	// 两个参数及以上
              let add = (val1,val2) =>{
                  return val1+val2;
              }
              // 两个参数省略大括号
              let add = (val1,val2) => (val1+val2);
  
  console.log(add(10));
  ```

  

### 箭头函数this指向和注意事项

- es5 this 指向： 取决于调用该函数的上下文对象

- es6 箭头函数没有this指向，箭头函数内部this只能通过查找作用域链来确定,一旦使用箭头函数，当前就不存在作用域链

- 使用箭头函数的注意事项

  1. 使用箭头函数 函数内部没有arguments

     ```javascript
      let getVal = (a, b) => {
          console.log(arguments);
          return a + b;
      }
      console.log(getVal(1, 3));
     ```
	   输出结果为: arguments is not defined
	
	   
	
	2. 箭头函数不能使用new关键字来实例化对象
	
	   ```javascript
	   let Person = ()=>{
	               
	   };
	           
	           console.log(Person);
	           
	           let p = new Person();
	   ```
	   输出结果为: Uncaught TypeError: Person is not a constructor
	
	> function函数 也是一个对象，但是箭头函数不是一个对象，它其实就是一个语法糖



## 解构赋值

解构赋值含义：      

- 解构赋值是对赋值运算符的一种扩展
- 它针对数组和对象来进行操作
- 优点：代码书写上简洁易读

es5 解构赋值

```javascript
       let node = {
            type:'iden',
            name:'foo'
        }
       let type = node.type;
       let name = node.name;
        console.log(type,name);
```

es6 解构赋值

1. 完全解构

   ```javascript
         let node = {
               type:'iden',
               name:'foo'
           }
           let {type,name} = node;
           console.log(type,name);
   ```

   把对象或者数组全部解构赋值出来

2. 不完全解构

   ```javascript
   	 let obj = {
               a:{
                   name:"张三"
               },
               b:[],
               c:'hello,world'
           }
     let {a} = obj;
     console.log(a);
   ```

    可忽略

3. 剩余运算符 解构

   ```javascript
   	 let obj = {
               a:{
                   name:"张三"
               },
               b:[],
               c:'hello,world'
           }
   let {a,...res} = obj;
   console.log(res);
   ```

4. 默认值   解构

   ```javascript
   // 默认值
   let {a,b = 30} = {a:20};
   ```

5. 数组 解构

   ```javascript
   let arr = [1,2,3];
   let [a,b,c] = arr;
   console.log(a,b,c);   // 123
   ```

   可嵌套

   ```javascript
   let [a,[b],c] = [1,[2],3];
   console.log(a,b,c);   // 123
   ```

   

## 扩展的对象的功能

- es6 直接写入变量和函数，作为对象的属性和方法

  ```javascript
  const name = ‘xmg’,
  age = 20;
  const person = {
  	name,  // 等价于 name: name,age: age,
  	age,
  	sayName(){  // sayName = function(){}
  		console.log(this.name);
  	}
  }
  person.sayName();
  ```

  es6简化了属性名重复的问题

- es6 函数  返回对象

  ```javascript
  function fn(x,y) {
       return {x,y};
   }
   console.log(fn(10,20));
  ```

- es6 取值器简写

  ```javascript
  let cart = {
       wheel:4,
       set(newVal){
           if(newVal < this.wheel){
               throw new Error('轮子数太少了')
           }
           this.wheel = newVal;
       },
       get(){
           return this.wheel;
       }
   }
   // console.log(cart.get());
   cart.set(6);
   console.log(cart.get())
  ```

- es6 属性名表达式

  ```javascript
   		const obj = {};
          obj.isShow = true;
          const name = 'a';
          obj[name+'bc'] = 123;
          // console.log(obj);
          obj['f'+'bc'] = function () {
              console.log(this);
          }
          console.log(obj);  // {isShow:true,abc:123,fbc:f}
  
  const name = 'a';
          const obj = {
              isShow:true,
              [name+'bc']:123,
              ['f'+name](){
                  console.log(this);
                  
              }
          }
          console.log(obj);
   // {isShow:true,abc:123,fa:f}
  ```

- 对象的方法

  - is()  和  ===

    - 比较2个值是否严格相等
    - is() 比 === 更严谨
    - is() 解决了=== 的特殊性

  - assign()   属于浅拷贝

    - 用于对象的合并  

    ```javascript
    
            // ***** assign() ***
            // 对象的合并
            // Object.assign(target,obj1,obj2....)
            
            // 返回合并之后的新对象
            let newObj = Object.assign({},{a:1},{b:2});
            console.log(newObj);  
            // {a:1,b:2}
    ```



## Symbol类型

- 在es6 有原始数据类型Symbol, 它表示独一无二的值

- 最大用处：用来定义对象的私有变量

        const name = Symbol('name');
        const name2 = Symbol('name');
        console.log(name === name2);
        // 每一个 symbol 都是不同的内存地址
    
- 取值

      console.log(obj[s1]);
      let s1 = Symbol('s1');
      console.log(s1);
      let obj = {
          [s1]:'ma'
      };
      console.log(obj[s1]);
  //Symbol变量无法被遍历，且不易被获取
  
      let s = Object.getOwnPropertySymbols(obj);
      console.log(s);//[Symbol(s1)]
      console.log(s[0]);//Symbol(s1)
      
      let l = Reflect.ownKeys(obj);
      console.log(l);//[Symbol(s1)]
      console.log(l[0]);//Symbol(s1)
  

如果用Symbol定义的对象中的变量，取值时一定要用obj[变量名],不能用(obj,s1)点获取





## Set 数据类型

- 集合：表示无重复值的有序列表

- 创建：` let set = new Set();`

- 添加元素

          // 添加元素
          set.add(2);  // 添加数值
          set.add('4'); // 添加字符串
          set.add('4'); 

- 没有重复的值，重复添加会被忽略掉



- 删除元素

          set.delete(2);        
          console.log(set);

- 校验某个值是否在set中

  - `console.log(set.has('4'));`

- forEach

          set.forEach((val,key)=>{
                      console.log(val);
                      console.log(key);
          })

- 将set 转换成数组

          let set2 = new Set([1, 2, 3, 3, 3, 4]);
          // 扩展运算符
          let arr = [...set2]
          console.log(arr);

- set中对象的引用无法被释放

  - 可以通过WeakSet进行释放对象引用

          // let set3 = new Set(),obj = {};
          // set3.add(obj);
          // // 释放当前的资源
          // obj = null;
          // console.log(set3);
          
          let set4 = new WeakSet(),
              obj = {};
          set4.add(obj);
          // 释放当前的资源
          obj = null;
          console.log(set4);
          
          // WeakSet
          // 1.不能传入非对象类型的参数
          // 2.不可迭代
          // 3.没有forEach()
          // 4.没有size属性


## Map 数据类型

- Map类型是键值对的有序列表，键和值是任意类型
- map 
  - 创建map
    - `let map = new Map();`
  - 设置值
    - `map.set('name','张三');`
  - 获取值
    - `map.get('name');`
  - 校验
    - `map.has('name');`
  - 删除
    - `map.delete('name');`
  - 清除
    - `map.clear();`
- map中对象的引用无法被释放,与set一致



## 数组

- 数组方法 `from()`和`of()`
-  `from()`将伪数组转换成为真正的数组


          function add() {
              // es5转换
              // let arr = [].slice.call(arguments);
              // console.log(arr);
              // es6写法
              let arr = Array.from(arguments);
              console.log(arr);
          }
            add(1,2,3);
            // 扩展运算符 将伪数组转换成真正的数组
            // console.log([...lis]);
            // from() 还可以接受第二个参数，用来对每个元素进行处理
            
            let liContents = Array.from(lis, ele => ele.textContent);
            // console.log(liContents);


- `of()` 将任意的一组数据类型，转换成数组

          console.log(Array.of(3, 11, 20, [1, 2, 3], {
              id: 1
          }));
      
- `copywithin()` 数组内部将制定位置的元素复制到其它的位置，返回当前数组
        
      
          // 从3位置往后的所有数值，替换从0位置往后的三个数值
          console.log([1, 2, 3, 8, 9, 10].copyWithin(0, 3));
          //[8,9,10,8,9,10]

- `find()` 和`findIndex()`

          // find()找出第一个符合条件的数组成员
          let num = [1, 2, -10, -20, 9, 2].find(n => n < 0)
          // console.log(num);
          
          // findIndex()找出第一个符合条件的数组成员的索引
          let numIndex = [1, 2, -10, -20, 9, 2].findIndex(n => n < 0)
          // console.log(numIndex);

- `entries()` 、`keys()` 、`values()` 返回一个遍历器  可以使用for...of循环进行遍历

          // keys() 对键名遍历
          // values() 对值遍历
          // entries() 对键值对遍历
          // console.log(['a','b'].keys());
          
          for (let index of ['a', 'b'].keys()) {
              console.log(index);
          }
          
          for (let ele of ['a', 'b'].values()) {
              console.log(ele);
          }
          
          for(let [index,ele] of ['a','b'].entries()){
              console.log(index,ele); 
          }
          let letter = ['a','b','c'];
          let it = letter.entries();
          // console.log(it.next().value);
          // console.log(it.next().value);
          // console.log(it.next().value);
          // console.log(it.next().value);

- `includes()` 返回一个布尔值，表示某个数组是否包含给定的值

          console.log([1,2,3].includes(2));
          console.log([1,2,3].includes('4'));
          
          // 之前 indexof()
          console.log([1,2,3].indexOf('2'));

通过`includes()` 替代了indexof() 判断数组是否包含这个元素

**ES5和ES6如何取数组的最大值：**

// ES5 的写法   

Math.max.apply(null, [14, 3, 77, 30]);   

// ES6 的写法  

Math.max(...[14, 3, 77, 30]);

// reduce

[14,3,77,30].reduce((accumulator, currentValue)=>{

​    return accumulator = accumulator > currentValue ? accumulator : currentValue

});



## 迭代器Interator的用法

- iterator 是一种新的遍历机制

    

          //   Iterator
          //   是一种新的遍历机制，两个核心
          // 1.迭代器是一个接口，能快捷的访问数据，通过Symbol.iterator来创建迭代器 通过迭代器的next()获取迭代之后的结果
          // 2.迭代器是用于遍历数据结构的指针(数据库的游标)
          
          // 使用迭代
          const items = ['one', 'two', 'three'];
          // 1.创建新的迭代器
          const ite = items[Symbol.iterator]();
          console.log(ite.next()); //{value: "one", done: false} done如果为false表示遍历继续 如果为true表示遍历完成
          console.log(ite.next());
          console.log(ite.next());
          console.log(ite.next());

## 生成器Generator的用法

- generator函数 可以通过yield关键字，将函数挂起，为了改变执行流提供了可能，同时为了做异步编程提供了方案
- 它普通函数的区别
  1. function后面 函数名之前有个*
  2. 只能在函数内部使用yield表达式，让函数挂起

  
         function* func() {
            console.log('one');
            yield 2;
            console.log('two');
            yield 3;
            console.log('end');   
        }
        // 返回一个遍历器对象 可以调用next()
        let fn = func();
        // console.log(o)
        console.log(fn.next());
        console.log(fn.next());
        console.log(fn.next()); 
        
        // 总结：generator函数是分段执行的，yield语句是暂停执行  而next()恢复执行


        function* add() {
            console.log('start');
            // x 可真的不是yield '2'的返回值，它是next()调用 恢复当前yield()执行传入的实参
            let x = yield '2';
            console.log('one:'+x);
            let y = yield '3';
            console.log('two:'+y);
            return x+y;  
        }
        const fn = add();
        console.log(fn.next()); //{value:'2',done:false}
        console.log(fn.next(20)); //{value:'3',done:false}
        console.log(fn.next(30)); //{value:50,done:true}


​       

   - 使用场景1：为不具备Interator接口的对象提供了遍历操作

   

         function* objectEntries(obj) {
             // 获取对象的所有的key保存到数组 [name,age]
             const propKeys = Object.keys(obj);
             for(const propkey of propKeys){
                 yield [propkey,obj[propkey]]
             }
         }   
         const obj = {
             name:'ma',
             age:18
         }
         obj[Symbol.iterator] = objectEntries;
         console.log(obj);
    
     for(let [key,value] of objectEntries(obj)){
         console.log(`${key}:${value}`);  
     }

- 使用场景2：

       // Generator 部署ajax操作，让异步代码同步化
        // 回调地狱
        /* $.ajax({
            url: 'https://free-api.heweather.net/s6/weather/now?location=beijing&key=4693ff5ea653469f8bb0c29638035976',
            method: 'get',
            success(res) {
                console.log(res);
        
                // 继续发送请求
                $.ajax({
                    url: '',
                    method: 'get',
                    success(res1) {
                        // 发送ajax
                        $.ajax({
                            url: '',
                            method: 'get',
                            success(res2) {
        
                                // 发送ajax
                                $
                            }
                        })
                    }
                })
        
            }
        }) */
        
        /* function* main() {
            console.log('main');
        
            let res = yield request(
                'https://free-api.heweather.net/s6/weather/now?location=beijing&key=4693ff5ea653469f8bb0c29638035976'
            )
            console.log(res);
        
            // 执行后面的操作
            console.log('数据请求完成，可以继续操作');
        
        }
        const ite = main();
        ite.next();
        
        function request(url) {
            $.ajax({
                url,
                method: 'get',
                success(res) {
                    ite.next(res);
                }
            })
        } */
   
- 使用场景3：

        // 加载loading...页面
        // 数据加载完成...（异步操作）
        // loading关闭掉
        
        function* load() {
            loadUI();
            yield showData();
            hideUI();
        }
        
        let itLoad = load();
        itLoad.next();
        
        function loadUI() {
            console.log('加载loading...页面');
        }
        function showData() {
            // 模拟异步操作
            setTimeout(() => {
                console.log('数据加载完成');
                itLoad.next();
                
            }, 1000);
        }
        function hideUI() {
            console.log('隐藏loading...页面');
            
        }



## Promise的基本使用

- Promise  相当于一个容器，保存着未来才会结束的事件(异步操作)的一个结果

- 各种异步操作都可以用同样的方法进行处理 axios 

- 特点：
  1. 对象的状态不受外界影响  处理异步操作 三个状态  Pending(进行)  Resolved(成功) Rejected(失败)
  2. 一旦状态改变，就不会再变，任何时候都可以得到这个结果
  
-  then() 第一个参数是成功(resolved)回调函数，第二个参数是可选的 是失败 (rejected)状态回调的函数

- then()返回一个新的promise实例，可以采用链式编程 
  
- catch() 方法返回一个错误信息，配合then使用
  
- 示例1：
	
	​	
	
			let pro = new Promise(function(resolved,rejected) {
					//执行异步操作
					let res = {
						code: 201,
						data:{
							name:'ma'
						},
						error:'失败了'
					}
					setTimeout(() => {
						if(res.code === 200){
							resolved(res.data);
						}else{
							rejected(res.error);
						}
					}, 1000);
				})
				console.log(pro);
				pro.then((val)=>{
					console.log(val);
					
			},(err)=>{
				console.log(err);
				
			});
	
- then 回调的2个参数，成功(resolved)或失败 (rejected)
  - 示例2：

         function timeOut(ms) {
            return new Promise((resolved,rejected)=>{
                setTimeout(() => {
                    resolved('hello promise success!!')
                }, ms);
            })
        }
        timeOut(2000).then((val)=>{
            console.log(val);
            
        }) 



- 使用promise封装ajax 

         // https://free-api.heweather.net/s6/weather/now?location=beijing&key=4693ff5ea653469f8bb0c29638035976
         const getJSON = function (url) {
             return new Promise((resolve, reject) => {
                 const xhr = new XMLHttpRequest();
                 xhr.open('GET', url);
                 xhr.onreadystatechange = handler;
                 xhr.responseType = 'json';
                 xhr.setRequestHeader('Accept', 'application/json');
                 // 发送
                 xhr.send();
         
                 function handler() {
         
                     if (this.readyState === 4) {
                         if (this.status === 200) {
                             resolve(this.response.HeWeather6);
                         } else {
                             reject(new Error(this.statusText));
                         }
                     }
         
                 }
             })
         }
         
                 getJSON('https://free-ap.heweather.net/s6/weather/now?location=beijing&key=4693ff5ea653469f8bb0c29638035976')
                     .then(data => {
                         console.log(data);
                     }).catch(err => {
                         console.log(err);
                     })
                    catch 与then相同
                catch(err=>{
         
                 })
         
                then(null,err=>{
         
                })

- `resolve()`  `reject()` `all()` `race()`  `done()` `finally()`

- `resolve()`  `reject()`能将现有的任何对象转换成promise对象

          let p = Promise.resolve('foo');
          let p = new Promise(resolve=>resolve('foo'));
           p.then((data)=>{
               console.log(data);
               
           }) 

- `all()` 

- 应用：一些游戏类的素材比较多，等待图片、flash、静态资源文件 都加载完成 才进行页面的初始化

          let promise1 = new Promise((resolve, reject) => {});
          let promise2 = new Promise((resolve, reject) => {});
          let promise3 = new Promise((resolve, reject) => {});
          
          let p4 = Promise.all([promise1, promise2, promise3])
          
          p4.then(()=>{
              // 三个都成功  才成功
          }).catch(err=>{
              // 如果有一个失败 则失败
          }) 

- `race()` 

- 某个异步请求设置超时时间，并且在超时后执行相应的操作

          // 1 请求图片资源
          function requestImg(imgSrc) {
              return new Promise((resolve, reject) => {
                  const img = new Image();
                  img.onload = function () {
                      resolve(img);
                  }
                  img.src = imgSrc;
              });
          }
          
          function timeout() {
              return new Promise((resolve, reject) => {
                  setTimeout(() => {
                      reject(new Error('图片请求超时'));
                  }, 3000);
              })
          }
          Promise.race([requestImg('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566364222518&di=b3c6d411bb23f17d1798fc6be3325ad5&imgtype=0&src=http%3A%2F%2Fpic.k73.com%2Fup%2Fsoft%2F2016%2F0102%2F092635_44907394.jpg'),timeout()]).then(data=>{
              console.log(data);
              document.body.appendChild(data);
              
          }).catch(err=>{
              console.log(err);
              
          });

-  `done()` `finally()`   方法在.catch 只后总会执行

## async的用法

-   作用：使得异步操作更加方便

- 基本操作 async它会返回一个Promise对象  then catch

- async是Generator的一个语法糖

          async function f() {
              // return await 'hello async';
              let s = await 'hello world';
              let data = await s.split('');
              return data;
          }
           // 如果async函数中有多个await 那么then函数会等待所有的await指令 运行完的结果 才去执行
              f().then(v => {
                  console.log(v)
              }).catch(e => console.log(e));
          
              async function f2() {
                  // throw new Error('出错了');
                  try {
                      await Promise.reject('出错了');
                  } catch (error) {
          
                  }
                  return await Promise.resolve('hello');
              }
              f2().then(v => console.log(v)).catch(e => console.log(e));

- 使用场景：

          // 需求： 想获取和风天气 现在now的数据
          const getJSON = function (url) {
              return new Promise((resolve, reject) => {
                  const xhr = new XMLHttpRequest();
                  xhr.open('GET', url);
                  xhr.onreadystatechange = handler;
                  xhr.responseType = 'json';
                  xhr.setRequestHeader('Accept', 'application/json');
                  // 发送
                  xhr.send();
          
                  function handler() {
          
                      if (this.readyState === 4) {
                          if (this.status === 200) {
                              resolve(this.response);
                          } else {
                              reject(new Error(this.statusText));
                          }
                      }
          
                  }
              })
          }
          
          async function getNowWeather(url) {
              // 发送ajax 获取实况天气
              let res = await getJSON(url);
              console.log(res);
              // 获取HeWeather6的数据   获取未来3~7天的天气状况
              let arr = await res.HeWeather6;
              return arr[0].now;
          }
          getNowWeather(
                  'https://free-api.heweather.net/s6/weather/now?location=beijing&key=4693ff5ea653469f8bb0c29638035976')
              .then(now => {
                  console.log(now);
              })

## Generator  Promise  async

1. 解决回调地域 
2. 使得异步操作显得更加方便



## class类的用法

- ES5 造类的方法

  
          function Person(name,age) {
              this.name = name;
              this.age = age;
          }
          Person.prototype.sayName = function() {
              return this.name;
          }
          let p1 = new Person('ma',28);
          console.log(p1);

- ES6 class的使用

          class Person {
              // 实例化的时候会立即被调用
              constructor(name, age) {
                  this.name = name;
                  this.age = age;
              }
              
            	sayName() {
            	    return this.name;
            	}
            	sayAge() {
            	    return this.age;
            	}
          
          }
          let p1 = new Person('ma', 28);
          console.log(p1);

- ES6  通过Object.assign()方法一次性向类中添加多个方法

  ​	

          class Person {
              // 实例化的时候会立即被调用
              constructor(name, age) {
                  this.name = name;
                  this.age = age;
              }
      
          }
          // 通过Object.assign()方法一次性向类中添加多个方法
          Object.assign(Person.prototype, {
              sayName() {
                  return this.name
              },
              sayAge() {
                  return this.age
              }
          })
          let p1 = new Person('ma', 28);
          console.log(p1);

- class 继承 (extends)

          // 使用关键字 extends
          class Animal{
              constructor(name,age) {
                  this.name = name;
                  this.age = age;
              }
              sayName(){
                  return this.name;
              }
              sayAge(){
                  return this.age;
              }
          }
          
          class Dog extends Animal{
              constructor(name,age,color) {
                  super(name,age);
                  // Animal.call(this,name,age);
                  this.color = color;
              }
              // 子类自己的方法
              sayColor(){
                  return `${this.name}是${this.age}岁了,它的颜色是${this.color}`
              }
              // 重写父类的方法
              sayName(){
                  return this.name + super.sayAge() + this.color;
              }
              
          }
          let d1 = new Dog('小黄',28,'red');
          console.log(d1.sayColor());
          console.log(d1.sayName());

- `super(name,age)` 相当于 `Animal.call(this,name,age);`


- ## ES6的模块化实现

- 先粗略了解模块化的一些规范

- 一共有4中模块化加载，以后编辑

  1. CommonJs
  2. ES6
  3. AMD
  4. CMD

- ES6 实现模块化实现


  - es6模块功能主要有两个命令构成：`export`和`import`
  -  `export`用于规定模块的对外接口
  -  `import`用于输入其它模块提供的功能

- 一个模块就是独立的文件

- 具体应用

  - 首先需要一个独立模块，通过`export` 向外暴露属性或方法

    - `export const name = '张三';`

  - 另一个脚本文件

    - 在script 设置属性为 type=`module`

          <script type='module'>
          import {name} from './modules/index.js'
          console.log(name);
          </script>





