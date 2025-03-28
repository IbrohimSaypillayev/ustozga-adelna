let arr = ['anor', 'shaftoli' , 'gilos' , 'xurmo']

console.log(arr)


confirm("arayning uzunligi : 3")

let tasdiq = confirm('bitta array ob tashamoqchimisiz')


if (tasdiq == true) {
    arr.pop();
}
console.log(arr)

confirm("sizda bita array yoqoldi !")



let tasdiq2 =confirm("bitta array qoshmoqchimisiz ")
arr.push('ananas');
console.log(arr);

confirm("sida xozi boshidagi bita element yoqoladi !")
let first = arr.shift();
console.log(first);
console.log(arr);

confirm("sizda xozir bita element eng boshiga qoshiladi !")
arr.unshift('gilos');
console.log(arr);