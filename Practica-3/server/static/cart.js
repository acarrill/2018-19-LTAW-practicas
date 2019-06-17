function test() {
  let cookies = document.cookie;
  let cartMssg = document.getElementsByClassName("cart-mssg");
  let cartContent = document.createElement("P");
  let cartEmpty = true;

  cartContent.innerText = "Your current cart:" + '\n';
  cookies = cookies.split(';');

  for (cookie in cookies) {
    cookieName = cookies[cookie].split('=')[0];
    cookieValue = cookies[cookie].split('=')[1];
    if (cookieName.includes('product')) {
      cartEmpty = false;
      cartContent.innerText += cookieValue + '\n';
      cartMssg[0].appendChild(cartContent);
    }
  }
  if (cartEmpty) {
    console.log("dfjsdfhb");
    document.getElementsByClassName('error-mssg')[0].style.display = "block";
  }
}

function search(event) {
  let searchBox = document.getElementById("search-box");
  const searchValue = searchBox.value;
  const KeyCode = Number(event.keyCode);

  if (KeyCode > 64 && KeyCode < 91) {
    console.log("AJAX");
    let ajax = new XMLHttpRequest();

    ajax.onreadystatechange = () => {
      if (this.readyState == 4 && this.status == 200) {
        searchBox.innerText = this.response;
      }
    };
    ajax.open("GET", "searching="+searchValue, true)
    ajax.send()
  }
}
