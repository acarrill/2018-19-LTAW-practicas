function test() {
  let cookies = document.cookie;
  let cartMssg = document.getElementsByClassName("cart-mssg");
  let cartContent = document.createElement("P");

  cartContent.innerText = "Your current cart:" + '\n';
  cookies = cookies.split(';');

  for (cookie in cookies) {
    cookieName = cookies[cookie].split('=')[0];
    cookieValue = cookies[cookie].split('=')[1];
    if (cookieName.includes('product')) {
      cartContent.innerText += cookieValue + '\n';
      cartMssg[0].appendChild(cartContent);
    }
  }
}
