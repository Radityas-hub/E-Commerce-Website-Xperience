// Constants for DOM elements
const productOnSearch = document.getElementById("searchBarProducts");
const productsContainer = document.getElementById("wrapperProducts");
const allButton = document.getElementById("allProducts");
const popularButton = document.getElementById("popularProducts");
const cheapestButton = document.getElementById("cheapestProducts");
const showMoreButton = document.getElementById("showMore");
const productPrimary = document.getElementById("productPrimary");
const phoneBtn = document.getElementById("phoneFilter");
const watchBtn = document.getElementById("watchFilter");
const vrBtn = document.getElementById("vrFilter");

function loading() {
  loader.classList.remove("hidden");
  document.body.classList.add("load-focus");

  setTimeout(() => {
    loader.classList.add("hidden");
    document.body.classList.remove("load-focus");
  }, 1000);

}

loading();

// product data primary don't add it (add it in show more)
const productsData = [
  {
    type: "VR",
    category: "POPULAR",
    img: "../../assets/product1.png",
    price: "$ 499.99",
    title: "DreamSync VR",
    href: "../detail/detail.html?productsId=1",
  },
  {
    type: "VR",
    category: "POPULAR",
    img: "../../assets/vr-2.png",
    price: "$ 599.99",
    title: "NexaVision VR",
    href: "../detail/detail.html?productsId=2",
  },
  {
    type: "VR",
    category: "POPULAR",
    img: "../../assets/vr-3.png",
    price: "$  399.99",
    title: "SensaSphere VR UHD+",
    href: "../detail/detail.html?productsId=3",
  },
  {
    type: "SmartWatch",
    category: "CHEAPEST",
    img: "../../assets/sw-3.png",
    price: "$ 299.99",
    title: "Xerich Mix Watch",
    href: "../detail/detail.html?productsId=4",
  },
  {
    type: "SmartWatch",
    category: "CHEAPEST",
    img: "../../assets/sw-2.png",
    price: "$ 199.99",
    title: "Zico Smart Watch",
    href: "../detail/detail.html?productsId=5",
  },
  {
    type: "SmartWatch",
    category: "CHEAPEST",
    img: "../../assets/sw-1.png",
    price: "$ 699.99",
    title: "Neixon TechWrist Pro",
    href: "../detail/detail.html?productsId=6",
  },
  {
    type: "SmartPhone",
    category: "POPULAR",
    img: "../../assets/sp-1.png",
    price: "$ 499.99",
    title: "Evo Phone 5G ",
    href: "../detail/detail.html?productsId=7",
  },
  {
    type: "SmartPhone",
    category: "POPULAR",
    img: "../../assets/sp-2.png",
    price: "$ 599.99",
    title: "Q-Edge V1 Pro",
    href: "../detail/detail.html?productsId=8",
  },
  {
    type: "SmartPhone",
    category: "CHEAPEST",
    img: "../../assets/sp-3.png",
    price: "$ 399.99",
    title: "Xerich SmartPhone 5G",
    href: "../detail/detail.html?productsId=9",
  },
];

// more data if wanted to add more data add here
const moreProductsData = [
  ...productsData,
  {
    type: "VR",
    category: "CHEAPEST",
    img: "../../assets/vr-5.png",
    price: "$ 299.99",
    title: "Synco VR Pro",
    href: "../detail/detail.html?productsId=10",
  },
  {
    type: "VR",
    category: "CHEAPEST",
    img: "../../assets/vr-6.png",
    price: "$ 99.99",
    title: "Dixon VR Ultimate",
    href: "../detail/detail.html?productsId=11",
  },
  {
    type: "VR",
    category: "CHEAPEST",
    img: "../../assets/vr-7.png",
    price: "$ 299.99",
    title: "Xerich VR Pro",
    href: "../detail/detail.html?productsId=12",
  },
];

// all data
const allProductsData = [...productsData, ...moreProductsData];
const productsDataOnSearch = [...productsData, ...moreProductsData];

// product cards
const productsCard = ({ type, img, title, price, href }) => `
  <div class="card">
    <div class="img-box">
      <img src="${img}" class="img-card" alt="Products Image">
    </div>
    <div class="content">
      <div class="text">
        <p class="type-product">${type}</p>
        <a href="${href}" class="title">${title}</a>
        <div class="price">
          <span class="value">${price}</span>
        </div>
      </div>
      <a href="${href}" class="button"><span><i class='bx bx-cart'></i></span></a>
    </div>
  </div>
`;

//product display while user is searching for products
const productsOnSearch = ({ img, title, price, href }) => `
  <div class="product-box">
    <a href="${href}">
      <div class="product-text-bx">
        <p class="product-box-title">${title}</p>
        <p class="product-box-price">${price}</p>
      </div>
      <img src="${img}" alt="" class="product-box-img">
    </a>
  </div>
  `;

// Function to update product list (for search bar)
function updateProductListOnSearch(data) {
  // Limit the number of displayed products to 4
  const slicedData = data.slice(0, 4);

  const html = slicedData.map(productsOnSearch).join("");
  productOnSearch.innerHTML = html;
}


function searchProducts(query) {
  query = query.toLowerCase();
  const filteredData = productsDataOnSearch.filter((product) => {
    const titleMatch = product.title.toLowerCase().includes(query);
    const categoryMatch = product.category.toLowerCase().includes(query);
    const typeMatch = product.type.toLowerCase().includes(query);
    return titleMatch || categoryMatch || typeMatch;
  });
  
  if (query === "") {
    // Kosongkan tampilan jika query kosong
    productOnSearch.innerHTML = "";
  } else {
    updateProductListOnSearch(filteredData);
  }
}

// Get references to the search elements
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");

// Add an event listener to the search button
searchButton.addEventListener("click", () => {
  const searchTerm = searchInput.value;
  searchProducts(searchTerm);
});

// Add an event listener to the search input to update results as the user types
searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value;
  searchProducts(searchTerm);
});

// Function to update product list (for filtering)
function updateProductList(data) {
  const html = data.map(productsCard).join("");
  productsContainer.innerHTML = html;
}


// filter products by product type functions
function filterProductsByType(type) {
  const filteredDataByType = allProductsData.filter(
    ({ type: prodType }) => prodType === type
  );
  updateProductList(filteredDataByType);
}

// side bar filter functions
phoneBtn.addEventListener("click", () => {
  phoneBtn.classList.add("active");
  watchBtn.classList.remove("active");
  vrBtn.classList.remove("active");
  allButton.classList.add("active");
  popularButton.classList.remove("active");
  cheapestButton.classList.remove("active");
  productPrimary.classList.add("active");
  showMoreButton.style.opacity = "0";
  filterProductsByType("SmartPhone");
});

watchBtn.addEventListener("click", () => {
  watchBtn.classList.add("active");
  phoneBtn.classList.remove("active");
  vrBtn.classList.remove("active");
  allButton.classList.add("active");
  popularButton.classList.remove("active");
  cheapestButton.classList.remove("active");
  productPrimary.classList.add("active");
  showMoreButton.style.opacity = "0";
  filterProductsByType("SmartWatch");
});

vrBtn.addEventListener("click", () => {
  phoneBtn.classList.remove("active");
  watchBtn.classList.remove("active");
  vrBtn.classList.add("active");
  allButton.classList.add("active");
  popularButton.classList.remove("active");
  cheapestButton.classList.remove("active");
  productPrimary.classList.add("active");
  showMoreButton.style.opacity = "0";
  filterProductsByType("VR");
});

// filter products by product category functions
function filterProducts(category) {
  const filteredData = allProductsData.filter(
    ({ category: prodCategory }) => prodCategory === category
  );
  updateProductList(filteredData);
}

// all buttons doms
allButton.addEventListener("click", () => {
  allButton.classList.add("active");
  popularButton.classList.remove("active");
  cheapestButton.classList.remove("active");
  showMoreButton.textContent = "Lebih Banyak";
  showMoreButton.classList.remove("less");
  productPrimary.classList.remove("active");
  phoneBtn.classList.remove("active");
  watchBtn.classList.remove("active");
  vrBtn.classList.remove("active");
  updateProductList(productsData);
});

// popular button doms
popularButton.addEventListener("click", () => {
  allButton.classList.remove("active");
  popularButton.classList.add("active");
  cheapestButton.classList.remove("active");
  phoneBtn.classList.remove("active");
  watchBtn.classList.remove("active");
  vrBtn.classList.remove("active");
  showMoreButton.textContent = "Lebih Banyak";
  showMoreButton.classList.remove("less");
  productPrimary.classList.remove("active");
  filterProducts("POPULAR");
});

// cheapest button doms
cheapestButton.addEventListener("click", () => {
  allButton.classList.remove("active");
  popularButton.classList.remove("active");
  cheapestButton.classList.add("active");
  phoneBtn.classList.remove("active");
  watchBtn.classList.remove("active");
  vrBtn.classList.remove("active");
  showMoreButton.textContent = "Lebih Banyak";
  showMoreButton.classList.remove("less");
  productPrimary.classList.remove("active");
  filterProducts("CHEAPEST");
});

// show more buttons doms
showMoreButton.addEventListener("click", () => {
  if (!showMoreButton.classList.contains("less")) {
    showMoreButton.textContent = "Lebih Sedikit";
    showMoreButton.classList.add("less");
    updateProductList(allProductsData);
  } else {
    showMoreButton.textContent = "Lebih Banyak";
    showMoreButton.classList.remove("less");
    updateProductList(productsData);
  }
});

// Initial display
updateProductList(productsData);
