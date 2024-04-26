saveStudentButton.addEventListener('click', () => {
    const admissionNumber = document.getElementById('admission-number').value;
    const name = document.getElementById('name').value;
    const levelValue = document.getElementById('classLevel').value;
    // const streamValue = document.getElementById('streamBox').value;
    const emailValue = document.getElementById('user-email').value;
    const phoneValue = document.getElementById('user-phone').value;
    const addressValue = document.getElementById('user-address').value;
    const dobValue = document.getElementById('user-DOB').value;
    const color = document.getElementById('color').value;
    const userImageInput = document.getElementById('user-image');

    if (
        name && levelValue && emailValue && phoneValue
        && addressValue && dobValue && color && userImageInput.files.length > 0
    ) {

        // Check for existing admission number (same logic as before)
        studentForm.style.display = 'none'; // hide the form on click


        const newRow = studentTable.insertRow(-1);
        const admissionNumberCell = newRow.insertCell();
        const nameCell = newRow.insertCell();
        const levelCell = newRow.insertCell();
        const colorCell = newRow.insertCell();
        // const imageCell = newRow.insertCell();
        // const sssCell = newRow.insertCell();
        // const classCell = newRow.insertCell();

        admissionNumberCell.textContent = admissionNumber;
        nameCell.textContent = name;
        levelCell.textContent = jssclassValue

        // Display user image
        const userImage = document.createElement('img');
        userImage.src = URL.createObjectURL(userImageInput.files[0]);
        userImage.alt = "Student Image";
        userImage.style.width = '50px';
        userImage.style.height = '50px';
        userImage.style.fill = 'fill'
        userImage.style.backgroundSize = 'cover';
        // imageCell.appendChild(userImage);

        // sssCell.textContent = sssclassValue
        // classCell.textContent = classValue;

        // Display the color as a colored square instead of text
        const colorSquare = document.createElement('div');
        colorSquare.style.width = '25px';
        colorSquare.style.height = '25px';
        colorSquare.style.backgroundColor = color;
        colorCell.appendChild(colorSquare);

        // Add click event listener to each newly created row
        newRow.addEventListener('click', () => {
            userName.textContent = `${name}`;
            userEmail.textContent = `${user - email}`;
            // userName.textContent = `Sss: ${sssclassValue}`;
            userClass.textContent = `Jss: ${jssclassValue}`;
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
        userImageInput.value = ''; // Clear file selection});
// )};/