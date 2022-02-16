// ALL VALIDATIONS 

let namee = document.getElementById('exampleInputText1')
let email = document.getElementById('exampleInputText2')
let phone = document.getElementById('exampleInputText3')
let city = document.getElementById('exampleInputText4')
let feedback = document.getElementById('exampleFormControlTextarea1')
let nameAlert = document.getElementById('nameAlert');
let emailAlert = document.getElementById('emailAlert');
let phoneAlert = document.getElementById('phoneAlert');
let feedAlert = document.getElementById('feedAlert');
let cityAlert = document.getElementById('cityAlert');
let alerts = document.getElementById("alerts")



let nameRegex = /^[a-zA-Z]+/;
let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let phoneRegex = /[0-9]{10}/;
let cityRegex = /^[a-zA-Z]+$/;

let checkName = () => {
    if (!nameRegex.test(namee.value)) {
        nameAlert.innerHTML = `<div class="alert alert-danger" role="alert">
        ! Name should contain alphabetical letters!
       </div>`;
        return false;
    }
    if (nameRegex.test(namee.value)) {
        nameAlert.innerHTML = " ";
        return true;
    }
}
let checkEmail = () => {
    if (!emailRegex.test(email.value)) {
        emailAlert.innerHTML = `<div class="alert alert-danger" role="alert">
        ! Email Should be proper and It Should contain @ also !
       </div>`;
    }
    if (emailRegex.test(email.value)) {
        emailAlert.innerHTML = " ";
        return true;
    }
}



let checkNum = () => {
    if (!phoneRegex.test(phone.value)) {
        phoneAlert.innerHTML = `<div class="alert alert-danger" role="alert">
       ! Phone Number Should not contain Alphabets and only 10 digits allowed !
      </div>`;
        return false;
    }
    if (phoneRegex.test(phone.value)) {
        phoneAlert.innerHTML = " ";
        return true;
    }
}
let checkCity = () => {
    if (!cityRegex.test(city.value)) {
        cityAlert.innerHTML = `<div class="alert alert-danger" role="alert">
       ! Just Enter Your city Name No numerical values  Allowed !
      </div>`;
        return false;
    }
    if (cityRegex.test(city.value)) {
        cityAlert.innerHTML = " ";
        return true;
    }
}

let checkFeed = () => {
    if ((feedback.value.length < 10)) {
        feedAlert.innerHTML = `<div class="alert alert-danger" role="alert">
       ! Feedback Should Contain atleast 10 characters !
      </div>`;
        return false;
    }
    else {
        feedAlert.innerHTML = "";
        console.log("why")
        return true;
    }

}

let validate = () => {

    let str = checkName();
    let str1 = checkEmail();
    let str2 = checkNum();
    let str3 = checkFeed();
    let str4 = checkCity();


    if ((str && str1 && str2 && str3 && str4) == true) {
        alerts.innerHTML = `<div class="alert alert-success" role="alert">
       Great! Form Submiited Successfully we will contact you soon ${namee.value}!
      </div>`
        namee.value = " ";
        email.value = " ";
        phone.value = "";
        feedback.value = " ";
        city.value = " ";
    }
    else {
        alerts.innerHTML = `<div class="alert alert-warning" role="alert">
       ! Fill all fields Correctly !
      </div>`;
    }
}




