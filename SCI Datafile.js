let saveFile = () => {

    // Get the data from each element on the form.
    const UserName = document.getElementById('UserName');
    const AadharNo = document.getElementById('AadharNo');
    const MobileNo = document.getElementById('MobileNo');
    const OTP = document.getElementById('OTP');

    // This variable stores all the data.
    let data =
        '\r UserName: ' + UserName.value + ' \r\n ' +
        'AadharNo: ' +AadharNo.value + ' \r\n ' +
        'MobileNo: ' + MobileNo.value + ' \r\n ' +
        'OTP: ' + OTP.value + ' \r\n ';


    // Convert the text to BLOB.
    const textToBLOB = new Blob([data], { type: 'text/plain' });
    const sFileName = 'formData.txt';	   // The file to save the data.

    let newLink = document.createElement("a");
    newLink.download = sFileName;

    if (window.webkitURL != null) {
        newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    }
    else {
        newLink.href = window.URL.createObjectURL(textToBLOB);
        newLink.style.display = "none";
        document.body.appendChild(newLink);
    }

    newLink.click();
}