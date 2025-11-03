const products = [
  {
    id: 1,
    title: "Eco-Friendly Bamboo Toothbrush",
    description: "Sustainable bamboo toothbrush with soft bristles for gentle cleaning.",
    price: 4.99,
    image: "https://dummyimage.com/600x400/8bc34a/fff&text=Bamboo+Toothbrush",
    category: "Personal Care",
    rating: { rate: 4.6, count: 50 },
    stock: 120,
    brand: "GreenSmile",
    discountPercentage: 5
  },
  {
    id: 2,
    title: "Organic Cotton Bed Sheets",
    description: "Soft and breathable 100% organic cotton sheets in queen size.",
    price: 59.99,
    image: "https://dummyimage.com/600x400/00bcd4/fff&text=Bed+Sheets",
    category: "Home",
    rating: { rate: 4.8, count: 30 },
    stock: 75,
    brand: "PureSleep",
    discountPercentage: 10
  },
  {
    id: 3,
    title: "Electric Standing Desk",
    description: "Adjustable height electric standing desk with sturdy frame.",
    price: 299.99,
    image: "https://dummyimage.com/600x400/ff5722/fff&text=Standing+Desk",
    category: "Office",
    rating: { rate: 4.4, count: 15 },
    stock: 20,
    brand: "WorkPro",
    discountPercentage: 8
  },
  {
    id: 4,
    title: "Solar Power Bank 20000mAh",
    description: "Portable solar charger with dual USB ports and LED flashlight.",
    price: 39.99,
    image: "https://dummyimage.com/600x400/ffc107/000&text=Solar+Power+Bank",
    category: "Electronics",
    rating: { rate: 4.2, count: 60 },
    stock: 90,
    brand: "SunCharge",
    discountPercentage: 12
  },
  {
    id: 5,
    title: "Kids' Building Blocks Set",
    description: "Colorful plastic blocks set with 200 pieces for creative play.",
    price: 29.99,
    image: "https://dummyimage.com/600x400/03a9f4/fff&text=Building+Blocks",
    category: "Toys",
    rating: { rate: 4.7, count: 80 },
    stock: 100,
    brand: "FunToys",
    discountPercentage: 15
  },
  {
    id: 6,
    title: "Portable Camping Hammock",
    description: "Lightweight nylon hammock with carrying bag and carabiners.",
    price: 24.99,
    image: "https://dummyimage.com/600x400/4caf50/fff&text=Camping+Hammock",
    category: "Outdoors",
    rating: { rate: 4.5, count: 45 },
    stock: 60,
    brand: "NatureRest",
    discountPercentage: 5
  },
  {
    id: 7,
    title: "Classic Leather Journal",
    description: "Handmade leather journal with 200 cream pages and elastic closure.",
    price: 19.99,
    image: "https://dummyimage.com/600x400/795548/fff&text=Leather+Journal",
    category: "Stationery",
    rating: { rate: 4.9, count: 35 },
    stock: 40,
    brand: "WriteRight",
    discountPercentage: 7
  },
  {
    id: 8,
    title: "Smart Home Wi-Fi Plug",
    description: "Control your devices remotely with this smart Wi-Fi enabled plug.",
    price: 17.99,
    image: "https://dummyimage.com/600x400/9c27b0/fff&text=Smart+Plug",
    category: "Electronics",
    rating: { rate: 4.3, count: 70 },
    stock: 55,
    brand: "SmartHome",
    discountPercentage: 9
  },
  {
    id: 9,
    title: "Men's Waterproof Hiking Boots",
    description: "Durable boots with waterproof membrane and slip-resistant sole.",
    price: 89.99,
    image: "https://dummyimage.com/600x400/607d8b/fff&text=Hiking+Boots",
    category: "Footwear",
    rating: { rate: 4.6, count: 40 },
    stock: 30,
    brand: "TrailBlaze",
    discountPercentage: 10
  },
  {
    id: 10,
    title: "Ceramic Plant Pots Set",
    description: "Set of 3 decorative ceramic pots for indoor plants.",
    price: 34.99,
    image: "https://dummyimage.com/600x400/ff9800/fff&text=Plant+Pots",
    category: "Home",
    rating: { rate: 4.5, count: 50 },
    stock: 70,
    brand: "GardenJoy",
    discountPercentage: 6
  },
  {
    id: 11,
    title: "Noise Cancelling Earbuds",
    description: "True wireless earbuds with active noise cancellation and charging case.",
    price: 79.99,
    image: "https://dummyimage.com/600x400/2196f3/fff&text=Earbuds",
    category: "Electronics",
    rating: { rate: 4.4, count: 80 },
    stock: 45,
    brand: "AudioWave",
    discountPercentage: 11
  },
  {
    id: 12,
    title: "Organic Green Tea Bags",
    description: "Premium organic green tea with antioxidants for health benefits.",
    price: 12.99,
    image: "https://dummyimage.com/600x400/8bc34a/fff&text=Green+Tea",
    category: "Groceries",
    rating: { rate: 4.7, count: 60 },
    stock: 150,
    brand: "NatureLeaf",
    discountPercentage: 8
  },
  {
    id: 13,
    title: "3D Wooden Puzzle Model",
    description: "Challenging 3D wooden puzzle for adults and kids.",
    price: 22.99,
    image: "https://dummyimage.com/600x400/795548/fff&text=Wooden+Puzzle",
    category: "Toys",
    rating: { rate: 4.8, count: 25 },
    stock: 35,
    brand: "PuzzleWorld",
    discountPercentage: 10
  },
  {
    id: 14,
    title: "Men's Wool Blend Scarf",
    description: "Warm and stylish wool blend scarf for cold weather.",
    price: 24.99,
    image: "https://dummyimage.com/600x400/9e9e9e/fff&text=Wool+Scarf",
    category: "Clothing",
    rating: { rate: 4.3, count: 40 },
    stock: 55,
    brand: "WinterWear",
    discountPercentage: 7
  },
  {
    id: 15,
    title: "Adjustable Dumbbell Set",
    description: "Compact adjustable dumbbells with weight options from 5 to 50 lbs.",
    price: 199.99,
    image: "https://dummyimage.com/600x400/ff5722/fff&text=Dumbbells",
    category: "Sports",
    rating: { rate: 4.6, count: 30 },
    stock: 20,
    brand: "FitGear",
    discountPercentage: 12
  },
  {
    id: 16,
    title: "Kids’ Art Supply Kit",
    description: "Complete set of non-toxic crayons, markers, and paints for creative kids.",
    price: 34.99,
    image: "https://dummyimage.com/600x400/ff9800/fff&text=Art+Kit",
    category: "Toys",
    rating: { rate: 4.7, count: 60 },
    stock: 100,
    brand: "CreativeKids",
    discountPercentage: 10
  },
  {
    id: 17,
    title: "Portable Electric Kettle",
    description: "Fast boiling electric kettle with auto shut-off and compact design.",
    price: 29.99,
    image: "https://dummyimage.com/600x400/03a9f4/fff&text=Electric+Kettle",
    category: "Home",
    rating: { rate: 4.5, count: 50 },
    stock: 70,
    brand: "KitchenPro",
    discountPercentage: 9
  },
  {
    id: 18,
    title: "Adjustable Laptop Stand",
    description: "Ergonomic laptop stand with height and angle adjustment.",
    price: 39.99,
    image: "https://dummyimage.com/600x400/00bcd4/fff&text=Laptop+Stand",
    category: "Office",
    rating: { rate: 4.4, count: 40 },
    stock: 45,
    brand: "WorkEase",
    discountPercentage: 6
  },
  {
    id: 19,
    title: "Stainless Steel Insulated Tumbler",
    description: "Keeps drinks hot or cold for hours, spill-proof lid included.",
    price: 19.99,
    image: "https://dummyimage.com/600x400/4caf50/fff&text=Insulated+Tumbler",
    category: "Sports",
    rating: { rate: 4.6, count: 55 },
    stock: 80,
    brand: "HydroFlow",
    discountPercentage: 7
  },
  {
    id: 20,
    title: "Wireless Mechanical Keyboard",
    description: "Compact mechanical keyboard with RGB backlighting and Bluetooth.",
    price: 89.99,
    image: "https://dummyimage.com/600x400/9c27b0/fff&text=Mechanical+Keyboard",
    category: "Electronics",
    rating: { rate: 4.7, count: 65 },
    stock: 35,
    brand: "KeyPro",
    discountPercentage: 10
  },
  {
    id: 21,
    title: "Classic Denim Jacket",
    description: "Timeless denim jacket with button closures and multiple pockets.",
    price: 69.99,
    image: "https://dummyimage.com/600x400/607d8b/fff&text=Denim+Jacket",
    category: "Clothing",
    rating: { rate: 4.5, count: 70 },
    stock: 50,
    brand: "UrbanStyle",
    discountPercentage: 12
  },
  {
    id: 22,
    title: "Rechargeable Handheld Vacuum",
    description: "Lightweight vacuum cleaner with strong suction and washable filter.",
    price: 49.99,
    image: "https://dummyimage.com/600x400/ff9800/fff&text=Handheld+Vacuum",
    category: "Home",
    rating: { rate: 4.3, count: 45 },
    stock: 30,
    brand: "CleanTech",
    discountPercentage: 8
  },
  {
    id: 23,
    title: "Men’s Leather Belt",
    description: "Premium genuine leather belt with classic buckle.",
    price: 25.99,
    image: "https://dummyimage.com/600x400/795548/fff&text=Leather+Belt",
    category: "Accessories",
    rating: { rate: 4.6, count: 55 },
    stock: 60,
    brand: "LeatherCraft",
    discountPercentage: 7
  },
  {
    id: 24,
    title: "Adjustable Office Chair",
    description: "Ergonomic office chair with lumbar support and swivel base.",
    price: 129.99,
    image: "https://dummyimage.com/600x400/00bcd4/fff&text=Office+Chair",
    category: "Office",
    rating: { rate: 4.7, count: 40 },
    stock: 25,
    brand: "ComfortSeating",
    discountPercentage: 10
  }
];

localStorage.setItem("allProducts", JSON.stringify(products));

const renderProducts = () => {
  const container = document.getElementById("products");
  container.innerHTML = products.map(p => {
    const discountedPrice = p.discountPercentage
      ? (p.price * (1 - p.discountPercentage / 100)).toFixed(2)
      : null;

    return `
          <div class="col-12 col-md-6 col-lg-4">
            <div class="card h-100 product-card">
              <img src="${p.image}" class="card-img-top" alt="${p.title}" />
              <div class="card-body d-flex flex-column">
                <h5>${p.title}</h5>
                <small class="text-muted">${p.brand}</small>
                <span class="badge bg-info category-badge mb-2">${p.category}</span>
                <p class="product-description">${p.description}</p>
                <p>
                  <strong>
                    ${discountedPrice
        ? `<span class="text-decoration-line-through text-muted">$${p.price}</span> $${discountedPrice}`
        : `$${p.price}`
      }
                  </strong>
                  ${p.discountPercentage ? `<span class="badge bg-success">${p.discountPercentage}% OFF</span>` : ""}
                </p>
                <p>Rating: ${p.rating.rate} ⭐ (${p.rating.count} reviews)</p>
                <p>Stock: ${p.stock}</p>
                <div class="mt-auto d-flex gap-2">
                  <button class="btn btn-success btn-add-to-cart w-100" data-id="${p.id}">Add to Cart</button>
                  <button class="btn btn-outline-primary btn-view-product w-100" data-id="${p.id}" data-bs-toggle="modal" data-bs-target="#productModal">View</button>
                </div>
              </div>
            </div>
          </div>
        `;
  }).join("");
};

const updateCartCount = () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const count = cart.reduce((acc, item) => acc + item.quantity, 0);
  document.getElementById("cart-count").textContent = count;
};

const addProductToCart = (id) => {
  const product = products.find(p => p.id === id);
  if (!product) return;

  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  const existing = cart.find(item => item.id === id);

  const price = product.discountPercentage
    ? +(product.price * (1 - product.discountPercentage / 100)).toFixed(2)
    : product.price;

  if (existing) {
    if (existing.quantity < product.stock) {
      existing.quantity++;
    } else {
      alert("No more stock available!");
    }
  } else {
    cart.push({
      id: product.id,
      title: product.title,
      brand: product.brand,
      price,
      image: product.image,
      quantity: 1
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
};

const showProductModal = (id) => {
  const product = products.find(p => p.id === id);
  if (!product) return;

  const discountedPrice = product.discountPercentage
    ? (product.price * (1 - product.discountPercentage / 100)).toFixed(2)
    : product.price.toFixed(2);

  document.getElementById("product-modal-body").innerHTML = `
        <div class="row">
          <div class="col-md-5">
            <img src="${product.image}" class="img-fluid rounded" alt="${product.title}">
          </div>
          <div class="col-md-7">
            <h4>${product.title}</h4>
            <p>${product.description}</p>
            <p><strong>Brand:</strong> ${product.brand}</p>
            <p><strong>Category:</strong> ${product.category}</p>
            <p><strong>Rating:</strong> ${product.rating.rate} ⭐ (${product.rating.count} reviews)</p>
            <p><strong>Stock:</strong> ${product.stock}</p>
            <p><strong>Price:</strong> 
              ${product.discountPercentage
      ? `<span class="text-decoration-line-through text-muted">$${product.price}</span> 
                     <span class="fw-bold text-success">$${discountedPrice}</span> 
                     <span class="badge bg-success">${product.discountPercentage}% OFF</span>`
      : `$${product.price}`
    }
            </p>
          </div>
        </div>
      `;
};

document.addEventListener("click", e => {
  if (e.target.classList.contains("btn-add-to-cart")) {
    const id = parseInt(e.target.getAttribute("data-id"));
    addProductToCart(id);
  }

  if (e.target.classList.contains("btn-view-product")) {
    const id = parseInt(e.target.getAttribute("data-id"));
    showProductModal(id);
  }
});

renderProducts();
updateCartCount();
