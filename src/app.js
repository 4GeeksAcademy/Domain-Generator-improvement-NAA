
// Previous Code
// import "bootstrap";
// import "./style.css";


// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

// window.onload = function () {
//   let pronoun = ['the', 'our'];
//   let adj = ['great', 'big'];
//   let noun = ['jogger', 'racoon'];

//   for (let i = 0; i < pronoun.length; i++) {
//     for (let j = 0; j < pronoun.length; j++) {
//       for (let k = 0; k < noun.length; k++) {
//         console.log(pronoun[i] + adj[j] + noun[k] + ".com");

//       }
//     }
//   }

//   console.log("Hello Rigo from the console!");


// };


import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  const pronouns = ["the", "our"];
  const adjs = ["great", "big"];
  const nouns = ["jogger", "racoon"];

  const domains = [];

  for (let i = 0; i < pronouns.length; i++) {
    for (let j = 0; j < adjs.length; j++) {
      for (let k = 0; k < nouns.length; k++) {
        const domain = `${pronouns[i]}${adjs[j]}${nouns[k]}.com`;
        domains.push(domain);
      }
    }
  }

  console.log("Generated domains:");
  domains.forEach(d => console.log(d));

  console.log("Hello Rigo from the console!");
};


