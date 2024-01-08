const saveButton = document.getElementById("input-btn")
let myLeads = []
const inputEl = document.getElementById('input-el')
let ulEl = document.getElementById('ul-el')
const deleteBtn = document.getElementById('delete-btn')
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    renderLeads()
}

function clearArray(){
    return myLeads = []
}
deleteBtn.addEventListener("click", function(){
    localStorage.clear()
    clearArray()
    ulEl.outerHTML = ""



})

saveButton.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads()
});


function renderLeads() {
    let listItems = "";

    for (let i = 0; i < myLeads.length; i++) {
        // listItems += "<li><a href ='" + myLeads[i] + "' target='_blank' "+ ">"+  myLeads[i] + "</li>"
        listItems += `
        <li>
            <a href = '${myLeads[i]}' target='_blank'>
            ${myLeads[i]}
            </a>
        </li>
`
    }

    ulEl.innerHTML = listItems
}