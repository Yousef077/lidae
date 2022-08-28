let btnEl = document.querySelector(".btn");

btnEl.addEventListener("click",function () {
    let navList = document.querySelector(".list-nav")
    navList.classList.toggle("navblock")

})

function myScript() {
    let arr = ["https://i.pinimg.com/236x/bf/d3/4e/bfd34e875013e9c2971b9d48f07dd654.jpg",
    "https://i.pinimg.com/564x/ac/a1/1d/aca11dec0b45090d9fef092fdd066fa8.jpg",
    "https://i.pinimg.com/564x/fc/ef/aa/fcefaa92d832a29da3e656824ff70ae3.jpg",
    "https://i.pinimg.com/564x/0d/34/bb/0d34bbbdf9168b92163e4c3fe8dafef0.jpg",
    "https://i.pinimg.com/564x/ed/82/82/ed8282f95ea801621e31e44f37145601.jpg",
    "https://i.pinimg.com/564x/49/9b/d4/499bd4d25e5910839935260df1fde555.jpg",
    "https://i.pinimg.com/564x/b7/9d/36/b79d36b3a868fe1e07c1974065b3c573.jpg",
    "https://i.pinimg.com/564x/3d/65/74/3d65746cf470f8f0a8dbca7f256718e0.jpg",
    "https://i.pinimg.com/564x/64/a5/b1/64a5b163e672a3d080afa44d50275080.jpg",
    "https://i.pinimg.com/564x/83/b5/7a/83b57af16a8cc37cefd8f250834b83eb.jpg",
    "https://i.pinimg.com/564x/36/d1/0a/36d10a3e9c585f18e1deef12058e1e65.jpg",
]

   
   
   let imgg = document.querySelector(".center-image")
   imgg.src= arr[Math.floor(Math.random()*11)]

   setInterval(() => {
    imgg.src= arr[Math.floor(Math.random()*11)] 
    
   }, 5000);
}

function df() {
    let navList = document.querySelector(".list-nav")
    console.log("jhg");

}

document.addEventListener("load", myScript());
document.querySelector("body").onclick=
    df()
