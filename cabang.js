// 1.syntax percabangan if

var totalbelanja = 20000;

if(totalbelanja > 10000){
    document.getElementById("if").innerHTML = "Selamat Anda mendapatkan piring";
}

// 2.syntax percabangan if else

var umurpengujung = 17
if(umurpengujung >= 17){
    document.getElementById("ifelse").innerHTML = "Kamu boleh masuk kedalam wahana ini";
}else{
    document.getElementById("ifelse").innerHTML = "Maaf kamu tidak bisa masuk kewahani ini";
}

// 3.syntax percabangan if else if
var tiket = 8;
if(tiket >= 6){
    document.getElementById("ifelseif").innerHTML = "Dapat popcorn"
}else if(tiket >= 4){
    document.getElementById("ifelseif").innerHTML = "Dapat Makanan Ringan"
}else if(tiket >= 2){
    document.getElementById("ifelseif").innerHTML = "Dapat permen"
}else{
    document.getElementById("ifelseif").innerHTML = "Tidak dapat makanan"
}

// syntax percabangan switch case
// cara pertama
// var umurpengunjung = prompt("Masukkan umur Anda");
// var wahana;

// switch(true){
//     case umurpengunjung >= 18:
//         wahana = "Boleh masuk Wahana Kora Kora";
//         document.getElementById("switchcase").innerHTML = wahana;
//         break;

//         case umurpengunjung >= 16:
//         wahana = "Boleh masuk Wahana Flying Fox";
//         document.getElementById("switchcase").innerHTML = wahana;
//         break;

//         case umurpengunjung >= 14:
//         wahana = "Boleh masuk Wahana Halilintar";
//         document.getElementById("switchcase").innerHTML = wahana;
//         break;

//         default:
//             wahana = "Terimakasih Sudah Berkunjung";
//             document.getElementById("switchcase").innerHTML = wahana
// }

// cara kedua
// var nilai = prompt("Masukkan Nilai Anda");
// var grade = "";

// switch(true){
//     case nilai > 90:
//         grade ="A+";
//         document.getElementById("switchcase").innerHTML = grade;
//         break;
       
//         case nilai > 80:
//         grade ="A";
//         document.getElementById("switchcase").innerHTML = grade;
//         break;

//         case nilai > 70:
//         grade ="B";
//         document.getElementById("switchcase").innerHTML = grade;
//         break;

//         case nilai > 60:
//         grade ="C";
//         document.getElementById("switchcase").innerHTML = grade;
//         break;

//         case nilai > 50:
//         grade ="D";
//         document.getElementById("switchcase").innerHTML = grade;
//         break;
        
//     default:
//         grade = "F";
//         document.getElementById("switchcase").innerHTML = grade
// }

// percabangan ternary ?
// var tanya = prompt("Apakah Serang Ibu Kota Banten ?");

// var jawaban = (tanya == "IYA") ? "Benar" : "Salah";
// document.getElementById("ternary").innerHTML = jawaban; = 

// 6.Percabangan Nested
var user = {
    nama : "Anjeli",
    email : "anjeli@gmail.com",
    password : "0204",
    role : "admin"
};

function masuk(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
 
    console.log(email);
    if(user.email == email){
        if(user.password == password){
            if(user.role == "admin"){
                alert("Selamat datang " + user.nama);
            }
        }else{
            alert("Tidak Bisa Masuk");
        }
    }else{
        alert("Bukan Admin");
    }
}



