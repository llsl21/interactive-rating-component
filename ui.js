export const setupThanksTemplate = (value) => {
  const templateThanks = document.getElementById("template__thanks");
  const thanksFragment = templateThanks.content.cloneNode(true);
  const thanksRatingText = thanksFragment.querySelector(".thanks__rating");
  if (!thanksRatingText) console.error("No thanksRatingText found.");
  thanksRatingText.textContent = `You selected ${value} out of 5`;
  const thanksCard = thanksFragment.firstElementChild;
  document.body.querySelector(".rating").replaceWith(thanksFragment);

  requestAnimationFrame(() => {
    thanksCard.classList.add("is-enter");
  });
};

export const setupForm = (rating) => {
  const form = document.getElementById("rating__form");
  if (!form) {
    console.error("From not found");
    return;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    for (const [key, value] of formData) {
      if (key !== "rating") continue;
      rating.value = value;
      setupThanksTemplate(rating.value);
      form.removeEventListener("submit", handleSubmit);
    }
  };
  form.addEventListener("submit", handleSubmit);
};
