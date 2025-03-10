document.addEventListener("DOMContentLoaded", function () {
  // Function to update the total price
  function updateTotal() {
    let total = 0;
    document.querySelectorAll(".card-body").forEach((card) => {
      let quantity = parseInt(card.querySelector(".quantity").innerText);
      let unitPrice = parseInt(
        card.querySelector(".unit-price").innerText.replace(" $", "")
      );
      total += quantity * unitPrice;
    });
    document.querySelector(".total").innerText = total + " $";
  }

  // Event listener for the plus buttons
  document.querySelectorAll(".fa-plus-circle").forEach((button) => {
    button.addEventListener("click", function () {
      let quantitySpan = this.nextElementSibling;
      let quantity = parseInt(quantitySpan.innerText);
      quantitySpan.innerText = quantity + 1;
      updateTotal();
    });
  });

  // Event listener for the minus buttons
  document.querySelectorAll(".fa-minus-circle").forEach((button) => {
    button.addEventListener("click", function () {
      let quantitySpan = this.previousElementSibling;
      let quantity = parseInt(quantitySpan.innerText);
      if (quantity > 0) {
        quantitySpan.innerText = quantity - 1;
        updateTotal();
      }
    });
  });

  // Event listener for delete buttons
  document.querySelectorAll(".fa-trash-alt").forEach((button) => {
    button.addEventListener("click", function () {
      this.closest(".card-body").remove();
      updateTotal();
    });
  });

  // Event listener for like buttons (toggle heart color)
  document.querySelectorAll(".fa-heart").forEach((button) => {
    button.addEventListener("click", function () {
      this.classList.toggle("liked");
    });
  });
});
