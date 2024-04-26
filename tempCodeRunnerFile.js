const addStudentButton = document.getElementById('addStudentBtn');
const studentForm = document.getElementById('student-form');
const saveStudentButton = document.getElementById('save-btn');
const cancleStudentButton = document.getElementById('cancle-btn');
const studentTable = document.getElementById('student-table');
const userInfoPanel = document.getElementById('user-info');
const userName = document.getElementById('user-name');
const userClass = document.getElementById('user-class');
const userColor = document.getElementById('user-color');
const userInfoImage = document.getElementById('user-info-image');

let currentAdmissionNumber = 33062; // Starting admission number


function handleClassCategory() {
    var classCategoryElement = document.getElementById('classCategory');
    var classCategoryValue = classCategoryElement.value;

    if (classCategoryValue === 'jss') {
        document.getElementById('seniorLevel').style.display = 'none';
        document.getElementById('juniorLevel').style.display = 'flex';
    } else if (classCategoryValue === 'sss') {
        document.getElementById('seniorLevel').style.display = 'flex';
        document.getElementById('juniorLevel').style.display = 'none';
        // alert("i am jss");
        // alert("i am sss");
    }
}

addStudentButton.addEventListener('click', () => {
    studentForm.style.display = 'flex'; // Show the form on click
    // studentForm.style.background = 'red';
    // alert("i am working")
});

saveStudentButton.addEventListener('click', () => {
    const admissionNumber = document.getElementById('admission-number').value;
    const name = document.getElementById('name').value;
    // const classCategoryValue = document.getElementById('classCategory').value;
    // const sssclassValue = document.getElementById('sssClass').value;
    // const jssclassValue = document.getElementById('jssClass').value;
    // const classValue = document.getElementById('class').value;
    const color = document.getElementById('color').value;
    const userImageInput = document.getElementById('user-image');

    if (name && jssclassValue && color && userImageInput.files.length > 0) {

        // for ()
        // Check for existing admission number (same logic as before)
        studentForm.style.display = 'none'; // Show the form on click

        const newRow = studentTable.insertRow(-1);

        const admissionNumberCell = newRow.insertCell();
        // const imageCell = newRow.insertCell();
        const nameCell = newRow.insertCell();
        const jssCell = newRow.insertCell();
        // const sssCell = newRow.insertCell();
        // const classCell = newRow.insertCell();
        const colorCell = newRow.insertCell();

        admissionNumberCell.textContent = admissionNumber;

        // Display user image
        const userImage = document.createElement('img');
        userImage.src = URL.createObjectURL(userImageInput.files[0]);
        userImage.alt = "Student Image";
        userImage.style.width = '50px';
        userImage.style.height = '50px';
        userImage.style.backgroundSize = 'cover';
        // imageCell.appendChild(userImage);

        nameCell.textContent = name;
        // sssCell.textContent = sssclassValue
        jssCell.textContent = jssclassValue
        // classCell.textContent = classValue;

        // Display the color as a colored square instead of text
        const colorSquare = document.createElement('div');
        colorSquare.style.width = '25px';
        colorSquare.style.height = '25px';
        colorSquare.style.backgroundColor = color;
        colorCell.appendChild(colorSquare);

        // Add click event listener to each newly created row
        newRow.addEventListener('click', () => {
            userName.textContent = `Name: ${name}`;
            // userName.textContent = `Sss: ${sssclassValue}`;
            userName.textContent = `Jss: ${jssclassValue}`;
            // userClass.textContent = `Class: ${classValue}`;
            userColor.style.backgroundColor = color;
            userInfoImage.src = URL.createObjectURL(userImageInput.files[0]); // Set image source again
            userInfoPanel.style.display = 'block'; // Show the user info panel
        });

        // Reset the form for the next entry
        document.getElementById('admission-number').value = ++currentAdmissionNumber;
        document.getElementById('name').value = '';
        // document.getElementById('name').value = '';
        // document.getElementById('jss').value = '';
        // document.getElementById('class').value = '';
        document.getElementById('color').value = '#000000'; // Default color to black
        userImageInput.value = ''; // Clear file selection
    } else {
        var erroeMessage = document.getElementById('errMsg')
        erroeMessage.innerHTML = "Complete the infoemation"
        alert('Please fill in all fields and select an image.');
    }
});

