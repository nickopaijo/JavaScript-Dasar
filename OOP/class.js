/* Prototype */
/* function Mail() {
    this.from = 'pengirim@dicoding.com';
};
 
Mail.prototype.sendMessage = function n(msg, to) {
  console.log(`you send: ${msg} to ${to} from ${this.from}`);
};*/

/* Non Prototype */
/*function Mail(){
    this.from = "pengirim@dicoding.com",
    this.sendMessage = function(msg, to) {
        console.log(`you send: ${msg} to ${to} from ${this.from}`);
    } 
};*/

/* Sintaksis Class */
/*class Mail {
    constructor() {
        this.from = 'pengirim@dicoding.com';
    }
 
    sendMessage(msg, to) {
        console.log(`you send: ${msg} to ${to} from ${this.from}`);
    };

    ucapan(a){
        if(a == "pagi"){
            console.log("Selamat Pagi");
        }else if(a == "siang"){
            console.log("Selamat Siang");
        }else {
            console.log("apaan ini?");
        }
    }

    perkalian(a,b){
        console.log(a*b);
        //return a*b;
    }
}

// pemanggilan
const mail1 = new Mail();
const mail2 = new Mail("pagi");
mail1.sendMessage('hallo', 'penerima@dicoding.com');
mail1.ucapan("pagi");
let a = mail1.perkalian(3,5);
//console.log(a);
let b = mail1.perkalian(5,5);
//console.log(b);
let c = mail1.perkalian(4,3);
//mail1.hasOwnProperty('sendMessage');*/

class Mail {
    constructor(author) {
        this.from = author;
        console.log('is instantiated', author);
    };

    ucapan(a){
        if(a == "pagi"){
            console.log("Selamat Pagi");
        }else if(a == "siang"){
            console.log("Selamat Siang");
        }else {
            console.log("apaan ini?");
        }
    }
}

const mail1 = new Mail("emailku@dicoding.com");
mail1.ucapan("pagi");
