//const storeItems = [...document.querySelectorAll('#store-items')];

const storeItems = document.querySelectorAll(".store-item");

const modalBox = document.querySelector(".lightbox-container");

const closeModalBtn = document.querySelector("span.lightbox-close");

let images = document.querySelectorAll(".store-img");

const arrowBtn = document.querySelectorAll(".lightbox-control");

const lightBoxItem = document.querySelector(".lightbox-item");

let imageList = [];

let imageCounter = 0;

images.forEach((image) => {
  imageList.push(image.src);
});

storeItems.forEach((card) => {
  card.addEventListener("click", function (e) {
    let image = e.target.src;

    lightBoxItem.style.backgroundImage = `url(${image})`;

    console.log(card);
    console.log("modalBox:", modalBox);
    modalBox.classList.add("show");

    imageCounter = imageList.indexOf(image);
  });
});

arrowBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    console.log(e);

    if (btn.classList.contains("btnRight")) {
      console.log(btn);
      imageCounter++;
    }

    lightBoxItem.style.backgroundImage = `url(${imageList[imageCounter]})`;

    if (imageCounter === imageList.length) {
      imageCounter = 0;
    }

    lightBoxItem.style.backgroundImage = `url(${imageList[imageCounter]})`;

    if (btn.classList.contains("btnLeft")) {
      console.log(btn);
      imageCounter--;
    }

    if (imageCounter < 0) {
      imageCounter = imageList.length - 1;
    }
  });
});

closeModalBtn.addEventListener("click", () => {
  modalBox.classList.remove("show");
});
