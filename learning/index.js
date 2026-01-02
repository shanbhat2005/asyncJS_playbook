function baadmerun(val){
   setTimeout(val,3000)

}
baadmerun(function (){
    console.log('hello')
})

// callback is when a function is passed inside another function 


function profileLekarAao(username,callback){
setTimeout(function(){
console.log(`profile name is ${username}`)
callback({rollno:101,name:"shan",year:3})
},1000)
}

function resultDikhao(rollno,cb){
    setTimeout(() => {
        console.log(`your rollno is ${rollno}`)
        cb({result:"pass"});
    }, 2000);

}
profileLekarAao("shan",function(cbData){
    // console.log(cbData)
    resultDikhao(cbData.rollno,function(result){
console.log(result);
    })
    
})