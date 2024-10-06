function getData() {
  fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(console.log);
}

function selectedItem(option) {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      item: option,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  .then((response) => response.json())
  .then((json) => console.log(json));
}

(function init() {
  getData();
})


function logSelection(event) {
  const valueSelected = event.target.value;
  selectedItem(valueSelected)
}

const selectItemElement = document.querySelector("#selectedItem ");

selectItemElement.addEventListener("change", logSelection);