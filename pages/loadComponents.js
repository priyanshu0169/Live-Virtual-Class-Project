function putheaderandfooter() {
  fetch("./pages/navbar.html")
    .then((response) => response.text())
    .then((data) => {
      document.querySelector("#nav-placeholder").innerHTML = data;
      console.log(document.querySelector("#nav-placeholder"));
    });

  fetch("./pages/footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.querySelector("#footer-placeholder").innerHTML = data;
    });
}
