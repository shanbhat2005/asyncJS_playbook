# learning how to use markdown files 

 ## link to learn the same via youtube video
 ### links
 [youtube video]("https://www.youtube.com/watch?v=bpdvNwvEeSE")


 # async js fundamentals


## (1) chaining for async tasks in old javascript
```js

showDetails('shan',function(details){
 showYear(details.year,function(result){
showResult(result,function(data){
    console.log(data)
})
 })
})
```


 ## (2) how to create a promise in javascript
 ```js
let promise = new Promise(function(res,rej))
 ```
the promise will look like this from inside
```js
let promise = new Promise(function(res,rej){
    setTimeout(funciton(){
if(true){
    res(value)
}
else{
    rej(value)
}
    },2000)
})
```

 if the function was resolved then the following code will run
 ```js
promise.then(function(data){

})
 ```
 if the function was rejected then the following block will run
 ```js
promise.catch(function(data){

})
 ```
