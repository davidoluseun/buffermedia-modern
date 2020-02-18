const mainElem = bodyElem.querySelector("main"),
      textareaElem = mainElem.querySelector("textarea"),
      keyUpElem = mainElem.querySelector(".keyup-count"),

      validationCheckbox = mainElem.querySelector(".privacy-checkbox"),
      submitBotton = mainElem.querySelector('input[type="submit"]');


// Keyup event

function keyUpEvent() {

    // Grab the length of textareaElem input
    let textareaElemLength = textareaElem.value.length

    // if keyUpElem innerHTML is 0 and textareaElem length is 250
    if (keyUpElem.innerHTML == 0 && textareaElemLength == 250) {

        // Set style attribute for textareaElem
        textareaElem.style.cssText = "border-color: red; box-shadow: 0 -1px 0 0 red inset";

    } else {

        // Set style attribute of textareaElem to empty string
        // Set keyUpElem innerHTML to 250 minus textareaElemLength
        textareaElem.style = "";
        keyUpElem.innerHTML = 250 - textareaElemLength;

    }
}

// Attach keyup event to textareaElem
textareaElem.addEventListener("keyup", keyUpEvent, false);


// Privacy notice checkbox

function checkPrivacyCheckbox() {

    //  If privacyCheckbox is checked
    if (mainForm.privacyCheckbox.checked) {

        // Remove disabled attribute from submitBotton, set it cursor style to pointer
        submitBotton.removeAttribute("disabled");
        submitBotton.style.cursor = "pointer";

    } else {

        //  Set disabled attribute to disabled, set it cursor style to not-allowed
        submitBotton.setAttribute("disabled", "disabled");
        submitBotton.style.cursor = "not-allowed";

    }
}

//  Attach click event to validationCheckbox, call checkPrivacyCheckbox after 10ms
validationCheckbox.onclick = () => setTimeout(checkPrivacyCheckbox, 10);

