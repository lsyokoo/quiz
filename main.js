document.addEventListener("DOMContentLoaded", function() {
    
    document.querySelector("#name").addEventListener("keyup", function() {
        let val = this.value;
        localStorage.setItem("name", val);
    });

  
    document.querySelectorAll('input[type="radio"][name="challenge"]').forEach(function(radio) {
        radio.addEventListener('change', function() {
            let result = document.getElementById('result'); 
            switch (this.value) {
                case 'Small talks':
                    result.textContent = 'Small talks are an essential part of networking.';
                    break;
                case 'Food habits':
                    result.textContent = 'Food habits can significantly differ from one culture to another.';
                    break;
                case 'Unfamiliar customs':
                    result.textContent = 'Navigating unfamiliar customs is a common challenge in new cultural settings.';
                    break;
            }
            localStorage.setItem("culturalChallenge", this.value); 
        });
    });


    let radioNums = document.querySelectorAll('.radio-num');
    for (let i = radioNums.length - 1; i >= 0; i--) {
        radioNums[i].addEventListener('change', function() {
            localStorage.setItem("number", this.value);
        });
    }

   
    let radioBools = document.querySelectorAll('.radio-bool');
    for (let i = radioBools.length - 1; i >= 0; i--) {
        radioBools[i].addEventListener('change', function() {
            localStorage.setItem("bool", this.value);
        });
    }

    

});
