// task 1: Cho một chuỗi, Viết hàm đảo ngược từng từ trong câu
var str = "hello javascript";
var newStr = "";
for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
}
console.log("Task 1 ",newStr);


// task 2: Viết hàm đệ quy đảo ngược chuỗi.
function reverseStr(str) {
    return (str === '') ? '' : reverseStr(str.substr(1)) + str.charAt(0);
}
const newStr2 = reverseStr("hoangtrungquan");
console.log("Task 2 ",newStr2);

// task 3: Cho một mảng, Viết hàm đảo ngược các item trong array đó.

const list = [1, 2, 3, 4, 5]
const reversedList = [...list].reverse()
console.log("Task 3",reversedList);

// task 4: viết hàm đệ quy đảo ngược một mảng
var arr = [1, 2, 4, 5, 9, 6];
const newArray = [...arr].reverse()
console.log("Task 4 ",newArray);

// task5: viết hàm đệ quy tính tổng

var sum = 9;
function Sum(n) {
    if (n == 0) // điều kiện dừng (phần cơ sở)
        return 0;
    return n + Sum(n - 1);
}
const result = Sum(sum);
console.log(result);

function recursiveSum(numb) {
    // nếu numb ==1 thì dừng dệ quy
    return (numb == 1) ? 1 : recursiveSum(numb - 1) + numb;
}
const result1 = recursiveSum(sum);
console.log("Task 5 ",result1);

// task 6: Viết hàm đệ quy để biết một số là thuộc dãy fibonacci
function fibonacci(num) {
    return (num <= 1) ? 1 : fibonacci(num - 1) + fibonacci(num - 2);
}
function show(n) {
    let i;
    for (i = 0; i <= n; i++) {
        console.log("Task 6 ", fibonacci(i));
    }
}
const fibonacciNumber = show(10);


// task 7 Viết hàm đệ quy để tìm một số nguyên tố
function checkPrime(num,i=2){
    if(num<4) return true
    if(num%i==0) return false
    return i<Math.sqrt(num)?checkPrime(num,i+1):true
}
console.log("Task 7 ",checkPrime(67));



// task 8: Viết một class bao gồm 4 methods: add, update, remove, so sánh 
class User {
    users = [
        { id: 1, name: 'user 1' }, 
        { id: 2, name: 'user 2' }
    ];
    add(user) {
        const isNum = this.isExitUser(user.id);
        if (isNum) return this.users;
        this.users.push(user);
        return this.users;
    }
    update(user) {     
        const index = this.users.findIndex(t => t.id === user.id);
        this.users[index] = user;
        return this.users;
    }
    remove(id) {
        this.users = this.users.filter(f => f.id !== id);
        return this.users;
    }
    isExitUser(userId) {
        return this.users.some(s => s.id === userId);
    };

}
const useClassUser = new User();

useClassUser.add({id: 3, name: 'user 3'});
console.log(useClassUser.users);
useClassUser.remove(1);
console.log(useClassUser.users);
// useClassUser.updated({id: 2, name: 'USER 2'});