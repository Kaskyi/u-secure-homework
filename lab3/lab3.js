var request = require('request');
var sha1 = require('sha1');

var macAuth = 'http://ec2-35-159-11-170.eu-central-1.compute.amazonaws.com/mac/trythis';

var knownMessage = "Guys who understand that using Hash function as Mac is one very bad practice: Thai Duong; Juliano Rizzo; Flickr (the hard way);";
var knownSSH = "094AB1E805BF6A29EC29D7C4E1ECB87D524C8EC1";
var myName = "Evgeniy-Kamensky";

//knownMessage = 'report.pdf';
//myName = '/../../../../../../../etc/passwd';
//knownMessage = 'waffle=eggo';

var messageByte = byteCount(knownMessage);
var messageBite = messageByte * 8;

var keyByteLenght = 28;//  change with for
var privateKey = '12345678901'
var keyBite = keyByteLenght * 8;

var bytesSum = messageByte + keyByteLenght;
var bitesSum = messageBite + keyBite;

console.log('Message lenght byte = ' + messageByte + '\tbite = ' + messageBite);
console.log('Key lenght byte = ' + keyByteLenght + '\tbite = ' + keyBite);
console.log('All bytes = ' + bytesSum + '\tbite = ' + bitesSum);

var lessBites = 512 - bitesSum % 512;
console.log('Empty byte = ' + lessBites / 8 + ' bite = ' + lessBites);



var prefix = '\\x80';
var lenghtPaddingBytes = (lessBites / 8);
var increment = '\\x00';
var x1 = bitesSum.toString(16);
var postfix = '\\x' + x1;//Buffer.from(bitesSum.toString(16));

console.log('Padding zero lenght byte = ', lenghtPaddingBytes);

var padding = '';

for (let i = 0; i < lenghtPaddingBytes; i++) {
  padding += increment;
}

padding = prefix + padding + postfix;

console.log('Padding = ', padding);

var message = knownMessage + padding + myName;

console.log('New message = ', message);

var sha = sha1( myName + padding );
var sha2 = sha1( privateKey +  knownMessage);
console.log('New SHA1 = ', sha);
console.log('Ne2 SHA1 = ', sha2);



console.log(parseInt('0xA8',16));



function sendRequest({  message,  sha}){

  var user = {
    message: message,
    mac: knownSSH
  };
  request({ url: macAuth, qs: user, method: 'POST' }, function (error, response, body) {
    if (error) { console.log(error); return; }
      console.log(body);
  });

}
sendRequest({message:message,sha:sha});

/*
111222333444555666777888999000
%80
   %00%00%00%00%00%00%00%00%00
%00%00%00%00%00%00%00%00%00%00
%00%00%00%00%00%00%00%00%00%00
%00%00%00%00%00%00%00%00%00%00
%00%00
%A8

0x80
0x000x000x000x000x000x000x000x000x000x00
0x000x000x000x000x000x000x000x000x000x00
0x000x000x000x000x000x000x000x000x000x00
0x000x000x000x000x000x000x000x000x000x00
0x000x000x00
0xA8
1111222233334444555566667777888899990000
0x800
     x000x000x000x000x000x000x000x000x00
0x000x000x000x000x000x000x000x000x000x00
0x000x000x000x000x000x000x000x000x000x00
0x000x000x000x000x000x000x000x000x000x00
0x000x000x000x00
168


* */
/*

var padding = ''; 

var newMessage =  '';

var mySSH = sha1(knownMessage + myName, {});

var message = (knownMessage);
var ssh = knownSSH;




let i = 10;

prefix = '0x80';
increment = '0x00';
posfix = '0xA8';
console.log(parseInt('0x2d',16));
var padding = prefix + increment;
for (let i = 0; i < 512; i++) {
  if (byteCount(knownMessage + padding + posfix + myName) === 512) {
    console.log(i);
    break;
  }
  padding+=increment;
}
message = knownMessage + padding +posfix + myName;
console.log(message);

ssh = sha1(message);
console.log(ssh);



//while (i--) {

// user = {
//  message: (i + knownMessage + myName),
//mac: sha1(user.message).toUpperCase(),
//};
/*
 
//}*/

function dec2hex(i) {
  return (i+0x10000).toString(16).substr(-4).toUpperCase();
}

function byteCount(s) {
  return encodeURI(s).split(/%..|./).length - 1;
}



// надо подделать код аутентификации. Вы знаете, что для сообщения
//  "Guys who understand that using Hash function as Mac is one very bad practice: Thai Duong; Juliano Rizzo; Flickr (the hard way);" 
//  MAC посчитаный таким нехитрым образом mac = sha1(key + message) равен
//   094AB1E805BF6A29EC29D7C4E1ECB87D524C8EC1. 
//   Вам надо добавить свое имя-фамилию в конец сообщения и узнать 
//   правильный код аутентификации для него.

// Меня чет дернуло в этот раз использовать 
// POST-запросы. Сервер тот же, путь /mac/trythis. Два параметра: message, mac.
// Это все.