/**

const myFile = document.querySelector("input[type=file]");
console.log(beatMap.text());

function previewFile() {
  const content = document.querySelector(".content");
  const [file] = myFile.files;
  console.log(document.querySelector("input[type=file]").files[0]);
  const reader = new FileReader();

  reader.addEventListener(
    "load",
    () => {
      // this will then display a text file
      content.innerText = reader.result;
    },
    false
  );

  if (file) {
    reader.readAsText(file);
  }
}
myFile.addEventListener("change", previewFile);
 */

import map from "./judgmentMap.txt";

console.log(map);
