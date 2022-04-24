const goBack = () => {
    window.history.back();
    location.href = document.referrer; 
}
document.querySelector(".btn-back").addEventListener("click", goBack);

