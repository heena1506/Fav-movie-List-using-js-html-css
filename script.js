//*****************display form data in table******************/
function displayForm() {
   let obj = document.getElementById("formtab");
  obj.style.display == "none" ? obj.style.display = "block" : obj.style.display = "none";
  }
}
//*******************increment the rating*********************/
function increment(id) {
  let x = document.getElementById(id).innerText;
  if (x < 5) {
    document.getElementById(id).innerText =
      parseInt(document.getElementById(id).innerText) + 1;
  }
  
}
//*****************decrement the rating value*******************/
function decrement(id) {
  let x = document.getElementById(id).innerText;
  if (x > 1) {
    document.getElementById(id).innerText =
      parseInt(document.getElementById(id).innerText) - 1;
  }
  
}
//*****************delete the item from the table***************/
function deleteElement(id) {
  document.getElementById(id).remove();
}
//**************add itmes into table*********************/
function addItem() {
  let titledata = document.getElementById("title").value;
  let imagedata = document.getElementById("image").value;
  let ratingdata = document.getElementById("rating").value;

  let mainobj = document.getElementById("tabledata");

  if (titledata != "" && imagedata != "" && ratingdata != "") {
    let element = document.createElement("tr");
    let trid = getRandom();
    element.id = trid;
    let title = document.createElement("td");
    let imagetd = document.createElement("td");
    let image = document.createElement("img");
    image.src = imagedata;
    imagetd.appendChild(image);
    let rating = document.createElement("td");
    let update = document.createElement("td");

    title.innerHTML = titledata;

    let counterid = parseInt(getRandom());

    rating.innerHTML = `<button onclick="increment(this.value)" value="${counterid}">👍</button>
                        <span id="${counterid}">${ratingdata}</span><button onclick="decrement(this.value)" value="${counterid}">👎</button>`;

    update.innerHTML = `<button onclick="deleteElement(this.value)" value="${trid}"> X </button>`;
    //*******************append the element**********************/
    element.appendChild(imagetd);
    element.appendChild(title);
    element.appendChild(rating);
    element.appendChild(update);
    mainobj.appendChild(element);
    document.getElementById("formtab").style.display = "none";
    document.getElementById("title").value = "";
    document.getElementById("image").value = "";
    document.getElementById("rating").value = "";
  } else {
    alert("OOPS! Please fill in all the fields.");
  }
}
//***********random code genaretor*****************/
function getRandom() {
  let x = Math.random();
  x = Math.floor(x * 10000);
  return x;
}
