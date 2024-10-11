function getData() {
  fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(console.log);
}

function selectedItem(option) {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'BMW Pencil',
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  .then((response) => response.json())
  .then((json) => console.log(json));
}

function init() {
  getData();
}
init();

function logSelection(event) {
  const valueSelected = event.target.value;
  selectedItem(valueSelected)
  
}

const selectItemElement = document.querySelector("#selectedItem");

selectItemElement.addEventListener("change", logSelection);

//зверху можна додати search

//right filter - filter products by price and by name

//left filter
//filter products by category(beauty, groceries, fragrances, furniture, home-decoration, kitchen-accessories ...)
//availabilityStatus": "Low Stock","In Stock"