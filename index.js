function toggleNav() {
    var navbarUl = document.getElementById("navbar-ul");
    navbarUl.classList.toggle("active");
}



document.addEventListener('DOMContentLoaded', function () {
    // Get all elements with the class 'job-link'
    var jobLinks = document.querySelectorAll('.job-link');

    // Add the 'fade-in' class to each job link
    jobLinks.forEach(function (link) {
      link.classList.add('fade-in');
    });
  });