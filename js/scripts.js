const switchBtn = document.getElementById('switch');
const checkbox = document.getElementById('toggle');
const price1 = document.getElementById('price-1');
const price2 = document.getElementById('price-2');
const price3 = document.getElementById('price-3');

switchBtn.addEventListener('click', () => {
  if (checkbox.checked) {
    price1.innerHTML = '&dollar;19.99';
    price2.innerHTML = '&dollar;24.99';
    price3.innerHTML = '&dollar;39.99';
  } else {
    price1.innerHTML = '&dollar;199.99'
    price2.innerHTML = '&dollar;249.99'
    price3.innerHTML = '&dollar;399.99'
  }
})