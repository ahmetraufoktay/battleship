const label = document.createElement("div");
label.innerText = "Enter Your Name Captain";
label.id = "label";

const input = document.createElement("input");
input.id = "nameInput";
input.placeholder = "YOUR NAME";

const button = document.createElement("button");
button.innerText = "CONFIRM";
button.id = "nameButton";

const nameArea = document.createElement("div");
nameArea.id = "nameArea";
nameArea.appendChild(label);
nameArea.appendChild(input);
nameArea.appendChild(button);

const nameMenu = document.createElement("main");
nameMenu.id = "nameMenu";
nameMenu.appendChild(nameArea); /* nameMenu */

export { nameMenu };
