let products = [
  {
    id: 1,
    name: "iphone15",
  },
  {
    id: 2,
    name: "iphone16",
  },
  {
    id: 3,
    name: "iphone17",
  },
  {
    id: 4,
    name: "iphone18",
  },
];

// tạo hàm hiển thị danh sách sản phẩm
function renderProducts() {
    let str ="";
    for (let i = 0; i < products.length; i++) {
        str+= `<li>${products[i].name}   <button onclick="deleteProduct(${i})">xóa ${i+1}</button> </li>`
    }
    document.getElementById("list").innerHTML= str;
}
renderProducts();

let numbers =[5,8,9,11];
for (let i = 0; i < numbers.length; i++) {
           let sum=0;
            sum+=numbers[i]
}

// tạo hàm xóa sản phẩm 
function deleteProduct(index){
    console.log("đã gọi hàm xóa",index);
    products.splice(index,1);
    renderProducts()
    
}
