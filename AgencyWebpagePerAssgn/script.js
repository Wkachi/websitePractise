console.log("Hello world!");

const home = document.querySelector (".home-list")
const homeMenu = document.querySelector(".home-menu-div");
const pagesDropdown = document.querySelector(".pagesDropdown")
const pages = document.querySelector(".pages-list")
const navList = document.querySelector(".nav-list")
const nav = document.querySelector(".nav")
const section1Div = document.querySelector(".section1-div")
// const secondNav = document.querySelector(".second-nav")
const output = document.querySelector(".output")
const section2Div = document.querySelector(".section2-div")
const web = document.querySelector(".web")
const web2 = document.querySelectorAll(".web,.digital,.search")
const web3 = document.querySelectorAll(".social,.google,.mobil")
const social = document.querySelector(".social")
const cus1200 = document.querySelector(".cus1200")
const projects450 = document.querySelector(".projects450")
const cus1200h4 = document.querySelector("#cus1200h4")
const newMostGreat = document.querySelectorAll(".newUI,.mostPopular,.greatLayout")



//let Timer = null

//counter = [count + 1]

//  function counter() {
//     i = 1200;

// for (let i = 1; i <=1200; i++){
//     //console.log(i)
//     //count = i
//     console.log(i)
    
// }

// }
// console.log(counter())
timer = null


function counter(){
    //let second = '0'
    count++
    if ( count ==1200){
        count = "1200"
    }

    
}

//cus1200h4.innerText = "1200"

function startCount(){
    setInterval(counter,1000)
}

//let stCnt =() => startCount();

//console.log(stCnt)

cus1200.addEventListener('click', function() {
   // var x = startCount()
    //startCount() = cus1200h4.innerHTML
    // console.log(startCount())
})

// const showCounter = () =>{
//     startCount()
// }

// function counterCus() {
//     if (Timer = 0){
//     setInterval( counter, 1000)
//     }
// }

//cus1200.innerHTML = 0

// console.log(web2)
// function ch(){
//     scrollValue = window.scrollY
// console.log(scrollValue)
// }

//window.addEventListener("scroll",ch)

window.addEventListener("scroll", function(e){
    scrollValue = window.scrollY
    if(scrollValue > 150){
        
        nav.classList.add("second-nav")
    }else {
     
        nav.classList.remove("second-nav")
    }

   
})

// window.addEventListener("scroll", function(e){
//     if (scrollValue <= 400){
//         console.log("yes")
//         section2Div.classList.add("web")

//     }else 
//     if (scrollValue = 450){
//         console.log("no")
//         section2Div.classList.add("social")

//     }
// });


// window.addEventListener("scroll", function(e){
//     if (scrollValue <= 400){
//         console.log("yes")
//         section2Div.classList.add("web2")

//     }else if (scrollValue >= 450){
//         console.log("no")
//         section2Div.classList.add("web3")
//     }else 
//     console.log("btw")
//     section2Div.classList.remove("web3")


// });


const sectionList = document.querySelector(".section-list")
const sectionMenu = document.querySelector(".sections-menu-div")
const docList = document.querySelector(".docs-list")
const docMenu = document.querySelector(".documentation-div")

docList.addEventListener("mouseover", function(e) {
    docMenu.style.display = "block"
    })
    
    docList.addEventListener("mouseout", function(e) {
        docMenu.style.display = "none"
        })

sectionList.addEventListener("mouseover", function(e) {
sectionMenu.style.display = "block"
})

sectionList.addEventListener("mouseout", function(e) {
    sectionMenu.style.display = "none"
    })
    


home.addEventListener("mouseover",function(e) {
    console.log("clicked")
    homeMenu.style.display = "block";
});

home.addEventListener("mouseout",function(e) {
    console.log("clicked")
     homeMenu.style.display = "none";
});

pages.addEventListener("mouseover",function(e) {
    pagesDropdown.style.display = "block";
});

pages.addEventListener("mouseout",function(e) {
     pagesDropdown.style.display = "none";
});

