const data = {
  categories: [
    {
      id: 1,
      name: "Dairy, Breads and Eggs",
      products: [
        {
          id: 1,
          name: "Vikas Dairy Fresh Milk",
          quantity: "500ml",
          price: 37,
          deliveryTime: "8 mins",
          imageUrl:
            "https://cdn.grofers.com/da/cms-assets/cms/product/33d2ab2a-0396-4762-818e-b1e4bdc38d12.png",
        },
        {
          id: 2,
          name: "Amul Buffalo A2 Milk",
          quantity: "500ml",
          price: 33,
          deliveryTime: "8 mins",
          imageUrl:
            "https://cdn.grofers.com/da/cms-assets/cms/product/1ded64a0-9f20-4a1d-8211-156f221b377b.png",
        },
        {
          id: 3,
          name: "Amul Masti Pouch Curd",
          quantity: "390g",
          price: 35,
          deliveryTime: "8 mins",
          imageUrl:
            "https://cdn.grofers.com/da/cms-assets/cms/product/3af56c86-9a93-4d0c-a8d5-cf38493e4120.png",
        },
        {
          id: 4,
          name: "Amul Masti Cup Curd",
          quantity: "200g",
          price: 24,
          deliveryTime: "8 mins",
          imageUrl:
            "https://cdn.grofers.com/da/cms-assets/cms/product/e47341cd-d920-4c0a-a9f2-20d663976cd0.png",
        },
        {
          id: 5,
          name: "Kalory Milk Bread",
          quantity: "300g",
          price: 40,
          deliveryTime: "8 mins",
          imageUrl:
            "https://cdn.grofers.com/da/cms-assets/cms/product/b984d4fc-798c-4921-8302-af82a2423cd1.png",
        },
        {
          id: 6,
          name: "Amul Salted Butter",
          quantity: "100g",
          price: 58,
          deliveryTime: "8 mins",
          imageUrl:
            "https://cdn.grofers.com/da/cms-assets/cms/product/613787ac-f983-4cfb-b534-e219c8d47b39.png",
        },
        {
          id: 7,
          name: "Kalory Vital Wholemeal Brown Bread",
          quantity: "400g",
          price: 50,
          deliveryTime: "8 mins",
          imageUrl:
            "https://cdn.grofers.com/da/cms-assets/cms/product/4d1262db-78ca-44ec-a601-bf3f13589779.png",
        },
        {
          id: 8,
          name: "Amul Cheese Cubes",
          quantity: "200g",
          price: 130,
          deliveryTime: "8 mins",
          imageUrl:
            "https://cdn.grofers.com/da/cms-assets/cms/product/52377f0e-2ee1-4d3f-a0d6-f34934b71f0f.png",
        },
        {
          id: 9,
          name: "Vikas Dairy Pouch Curd",
          quantity: "400g",
          price: 35,
          deliveryTime: "8 mins",
          imageUrl:
            "https://cdn.grofers.com/da/cms-assets/cms/product/4d22fe6e-bc53-4630-a8e3-352f640c5369.png",
        },
        {
          id: 10,
          name: "Yolkers Classic White Eggs",
          quantity: "10 pieces",
          price: 108,
          deliveryTime: "8 mins",
          imageUrl:
            "https://cdn.grofers.com/da/cms-assets/cms/product/330305a5-8a96-48ab-9db2-2c76dbf85317.png",
        },
      ],
    },

    {
      id: 2,
      name: "Snacks and Munchies",
      products: [
        {
          id: 11,
          name: "Kab's Jackpot Cheese Balls",
          quantity: "60g",
          price: 65,
          deliveryTime: "8 mins",
          imageUrl:
            "https://cdn.grofers.com/da/cms-assets/cms/product/fe70ea27-8ead-446d-be12-f8f8d45c4d0e.png",
        },
        {
          id: 12,
          name: "Red Rock Deli Kettle Chips",
          quantity: "58g",
          price: 51,
          deliveryTime: "8 mins",
          imageUrl:
            "https://cdn.grofers.com/da/cms-assets/cms/product/af0c0ce3-e062-4ea6-9a04-5097781adb9b.png",
        },
        {
          id: 13,
          name: "Lay's Stax Mesquite Barbecue",
          quantity: "135g",
          price: 299,
          deliveryTime: "8 mins",
          imageUrl:
            "https://cdn.grofers.com/da/cms-assets/cms/product/828402e3-9b3f-410e-a457-95c876ec0d9c.png",
        },
      ],
    },

    {
      id: 3,
      name: "Mouth Freshners",
      products: [
        {
          id: 14,
          name: "Chandan Jeera Goli",
          quantity: "100g",
          price: 45,
          deliveryTime: "8 mins",
          imageUrl:
            "https://cdn.grofers.com/da/cms-assets/cms/product/d4cde8c5-7d93-419a-b37f-6973e518afd4.png",
        },
        {
          id: 15,
          name: "Trident Cinnamon Gum",
          quantity: "14 pieces",
          price: 150,
          deliveryTime: "8 mins",
          imageUrl:
            "https://cdn.grofers.com/da/cms-assets/cms/product/0025a573-42a5-4366-bb62-6e54f4e4d4c3.png",
        },
      ],
    },

    {
      id: 4,
      name: "Cold Drinks & Juices",
      products: [
        {
          id: 16,
          name: "Coca-Cola Diet Coke",
          quantity: "300ml",
          price: 40,
          deliveryTime: "8 mins",
          imageUrl:
            "https://cdn.grofers.com/da/cms-assets/cms/product/6771100f-3fad-40fb-80ff-4781de705832.png",
        },
        {
          id: 17,
          name: "Red Bull Energy Drink",
          quantity: "250ml",
          price: 125,
          deliveryTime: "8 mins",
          imageUrl:
            "https://cdn.grofers.com/da/cms-assets/cms/product/6f4bd423-1666-4d23-bf3d-db482be09608.png",
        },
      ],
    },

    {
      id: 5,
      name: "Candies & Gums",
      products: [
        {
          id: 18,
          name: "Chupa Chups Sour Bites",
          quantity: "61.6g",
          price: 34,
          deliveryTime: "8 mins",
          imageUrl:
            "https://cdn.grofers.com/da/cms-assets/cms/product/12822984-7022-44ea-9975-61892ee10652.png",
        },
        {
          id: 19,
          name: "Mentos Pure Fresh Mint",
          quantity: "54.6g",
          price: 92,
          deliveryTime: "8 mins",
          imageUrl:
            "https://cdn.grofers.com/da/cms-assets/cms/product/949c9ee1-febd-455d-baee-48a43c9b4870.png",
        },
        {
          id: 20,
          name: "Test Candy",
          quantity: "1g",
          price: 10,
          deliveryTime: "8 mins",
          imageUrl:
            "https://cdn.grofers.com/da/cms-assets/cms/product/949c9ee1-febd-455d-baee-48a43c9b4870.png",
        },
      ],
    },
  ],
};

function renderProductsDiv(categoryId, products) {
  const categoryBody = document.createElement("div");
  categoryBody.className = "row3";
  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.className = "p1";
    productDiv.innerHTML = `
    <img src="${product.imageUrl}" onclick="openProduct(${categoryId}, ${product.id})">
                    <div class="time1">${product.deliveryTime}</div>
                    <p class="pname">${product.name}</p>
                    <p class="pq">${product.quantity}</p>
                    <div class="pprice">
                        <span class="price">₹${product.price}</span>
                        <button class="add">ADD</button>
                    </div>
    
    `;

    categoryBody.appendChild(productDiv);
  });

  return categoryBody;
}

function render() {
  const categoriesContainer = document.getElementById("categoriesContainer");
  data.categories.forEach((category) => {
    const categoryDiv = document.createElement("div");
    const categoryHeading = document.createElement("div");
    const categoryBody = renderProductsDiv(category.id, category.products);

    categoryHeading.innerHTML = `<div class="h0">${category.name}</div> <div class="ha">See All</div>`;
    categoryHeading.className = "heading";

    categoryDiv.appendChild(categoryHeading);
    categoryDiv.appendChild(categoryBody);

    categoriesContainer.appendChild(categoryDiv);
  });
}

function openProduct(categoryId, productId) {
  const category = data.categories.find((e) => e.id == categoryId);
  const product = category.products.find(e=> e.id == productId);
  if(product?.id > 0){
    const modelContainer = document.getElementById("productModal");
    modelContainer.className = "product-modal active";
    modelContainer.innerHTML = `
    
    <div class="modal-overlay"></div>
  <div class="modal-box">
    <span class="close-modal" onclick="closeModel()">&times;</span>
    <div class="modal-image">
      <img src="${product.imageUrl}" alt="Product">
    </div>

    <div class="modal-content">
      <h2 class="product-name">${product.name}</h2>
      <p class="product-quantity">${product.quantity}</p>
      <p class="product-price">₹${product.price}</p>
      <p class="product-description">
        Fresh and pure milk, ideal for daily consumption.
      </p>
      <button class="add-to-cart-btn">ADD TO CART</button>
    </div>

  </div>

    `;
  }
}

function closeModel(){
    const modelContainer = document.getElementById("productModal");
    modelContainer.className = "product-modal";
    modelContainer.innerHTML = '';
}

render();
