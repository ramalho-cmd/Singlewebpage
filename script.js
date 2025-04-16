function addRecommendation() {
  // Get the message of the new recommendation
  let recommendation = document.getElementById("new_recommendation");
  // If the user has left a recommendation, display a pop-up
  if (recommendation.value != null && recommendation.value.trim() != "") {
    console.log("New recommendation added");
    //Call showPopup here

    // Create a new 'recommendation' element and set it's value to the user's message
    var element = document.createElement("div");
    element.setAttribute("class","recommendation");
    element.innerHTML = "\<span\>&#8220;\</span\>" + recommendation.value + "\<span\>&#8221;\</span\>";
    // Add this element to the end of the list of recommendations
    document.getElementById("all_recommendations").appendChild(element); 
    
    // Reset the value of the textarea
    recommendation.value = "";
  }
}

function showPopup(bool) {
  if (bool) {
    document.getElementById('popup').style.visibility = 'visible'
  } else {
    document.getElementById('popup').style.visibility = 'hidden'
  }
}

function beach_func(){

    const container = document.getElementById("content"); // Certifique-se que tem um elemento com id="content"

    const h2 = document.createElement("h2");
    h2.textContent = "Sua busca: beach";
    container.appendChild(h2);

    // Primeira imagem
    const img1 = document.createElement("img");
    img1.src = "html_finalprojimages/miami_beach.jpeg";
    img1.alt = "Miami Beach";
    container.appendChild(img1);

    const desc1 = document.createElement("p");
    desc1.textContent = "That is the Miami beach on US.";
    container.appendChild(desc1);

    // Segunda imagem
    const img2 = document.createElement("img");
    img2.src = "html_finalprojimages/caribe_beach.jpg";
    img2.alt = "Caribean Beach";
    container.appendChild(img2);

    const desc2 = document.createElement("p");
    desc2.textContent = "That is the Caribean beach on Caribe.";
    container.appendChild(desc2);
            
}

function temple_func(){

    const container = document.getElementById("content"); // Certifique-se que tem um elemento com id="content"

    const h2 = document.createElement("h2");
    h2.textContent = "Sua busca: temple";
    container.appendChild(h2);

    // Primeira imagem
    const img1 = document.createElement("img");
    img1.src = "html_finalprojimages/inca_temple.jpg";
    img1.alt = "Inca temple";
    container.appendChild(img1);

    const desc1 = document.createElement("p");
    desc1.textContent = "That is an Inca temple.";
    container.appendChild(desc1);

    // Segunda imagem
    const img2 = document.createElement("img");
    img2.src = "html_finalprojimages/hindu_temple.jpg";
    img2.alt = "Hindu temple";
    container.appendChild(img2);

    const desc2 = document.createElement("p");
    desc2.textContent = "That is a hindu temple.";
    container.appendChild(desc2);
            
}

function serbia_func(){

    const container = document.getElementById("content"); // Certifique-se que tem um elemento com id="content"

    const h2 = document.createElement("h2");
    h2.textContent = "Sua busca: serbia";
    container.appendChild(h2);

    // Primeira imagem
    const img1 = document.createElement("img");
    img1.src = "html_finalprojimages/servia1.jpg";
    img1.alt = "Serbia";
    container.appendChild(img1);

    const desc1 = document.createElement("p");
    desc1.textContent = "That is a spot on Serbia.";
    container.appendChild(desc1);

    // Segunda imagem
    const img2 = document.createElement("img");
    img2.src = "html_finalprojimages/servia2.jpg";
    img2.alt = "Serbia";
    container.appendChild(img2);

    const desc2 = document.createElement("p");
    desc2.textContent = "That is another spot on Serbia.";
    container.appendChild(desc2);
            
}

function greece_func(){

    const container = document.getElementById("content"); // Certifique-se que tem um elemento com id="content"

    const h2 = document.createElement("h2");
    h2.textContent = "Sua busca: greece";
    container.appendChild(h2);

    // Primeira imagem
    const img1 = document.createElement("img");
    img1.src = "html_finalprojimages/grecia1.jpg";
    img1.alt = "Greece";
    container.appendChild(img1);

    const desc1 = document.createElement("p");
    desc1.textContent = "That is a spot on Greece.";
    container.appendChild(desc1);

    // Segunda imagem
    const img2 = document.createElement("img");
    img2.src = "html_finalprojimages/grecia2.jpg";
    img2.alt = "Greece";
    container.appendChild(img2);

    const desc2 = document.createElement("p");
    desc2.textContent = "That is another spot on Greece.";
    container.appendChild(desc2);
            
}

function empty_func(){

    const container = document.getElementById("content"); // Certifique-se que tem um elemento com id="content"

    const h2 = document.createElement("h2");
    h2.textContent = "Sem buscas disponíveis";
    container.appendChild(h2);

            
}

function search(){
   const word = document.getElementById("in_text").value
    if (word=="beach"){
        beach_func()
    }
    else if (word=="temple"){
        temple_func()
    }
    else if (word=="serbia"){
        serbia_func()
    }
    else if (word=="greece"){
        greece_func()
    }
    else {
        empty_func()
    }

}