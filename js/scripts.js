const switchBtn = document.getElementById('switch');
const checkbox = document.getElementById('toggle');
const price1 = document.getElementById('price-1');
const price2 = document.getElementById('price-2');
const price3 = document.getElementById('price-3');

switchBtn.addEventListener('click', () => {
  if (checkbox.checked) {
    price1.innerHTML = '<span class="dollar">&dollar;</span>19.99';
    price2.innerHTML = '<span class="dollar">&dollar;</span>24.99';
    price3.innerHTML = '<span class="dollar">&dollar;</span>39.99';
  } else {
    price1.innerHTML = '<span class="dollar">&dollar;</span>199.99'
    price2.innerHTML = '<span class="dollar">&dollar;</span>249.99'
    price3.innerHTML = '<span class="dollar">&dollar;</span>399.99'
  }
})