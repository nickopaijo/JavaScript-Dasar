let ucap = "pagi";
ucapan(ucap);
function ucapan(a){
    if(a == "pagi"){
        console.log("Selamat Pagi");
    }else if(a == "siang"){
        console.log("Selamat Siang");
    }else {
        console.log("apaan ini?");
    }
}

let a = perkalian(3,5);
//console.log(a);
let b = perkalian(5,5);
//console.log(b);
let c = perkalian(4,3);
//console.log(c);

function perkalian(a,b){
    console.log(a*b);
    //return a*b;
}