// Class Promise

// STEP1: 定义一个类Promise
//         这个类有：
//          1. 3个初始状态
    //          i. status 状态 pending resolve resolve 一开始是默认的pendding状态，每当调用道resolve和reject方法时，就会改变其值，在后面的then方法中会用到
    //          ii. value resolve（成功）之后调用里面的参数指
    //          iii.reason reject(失败) 之后调用里面的参数值
//          2. resolve (函数) 在constructor中声明，使用者传入函数供回调 。作用改变初始状态的值
//          3.reject（函数）在constructor中声明，使用者传入函数供回调。作用改变初始状态的值
// tips: 1. resolve 和reject 要判断status executor会传入两个resolve或者reject
//        2. 传入的executor可能会抛出异常，需要凡在放在catch中，并注入到reject中

class Promise{
    constructor(executor){
        this.statue ='pendding';
        this.value = undefined;
        this.reason = undefined;

        let resolve = (data)=>{
            if(this.statue === 'pendding'){
                this.statue = 'resolve';
                this.value = data;
            }
        }

        let reject = (data)=>{
            if(this.statue === 'pendding'){
                this.statue = 'reject';
                this.reason = data;
            }
        }

        try{
            executor(resolve, reject);
        }catch(e){
            reject(e)
        }
    }
}