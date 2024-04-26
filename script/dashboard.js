// *******************************************
// Open the navigation panel function
// *******************************************
document.getElementById('main').style.marginLeft = '113px'
document.getElementById('myNav').style.left = '0'
document.getElementById('myNav').style.display = 'block'
document.getElementsByClassName('side-nav').style.transition = '0.5s ease'
document.getElementById('main').style.marginLeft = '70px'
function openNav() {
    document.getElementById("myNav").style.width = "0px";
    document.getElementById("main").style.marginLeft = "0px";
    document.getElementById("myNav").style.width = "fit-content";    vardocument.getElementById("main").style.marginLeft = "0px";
    document.getElementById('main').style.background = 'red'
    var mainPg = document.getElementById('main')
    var sideNav = document.getElementById('myNav')
    var elementBox = document.getElementById('active-element')

    if (mainPg.style.marginLeft == '76px') {
        mainPg.style.marginLeft = '0px'
        sideNav.style.width = '0px'
        elementBox.style.display = "none"
        elementBox.style.backgroundColor = "red"

    } else {
        elementBox.style.display = "block"
        document.getElementsByClassName("heading-box").style.backgroundColor = "red"
        mainPg.style.marginLeft = '76px'
        sideNav.style.width = '70px'
    }
    var myNav = docu.getElementById("myNav")
    if (myNav.style.width >= 0) {
        alert("ddddd")
    }
    if (window >= 76) {
        alert('working')
    }
}

// *******************************************
// Close the navigation panel function
// *******************************************
function closeNav() {
    document.getElementById("myNav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    if (window >= 768) {
        alert('working')
    }
    document.getElementsByClassName("open-btn").write = "ddd"
    document.write
}

// *******************************************
// toggle dark mode function
// *******************************************
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    document.querySelectorAll('.detail-box, .event_list, .side-nav, .heading-box, img, p, h3').forEach(element => {
        element.classList.toggle('dark-mode');
    });
    console.log("press")
}

// *******************************************
// Function to get the file input and button elements
// *******************************************
var fileInput = document.getElementById('profile-picture');
var fileButton = document.getElementById('file-button');
var previewContainer = document.getElementById('preview');

// Add a click event listener to the button
fileButton.addEventListener('click', function () {
    fileInput.click(); // Trigger the file input when the button is clicked
});

// *******************************************
// Function to preview the selected image
// *******************************************
function previewImage() {
    var file = fileInput.files[0];
    var reader = new FileReader();

    // Check if a file is selected
    if (file) {
        reader.onload = function (e) {
            // Set the background of the preview container to the selected file
            previewContainer.style.backgroundImage = 'url(' + e.target.result + ')';
        };

        reader.readAsDataURL(file); // Read the file as a data URL
    }
}

// *******************************************
// button to switch page start
// *******************************************
function registerHomeBtn() {
    location.href = "./register_form.html"
}

function MainAddBtn() {
    location.href = "./main_add.html"
    // alert("I am working")
}

function addPupilFun() {
    document.getElementById("pupil").style.display = "block"
    document.getElementById("staff").style.display = "none"
    // alert("working")
}

function addStaffFun() {
    document.getElementById("pupil").style.display = "none"
    document.getElementById("staff").style.display = "block"
    // alert("working")
}

function logoutFun() {
    location.href = "./register_form.html"
    target = "_blank"
}

function supmitInfo() {
    location.href = "./dashboard.html"
}

// admin page switch function
function pupilAdminPage() {
    window.location.href = "pupil.html"        
}
function staffAdminPage() {
    window.location.href = "staff.html"
}
function classroomAdminPage() {
    window.location.href = "classroom.html"
}
// *******************************************
// button to switch page end
// *******************************************


// *******************************************
// Function to hide and display content
// *******************************************
function addPupilFun() {
    // div content variable
    var pupil = document.getElementById("pupilSection");
    var staff = document.getElementById("staffSelection");
    // button content variable
    var pupilBtn = document.getElementById("addPupil");
    var staffBtn = document.getElementById("addStaff");

    if (pupil.style.display === "none") {
        pupil.style.display = "block";
        staff.style.display = "none";
        pupilBtn.style.backgroundColor = "darkolivegreen"
        pupilBtn.style.Color = "white"
        staffBtn.style.backgroundColor = "#ddd"
    } else {
        pupilBtn.style.backgroundColor = "transparent"
        pupil.style.display = "none";
    }
}
function addStaffFun() {
    // div content variable
    var pupil = document.getElementById("pupilSection");
    var staff = document.getElementById("staffSelection");

    // btn content variable
    var staffBtn = document.getElementById("addStaff");
    var pupilBtn = document.getElementById("addPupil");

    if (staff.style.display === "none") {
        staff.style.display = "block";
        pupil.style.display = "none";
        staffBtn.style.backgroundColor = "darkolivegreen"
        staffBtn.style.Color = "#fff"
        pupilBtn.style.backgroundColor = "#ddd"
    } else {
        staff.style.display = "none";
    }
}

// *******************************************
// 
// *******************************************
function returnMain() {
    // alert(",k")
    window.location.href = 'dashboard.html'
}


// *******************************************
// script for the add button
// *******************************************
// const addStudentButton = document.getElementById('addStudentBtn'); // button to add new pupil
// const studentForm = document.getElementById('student-form'); // form or dialogue box
// const saveStudentButton = document.getElementById('save-btn'); // save button
// const cancleStudentButton = document.getElementById('cancle-btn'); // cancle button
// const studentTable = document.getElementById('student-table');
// const userInfoPanel = document.getElementById('user-info');
// const userName = document.getElementById('user-name');
// const userEmail = document.getElementById('user-email');
// const userPhone = document.getElementById('user-phone');
// const userAddress = document.getElementById('user-address');
// const userImage = document.getElementById('userimage');
// const userClass = document.getElementById('user-class');
// const userColor = document.getElementById('user-color');
// const userInfoImage = document.getElementById('user-info-image');

// var mainFrame = document.getElementById('main').style.marginLeft = '76px';
// let currentAdmissionNumber = 33062; // Starting admission number

// function handleClassLevel() {
//     var classCategoryElement = document.getElementById('classLevel');
//     var classCategoryValue = classCategoryElement.value;

//     if (classCategoryValue === 'jss1') {
//         document.getElementById('streamBox').style.display = 'none'
//         alert("i am jss");
//     } else if (classCategoryValue === 'sss1') {
//         alert("i am sss");
//     }
// };

// addStudentButton.addEventListener('click', () => {
//     studentForm.style.display = 'flex'; // Show the form on click
//     document.getElementById('myNav').style.display = 'none'
//     mainFrame.style.marginLeft = '0px'
// });

// saveStudentButton.addEventListener('click', () => {
//     const admissionNumber = document.getElementById('admission-number').value;
//     const name = document.getElementById('name').value;
//     const levelValue = document.getElementById('classLevel').value;
//     // const streamValue = document.getElementById('streamBox').value;
//     const emailValue = document.getElementById('user-email').value;
//     const phoneValue = document.getElementById('user-phone').value;
//     const addressValue = document.getElementById('user-address').value;
//     // const dobValue = document.getElementById('user-DOB').value;
//     const color = document.getElementById('color').value;
//     const userImageInput = document.getElementById('user-image');

//     // if (
//         // name && levelValue && emailValue && phoneValue
//         // && addressValue && dobValue && color && userImageInput.files.length > 0
//     // )
// // {

//         // Check for existing admission number (same logic as before)
//         studentForm.style.display = 'none'; // hide the form on click


//         const newRow = studentTable.insertRow(-1);
//         const admissionNumberCell = newRow.insertCell();
//         const nameCell = newRow.insertCell();
//         const levelCell = newRow.insertCell();
//         const colorCell = newRow.insertCell();
//         // const imageCell = newRow.insertCell();
//         // const sssCell = newRow.insertCell();
//         // const classCell = newRow.insertCell();

//         admissionNumberCell.textContent = admissionNumber;
//         nameCell.textContent = name;
//         nameCell.textContent = name;
//         levelCell.textContent = levelValue

//         // Display user image
//         // const userImage = document.createElement('img');
//         // userImage.src = URL.createObjectURL(userImageInput.files[0]);
//         // userImage.alt = "Student Image";
//         // userImage.style.width = '50px';
//         // userImage.style.height = '50px';
//         // userImage.style.fill = 'fill'
//         // userImage.style.backgroundSize = 'cover';
//         // imageCell.appendChild(userImage);

//         // sssCell.textContent = sssclassValue
//         // classCell.textContent = classValue;

//         // Display the color as a colored square instead of text
//         const colorSquare = document.createElement('div');
//         colorSquare.style.width = '25px';
//         colorSquare.style.height = '25px';
//         colorSquare.style.backgroundColor = color;
//         colorCell.appendChild(colorSquare);

//         // Add click event listener to each newly created row
//         newRow.addEventListener('click', () => {
//             userName.textContent = `${name}`;
//             userEmail.textContent = `${emailValue}`;
//             userPhone.textContent = `${phoneValue}`;
//             userAddress.textContent = `${addressValue}`;
//             userColor.style.backgroundColor = color;
//             // userInfoImage.src = URL.createObjectURL(userImageInput.files[0]); // Set image source again
//             userInfoPanel.style.display = 'block'; // Show the user info panel
//         });

//         // Reset the form for the next entry
//         document.getElementById('admission-number').value = ++currentAdmissionNumber;
//         document.getElementById('name').value = '';
//         // document.getElementById('name').value = '';
//         // document.getElementById('jss').value = '';
//         // document.getElementById('class').value = '';
//         document.getElementById('color').value = '#000000'; // Default color to black
//         userImageInput.value = ''; // Clear file selection});
//     // } else {
//     //     var erroeMessage = document.getElementById('errMsg')
//     //     erroeMessage.innerHTML = "Complete the infoemation"
//     //     // alert('Please fill in all fields and select an image.');
//     // }

//     cancleStudentButton.addEventListener('click', () => {
//         document.getElementById('student-form').style.display = 'none'
//         document.getElementById('myNav').style.display = 'flex'
//         mainFrame.style.marginLeft = '76px'
//     });

//     // Close the user info panel when clicked outside
//     // userInfoPanel.addEventListener('click', (event) => {
//     //     if (event.target === userInfoPanel) {
//     //         userInfoPanel.style.display = 'none';
//     // }

// });