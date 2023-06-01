import Appetizers from "./appetizers.jpg";
import MainCourse from "./main-course.jpg";
import Dessert from "./dessert.jpg";
import Drinks from "./drinks.jpg";

const appImage = new Image();
appImage.src = Appetizers;

const maincourseImage = new Image();
maincourseImage.src = MainCourse;
maincourseImage.class = "card-image";

const dessertImage = new Image();
dessertImage.src = Dessert;
dessertImage.class = "card-image";

const drinksImage = new Image();
drinksImage.src = Drinks;
drinksImage.class = "card-image";

export function menuSection() {
  const pageContent = document.createElement("section");

  const title = document.createElement("h2");
  title.innerHTML = "Our Menu";

  const description = document.createElement("p");
  description.innerHTML =
    "Explore our diverse menu featuring a wide range of culinary delights";

  const cardContainer = document.createElement("div");
  cardContainer.classList.add("cards-container");

  for (let i = 0; i < 4; i++) {
    const card = document.createElement("div");
    card.classList.add("card");
    cardContainer.appendChild(card);
  }

  cardContainer.children[0].appendChild(appImage);
  appImage.classList.add("card-image");
  const appetizersDescription = document.createElement("p");
  appetizersDescription.innerText = "Appetizers";
  cardContainer.children[0].appendChild(appetizersDescription);

  cardContainer.children[1].appendChild(maincourseImage);
  maincourseImage.classList.add("card-image");
  const mainCourseDescription = document.createElement("p");
  mainCourseDescription.innerText = "Main Courses";
  cardContainer.children[1].appendChild(mainCourseDescription);

  cardContainer.children[2].appendChild(dessertImage);
  dessertImage.classList.add("card-image");
  const dessertsDescription = document.createElement("p");
  dessertsDescription.innerText = "Desserts";
  cardContainer.children[2].appendChild(dessertsDescription);

  cardContainer.children[3].appendChild(drinksImage);
  drinksImage.classList.add("card-image");
  const drinksDescription = document.createElement("p");
  drinksDescription.innerText = "Drinks";
  cardContainer.children[3].appendChild(drinksDescription);

  const outroText = document.createElement("p");
  outroText.innerHTML =
    "Whether you're a vegetarian, a seafood lover, or a meat enthusiast, we have something for everyone.";

  pageContent.appendChild(title);
  pageContent.appendChild(description);
  pageContent.appendChild(cardContainer);
  pageContent.appendChild(outroText);

  return pageContent;
}
