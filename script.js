// select

var select = document.getElementById('stateid');
var option = document.createElement('option')
var state = [
    {
        state: "Tamilnadu",
        stateid: "1",
        disttrict: ["td1", 'td2', 'td3', 'td4', 'td5']
    }, {
        state: "Andra pradesh",
        stateid: "2",
        disttrict: ["apd1", 'apd2', 'apd3', 'apd4', 'apd5']
    }, {
        state: "Bihar",
        stateid: "2",
        disttrict: ["Bd1", 'Bd2', 'Bd3', 'Bd4', 'Bd5']
    }]

for (let i = 0; i < state.length; i++) {
    select.add(new Option(state[i].state))
}

function changestate() {
    var district = document.getElementById('district')
    console.log(select.value)



    for (let i = 0; i < state.length; i++) {

        if (select.value === state[i].state) {
            removeOptions(document.getElementById('district'))
            for (let j = 0; j < state[i].disttrict.length; j++) {
                district.value = ""
                district.add(new Option(state[i].disttrict[j]))
            }
        }
    }
}




function validate() {

    let name = document.getElementById("name").value;
    // let regno = document.getElementById("reg");
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let mobile = document.getElementById("mobile").value;
    let confirmpass = document.getElementById("confirm").value;
    // let regvalid = /^[0-9]+$/;
    // let regexPattern = /^[-#$.%&@!+=<>*]$/;
    var letters = /^[A-Za-z]+$/;
    var passletter = /^[A-Za-z0-9]+$/;
    let text;



    if (!(name.match(letters))) {
        text = "Enter valid name"
    }
    // else if (!(regno.match(regvalid))) {
    //     text = "Enter valid email"
    // }
    else if (mobile.toString().length < 10) {
        text = "Mobile Number should be 10 digits"
    }
    else if (!(email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ))) {
        text = "Enter valid email"
    }
    else if (password === "" && !(password.match(passletter))) {
        text = "Enter valid password"
    }
    else if (!(password.length > 10)) {
        text = "Password length should be greater than 10"
    }
    // else if (!(password.match(
    //     /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,20}$/
    // ))) {
    //     text = "Password should contain one symbol"
    // }
    else if (!(password === confirmpass))
        text = "Confirm password is word"
    else {
        text = "congratulations!"
    }

    document.getElementById("demo").innerHTML = text;
}

function showpassword() {
    if (document.getElementById("password").type === "password") {
        document.getElementById("password").type = 'text'
    } else {
        document.getElementById("password").type = 'password'
    }
}

function showconfirmpassword() {
    if (document.getElementById("confirm").type === "password") {
        document.getElementById("confirm").type = 'text'
    } else {
        document.getElementById("confirm").type = 'password'
    }
}

// var statedata = [
//     {
//         state: "Tamilnadu",
//         stateid: "1",
//         disttrict: [{ name: "NAM" }, {}, {}]
//     }, {
//         state: "Pudhuchery",
//         stateid: "2",
//         disttrict: [{ name: "NAM" }, {}, {}]
//     }]

