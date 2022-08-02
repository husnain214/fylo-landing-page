const navbar = document.querySelector (".navbar")
const sections = document.querySelectorAll ("section")
console.log (sections)
let sectionOptions = {
    rootMargin: "-100px 0px 0px 0px",
    threshold: 0
}

const observer = new IntersectionObserver ((entries, observer) => {
    entries.forEach ((entry) => {
        if (entry.target.className === "hero-section") {
            if (entry.isIntersecting) {
                navbar.classList.remove ("nav-scrolled")
            } else {
                navbar.classList.add ("nav-scrolled")
            }
        }
        else if (entry.target.className === "feat1") {  
            const children = entry.target.parentNode.children      
            if (entry.isIntersecting) {
                entry.target.parentNode.style.opacity="1"
                children[1].classList.add ("leftToRight")          
                children[3].classList.add ("rightToLeft")          
                children[2].classList.add ("leftToRight")          
                children[4].classList.add ("rightToLeft")          
            } 
        }
        else if (entry.target.className === "feat2") {
            const children = entry.target.parentNode.children  
            console.log (children)    
            if (entry.isIntersecting) {
                entry.target.parentNode.style.opacity = "1"
                children[1].classList.add ("leftToRight")     
                children[2].classList.add ("rightToLeft")     
            } 
        }
        else if (entry.target.className === "feat3") {
            const children = entry.target.parentNode.childNodes
            console.log(children)
            if (entry.isIntersecting) {
                children[3].classList.add ("rightToLeft")
                children[7].classList.add ("leftToRight")
                children[3].style.opacity = "1"
                children[7].style.opacity = "1"
                children[5].style.opacity = "1"
            }
        }
    })
}, sectionOptions)

sections.forEach (section => {
    observer.observe (section)
})



