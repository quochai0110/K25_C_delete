/* 
Chức năng xóa


*/

let students = ["hoa", "hồng", "nhung", "vân"];

/* 
muốn xóa 1 sinh viên bất kì làm thế nào để xóa được?
1. Dùng phương thức splice(): 
    splice(index, number)
2. Dùng phương thức shift() : xóa phần tử ở đầu mảng
3. Dùng phương thức pop()   : xóa phần tử cuối của mảng
4. Dùng phương thức filter(): lọc 



*/
// students.splice(1,1);
// students.shift();
// students.pop();
// console.log("students",students);
let result = [];
for (let i = 0; i < students.length; i++) {
  if (students[i] != "nhung") {
    result.push(students[i]);
  }
}

// console.log("result",result);

let result_filter = students.filter((item) => {
  return item != "nhung";
});
// console.log("result_filter", result_filter);

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
];
// cho người dùng nhập vào id cần xóa, tiến hành xóa theo id người dùng nhập

let inputValue = +prompt("nhập id cần xóa ");

for(let i = 0; i < products.length ; i++){
    if(inputValue == products[i].id){
        products.splice(i,1);
        break; 
    }

}
console.log("products", products);

let obj={
    email:"duc@",
    address:"Hn"
}
let numbers=[5,7,9];
numbers[2]


for (let i = 0; i <3; i++) {
   // chạy vào đây
   console.log("i",i); // 0 1 2 
    
    
}/* 
    I BAN ĐẦU : 5
    IN RA I LÀ 5;
    I ĐANG LÀ 8

*/

