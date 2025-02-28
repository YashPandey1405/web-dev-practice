const items = [
  "Samsung",
  "Sony",
  "Sofa",
  "Shoes",
  "Apple",
  "Banana",
  "Sunflower",
];
const SearchItem = document.getElementById("SearchItem");
const resultList = document.getElementById("resultList");
const inputForm = document.getElementById("inputForm");

// JS Code Logic To Implement Dynamic Input Keyboard
SearchItem.addEventListener("input", function () {
  const searchText = SearchItem.value.toLowerCase();
  resultList.innerHTML = ""; // Clear previous results

  if (searchText == "") {
    resultList.innerHTML = "";
  } else {
    const filteredItems = items.filter((item) =>
      item.toLowerCase().includes(searchText)
    );

    filteredItems.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      resultList.appendChild(li);
    });
  }
});

// JS Code Logic To Implement Submit Functionality On The Form
inputForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newItem = SearchItem.value;
  let message;
  if (!items.includes(newItem)) {
    items.push(newItem);
    message = `Hello User, '${newItem}' has been successfully added!`;
  } else {
    message = `Hello User, '${newItem}' is already in the list.`;
  }
  alert(message);
  SearchItem.value = "";
  resultList.innerHTML = ""; // Clear previous results
});

// JS Code Logic To Implement Dark Theme On the Webpage
document.getElementById("themeToggle").addEventListener("click", function () {
  let htmlElement = document.documentElement; // Select <html> tag
  let themeIcon = document.getElementById("themeIcon"); // Icon inside button
  let lightFooter = document.querySelector(".footer.bg-light"); // Light theme footer
  let darkFooter = document.querySelector(".footer.bg-dark"); // Dark theme footer

  if (htmlElement.getAttribute("data-bs-theme") === "dark") {
    htmlElement.setAttribute("data-bs-theme", "light");
    this.classList.replace("btn-outline-light", "btn-outline-dark"); // Change button style
    themeIcon.classList.replace("fa-sun", "fa-moon"); // Switch icon to Moon

    // Toggle footer visibility
    lightFooter.classList.remove("d-none");
    darkFooter.classList.add("d-none");
  } else {
    htmlElement.setAttribute("data-bs-theme", "dark");
    this.classList.replace("btn-outline-dark", "btn-outline-light"); // Change button style
    themeIcon.classList.replace("fa-moon", "fa-sun"); // Switch icon to Sun

    // Toggle footer visibility
    darkFooter.classList.remove("d-none");
    lightFooter.classList.add("d-none");
  }
});
