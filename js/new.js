const sidebar = document.querySelector(".sidebar");
const menuToggle = document.querySelector(".menu-toggle");
const closeToggle = document.querySelector(".close-toggle");

menuToggle.addEventListener("click", () => {
  sidebar.classList.add("show");
  menuToggle.style.display = "none";
});

closeToggle.addEventListener("click", () => {
  sidebar.classList.remove("show");
  menuToggle.style.display = "block";
});

document.querySelectorAll(".details").forEach((button) => {
  button.addEventListener("click", () => {
    alert("Details Clicked");
  });
});

if (window.innerWidth >= 768) {
  closeToggle.style.display = "none";
  // closeToggle.addEventListener('click', () =>{
  //     sidebar.classList.remove("show");
  //     menuToggle.style.display = "block";
  // });
}
const themeToggler = document.querySelector(".theme_toggler");

themeToggler.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme-variables");

  themeToggler.querySelector("i:nth-child(1)").classList.toggle("active");
  themeToggler.querySelector("i:nth-child(2)").classList.toggle("active");
});

const addTask = document.querySelector(".addTask");
const todoList = () => {
    const taskText = addTask.value.trim();
    if (taskText === "") return;
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = () => li.remove();
    const textSpan = document.createElement("span");
    textSpan.textContent = taskText;
    li.appendChild(checkbox);
    li.appendChild(textSpan);
    li.appendChild(deleteBtn);
    document.querySelector("ol").appendChild(li);
    addTask.value = "";
};
document.querySelectorAll("ol li").forEach(li => {
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = () => li.remove();
    li.appendChild(deleteBtn);
});
addTask.addEventListener("keypress", (e) => {
    if (e.key === "Enter") todoList();
});


const reviewList = document.getElementById("reviewList");
const reviewText = document.getElementById("reviewText");
const reviewRating = document.getElementById("reviewRating");
const submitReview = document.getElementById("submitReview");

// Function to display a review
function displayReview(text, rating) {
    const reviewDiv = document.createElement("div");
    reviewDiv.className = "rating";

    const ratingSpan = document.createElement("span");
    let stars = "";
    switch (rating) {
        case "5": stars = "★★★★★"; break;
        case "4": stars = "★★★★☆"; break;
        case "3": stars = "★★★☆☆"; break;
        case "2": stars = "★★☆☆☆"; break;
        case "1": stars = "★☆☆☆☆"; break;
    }
    ratingSpan.textContent = stars;

    const textParagraph = document.createElement("p");
    textParagraph.textContent = text;

    reviewDiv.appendChild(ratingSpan);
    reviewDiv.appendChild(textParagraph);
    reviewList.appendChild(reviewDiv);
}

// Function to add a review
function addReview() {
    const text = reviewText.value.trim();
    const rating = reviewRating.value;

    if (text === "") return;

    displayReview(text, rating);

    // Clear input fields
    reviewText.value = "";
    reviewRating.selectedIndex = 0; // Reset to the first option
}

// Event listener for submit button
submitReview.addEventListener("click", addReview);

// Event listener for enter key in text input
reviewText.addEventListener("keypress", (e) => {
    if (e.key === "Enter") addReview();
});

// Example of displaying initial reviews (optional)
displayReview("Great product!", "5");
displayReview("Good service.", "4");

// const addTask= document.querySelector(".addTask");
// // const todoList = document.querySelector(".to-do");

// function todoList(){
//         let newListElement = document.createElement("li");
//         newListElement.innerText = addTask.value;
//         let orderList = document.querySelector("ol");
//         orderList.appendChild(newListElement);
// };

// document.querySelector(".show-all").addEventListener("click", function() {
//     alert("Showing All Customers");
// });
