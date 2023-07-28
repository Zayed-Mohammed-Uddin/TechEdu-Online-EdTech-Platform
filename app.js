const closeButton1 = document.querySelector('.btn-close1');
const closeButton2 = document.querySelector('.btn-close2');
const box1 = document.querySelector('.box1');
const box2 = document.querySelector('.box2');

const navigation_login_box_info = document.querySelector('.navigation_login_box_info');
const navigation_signup_box_info = document.querySelector('.navigation_signup_box_info');

navigation_login_box_info.addEventListener("click", function () {
    box1.classList.remove("d-none");
});

navigation_signup_box_info.addEventListener("click", function () {
    box2.classList.remove("d-none");
});

closeButton1.addEventListener('click', function () {
    box1.classList.add("d-none");
});
closeButton2.addEventListener('click', function () {
    box2.classList.add("d-none");
});