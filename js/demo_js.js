var x = 10; //bien global, luon luon

let y = 20; //khai bao bien, nhung neu o trong block thi la bien local

const z = 30; //khong thay doi dc trong qua trinh viet js

//Neu viet k=10 no se tu hieu day la var

x="hello world!";
console.log(x);

let f=y>10;
//kieu boolean

if(f){
    console.log("y lon hon 10");
}else {
    console.log("y nho hon 10");
}

// chia theo nhom du lieu: Number, string,array, object khong co kieu du lieu
//no co the tu don rac, tu dong don rac cho phan mem

for(let i=0;i<10;i++){
    console.log("Xin chao"+i);
}

//so+chuoi thanh chuoi

x="10";
y=20;
x = parseInt(x);//ep kieu chuoi thanh so
console.log(x+y);

k="hello";
k=parseInt(k);//ra kieu NAN
console.log(k);

k="13hello";
k=parseInt(k);
if(isNaN(k)){ //ham isNaN kiem tra xem co phai so khong
    console.log("ko phai so");
}else {
    console.log(k);
}
console.log(k);// gap string thi dung lai

let arr=[1,2,3];

arr[3]="hello";

arr[4]=[5,6,"xin chao"];

arr[4][3]=[3.14,1,"a"];

sayHello(); //khong bat buoc truoc sau
//mang di theo do sau
function sayHello() {
    console.log("Hello!");
}
//ham la global

function sum(a,b) {
    return a+b;
}
c=sum(1,6);
console.log(c);

//cach duyet mang kinh dien la theo index(chi muc)

let ary=[5,1,7,9,12,2];
//cach duyet mang moi la foreach thi nhat theo thu tu roi vut vao function
//roi lam viec
ary.map(function (e) {
    console.log(e);
});
ary.push(77);//them phan tu

function checkSNT(n) {
    if (n < 2) {
        return false;
    }
    if (n <= 3) {
        return true;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            return false;
        }

    }
    return true;

}
let snt=[];

for(let i=0;i<100;i++){
    if(checkSNT(i)){
        snt.push(i);
    }
}

// C1:
// for (let i=0;i<snt.length;i++){
//     console.log(snt[i]);
// }

// C2:
snt.map(function (e) {
    console.log(e);
});

// //cach thuc thi luon, pham vi khac function
// snt.map(e=>{
//     console.log(e);
// });// Arrow function






