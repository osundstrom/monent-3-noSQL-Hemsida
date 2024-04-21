"use strict";
//------------------------------GET allt (FETCH)---------------------------------//
let url = "https://moment-3-nosql.onrender.com/workexperiences"; //skapare url
//let url = "localhost:3000/workexperiences"
document.addEventListener("DOMContentLoaded", function() {
    console.log("k\xf6rs get all");
    getAll();
});
async function getAll() {
    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
    const data = await response.json(); //Väntar på json
    //console.log(data);
    const allCompanysDiv = document.getElementById("allCompanys"); //väljer div
    allCompanysDiv.innerHTML = ""; //rensar så dne är tom
    data.forEach((company)=>{
        console.log(company);
        const companyUL = document.createElement("ul"); //skapar ul
        /*
        const idLI = document.createElement("li"); //Skapar li
        idLI.textContent = "ID: " + company._id;
        console.log(company._id)
        companyUL.appendChild(idLI); //lägger till i UL
        */ const companynameLI = document.createElement("li"); //Skapar li
        companynameLI.textContent = "F\xf6retag: " + company.companyname; //sätter texten
        companyUL.appendChild(companynameLI); //lägger till i UL
        const jobtitleLi = document.createElement("li"); //Skapar li
        jobtitleLi.textContent = "Roll: " + company.jobtitle;
        companyUL.appendChild(jobtitleLi); //lägger till i UL
        const locationLI = document.createElement("li"); //Skapar li
        locationLI.textContent = "Plats: " + company.location;
        companyUL.appendChild(locationLI); //lägger till i UL
        const startDate = new Date(company.startdate).toLocaleDateString(); //Gör om så datum får rätt format
        const endDate = new Date(company.enddate).toLocaleDateString(); //Gör om så datum får rätt format
        const startdateLI = document.createElement("li"); //Skapar li
        startdateLI.textContent = "Startdatum: " + startDate;
        companyUL.appendChild(startdateLI); //lägger till i UL
        const enddateLI = document.createElement("li"); //Skapar li
        enddateLI.textContent = "Slutdatum: " + endDate;
        companyUL.appendChild(enddateLI); //lägger till i UL
        const deleteButton = document.createElement("button"); //Skapar knapp
        deleteButton.textContent = "Radera"; //sätter texten
        deleteButton.addEventListener("click", async function() {
            console.log("cliekd button");
            await deleteData(company._id);
            companyUL.remove(); //tar bort UL elemntet
        });
        companyUL.appendChild(deleteButton); //lägger till i UL
        allCompanysDiv.appendChild(companyUL); //lägger till i Div
    });
}
//createData("MIUN", "Student", "Sundsvall", "2023-08-01", "2025-06-01"); //Kallar funktion med parametrar som behövs
//------------------------------POST (FETCH)---------------------------------//
//------------------------------POST (FETCH)---------------------------------//
//------------------------------POST (FETCH)---------------------------------//
let addButton = document.getElementById("addButton"); //Väljer knmappne
let form = document.getElementById("form"); //Väljer form
addButton.addEventListener("click", async function(e) {
    e.preventDefault(); //hindrar defualt
    let companynameInput = document.getElementById("companynameID"); //Väljer element (input)
    let jobtitleInput = document.getElementById("jobtitleID"); //Väljer element (input)
    let locationInput = document.getElementById("locationID"); //Väljer element (input)
    let startdateInput = document.getElementById("startdateID"); //Väljer element (input)
    let enddateInput = document.getElementById("enddateID"); //Väljer element (input)
    let errorDiv = document.getElementById("messageErr"); //Gör en div för error
    if (!companynameInput.value || !jobtitleInput.value || !locationInput.value || !startdateInput.value || !enddateInput.value) {
        console.log("fyll i all data"); //i konsoll
        errorDiv.textContent = "Fyll i samtliga f\xe4lt"; //till div 
        errorDiv.style.display = "block"; //Så man sr div
    } else {
        await createData(companynameInput.value, jobtitleInput.value, locationInput.value, startdateInput.value, enddateInput.value); //skickar in i funktionen
        window.location.reload(); //laddar om
    }
});
//funktion för att skapa nytt (POST)
async function createData(companyname, jobtitle, location, startdate, enddate) {
    //skapar objektet company som sätts efter de inmatade paramertrarna
    let company = {
        companyname: companyname,
        jobtitle: jobtitle,
        location: location,
        startdate: startdate,
        enddate: enddate
    };
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(company) //Gör om company till json
    });
    const data = await response.json(); //Väntar på json
}
//------------------------------DELETE (FETCH)---------------------------------//
//deleteData(id);//kallar funktion med id
async function deleteData(id) {
    const response = await fetch(`${url}${id}`, {
        method: "DELETE"
    });
    const data = await response.json(); //Väntar till json
    console.log(data);
}

//# sourceMappingURL=index.de158e3a.js.map
