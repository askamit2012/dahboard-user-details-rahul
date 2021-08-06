let div1 = document.getElementById("content");
let titleDiv = document.getElementById("main-span");

let J1 = {
  name: "Amit Kumar",
  age: 29,
  sex: "Male",
  address: {
    Village: "Vishnupur Saraiya",
    "Post + PS": "Deoria Kothi",
    Block: "Paroo",
    District: "Muzaffarpur",
    State: "Bihar",
    PIN: 843120,
  },
  degree: ["10th", "12th", "B.E."],
};

for (let key in J1) {
  if (typeof J1[key] === "string") {
    let mainDiv = document.createElement("div");
    mainDiv.id = "divStr";
    let span1 = document.createElement("span");
    span1.innerText = key;
    let span2 = document.createElement("span");
    span2.innerText = J1[key];
    mainDiv.appendChild(span1);
    mainDiv.appendChild(span2);
    div1.appendChild(mainDiv);
  } else if (J1[key] instanceof Array) {
    let arr = J1[key];

    let mainDiv = document.createElement("div");

    let h3 = document.createElement("h3");
    h3.innerText = key;
    h3.style.color = "red";
    h3.classList.add("arrTitle");
    // h3.className = "objTitle";
    // h3.classList.toggle("arrTitleToggle");

    let body = document.createElement("div");
    arr.forEach((item, index) => {
      let singleArrItem = document.createElement("div");
      singleArrItem.classList.add("singleArrItem");

      let pos = document.createElement("span");
      pos.textContent = index;

      let span = document.createElement("span");
      span.innerText = item;

      singleArrItem.appendChild(pos);
      singleArrItem.appendChild(span);

      body.appendChild(singleArrItem);
    });
    mainDiv.appendChild(h3);
    mainDiv.appendChild(body);
    div1.appendChild(mainDiv);
    h3.addEventListener("click", () => {
      //   console.log("Hello");
      body.classList.toggle("arrContentToggle");
    });
  } else if (J1[key] instanceof Object) {
    // console.log("Object", key);
    let mainDiv = document.createElement("div");

    let h3 = document.createElement("h3");
    h3.innerText = key;
    h3.classList.add("objTitle");

    mainDiv.appendChild(h3);

    let body = document.createElement("div");
    body.classList.add("objBody");

    for (let key1 in J1[key]) {
      //   console.log(key1, J1[key]);
      let objSingle = document.createElement("div");
      objSingle.classList.add("objSingle");

      let h3 = document.createElement("h3");
      h3.innerText = key1;
      h3.classList.add("obj1");

      let h4 = document.createElement("h4");
      h4.innerText = J1[key][key1];
      h4.classList.add("obj2");

      objSingle.appendChild(h3);
      objSingle.appendChild(h4);
      body.appendChild(objSingle);
    }
    mainDiv.appendChild(body);
    div1.appendChild(mainDiv);
    h3.addEventListener("click", () => {
      //   console.log("Hello");
      body.classList.toggle("objContentToggle");
    });
  } else {
    let mainDiv = document.createElement("div");
    mainDiv.id = "divStr";
    let span1 = document.createElement("span");
    span1.innerText = key;
    let span2 = document.createElement("span");
    span2.innerText = J1[key];
    mainDiv.appendChild(span1);
    mainDiv.appendChild(span2);
    div1.appendChild(mainDiv);
  }
}

function displayContentHandler() {
  console.log("Hello");
  div1.classList.toggle("content");
}

titleDiv.addEventListener("click", displayContentHandler);
