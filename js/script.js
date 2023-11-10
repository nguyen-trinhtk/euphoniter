// Grab elements
const selectElement = (selector) => {
    const element = document.querySelector(selector);
    if(element) return element;
    throw new Error(`Something went wrong! Make sure that ${selector} exists/is typed correctly.`);  
};

//Nav styles on scroll
const scrollHeader = () =>{
    const navbarElement = selectElement('#header');
    if(this.scrollY >= 15) {
        navbarElement.classList.add('activated');
    } else {
        navbarElement.classList.remove('activated');
    }
}

window.addEventListener('scroll', scrollHeader);

// // Open menu & search pop-up
const menuToggleIcon = selectElement('#menu-toggle-icon');

const toggleMenu = () =>{
    const mobileMenu = selectElement('#menu');
    mobileMenu.classList.toggle('activated');
    menuToggleIcon.classList.toggle('activated');
}

menuToggleIcon.addEventListener('click', toggleMenu);



// Switch theme/add to local storage
const body = document.body;
const themeToggleBtn = selectElement('#theme-toggle-btn');
const currentTheme = localStorage.getItem('currentTheme');

// Check to see if there is a theme preference in local Storage, if so add the ligt theme to the body
if (currentTheme) {
    body.classList.add('dark-theme');
}

themeToggleBtn.addEventListener('click', function () {
    // Add light theme on click
    body.classList.toggle('dark-theme');

    // If the body has the class of light theme then add it to local Storage, if not remove it
    if (body.classList.contains('dark-theme')) {
        localStorage.setItem('currentTheme', 'themeActive');
    } else {
        localStorage.removeItem('currentTheme');
    }
});

window.addEventListener("scroll", function() {
    var scrollToTop = document.getElementById("scrollToTop");
    if (window.pageYOffset > 300) {
      scrollToTop.classList.add("show");
    } else {
      scrollToTop.classList.remove("show");
    }
  });
  
  document.getElementById("scrollToTop").addEventListener("click", function(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });


  // Assuming you have a list of blog post objects with title and image properties
  var blogPosts = [
    { title: "Music - what is it", image: "moved-euphoniter/images/music-what-is-it.jpg", link: "music-what-is-it.html" },
  ];

  // Function to handle the search functionality
  function searchBlogTitles() {
    // Get the search query from the input field
    var searchQuery = document.getElementById("searchInput").value.toLowerCase();

    // Filter the blog posts based on the search query
    var filteredPosts = blogPosts.filter(function(post) {
      var words = searchQuery.split(" ");
      return words.every(function(word) {
        return post.title.toLowerCase().includes(word);
      });
    });

    // Get the container where the search results will be displayed
    var resultsContainer = document.getElementById("searchResults");

    // Clear any previous search results
    resultsContainer.innerHTML = "";

    // Check if any posts match the search query
    if (filteredPosts.length > 0) {
      // Display the matching blog posts
      filteredPosts.forEach(function(post) {
        var postBox = document.createElement("div");
        postBox.classList.add("search-post-box");

        var imageElement = document.createElement("img");
        imageElement.src = post.image;
        imageElement.classList.add("search-post-image");
        postBox.appendChild(imageElement);

        var titleElement = document.createElement("a");
        titleElement.textContent = post.title;
        titleElement.href = post.link;
        titleElement.classList.add("search-post-title");
        postBox.appendChild(titleElement);

        resultsContainer.appendChild(postBox);
      });
    } else {
      // Display "No post found" message
      var messageElement = document.createElement("p");
      messageElement.textContent = "No post found, please go back.";
      resultsContainer.appendChild(messageElement);
    }
  }
// const swiper = new Swiper(".swiper", {
//     slidesPerView: 1,
//     spaceBetween: 20,
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
//     pagination: {
//         el: '.swiper-pagination'
//     },
//     breakpoints: {
//         700: {
//           slidesPerView: 2
//         },
//         1200: {
//             slidesPerView: 3
//         }
//     }   
// });

function validateForm() {
  let fname = document.forms["msgRecipientForm"]["fname"].value;
  let lname = document.forms["msgRecipientForm"]["lname"].value; 
  let email = document.forms["msgRecipientForm"]["email"].value;
  let msg = document.forms["msgRecipientForm"]["message"].value; 
  
  if (fname == ""){
    alert("Name must be filled out");
    return false;
  }
  if (lname == ""){
    alert("Name must be filled out");
    return false;
  }
  if (email == ""){
    alert("Name must be filled out");
    return false;
  }
  if (msg == ""){
    alert("Name must be filled out");
    return false;
  }
}

function openTab(evt, category) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(category).style.display = "block";
  evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();

function sortListDir() {
  var list, i, switching, b, shouldSwitch, dir, switchcount = 0;
  list = document.getElementById("all-posts");
  switching = true;
  // Set the sorting direction to ascending:
  dir = "asc";
  // Make a loop that will continue until no switching has been done:
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    b = Array.from(list.getElementsByClassName("post-container"));
    // Loop through all post containers:
    for (i = 0; i < (b.length - 1); i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Check if the next item should switch place with the current item,
      based on the sorting direction (asc or desc): */
      if (dir == "asc") {
        if (b[i].querySelector("h3").textContent.toLowerCase() > b[i + 1].querySelector("h3").textContent.toLowerCase()) {
          /* If next item is alphabetically lower than current item,
          mark as a switch and break the loop: */
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (b[i].querySelector("h3").textContent.toLowerCase() < b[i + 1].querySelector("h3").textContent.toLowerCase()) {
          /* If next item is alphabetically higher than current item,
          mark as a switch and break the loop: */
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark that a switch has been done: */
      list.insertBefore(b[i + 1], b[i]);
      switching = true;
      // Each time a switch is done, increase switchcount by 1:
      switchcount++;
    } else {
      /* If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again. */
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}
