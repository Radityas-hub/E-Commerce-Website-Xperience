function loading() {
    loader.classList.remove("hidden");
    document.body.classList.add("load-focus");
  
    setTimeout(() => {
      loader.classList.add("hidden");
      document.body.classList.remove("load-focus");
    }, 1000);
  }
  
  loading();
  document.addEventListener("DOMContentLoaded", function () {
    // dom elemts  
    const detailTitle = document.getElementById("detail-title");
    const image = document.getElementById("imgSrc");
    const productNames = document.getElementById("nameProduct");
    const stars = document.getElementById("starRatings");
    const reviews = document.getElementById("review");
    const originalPrices = document.getElementById("originalPrice");
    const discountedPrices = document.getElementById("discountedPrice");
    const productTags = document.getElementById("tags");
    const desc = document.getElementById("description");
    const decreaseQuantity = document.getElementById("decreaseQuantity");
    const quantityDisplay = document.getElementById("quantity");
    const increaseQuantity = document.getElementById("increaseQuantity");
    const addToChart = document.getElementById("addToChart");
    const wishList = document.getElementById("wishList");
    const heartIcons = document.getElementById("heart");
    const modal = document.getElementById("modal");
    const closeModal = document.getElementById("closeButton");
  
    // data product , add the data according the product page
    const data = [
      {
        productsId: 1,
        name: "DreamSync VR",
        price: "499.99",
        discount: 20,
        img: "../../assets/product1.png",
        rating: 4,
        variant: "Black, 24HD",
        tags: ["Modern Gadget", "Brand New", "Popular"],
        desc: "Headset VR untuk konsol game rumahan terbaru dan tercanggih. Rasakan sensasi bermain yang luar biasa, nyata, dan seru.",
      },
      {
        productsId: 2,
        name: "NexaVision VR",
        price: "599.99",
        discount: 50,
        img: "../../assets/vr-2.png",
        rating: 4,
        variant: "Black, 24HD",
        tags: ["Modern Gadget", "Brand New", "Popular"],
        desc: "Headset VR untuk konsol game rumahan terbaru dan tercanggih. Rasakan sensasi bermain yang luar biasa, nyata, dan seru.",
      },
      {
        productsId: 3,
        name: "SensaSphere VR UHD+",
        price: "399.99",
        discount: 50,
        img: "../../assets/vr-3.png",
        rating: 5,
        variant: "Black, 24HD",
        tags: ["Modern Gadget", "Brand New", "Popular"],
        desc: "Headset VR untuk konsol game rumahan terbaru dan tercanggih. Rasakan sensasi bermain yang luar biasa, nyata, dan seru.",
      },
      {
        productsId: 4,
        name: "Xerich Mix Watch",
        price: "299.99",
        discount: 50,
        img: "../../assets/sw-3.png",
        rating: 5,
        variant: "Black, 24HD",
        tags: ["Modern Gadget", "Brand New", "Popular"],
        desc: "Smartwatch untuk kesehatan dan aktivitas Anda. Pantau detak jantung, kalori, tidur, dan stres. Terhubung dengan smartphone Anda",
      },
      {
        productsId: 5,
        name: "Zico Smart Watch",
        price: "199.99",
        discount: 50,
        img: "../../assets/sw-2.png",
        rating: 5,
        variant: "Black, 24HD",
        tags: ["Modern Gadget", "Brand New", "Popular"],
        desc: "Smartwatch untuk kesehatan dan aktivitas Anda. Pantau detak jantung, kalori, tidur, dan stres. Terhubung dengan smartphone Anda",
      },
      {
        productsId: 6,
        name: "Neixon TechWrist Pro",
        price: "699.99",
        discount: 50,
        img: "../../assets/sw-3.png",
        rating: 5,
        variant: "Black, 24HD",
        tags: ["Modern Gadget", "Brand New", "Popular"],
        desc: "Smartwatch untuk kesehatan dan aktivitas Anda. Pantau detak jantung, kalori, tidur, dan stres. Terhubung dengan smartphone Anda",
      },
      {
        productsId: 7,
        name: "Evo Phone 5G",
        price: "499.99",
        discount: 50,
        img: "../../assets/sp-1.png",
        rating: 5,
        variant: "Black, 24HD",
        tags: ["Modern Gadget", "Brand New", "Popular"],
        desc: "Smartphone dengan kamera depan 32 MP dan belakang 64 MP. Ambil selfie dan foto yang indah. Smartphone ini juga tahan air dan debu.",
      },
      {
        productsId: 8,
        name: "Q-Edge V1 Pro",
        price: "599.99",
        discount: 50,
        img: "../../assets/sp-2.png",
        rating: 5,
        variant: "Black, 24HD",
        tags: ["Modern Gadget", "Brand New", "Popular"],
        desc: "Smartphone dengan kamera depan 32 MP dan belakang 64 MP. Ambil selfie dan foto yang indah. Smartphone ini juga tahan air dan debu.",
      },
      {
        productsId: 9,
        name: "Xerich SmartPhone 5G",
        price: "399.99",
        discount: 50,
        img: "../../assets/sp-3.png",
        rating: 5,
        variant: "Black, 24HD",
        tags: ["Modern Gadget", "Brand New", "Popular"],
        desc: "Smartphone dengan kamera depan 32 MP dan belakang 64 MP. Ambil selfie dan foto yang indah. Smartphone ini juga tahan air dan debu.",
      },
      {
        productsId: 10,
        name: "Synco VR Pro",
        price: "299.99",
        discount: 20,
        img: "../../assets/vr-5.png",
        rating: 4,
        variant: "Black, 24HD",
        tags: ["Modern Gadget", "Brand New", "Popular"],
        desc: "Headset VR untuk konsol game rumahan terbaru dan tercanggih. Rasakan sensasi bermain yang luar biasa, nyata, dan seru.",
      },
      {
        productsId: 11,
        name: "Dixon VR Ultimate",
        price: "99.99",
        discount: 50,
        img: "../../assets/vr-6.png",
        rating: 4,
        variant: "Black, 24HD",
        tags: ["Modern Gadget", "Brand New", "Popular"],
        desc: "Headset VR untuk konsol game rumahan terbaru dan tercanggih. Rasakan sensasi bermain yang luar biasa, nyata, dan seru.",
      },
      {
        productsId: 12,
        name: "Xerich VR Pro",
        price: "199.99",
        discount: 50,
        img: "../../assets/vr-7.png",
        rating: 5,
        variant: "Black, 24HD",
        tags: ["Modern Gadget", "Brand New", "Popular"],
        desc: "Headset VR untuk konsol game rumahan terbaru dan tercanggih. Rasakan sensasi bermain yang luar biasa, nyata, dan seru.",
      },    
    ];
  
    // stars rating funtion (stars icons)
    function setStars(rating) {
      const starIcons = stars.querySelectorAll("i");
      starIcons.forEach((star, index) => {
        if (index < rating) {
          star.classList.add("bx", "bxs-star");
        } else {
          star.classList.remove("bx", "bxs-star");
          star.classList.add("bx", "bx-star");
        }
      });
    }
  
    // calculate the discount
    function calcDiscountPrice(originalPrices, discountPercentage) {
      const discountAmount = (originalPrices * discountPercentage) / 100;
      const discountedPrice = originalPrices - discountAmount;
      return discountedPrice;
    }
  
    // add product tags
    function setProductTags(tags) {
      const maxTags = 3; // max 3 tags
      for (let i = 0; i < Math.min(tags.length, maxTags); i++) {
        const tag = document.createElement("li");
        tag.textContent = tags[i];
        productTags.appendChild(tag);
      }
    }
  
    // min quantity is 1
    let quantity = 1;
  
    // add quantity
    increaseQuantity.addEventListener("click", function () {
      quantity++;
      quantityDisplay.textContent = quantity;
    });
  
    // min quantity
    decreaseQuantity.addEventListener("click", function () {
      if (quantity > 1) {
        quantity--;
        quantityDisplay.textContent = quantity;
      }
    });
  
    // display the products details
    function displayProductDetails(product) {
      detailTitle.textContent = `Detail ${product.name}`;
      image.src = product.img;
      productNames.textContent = product.name;
      setStars(product.rating);
      reviews.textContent = Math.floor(Math.random() * 100000).toLocaleString();
  
      const originalPriceValue = parseFloat(product.price);
      const discountPricePercentage = product.discount;
      const discountedPriceValue = calcDiscountPrice(
        originalPriceValue,
        discountPricePercentage
      );
  
      originalPrices.textContent = `$${originalPriceValue.toFixed(2)}`;
      discountedPrices.textContent = `$${discountedPriceValue.toFixed(2)}`;
      setProductTags(product.tags);
      desc.textContent = product.desc;
    }
  
    // find id from url
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get("productsId"));
    const selectedProduct = data.find(
      (product) => product.productsId === productId
    );
  
    // if id find it will display the details
    if (selectedProduct) {
      displayProductDetails(selectedProduct);
    }
  
    // wishlist doms change icons
    wishList.addEventListener("click", function () {
      if (heartIcons.classList.contains("bx-heart")) {
        heartIcons.classList.remove("bx-heart");
        heartIcons.classList.add("bxs-heart");
      } else {
        heartIcons.classList.remove("bxs-heart");
        heartIcons.classList.add("bx-heart");
      }
    });
  
    // adding to localstorage for carts
    addToChart.addEventListener("click", function () {
      if (selectedProduct) {
        // data to local storage
        const productToAdd = {
          id: selectedProduct.productsId,
          name: selectedProduct.name,
          quantity: quantity,
          price: calcDiscountPrice(
            parseFloat(selectedProduct.price),
            selectedProduct.discount
          ),
          img: selectedProduct.img,
          variant: selectedProduct.variant,
        };
  
        if (selectedProduct) {
          modal.classList.remove("hidden");
          document.body.classList.add("modal-open");
  
          closeModal.addEventListener("click", function () {
            modal.classList.add("hidden");
            document.body.classList.remove("modal-open");
          });
        }
  
        // ============ doms button ===============
        if (addToChart.classList.contains("bg-white")) {
          addToChart.classList.remove("bg-white");
          addToChart.classList.add("flex-col");
          addToChart.classList.add("bg-blue");
        } else {
          addToChart.classList.remove("flex-col");
          addToChart.classList.remove("bg-blue");
          addToChart.classList.add("bg-white");
        }
        setTimeout(function () {
          if (addToChart.classList.contains("bg-blue")) {
            addToChart.classList.remove("bg-blue");
            addToChart.classList.remove("flex-col");
            addToChart.classList.add("bg-white");
          }
        }, 1000);
        //============= doms button end ===========
  
        // get data from local storage
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        console.log(cart, "cart");
  
        // find same id from local storage
        const existingProductIndex = cart.findIndex(
          (item) => item.id === productToAdd.id
        );
  
        if (existingProductIndex !== -1) {
          // if the data in local storage just add the quantity
          cart[existingProductIndex].quantity += productToAdd.quantity;
        } else {
          // if the data no in local storage just add new
          cart.push(productToAdd);
        }
  
        // add again the data to local storage
        localStorage.setItem("cart", JSON.stringify(cart));
      }
    });
  });
  