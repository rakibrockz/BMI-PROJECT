let height = document.querySelector(".height")
let weight = document.querySelector(".weight")
let submit = document.querySelector(".submit")
let result = document.querySelector(".result")
let sugg = document.querySelector(".sugg")
let heightError = document.querySelector(".heightError")
let weightError = document.querySelector(".weightError")
let malebmi = document.querySelector(".malebmi")
let malebtn = document.querySelector(".malebtn")

// FEMALE BMI

let fheight = document.querySelector(".fheight")
let fweight = document.querySelector(".fweight")
let fsubmit = document.querySelector(".fsubmit")
let fresult = document.querySelector(".fresult")
let fsugg = document.querySelector(".fsugg")
let fheightError = document.querySelector(".fheightError")
let fweightError = document.querySelector(".fweightError")
let fmalebmi = document.querySelector(".fmalebmi")
let femalebtn = document.querySelector(".femalebtn")


malebtn.addEventListener("click",function(){
    malebmi.style.display = "block"
    fmalebmi.style.display ="none"
})

femalebtn.addEventListener("click",function(){
    fmalebmi.style.display = "block"
    malebmi.style.display ="none"
})


submit.addEventListener("click", function(){
    if(height.value == ""){
        heightError.innerHTML = "Height is required"
    }else{
        heightError.innerHTML = ""
    }

    if(weight.value == ""){
        weightError.innerHTML = "Weight is required"
    }else{
        weightError.innerHTML = ""
    }
    

    if (height.value !="" && weight.value !=""){
     let bmi = weight.value * 2.20462 / (height.value*height.value) * 703
     result.innerHTML = bmi.toFixed(2)
     if(bmi >= 18.5 && bmi <= 24.9){
        sugg.innerHTML ="Perfect!"
     }else if (bmi < 18.5){
        sugg.innerHTML = "Under Weight"
     }else{
        sugg.innerHTML =" Overweight Fatty!"
     }
     
     
    }

    // BMI = weight (lb) ÷ height2 (inches) * 703.
})
// Female
fsubmit.addEventListener("click", function(){
    if(fheight.value == ""){
        fheightError.innerHTML = "Height is required"
    }else{
        fheightError.innerHTML = ""
    }

    if(fweight.value == ""){
        fweightError.innerHTML = "Weight is required"
    }else{
        fweightError.innerHTML = ""
    }
    

    if (fheight.value !="" && fweight.value !=""){
     let bmi = fweight.value * 2.20462 / (fheight.value*fheight.value) * 703
     fresult.innerHTML = bmi.toFixed(2)
     if(bmi >= 18.5 && bmi <= 24.9){
        fsugg.innerHTML ="Perfect!"
     }else if (bmi < 18.5){
        fsugg.innerHTML = "Under Weight"
     }else{
        fsugg.innerHTML =" Overweight Fatty!"
     }
     
     
    }

    // BMI = weight (lb) ÷ height2 (inches) * 703.
})


