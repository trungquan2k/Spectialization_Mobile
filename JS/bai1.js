const arrays = [
    {
        id: 1,
        name: "user 1",
        age: 22,
    },
    {
        id: 2,
        name: "user 2",
        age: 21,
    },
    {
        id: 3,
        name: "user 3",
        age: 23,
    },
    {
        id: 4,
        name: "user 4",
        age: 24,
    },
];

// console.log(arrays);
// task 1: Add mới 1 user vào đầu mảng
const firstUser = { id: 0, name: 'trung quan', age: 25 };
arrays.unshift(firstUser);
// console.log(arrays);

// task 2: Add mới 1 user vào cuối mảng
const lastUser = { id: 5, name: 'dinh long', age: 25 };
arrays.push(lastUser);
// console.log(arrays);

// task 3: add nhiều user vào mảng
const moreUser = [
    {
        id: 6, name: 'quang ky', age: 25,
        id: 7, name: 'son nam', age: 21
    }
];
arrays.push(moreUser);
 console.log(arrays);

// task 4: xoá 1 user ra khỏi mảng
const deleteUser =arrays.pop();
console.log(deleteUser);

// task 5: lọc ra các user có age >= 22;
const agesUsers = arrays.filter(item => item.age == 22)
console.log(agesUsers);

// task 6: Biến đổi mảng hiện tại thành một mảng mới với field mới là "class" kiểu string
arrays.map((user, index) => { user.class = "class" + index })
console.log(arrays);

// task 7: Tìm ra 1 user có age = 23
const age23 =arrays.filter(user=>user.age==23);
    console.log(age23);
 
// task 8: xử dụng vòng lặp for để lấy ra các user có age >= 23
var ageUser;
for (let i = 0; i < arrays.length; i++) {
    if (arrays[i].age >= 22) {
        ageUser +=arrays[i];
    }
}
console.log(ageUser);

// task 9: Dựa vào mảng thông tin bên trên, và mảng ids bên dưới, lọc ra thông tin các user có id như mảng bên dưới.
const arrayIds = [1, 3];
const usersByIds = arrays.filter(user => arrayIds.includes(user.id))
console.log(usersByIds);

// task 10: sắp xếp các user trong mảng trên theo thứ tự tuổi tăng dần
const userIncrement = arrays.sort(function(a,b){a.age - b.age});
console.log(userIncrement);

// task 11: cập nhật thông tin trong mảng trên với field "class" được biến đổi ở task 6 thành kiểu chữ in hoa (upCase)
arrays.forEach(user => { user.class.toUpperCase() })
console.log(arrays);

// task 12: lấy ra phần tử cuối cùng của mảng trên
const lastElement = arrays.pop();
console.log(lastElement);

// task 13: lấy ra phần tử đầu tiên của mảng trên
const firstElement = arrays.shift();
console.log(firstElement);

// task 14: cho 2 mảng bên dưới, hợp nhất 2 mảng lại thành một và xoá các phần tử trùng lặp, result mong đợi => ["Gà", "vịt", "Chó"]
const array1 = ["Gà", "vịt"];
const array2 = ["vịt", "Chó"];

const newArrays = new Set([...array1,...array2]);
console.log(newArrays);
// -----------------------------------
const person = {
    firstName: "John",
    lastName: "Doe",
};

// task 15: từ object person trên lấy ra key của nó. result => ['firstName', 'lastName']
const keyUser = Object.keys(person);
console.log(keyUser);

// task 16: từ object person trên lấy ra value của nó. result => ['John', 'Doe']
const valueUser = Object.values(person);
console.log(valueUser);

// task 17: chuyển đổi object trên thành array. result mong đợi => [{firsName: 'John'}, {lastName: 'Doe'}]
const object = Object.assign({}, person);
console.log(object);

// task 18: từ object person trên add thêm 1 field "age" vao object. kết qua mong đợi => { firstName: "John", lastName: "Doe", age: 100 };
object.age = 100;

// task 19: cho array string bên dưới, convert array này sang object. Result mong đợi => {0:"a", 1:"b", 2:"c"}
const arrString = ["a", "b", "c"];
console.log({...arrString});
const returnedTarget = Object.assign({},arrString);
console.log(returnedTarget);


// task 20: cho array boolean bên dưới, kiểm tra output của array này là true hoặc false
const arrBoolean = [true, true, false];
// Không làm được.
const trueFalse=arrBoolean.every(v => v === true);
console.log(trueFalse);


// task 21: viết 1 object sử dụng setter & getter để thêm mới value và lấy ra value. key word (Getter, setter)
var objs = {
    width: 100,
    get getter() {
        return this.width;
    },
    set setter(width) {
        this.width = width;
    }
}

// task 22:
const displayUser = (user) => {
    return `Hello ${user.name} - ${user.age}`;
    // xử lý function này khi truyền params user vào là thông tin của user
    // kết quả return mong đợi là một string => "Hello User - age: 21"
};
const test = 
    {
        id: 1, name: 'quang ky', age: 25,
    };
console.log(displayUser(test));

// task 23:
let numb1 = 1.4; // => làm tròn lên số bên.  result mong đợi = 2
var value1=Math.ceil(numb1);
console.log(value1);

let numb2 = 1.4; // => làm tròn lên số bên.  result mong đợi = 1
var value2 = Math.round(numb2); // trả về 1
// var value2=Math.round(numb2);
console.log(value2);


// task 24: Thực hiện nối chuỗi dữa vào các biến bên dưới. kết quả mong đợi. => 'name: user - age: 21 - class: classAbc'
let nameUser = "trung quan";
let age = 21;
let className = "classAbc";
let output = `name: ${nameUser} - age ${age} - class ${className} `
// task 25: cho array number bên dưới, tính tổng array: result = 45;
const arrNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result = arrNumber.reduce((previousValue, currentValue) => previousValue + currentValue)
console.log(result);