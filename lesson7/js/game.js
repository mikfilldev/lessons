const item1 = document.querySelector(".game__item-01");
const items = [
  document.querySelector(".game__item-02"),
  document.querySelector(".game__item-03"),
  document.querySelector(".game__item-04"),
  document.querySelector(".game__item-05"),
  document.querySelector(".game__item-06"),
  document.querySelector(".game__item-07"),
  document.querySelector(".game__item-08"),
];
const restart = document.querySelector(".game__container");
const hideItem1 = () => {
  item1.classList.add("hidden");
};
items.forEach((item) => {
  item.addEventListener("mouseenter", hideItem1);
});
restart.addEventListener("mouseout", () => {
  item1.classList.remove("hidden");
});