const addButt = document.getElementById("AddButt");
addButt.addEventListener("click", () => {
    const addform = document.getElementById("AddForm");
    const remform = document.getElementById("RemForm");
    if(remform.style.display==="block"){
        remform.style.display = "none";
    }
    if(addform.style.display==="none"){
        addform.style.display = "block";
    }
    else{
        addform.style.display="none";
    }
});

const remButt = document.getElementById("RemButt");
remButt.addEventListener("click", () => {
    const remform = document.getElementById("RemForm");
    const addform = document.getElementById("AddForm");
    if(addform.style.display === "block"){
        addform.style.display = "none";
    }
    if(remform.style.display === "none"){
        remform.style.display = "block";
    }
    else{
        remform.style.display="none";
    }
});

const addName = document.getElementById("AddName");
addName.addEventListener("input", event => {
    addName.textContent = event.data;
});

const addDescription = document.getElementById("AddDescription");
addDescription.addEventListener("input", event => {
    addDescription.textContent = event.data;
});

const addfinalbutt = document.getElementById("Addfinalbutt");
addfinalbutt.addEventListener("submit", addCity);

function addCity() {
    var divGrid = document.getElementById("container");
    var newDivCity = document.createElement("div");
    newDivCity.id += addName.value;
    var p = document.createElement("p");
    p.textContent = addName.value;
    var img = document.createElement("img");
    const addImg = document.getElementById("AddImg").files[0];
    const reader = new FileReader;
    reader.addEventListener("load",function() {
        img.src = reader.result;

    }, false);
    img.src = reader.readAsDataURL(addImg);
    img.width = "300";
    img.height = "150";
    var description = document.createElement("p");
    description.textContent = addDescription.value;
    description.contentEditable = "true";
    newDivCity.appendChild(p);
    newDivCity.appendChild(img);
    newDivCity.appendChild(description);
    divGrid.appendChild(newDivCity);  
    addName.value = "";
    addDescription.value = "";      
}

const remName = document.getElementById("RemName");
remName.addEventListener("input", event => {
    remName.textContent = event.data;
});

const remfinalbutt = document.getElementById("Remfinalbutt");
remfinalbutt.addEventListener("submit", remCity);
function remCity(){
    var RemDivCity = document.getElementById(remName.value);
    RemDivCity.remove();
    remName.value = "";
}