document.addEventListener("DOMContentLoaded", function() {

    let storedName = localStorage.getItem("name");
    if (storedName) {
        document.querySelector("#name").textContent = storedName;
    }


    let culturalChallenge = localStorage.getItem("culturalChallenge");
    switch (culturalChallenge) {
        case 'Small talks':
            document.querySelector("#new-message-1").textContent = "You chose small talks: Small talks are an essential part of networking.";
            break;
        case 'Food habits':
            document.querySelector("#new-message-1").textContent = "You chose food habits: You can try to cook by yourself.";
            break;
        case 'Unfamiliar customs':
            document.querySelector("#new-message-1").textContent = "You chose unfamiliar customs: Navigating unfamiliar customs is a common challenge in new  settings.";
            break;
        default:
            document.querySelector("#new-message-1").textContent = "Please make a selection on the previous page.";
    }

    
    let difficultyLevel = localStorage.getItem("number");
    document.querySelector("#new-message-2").textContent = "Difficulty level chosen: " + difficultyLevel;

    
    let financialPressure = localStorage.getItem("bool");
    if (financialPressure === "true") {
        document.querySelector("#new-bool-msg").innerHTML = "You say you have financial pressure. Here are some tips that will help ease your burden.";
        document.querySelector("#new-message-3").innerHTML = `<iframe width="560" height="315" src="https://bau.edu/blog/how-to-save-money-for-students/" title="MoneySavingTipsWebsite" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
    } else {
        document.querySelector("#new-bool-msg").innerHTML = "Glad to hear that you don't have financial pressure. You can learn how to use your money to make life better here:";
        document.querySelector("#new-message-3").innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/JvrTEGksrtg?si=ro_MPJEbHyHM2H-Z" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
    }

     
     let racialDiscrimination = localStorage.getItem("racialDiscrimination");
     document.querySelector("#new-message-5").textContent = racialDiscrimination === "true" ? "You have experienced racial discrimination." : "You have not experienced racial discrimination.";
 
    
     let accommodationDifficulty = localStorage.getItem("accommodationDifficulty");
     document.querySelector("#new-message-6").textContent = "Level of difficulty finding suitable accommodation: " + (accommodationDifficulty || "Not specified");
 

     let homesick = localStorage.getItem("bool");
    if (homesick === "true") {
    
        document.querySelector("#new-bool-msg").innerHTML = "You say you have financial pressure. Here are some tips that will help ease your burden.";
        document.querySelector("#new-message-7").innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/Exo-PqxEWe4?si=Wy34OaRNjSEnZ8ZI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
    } else {
        document.querySelector("#new-bool-msg").innerHTML = "Glad to hear that you don't feel homesick. But you can watch this in advance just in case.";
        document.querySelector("#new-message-7").innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/1-ZZow5NP-o?si=x44zL-PzB1DD6JmB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
    }




    let schoolSupport = localStorage.getItem("bool");
    if (schoolSupport === "true") {
        document.querySelector("#new-message-8").innerHTML = 'You are well informed about the resources and support for international students at your school.Here you can explore off-campus resources: <a href="https://www.internationalstudent.com/resources/" target="_blank">Learn more about our resources</a>.';
    } else {
        document.querySelector("#new-message-8").innerHTML = 'It seems you might not be fully aware of the resources and support available. <a href="https://www.newschool.edu/international-students-scholars/" target="_blank">Discover our resources</a>.';
    }


 let learningEnvironment = localStorage.getItem("bool");
 if (learningEnvironment === "true") {
     document.querySelector("#new-message-9").innerHTML = `<img src="pics/satisfied.jpg" alt="Feeling Satisfied" style="width: 200px; height: auto;">`;
 } else {
     document.querySelector("#new-message-9").innerHTML =`<img src="pics/unsatisfied.jpg" alt="Feeling Unsatisfied" style="width: 200px; height: auto;">`;
 }
});