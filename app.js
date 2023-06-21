 const progress = document.querySelector(".progress-bar");
 const circles = document.querySelectorAll(".circle");
 const nextBtn = document.querySelector(".next-btn");
 const backBtn = document.querySelector(".back-btn");

 let currentStep = 1

const updateCircle = () => {
    circles.forEach((circle, idx) => {
        if(idx < currentStep) {
            circle.classList.add('active')
        }
        else {
            circle.classList.remove('active')
        }
    })
}

const updateProgressBar = () => {
    // 3 aşamalı bir line olduğu için burada matematik kullanarak line ı %33 lük bölümlere ayırdık console.log() yaparak görüntüleyebilirsin.
    let percentage =((currentStep - 1) / (circles.length -1)) * 100 + '%';

    // main.css içinde bulunan progress.bar içindeki 0% olan width i burada percentage ile eşleştirdik
    progress.style.width = percentage
}

const updateBtn = () => {
    backBtn.classList.remove('disable')
    nextBtn.classList.remove('disable')

    if (currentStep === 1){
        backBtn.classList.add('disable')
    }
    if (currentStep === circles.length) {
        nextBtn.classList.add('disable')
    }
}
 // Button Settings
 nextBtn.addEventListener('click', () => {
    if (currentStep < circles.length){
        currentStep++
        updateCircle()
        updateProgressBar()
        updateBtn()
    }
    else {
        currentStep = circles.length
    }
 });

backBtn.addEventListener('click', () => {
    if (currentStep === 1){
        
    }
    else {
        currentStep--
        updateCircle()
        updateProgressBar()
        updateBtn()
    }
})