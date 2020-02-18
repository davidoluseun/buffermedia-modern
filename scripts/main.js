// DOM elements
const bodyElem = document.querySelector("body"),
      headerContact = bodyElem.querySelector(".header-contact"),
      siteHeader = bodyElem.querySelector(".site-header"),

      searchBotton = siteHeader.querySelector(".header-search-botton"),
      modalAnimation = siteHeader.querySelector(".search-modal-background"),
      searchModal = siteHeader.querySelector(".search-modal"),

      modalInput = searchModal.querySelector("#modal-search"),
      closeModal = searchModal.querySelector(".close-modal"),

      navToggler = siteHeader.querySelector(".nav-toggler"),
      multiLevelNav = siteHeader.querySelector("#multi-level-nav"),

      dropdownLinks = multiLevelNav.querySelectorAll(".has-children > a"),
      toTopElem = bodyElem.querySelector(".to-top");


// Sticky navigation

function sticky() {

    //  Grab headerContact layout height
    let hdContactLayoutHeight = headerContact.offsetHeight;

    // If the page is scrolled vertically above hdContactLayoutHeight
    if (window.scrollY > hdContactLayoutHeight) {

        // Set style attribute for siteHeader
        siteHeader.setAttribute("style", "background-color: #1d5d74; position: fixed; z-index: 10; top: 0; width: 100%");

    } else {
        
        // Remove style attribute
        siteHeader.removeAttribute("style");

    }
}

// Attach scroll event to window object
window.addEventListener("scroll", sticky, false);


// Modal on and off

searchBotton.onclick = () => {

    // Set style attribute for modalAnimation
    modalAnimation.style.cssText = "display: block; transform: scale(70); transition: 0.8s;";

    // Display searchModal after 500ms
    setTimeout(() => {

        searchModal.style.cssText = "display: block;";
        modalInput.focus();

    }, 500);
};

//  Attach click event to closeModal to close searchModal
closeModal.onclick = () => {

    modalAnimation.style.cssText = "display: block; transform: scale(0);";
    searchModal.style.cssText = "display: none;";
  
};


// Toggle Navigation

navToggler.onclick = () => {

    // Grab navToggler aria-expanded attribute
    let navTogglerAriaExpandedValue = navToggler.getAttribute("aria-expanded");

    //  Toggle nav-toggle-on class
    multiLevelNav.classList.toggle("nav-toggle-on");

    // If navToggler aria-expanded attribute value is false
    if (navTogglerAriaExpandedValue == "false") {

        // Set it to true
        navToggler.setAttribute("aria-expanded", "true");

    } else {

        // Else set it to false
        navToggler.setAttribute("aria-expanded", "false");

    }
};


// Toggle dropdown-menu

// Grab dropdownLinks's length
let dropdownLinksLength = dropdownLinks.length;

// Loop through dropdownLinks, attach click event to each
for (let i = 0; i < dropdownLinksLength; i++) {

    dropdownLinks[i].onclick = function(e) {

        //  Prevent the default behaviour of dropdownLinks
        e.preventDefault();

        // Grab viewport width
        let viewportWidth = window.innerWidth;

        // If viewport width is lower than 1024px
        if (viewportWidth < 1024) {

            //  Grab the aria-expanded attribute value of the clicked link
            let dropdownLinkExpandedValue = this.getAttribute("aria-expanded");

            //  Toggle the dropdown-menu of the link
            this.nextElementSibling.classList.toggle("dropdown-toggle-on");

            // If aria-expanded attribute value of the click link is false
            if (dropdownLinkExpandedValue == "false") {

                // Set the link aria-expanded attribute value to true
                this.setAttribute("aria-expanded", "true");

            } else {

                // Else set it to false
                this.setAttribute("aria-expanded", "false");

            }

        }

    }
}


// To the top

function scrollToTop(scrollDuration) {

    // Set scrollStep value
    var scrollStep = -window.scrollY / (scrollDuration / 10);

    // Run interval every 10ms
    var scrollInterval = setInterval(() => {

        // If the page is scrolled vertically above zero
        if (window.scrollY != 0) {

            // Scroll the page by scrollStep
            window.scrollBy(0, scrollStep);

        } else { 

            // Stop interval
            clearInterval(scrollInterval);

        }
        
    }, 10);
    
}

// Attach click event to toTopElem
toTopElem.onclick = (e) => {

    // Prevent the link default behaviour and call scrollToTop function

    e.preventDefault();
    scrollToTop(250);

}

// Display toTopElem function
function revealToTop() {

  // Grab quarter height of the page
  let quarterHeight = bodyElem.clientHeight/4;

  // If the page is scrolled vertically above quarterHeight
  if (window.scrollY > quarterHeight) {

      // Display toTopElem 
      toTopElem.style.display = "block";

  } else {

      // Hide toTopElem
      toTopElem.style.display = "none";

  }
}

// Attach scroll event to window object
window.addEventListener("scroll", revealToTop, false);