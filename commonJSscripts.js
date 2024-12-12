window.onload = checker;

/* value attribute should be used to initialize the element's value. 
If left blank, the placeholder shall appear in its space. 
When the value attribute has been defined then you can easily get the corresponding value 
that the user will input with the DOM attribute value, 
the textContent might be returning whole lot more than the value */
/* something simple to test 
function checker() {
    
    let nameSurname = document.getElementById('onomatepwnumo');
    nameSurname.onchange = function() {
        
        let valueNameSurname = nameSurname.value;
        console.log('hello ' + valueNameSurname);
        
    }
} */



function checker() {
    /* --- 1 έλεγχος ταιριάσματος passwords --- */
    let valid = false;
    let pass1 = document.getElementById('thePassword');
    let pass2 = document.getElementById('repeatPassword');
    let valuePass1;
    let valuePass2;
    pass1.onchange = function() {
        valuePass1 = pass1.value;
        valuePass2 = pass2.value;
        if (valuePass1 == valuePass2) {
            valid = true;
        } else { valid = false; }
        console.log('pass1: ' + valuePass1 + ' pass2: ' + valuePass2 + ' valid: ' + valid);
        if (valid === false) {
            pass1.setCustomValidity(" Ο κωδικός και η επανάληψη κωδικού δεν ταιριάζουν");
        } else {
            pass1.setCustomValidity("");
        }
    } 
    pass2.onchange = function() {
        valuePass1 = pass1.value;
        valuePass2 = pass2.value;
        if (valuePass1 == valuePass2) {
            valid = true;
        } else { valid = false; }
        console.log('pass1: ' + valuePass1 + ' pass2: ' + valuePass2 + ' valid: ' + valid);
        if (valid === false) {
            pass1.setCustomValidity(" Ο κωδικός και η επανάληψη κωδικού δεν ταιριάζουν");
        } else {
            pass1.setCustomValidity("");
        }
    }    
    /* --- 2 έλεγχος ηλικίας --- */
    let valid2 = false;
    let dateOfBirth = document.getElementById('hmeromhniaGennhshs');
    let yearOfBirth = 1900;
    dateOfBirth.onchange = function() {
        yearOfBirth = dateOfBirth.value.slice(0,4);
        console.log('year of birth: ' + yearOfBirth);
        yearOfBirth--;
        yearOfBirth++;
        
        if (yearOfBirth > 1900) {
            valid2 = true;
        }
        if (valid2 === false) {
            dateOfBirth.setCustomValidity(" Highlander never dies αλλά παρακαλούμε τοποθετήστε μια έγκυρη ηλικία");
        } else {
            dateOfBirth.setCustomValidity("");
        }
    }
    /* --- 3 έλεγχος τηλεφώνου --- */
    let valid3 = false;
    let theNumber = document.getElementById('thlefwnoEpikoinwnias');
    theNumber.onchange = function() {
        let textOfNumber = theNumber.value;
        console.log('telephone: ' + textOfNumber + ' first three: ' + textOfNumber.slice(0,3));
        if ( (textOfNumber.slice(0,3) == '697') || (textOfNumber.slice(0,3) == '210') ) {
            valid3 = true;
        }
        if (valid3 === false) {
            theNumber.setCustomValidity(" Παρακαλώ εισάγετε έγκυρο αριθμό τηλεφώνου, για σταθερά: 210... για κινητά: 697...");
        } else {
            theNumber.setCustomValidity("");
        }
    }
    
}    




