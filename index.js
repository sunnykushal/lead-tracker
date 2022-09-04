//1. using addEventListener
let myLeads = [] // empty array
const inputEl = document.getElementById("inputtxt")
const ulEl = document.getElementById("ulel")
const inputbtn = document.getElementById("inputbtn")
const delbtn = document.getElementById("delbtn")
const tabbtn = document.getElementById("tabbtn")

inputbtn.addEventListener("click", function () {
    console.log("Button has been succesfully clicked via addeventmethod")
    myLeads.push(inputEl.value)
    inputEl.value = " "
    renderLead()
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    
})

let myhis = JSON.parse(localStorage.getItem("myLeads"))

if (myhis) {
    myLeads = myhis
    renderLead()
}

delbtn.addEventListener("dblclick",function(){
localStorage.clear()
myLeads = []
renderLead()
})

tabbtn.addEventListener("click", function () {
    // console.log("Button has been succesfully clicked via addeventmethod")
    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    let myhis = JSON.parse(localStorage.getItem("myLeads"))

    if (myhis) {
        myLeads = myhis
        renderLead()
    }
    });
})

// 2.



// 3. for now, push "www.awesomelead.com" to myLeads when the input is clicked

// inputbtn.addEventListener("click", function() {
//     myLeads.push("www.awesomelead.com")
//     console.log(myLeads)
// })

// 4.


// 5. ul ...store the ul in a const variable



// inputbtn.addEventListener("click", function() {
//     for(let i = 0; i<myLeads.length; i++)
//     {
//        // ulEl.textContent = myLeads[i]   //iterates to the last and the last is displayed only
//        ulEl.textContent += myLeads[i]

//     }
// })

// 6. inner html....implement in 5.
// 7. render


function renderLead() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        // ulEl.textContent = myLeads[i]   //iterates to the last and the last is displayed only
        listItems += `<li>
           <a href='${myLeads[i]}'>${myLeads[i]}</a>
           </li>`

    }

    ulEl.innerHTML = listItems
    
}
















