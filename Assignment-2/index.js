const express = require("express");
const app = express();

app.use(express.json());

const cors = require("cors");
app.use(cors());


const products = [
  {
    id: 1,
    name: "Wireless Mouse",
    category: "Electronics",
    price: 799,
    stock: 25,
    rating: 4.3
  },
  {
    id: 2,
    name: "Running Shoes",
    category: "Footwear",
    price: 2499,
    stock: 40,
    rating: 4.5
  },
  {
    id: 3,
    name: "Laptop Stand",
    category: "Accessories",
    price: 999,
    stock: 30,
    rating: 4.2
  },
  {
    id: 4,
    name: "Smart Watch",
    category: "Electronics",
    price: 4999,
    stock: 12,
    rating: 4.4
  },
  {
    id: 5,
    name: "Backpack",
    category: "Fashion",
    price: 1599,
    stock: 50,
    rating: 4.1
  }
];

app.get("/", (req, res) => {
    res.send("Assignment 2");
});

app.get("/products", (req, res) => {
    res.status(200).json(products);
});

app.get("/products/:id", (req, res) => {
    const uid = Number(req.params.id);
    const pro = products.find(e => e.id === uid);

    if(!pro){
    return  res.status(404).json({message: "product not found"})
    }
    res.status(200).json(pro);
});

app.get("/products/category/:ctgName", (req, res) => {
    const name = req.params.ctgName.toLowerCase()
    const proName = products.find(e => e.category.toLowerCase() === name);

    if(!proName){
        return res.status(404).json({message: "product not found"})
    }

    res.status(200).json(proName);
});

app.post("/products", (req, res) => {
  const newPro = {
    id: products.length + 1,
    name: req.body.name,
    category: req.body.category,
    price: req.body.price,
    stock: req.body.stock,
    rating: req.body.rating
  };

  products.push(newPro);

  res.status(201).json({
    message: "product created",
    product: newPro
  })

});

app.put("/products/:id", (req, res) => {
  const uid = Number(req.params.id);
  const index = products.findIndex(u => u.id === uid);

  if(index === -1){
    return res.status(404).json({message: "User not found"});
  }

  products[index] = {
    id: uid,
    name: req.body.name,
    category: req.body.category,
    price: req.body.price,
    stock: req.body.stock,
    rating: req.body.rating
  }

  res.status(200).json({
    message: "Product replaced",
    product: products[index]
  })
});

app.put("/products/:id/stock", (req, res) => {
  const uid = Number(req.params.id);
  const index = products.findIndex(u => u.id === uid);

   if (index === -1) {
    return res.status(404).json({ message: "Product not found" });
  }

  products[index].stock = req.body.stock;

  res.status(200).json({
    message: "Stock updated",
    product: products[index]
  });
});

app.put("/products/:id/price", (req, res) => {
  const uid = Number(req.params.id);
  const index = products.findIndex(p => p.id === uid);

  if (index === -1) {
    return res.status(404).json({ message: "Product not found" });
  }

  products[index].price = req.body.price;

  res.status(200).json({
    message: "Price updated",
    product: products[index]
  });
});

app.listen(3001, () => {
    console.log("Assingment 2 server start");
})