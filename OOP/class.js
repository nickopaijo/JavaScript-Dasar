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
class Mail {
    #contats = []

    constructor() {
        this.from = 'pengirim@dicoding.com';
    }
 
    sendMessage(msg, to) {
        console.log(`you send: ${msg} to ${to} from ${this.from}`);
    };
}
// pemanggilan
const mail1 = new Mail();
mail1.sendMessage('hallo', 'penerima@dicoding.com');
//mail1.hasOwnProperty('sendMessage');