// 1.
// var firstName = document.getElementById("fn");
// var lastName = document.getElementById("ln");
// var userDate = document.getElementById("dob");
// var userId = document.getElementById("idnumber");
// var userCity = document.getElementById("uc");
// var button = document.getElementById("btn");
// var par1 = document.getElementById("para");
// var div1 = document.getElementById("allDiv");
// var arrayOfSubjects = [];
// button.addEventListener("click", function(){
//     var newUser = {name: firstName.value, lastName:lastName.value, DateOfBirth: userDate.value, idNumber: userId.value, city: userCity.value, dateOfToday: Date()};
//     // console.log(newUser = {name: firstName.value, lastName:lastName.value, DateOfBirth: userDate.value, idNumber: userId.value, city: userCity.value, dateOfToday: Date()});
//     for(let i = 0; i < arrayOfSubjects.length; i++){
//         if(newUser.idNumber == arrayOfSubjects[i].idNumber){
//             alert ("alredy here");
//             return;
//         };
//     };
//     arrayOfSubjects.push(newUser);
//     console.log(arrayOfSubjects);
//     par1.innerHTML+= `name: ${newUser.name}, last name: ${newUser.lastName}, date of birth: ${newUser.DateOfBirth}, id number: ${newUser.idNumber}, city: ${newUser.userCity} date: ${newUser.dateOfToday}`
//     div1.innerHTML+= `<tr>${par1.innerHTML}</tr>`
// });

// firstName.oninput = ()=>{firstName.value = firstName.value.toUpperCase()};
// lastName.oninput = ()=>{lastName.value = lastName.value.toUpperCase()};
// userCity.oninput = ()=>{userCity.value = userCity.value.toUpperCase()};

// var userInput = document.getElementById("cheak");
// var button2 = document.getElementById("btn2");
// button2.addEventListener("click", function(){
//     for (let i = 0; i < arrayOfSubjects.length; i++) {
//         if(userInput.value == arrayOfSubjects[i].name){
//             par1.innerHTML+= `${arrayOfSubjects[i].name},${arrayOfSubjects[i].lastName}, ${arrayOfSubjects[i].DateOfBirth}, ${arrayOfSubjects[i].idNumber}, ${arrayOfSubjects[i].userCity}, ${arrayOfSubjects[i].dateOfToday}`
//             return;
//         }
//         par1.innerHTML+= `"not here`
//     }
// })

// var userInput1 = document.getElementById("cheak1");
// var button3 = document.getElementById("btn3");
// button3.addEventListener("click", function(){
//     for (let i = 0; i < arrayOfSubjects.length; i++) {
//         if(userInput1.value == arrayOfSubjects[i].idNumber){
//             par1.innerHTML+= `${arrayOfSubjects[i].name},${arrayOfSubjects[i].lastName}, ${arrayOfSubjects[i].DateOfBirth}, ${arrayOfSubjects[i].idNumber}, ${arrayOfSubjects[i].userCity}, ${arrayOfSubjects[i].dateOfToday}`
//             return;
//         }
//         par1.innerHTML+= `"not here`
//     }
// })