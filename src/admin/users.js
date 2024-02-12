import { getUsers, ban, unban } from "../api/admin";

const banUser = (id, listItem, button, reason) => {
  // eslint-disable-next-line no-restricted-globals
  const accept = confirm("are you sure you want to ban this user?");
  if (!accept) return;
  // eslint-disable-next-line no-param-reassign
  button.textContent = "...";
  ban(id, reason)
    .then((res) => {
      console.log(res);

      listItem.remove();
    })
    .catch((err) => {
      console.log(err);
      // eslint-disable-next-line no-param-reassign
      button.textContent = "ban";
    });
};

const unbanUser = (id, listItem, button) => {
  // eslint-disable-next-line no-restricted-globals
  const accept = confirm("are you sure you want to unban this user?");
  if (!accept) return;
  // eslint-disable-next-line no-param-reassign
  button.textContent = "...";
  unban(id)
    .then((res) => {
      console.log(res);

      listItem.remove();
    })
    .catch((err) => {
      console.log(err);
      // eslint-disable-next-line no-param-reassign
      button.textContent = "unban";
    });
};
const generateListItem = (user) => {
  const listItem = document.createElement("li");
  const name = document.createElement("span");
  name.textContent = `${user.username} (${user.id})`;
  listItem.append(name);
  const reason = document.createElement("p");
  listItem.append(reason);
  reason.textContent = user.banned ? `reason: ${user.banned}` : "";
  const button = document.createElement("button");

  listItem.append(button);
  return { listItem, button };
};

getUsers().then((res) => {
  const banned = res.filter((user) => user.banned);
  const users = res.filter((user) => !user.banned);
  const userList = document.querySelector("#users");
  const banList = document.querySelector("#ban");
  users.forEach((user) => {
    const { listItem, button } = generateListItem(user);
    button.textContent = "ban";
    const textBox = document.createElement("input");
    listItem.append(textBox);

    button.addEventListener("click", () => {
      if (textBox.value === "") {
        console.log("need a reason prior to banning");
        return;
      }
      banUser(user.id, listItem, button, textBox.value);
    });
    userList.append(listItem);
  });
  banned.forEach((user) => {
    const { listItem, button } = generateListItem(user);
    button.textContent = "unbaban";
    button.addEventListener("click", () =>
      unbanUser(user.id, listItem, button)
    );
    banList.append(listItem);
  });
});
