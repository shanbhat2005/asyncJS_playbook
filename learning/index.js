// function baadmerun(val){
//    setTimeout(val,3000)

// }
// baadmerun(function (){
//     console.log('hello')
// })

// // callback is when a function is passed inside another function 


// function profileLekarAao(username,callback){
// setTimeout(function(){
// console.log(`profile name is ${username}`)
// callback({rollno:101,name:"shan",year:3})
// },1000)
// }

// function resultDikhao(rollno,cb){
//     setTimeout(() => {
//         console.log(`your rollno is ${rollno}`)
//         cb({result:"pass"});
//     }, 2000);

// }
// profileLekarAao("shan",function(cbData){
//     console.log(cbData)
//     resultDikhao(cbData.rollno,function(result){
// console.log(result);
//     })

// })

// promises are used when our data is only in 2 forms either it is resolved or it is rejected

// let pr = new Promise(function (res, rej) {
//     setTimeout(() => {
//         let err = false;

//         if (err == false) {
//             res('success...')
//         }
//         else {
//             rej('failed...')
//         }
//     }, 2000);
// })

// pr.then(function (data) {
//     console.log(data)
// })

// pr.catch(function (data) {
//     console.log(data)
// })

// async/await

let pr = new Promise(function(res,rej){
    setTimeout(() => {
        if((Math.floor(Math.random)*10)<5){
        res("resolved...")
    }
    else rej('rejected...');
    }, 1000);
});

async function shan(){
    try{
        let ans = await pr;
        console.log(ans)
    }catch(err){
console.log(err);
    }
}

shan()