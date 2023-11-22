export default function textEdit(value, label, id) {
  const container = document.createElement("form");
  container.classList.add("general-form");
  container.style.minHeight = "100px";

  container.innerHTML = `
    <label for="${id}">${label}</label>
    <span class="text-value">${value} <button type="button" class="edit-btn">&#9998</button></span>
    <input placeholder="current password" type="password">
    <input id="${id}" value="${value}" type="text" >
    <div>
    <button type="button" class="close-btn" >change</button>
    <button type="button" class="close-btn" >cancel</button>
    </div>

  `;
  const editBtn = container.querySelector(".edit-btn");
  const closeBtn = container.querySelector(".close-btn");
  const textValue = container.querySelector(".text-value");
  const input = container.querySelector(`#${id}`);

  return container;
}
