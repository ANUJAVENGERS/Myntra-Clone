
// import 'bagITems' from scripts
const convinience_Fee = 99;

let bagItemObjects;
onLoad();

function onLoad() {
    loadBagItemObjects();
    displayBagItem();
    totalItemInCart();
    displayBagSummary();
}
function displayBagItem() {
    let bagItemContainer = document.querySelector('.products-info');

    let innerHTML = '';
    bagItemObjects.forEach(bagItem => {
        innerHTML += genearateItemHTML(bagItem);
    });
    bagItemContainer.innerHTML = innerHTML;

}

function loadBagItemObjects() {

    bagItemObjects = bagItems.map(itemId => {
        for (let i = 0; i < items.length; i++) {
            if (itemId == items[i].id) {
                return items[i];
            }
        }
    });
    console.log(bagItemObjects);
}

function genearateItemHTML(item) {

    return `
    <div class="product-outer-div">
    
        <div class="product-image">
            <img src="${item.image}"
            alt="product-image">
        </div>
        <div class="product-details">
            <h5>${item.company}</h5>
            <p>${item.item_name}</p>
            <span class="sold-by">Sold by:Mensa Brand Technologies Private Limited</span>
    
            <div class="size-quantity">
                <div class="size">${item.rating.stars}⭐</div>
                <div class="quantity">Reviews:${item.rating.count}</div>
            </div>
    
            <div class="price">
                <span class="current-price">₹${item.current_price}</span>
                <span class="original-price">₹${item.original_price}</span>
                <span class="discount-percentage">${item.discount_percentage}% OFF</span>
            </div>
    
            <div class="return">
                <span>${item.return_period} Days</span>
                <p> return available</p>
            </div>
        
            <div class="delivery">
                <span>
                    <p>Delivered till</p>
                </span>
                <h5>${item.delivery_date}</h5>
            </div>
        </div>
        <div class="delete-item" onclick="removeFromBag(${item.id})"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzEnLXPTwFbqdjcHilmdZxYQ43dhmcT9ZTPfrCqF_bLw&s"
            alt="Remove Item">
        </div>
    </div>`
}

function totalItemInCart() {
    let itemCountLabel = document.querySelector('.item-checkbox');
    let itemhtml = '';
    itemhtml += ` <input type="checkbox" name="" id="item-checkbox">
    <label for="">0/${bagItems.length} Item Selected</label>`
    itemCountLabel.innerHTML = itemhtml
}

let Bag = document.querySelector('.action-container bag');
let seeMore = document.querySelector('.know-more');
let offersDiv = document.querySelector('.available-offer');


function expanding() {

    console.log('ffefe')
    let offereList = document.querySelector('.offer-list');
    let expanded = document.querySelector('.expanded-text');

    if (seeMore.innerHTML = 'See More ↓') {
        expanded.style.display = 'block';
        seeMore.innerHTML = 'All Offers'
        offersDiv.style.height = '300px';
    }
    else if (seeMore.innerHTML = 'All Offers') {
        expanded.style.display = 'none';
        seeMore.innerHTML = 'Show More ↓'
    }
}
seeMore.addEventListener('click', expanding);

let amountButton = document.querySelector('.donate-btn');

amountButton.addEventListener('click', function () {
    amountButton.classList.add('.checked-amount-button');
});


function displayBagSummary() {
    let bagSummaryElement = document.querySelector('.price-details');
    let totalItem = bagItemObjects.length;
    let totalMRP = 0;
    let totalDiscount = 0;

    bagItemObjects.forEach(bagItem => {
        totalMRP += bagItem.original_price;
        totalDiscount += bagItem.original_price - bagItem.current_price;
    });

    let finalPayment = totalMRP - totalDiscount + convinience_Fee;

    bagSummaryElement.innerHTML = `<div class="inner-price-div">
  <h5 class="price-details-heading">Price Detals(${totalItem} item)</h5>
  <div class="total-mrp price-details-inner">
      <p>Total MRP</p>
      <p>₹${totalMRP}</p>
  </div>
  <div class="discount-price price-details-inner">
      <span>Discount on MRP
          <a class="know-more" href="#">Know More</a>
      </span>
      <p class="discount">-₹${totalDiscount}</p>
  </div>
  <div class="coupon-disocunt price-details-inner">
      <p>Coupon Discount</p>
      <a class="know-more" href="#">Apply Coupon</a>
  </div>
  <div class="platform-fee price-details-inner">
      <span>Platform Fee
          <a class="know-more" href="#">Know More</a>
      </span>
      <p>₹${convinience_Fee}</p>
  </div>
  <div class="shipping-fee price-details-inner">
      <span> Shipping Fee
          <a class="know-more" href="#">Know More</a></span>
      <p class="discount">Free</p>
  </div>
</div>
<div class="total-price">
  <div class="total-amount">
      <span>Total Amount</span>
      <span>₹${finalPayment}</span>
  </div>
  <button>Place Order</button>
</div>
</div>`
}

function removeFromBag(itemId) {
    const index = bagItems.indexOf(itemId);
    if (index != -1) {
        bagItems.splice(index, 1);
        // bagItems = bagItems.filter(bagItemId => bagItemId != itemId);
        localStorage.setItem('bagItems', JSON.stringify(bagItems));
        loadBagItemObjects();
        displayBagIcon();
        displayBagItem();
        displayBagSummary();
    }
}








/* <div class="product-image">
<img src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/14572050/2022/2/3/f7390b3d-ae00-4cfa-92b2-e0c8ec36a1a11643873057427-Dennis-Lingo-Men-Blue-Slim-Fit-Windowpane-Checked-Casual-Shi-1.jpg"
    alt="product-image">
</div>
<div class="product-details">
<h5>Dennis Lingo</h5>
<p>Men Blue Slim Fit Checked casual shirt</p>
<span class="sold-by">Sold by:Mensa Brand Technologies Private Limited</span>
<div class="size-quantity">
    <div class="size">Size:40</div>
    <div class="quantity">Qty:1</div>
</div>
<div class="price">
    <span class="current-price">₹599</span>
    <span class="original-price">₹1199</span>
    <span class="discount-percentage">50% OFF</span>
</div>
<div class="return">
    <span>14 Days</span>
    <p> return available</p>
</div>
<div class="delivery">
    <span>
        <p>Delivered till</p>
    </span>
    <h5>31 Jan-2 Feb</h5>

</div>

</div>
<div class="delete-item"><img src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
    alt="Remove Item">
</div> */


