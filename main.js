let mainDiv = document.getElementsByClassName("assign")[0];
let add = document.getElementsByClassName("classes-to-add")[0];
let remove = document.getElementsByClassName("classes-to-remove")[0];
let parent = document.querySelector(".classes-list").lastElementChild;
// console.log(add.value.trim().split(" "))
let parentText = document.createTextNode("No Classes To Show");

parent.appendChild(parentText);

// add.addEventListener("blur", function (e) {
//   if (parent.innerHTML !== "") {
//     parentText.remove()
//   } else {
// parent.appendChild(parentText)
//   }
// let zValue = add.value.trim().split(" ").sort()
//   if (zValue[0] !== "")  {
//     for (let i = 0; i < zValue.length; i++) {
//       if (isNaN(parseInt(zValue[i]))) {
//         let zBox = document.createElement("div")
//         let zText = document.createTextNode(zValue[i])
//         zBox.className = zValue[i]
//         parent.appendChild(zBox)
//         zBox.appendChild(zText)
//       } else {
//     console.log("Enter Vaild Class")
//       }
//     }
//   } else {
//     console.log("Enter Vaild Class")
//   }
//   if (parent.innerHTML === "") {
// parent.appendChild(parentText)
//   }
// })

let parentListItem = [];

for (let i = 0; i < parent.children.length; i++) {
  let inner = parent.children[i].innerHTML;
  parentListItem.push(inner);
}

add.addEventListener("blur", function (e) {
  if (parent.innerHTML !== "") {
    parentText.remove();
  } else if (parent.innerHTML == "") {
    parent.appendChild(parentText);
  }
  parent.innerHTML = ""
  let zValue = add.value.trim().split(" ").sort();
  if (zValue[0] !== "" && isNaN(parseInt(zValue[0]))) {
    parent.innerHTML = "";
    for (let i = 0; i < zValue.length; i++) {
      parentListItem.push(zValue.sort()[i].toLowerCase());
    }
    for (let i = 0; i < parentListItem.length; ++i) {
      let zBox = document.createElement("div");
      let zText = document.createTextNode(parentListItem.sort()[i].toLowerCase());
      zBox.appendChild(zText);
      zBox.className = parentListItem[i].toLowerCase();
      parent.appendChild(zBox);
    }
  }
});


remove.addEventListener("blur", function (ev) {
  zDeleted = remove.value.trim().toLowerCase().split(" ").sort();
      console.log(parentListItem)
      console.log(zDeleted)
  for (let i = 0; i < zDeleted.length; i++) {
    if (parentListItem.includes(zDeleted[i])) {
      parentListItem.splice((parentListItem.indexOf(zDeleted[i])), 1)
      console.log(parentListItem)
      console.log(document.querySelector(`.${zDeleted[i]}`))
      document.querySelector(`.${zDeleted[i]}`).remove()
      console.log(parentListItem)
    }
  }
})
