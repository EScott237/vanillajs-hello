/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#the-excuse").innerHTML = generateExcuse();
  console.log("Hello Rigo from the console!");
};

let generateExcuse = () => {
  let article = ["A", "The"];
  let subject = ["burglar", "cat", "dog", "monkey", "donkey"];
  let action = ["stole my", "slapped my", "punched my", "threw my"];
  let possession = ["homework", "keys", "laptop", "phone"];
  let where = ["at my house", "in my car", "on the way", "at the park"];

  let articleIndex = Math.floor(Math.random() * article.length);
  let subjectIndex = Math.floor(Math.random() * subject.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let possessionIndex = Math.floor(Math.random() * possession.length);
  let whereIndex = Math.floor(Math.random() * where.length);

  return [
    article[articleIndex] +
      " " +
      subject[subjectIndex] +
      " " +
      action[actionIndex] +
      " " +
      possession[possessionIndex] +
      " " +
      where[whereIndex]
  ];
};
