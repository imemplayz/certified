function preview() {
    //english
    var firstNameInput = document.getElementById("firstNameInput").value;
    var lastNameInput = document.getElementById("lastNameInput").value;
    var birthDateInput = document.getElementById("birthDateInput").value;
    var guardianInput = document.getElementById("guardianInput").value;
    var effectiveDateInput = document.getElementById("effectiveDateInput").value;
    var firstName = document.getElementById("firstName");
    var lastName = document.getElementById("lastName");
    var birthDate = document.getElementById("birthDate");
    var guardian = document.getElementById("guardian");
    var effectiveDate = document.getElementById("effectiveDate");
    var passId = document.getElementById("passID");
    var idNumber = getRandomInt(111111111, 999999999)
    //arabic
    var firstNameInputArabic = document.getElementById("firstNameInputArabic").value;
    var lastNameInputArabic = document.getElementById("lastNameInputArabic").value;
    var guardianInputArabic = document.getElementById("guardianInputArabic").value;
    var firstNameArabic = document.getElementById("firstNameArabic");
    var lastNameArabic = document.getElementById("lastNameArabic");
    var nameArabic = document.getElementById("nameArabic");
    var guardianArabic = document.getElementById("guardianArabic");
    var effectiveDateArabic = document.getElementById("effectiveDateArabic");


    firstName.textContent = firstNameInput + " "
    lastName.textContent = lastNameInput
    birthDate.textContent = birthDateInput
    guardian.textContent = guardianInput
    effectiveDate.textContent = effectiveDateInput
    passId.textContent = idNumber
    //arabic
    nameArabic.textContent = firstNameInputArabic + " " + lastNameInputArabic
    birthDateArabic.textContent = birthDateInput
    guardianArabic.textContent = guardianInputArabic
    effectiveDateArabic.textContent = effectiveDateInput
}

/////////////////////////////////////

function Print()
{
    var mywindow = window.open('', 'PRINT', 'height=400,width=600');

    mywindow.document.write('<html><head><title></title>');
    mywindow.document.write('<style>@page { size: auto;  margin: 0mm; } </style>');
    mywindow.document.write('</head><body >');
    mywindow.document.write(document.getElementById("printDiv").innerHTML);
    mywindow.document.write('</body></html>');

    mywindow.document.close(); // necessary for IE >= 10
    mywindow.focus(); // necessary for IE >= 10*/

    mywindow.print();
    mywindow.close();

    return true;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }
