const addStudentButton = document.getElementById('addStudentBtn');
const studentForm = document.getElementById('student-form');
const saveStudentButton = document.getElementById('save-btn');
const cancleStudentButton = document.getElementById('cancle-btn');
const studentTable = document.getElementById('student-table');
const userInfoPanel = document.getElementById('user-info');
const userFirstName = document.getElementById('user-first-name');
const userLastName = document.getElementById('user-last-name');
const userLevel = document.getElementById('user-level');
const userEmail = document.getElementById('user-email');
const userAOS = document.getElementById('user-email');
const userPhone = document.getElementById('user-phone');
const userAddress = document.getElementById('user-address');
const userDOB = document.getElementById('user-DOB');
// const userDOB = document.getElementById('user-DOB');
const userClass = document.getElementById('user-class');
const userColor = document.getElementById('user-color');
const userInfoImage = document.getElementById('user-info-image');

document.getElementById('main').style.marginLeft = '113px'
let currentAdmissionNumber = 33062; // Starting admission number
let currentpupilCount = 33062; // Starting pupil count

function handleClassLevel() {
    var classCategoryElement = document.getElementById('classLevel');
    var classCategoryValue = classCategoryElement.value;

    if (classCategoryValue === 'JSS-1' || classCategoryValue === 'JSS-2' || classCategoryValue === 'JSS-3') {
        document.getElementById('streamBox').style.display = 'none'
    } else if (classCategoryValue === 'SSS-1' || classCategoryValue === 'SSS-2' || classCategoryValue === 'SSS-3') {
        document.getElementById('streamBox').style.display = 'flex'
    }
};

addStudentButton.addEventListener('click', () => {
    studentForm.style.display = 'flex'; // Show the form on click
    document.getElementById('main').style.marginLeft = '0'
    document.getElementById('myNav').style.display = 'none'
    document.getElementById('other-info-container').style.position = 'static'
    // document.getElementById('student-form').style.marginLeft = '0px'
});

cancleStudentButton.addEventListener('click', () => {
    studentForm.style.display = 'none'; // Show the form on click
    // document.getElementById('student-form').style.marginLeft = '-1000px'
    document.getElementById('main').style.marginLeft = '113px'
    document.getElementById('myNav').style.display = 'flex'
});

saveStudentButton.addEventListener('click', () => {
    const admissionNumber = document.getElementById('admission-number').value;
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const level = document.getElementById('classLevel').value;
    const aos = document.getElementById('stream').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const dob = document.getElementById('DOB').value;
    const userImageInput = document.getElementById('user-image');
    const color = document.getElementById('color').value;

    // if (firstName && lastName && level && email && phone && address && dob && color && userImageInput.files.length > 0) {
    if (firstName && lastName && level && email && phone && address && color) {
        document.getElementById('main').style.marginLeft = '117px'
        document.getElementById('myNav').style.display = 'flex'
        // Check for existing admission number (same logic as before)
        studentForm.style.display = 'none'; // Show the form on click

        const newRow = studentTable.insertRow(-1);
        // let numCell = newRow.insertCell()
        // const countNumCell = newRow.insertCell();
        const admissionNumberCell = newRow.insertCell();
        const nameCell = newRow.insertCell();
        const levelCell = newRow.insertCell();
        const colorCell = newRow.insertCell();
        // const imageCell = newRow.insertCell();
        // const SSS-Cell = newRow.insertCell();
        // const classCell = newRow.insertCell();

        admissionNumberCell.textContent = admissionNumber;
        // countNumCell.textContent = countNumCell ++;
        nameCell.textContent = firstName + lastName;
        // lastNameCell.textContent = lastName;
        levelCell.textContent = level
        // numCell == 0
        // numCell = numCell
        // SSS-Cell.textContent = SSS-classValue

        // Display user image
        // const userImage = document.createElement('img');
        // userImage.src = URL.createObjectURL(userImageInput.files[0]);
        // userImage.alt = "Student Image";
        // userImage.style.width = '50px';
        // userImage.style.height = '50px';
        // userImage.style.backgroundSize = 'cover';
        // imageCell.appendChild(userImage);

        // classCell.textContent = classValue;

        // Display the color as a colored square instead of text
        const colorSquare = document.createElement('div');
        colorSquare.style.width = '25px';
        colorSquare.style.height = '25px';
        colorSquare.style.backgroundColor = color;
        colorCell.appendChild(colorSquare);

        // Add click event listener to each newly created row
        newRow.addEventListener('click', () => {
            userFirstName.textContent = `${firstName}`;
            userLastName.textContent = `${lastName}`;
            // userAOS.value = `${aos}`;
            userEmail.textContent = `${email}`;
            userPhone.textContent = `+232${phone}`;
            userAddress.textContent = `${address}`;
            // userDOB. = `${dob}`;
            // userColor.style.backgroundColor = color;
            // userInfoImage.src = URL.createObjectURL(userImageInput.files[0]); // Set image source again
            // userInfoPanel.style.display = 'block'; // Show the user info panel
        });

        // Reset the form for the next entry
        document.getElementById('admission-number').value = ++currentAdmissionNumber;
        document.getElementById('firstName').value = '';
        document.getElementById('lastName').value = '';
        // document.getElementById('name').value = '';
        // document.getElementById('JSS-').value = '';
        // document.getElementById('class').value = '';
        document.getElementById('color').value = '#000000'; // Default color to black
        // userImageInput.value = ''; // Clear file selection
    } else {
        var erroeMessage = document.getElementById('errMsg')
        erroeMessage.innerHTML = "Complete the infoemation"
        // alert('Please fill in all fields and select an image.');
    }
});
