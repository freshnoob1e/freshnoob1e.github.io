// Get the modal
var modal = document.getElementById("modalEl");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var images = document.getElementsByClassName("workImg");
var modalImg = document.getElementById("modalImg");
var captionText = document.getElementById("caption");
for (let i = 0; i < images.length; i++) {
  images[i].onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  };
}

var span = document.getElementsByClassName("close")[0];

var modalBg = document.getElementById("modalBg");
var closeModal = () => {
  modal.style.display = "none";
};
modalBg.onclick = closeModal;

span.onclick = closeModal;
