const saveButton = document.getElementById("save-btn")
let myLeads = []
const inputEl = document.getElementById('input-el')
let ulEl = document.getElementById('ul-el')
const deleteBtn = document.getElementById('delete-btn')
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const tabBtn = document.getElementById("tab-btn")

tabBtn.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
})

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

function render(leads) {
    let listItems = "";
    for (let i = 0; i < leads.length; i++) {
        // listItems += "<li><a href ='" + myLeads[i] + "' target='_blank' "+ ">"+  myLeads[i] + "</li>"
        listItems += `
        <li>
            <a href = '${leads[i]}' target='_blank'>
            ${leads[i]}
            </a>
        </li>
`
    }

    ulEl.innerHTML = listItems
}

function clearArray() {
    return myLeads = []
}

deleteBtn.addEventListener("dblclick", function () {
    localStorage.clear()
    clearArray()
    render(myLeads);
})

saveButton.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
});