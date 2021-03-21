// 我们先来用Promise封装一个网络请求函数

function fetchData(){
    return new Promise((resolve, reject)=>{
        fetch('http://localhost:3000/users',{
            method:'GET'
        }).then((res)=>{
            res.json().then((data)=>{
                console.log(data);
                // dSomthing..
                // resolve 代表该函数解决
                resolve(data);
            })
        })
    })
}
// 因为返回了一个Promise 会议可以链式调用
fetch().then((res)=>{
    return a(res)
})
.then((res)=>{
    return b(res)
})

