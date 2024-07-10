import { getMaps } from "../api/kareoke";
import { publishMap, deleteMapAdmin } from "../api/admin";

let resolving = false;

const createListItem = (request) => {
  const listItem = document.createElement("li");
  listItem.style.padding = "5px";
  const link = document.createElement("a");
  link.target = "_blank";
  link.textContent = request.name;
  link.href = `/player/${request.id}/${request.name.replaceAll(" ", "_")}`;
  listItem.append(link);
  const userName = document.createElement("span");
  userName.textContent = ` by ${request.userName}`;
  listItem.append(userName);
  return listItem;
};
const handlePublishRequest = async (id, resolution, button, item) => {
  if (resolving) return;
  resolving = false;
  // eslint-disable-next-line no-param-reassign
  button.textContent = "....";
  publishMap(id, resolution)
    .then((res) => {
      console.log(res);
      item.remove();
    })
    .catch((err) => {
      console.log(err);
      // eslint-disable-next-line no-param-reassign
      button.textContent = "Error publishing";
    })
    .finally(() => {
      setTimeout(() => {
        // eslint-disable-next-line no-param-reassign
        button.textContent = "accept";
      }, 1000);
    });
};

const deleteMap = (id, button, item) => {
  // eslint-disable-next-line no-restricted-globals
  const acceptDelete = confirm("are you sure you want to delete this map?");
  if (!acceptDelete) return;
  // eslint-disable-next-line no-param-reassign
  button.disabled = true;
  deleteMapAdmin(id)
    .then((res) => {
      console.log(res);
      item.remove();
    })
    .catch((err) => {
      // eslint-disable-next-line no-param-reassign
      button.disabled = false;
      console.log(err);
    });
};
getMaps()
  .then((maps) => {
    const requestList = document.querySelector("#request-list");
    const publishedList = document.querySelector("#published-list");
    const unPublishedList = document.querySelector("#unpublished-list");

    const publishRequests = maps.filter((map) => map.status === "pending");
    const publishedMaps = maps.filter((map) => map.status === "published");
    const unpublished = maps.filter((map) => map.status === "draft");

    publishRequests.forEach((map) => {
      const listItem = createListItem(map);
      const publishButton = document.createElement("button");
      publishButton.textContent = "accept";
      listItem.append(publishButton);
      publishButton.addEventListener("click", () => {
        handlePublishRequest(
          map.id,
          "published",
          publishButton,
          listItem,
          requestList
        );
      });
      const rejectButton = document.createElement("button");
      rejectButton.textContent = "reject";
      rejectButton.addEventListener("click", () => {
        handlePublishRequest(
          map.id,
          "draft",
          rejectButton,
          listItem,
          requestList
        );
      });
      listItem.append(rejectButton);
      requestList.append(listItem);
    });
    publishedMaps.forEach((map) => {
      const listItem = createListItem(map);
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "delete";
      deleteButton.addEventListener("click", () => {
        deleteMap(map.id, deleteButton, listItem, publishedList);
      });
      listItem.append(deleteButton);
      publishedList.append(listItem);
    });
    unpublished.forEach((map) => {
      const listItem = createListItem(map);
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "delete";
      deleteButton.addEventListener("click", () => {
        deleteMap(map.id, deleteButton, listItem, unPublishedList);
      });
      listItem.append(deleteButton);
      unPublishedList.append(listItem);
    });
  })
  .catch((err) => {
    console.log(err);
  });
