const acordionBox = document.querySelectorAll('.acordion-box');
console.log(acordionBox);
for (let i = 0; i < acordionBox.length; i++) {
  acordionBox[i].addEventListener('click', function () {
    this.classList.toggle('active');
  });
}
