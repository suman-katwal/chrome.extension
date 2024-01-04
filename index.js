const saveButton = document.getElementById("input-btn");
let myLeads = [];
const inputEl = document.getElementById('input-el');
let ulEl = document.getElementById('ul-el')

saveButton.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderLeads()
});


function renderLeads() {
    let listItems = "";

    for (let i = 0; i < myLeads.length; i++) {
       // listItems += "<li><a href ='" + myLeads[i] + "' target='_blank' "+ ">"+  myLeads[i] + "</li>"
listItems+= `
        <li>
            <a href = '${myLeads[i]}' target='_blank'>${myLeads[i]}
            </a>
        </li>
`
    }

    ulEl.innerHTML = listItems
}