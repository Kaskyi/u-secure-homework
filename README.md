# u secure homework

## Lab 1

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1 {
    class Program {

        public static string taks1 =
            "7958401743454e1756174552475256435e59501a5c524e176f786517545e47" +
            "5f5245191772195019175e4317445f58425b531743565c521756174443455e" +
            "595017155f525b5b58174058455b5315175659531b17505e41525917435f52" +
            "175c524e175e4417155c524e151b174f584517435f5217515e454443175b52" +
            "4343524517155f1517405e435f17155c151b17435f5259174f584517155215" +
            "17405e435f171552151b17435f525917155b1517405e435f17154e151b1756" +
            "595317435f5259174f58451759524f4317545f564517155b1517405e435f17" +
            "155c15175650565e591b17435f52591715581517405e435f17155215175659" +
            "5317445817585919176e5842175a564e17424452175e5953524f1758511754" +
            "585e59545e53525954521b177f565a5a5e595017535e4443565954521b177c" +
            "56445e445c5e17524f565a5e5956435e58591b17444356435e44435e54565b" +
            "17435244434417584517405f564352415245175a52435f5853174e58421751" +
            "52525b174058425b5317445f584017435f52175552444317455244425b4319";

        public static string ConvertHex(String hexString) {
            try {
                string ascii = string.Empty;

                for (int i = 0; i < hexString.Length; i += 2) {
                    String hs = string.Empty;

                    hs = hexString.Substring(i, 2);
                    uint decval = System.Convert.ToUInt32(hs, 16);
                    char character = System.Convert.ToChar(decval);
                    ascii += character;

                }

                return ascii;
            }
            catch (Exception ex) { Console.WriteLine(ex.Message); }

            return string.Empty;
        }

        private static string xor(string text, string key) {
            var result = new StringBuilder();
            for (int c = 0; c < text.Length; c++)
                result.Append((char)((uint)text[c] ^ (uint)key[c % key.Length]));
            return result.ToString();
        }

        static void Main(string[] args) {

            string task1 = ConvertHex(Program.taks1);

            for (int i = 0; i < 255; i++) {

                Console.WriteLine(xor(task1, i.ToString()));
                Console.WriteLine();
            }
            Console.ReadKey();
        }
    }
}

// class Letter {
//   letter = '';
//   persent= 0;
// }

let letters = [
  { letter: ' ', persent: 13 },
  { letter: 'A', persent: 8.17 },
  { letter: 'B', persent: 1.49 },
  { letter: 'C', persent: 2.78 },
  { letter: 'D', persent: 4.25 },
  { letter: 'E', persent: 12.70 },
  { letter: 'F', persent: 2.23 },
  { letter: 'G', persent: 2.02 },
  { letter: 'H', persent: 6.09 },
  { letter: 'I', persent: 6.97 },
  { letter: 'J', persent: 0.15 },
  { letter: 'K', persent: 0.77 },
  { letter: 'L', persent: 4.03 },
  { letter: 'M', persent: 2.41 },
  { letter: 'N', persent: 6.75 },
  { letter: 'O', persent: 7.51 },
  { letter: 'P', persent: 1.93 },
  { letter: 'Q', persent: 0.10 },
  { letter: 'R', persent: 5.99 },
  { letter: 'S', persent: 6.33 },
  { letter: 'T', persent: 9.06 },
  { letter: 'U', persent: 2.76 },
  { letter: 'V', persent: 0.98 },
  { letter: 'W', persent: 2.36 },
  { letter: 'X', persent: 0.15 },
  { letter: 'Y', persent: 1.97 },
  { letter: 'Z', persent: 0.07 }
];

const task2 = `7958401743454e1756174552475256435e59501a5c524e176f786517545e47
5f5245191772195019175e4317445f58425b531743565c521756174443455e
595017155f525b5b58174058455b5315175659531b17505e41525917435f52
175c524e175e4417155c524e151b174f584517435f5217515e454443175b52
4343524517155f1517405e435f17155c151b17435f5259174f584517155215
17405e435f171552151b17435f525917155b1517405e435f17154e151b1756
595317435f5259174f58451759524f4317545f564517155b1517405e435f17
155c15175650565e591b17435f52591715581517405e435f17155215175659
5317445817585919176e5842175a564e17424452175e5953524f1758511754
585e59545e53525954521b177f565a5a5e595017535e4443565954521b177c
56445e445c5e17524f565a5e5956435e58591b17444356435e44435e54565b
17435244434417584517405f564352415245175a52435f5853174e58421751
52525b174058425b5317445f584017435f52175552444317455244425b4319`;

var Xorc = function () {
  var randomMax = 100,
    randomMin = -100;
  this.salt = Math.round(Math.random() * (randomMax - randomMin) + randomMin);
}

Xorc.prototype.encrypt = function (str) {
  var result = '';
  for (var i = 0; i < str.length; i++) {
    result += String.fromCharCode(this.salt ^ str.charCodeAt(i));

  }
  return result;
}

Xorc.prototype.decrypt = function (hash) {
  var result = '';
  for (var i = 0; i < hash.length; i++) {
    result += String.fromCharCode(this.salt ^ hash.charCodeAt(i));
  }
  return result;
}

let decryptSolt = function (hash, salt) {
  var result = '';
  for (var i = 0; i < hash.length; i++) {
    result += String.fromCharCode(salt ^ hash.charCodeAt(i));
  }
  return result;
}

let onlyLetters = function (str) {
  return /^[a-z A-Z]+$/i.test(str);
}

String.prototype.hexDecode = function () {
  var j;
  var hexes = this.match(/.{1,4}/g) || [];
  var back = "";
  for (j = 0; j < hexes.length; j++) {
    back += String.fromCharCode(parseInt(hexes[j], 16));
  }

  return back;
}

function hex2a(hexx) {
  var hex = hexx.toString();//force conversion
  var str = '';
  for (var i = 0; i < hex.length; i += 2)
    str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
  return str;
}
hex2a('32343630'); // returns '2460'

var x = new Xorc(1);
var xe = x.encrypt('hello');
var xd = x.decrypt(xe);

// console.log(xe);
// console.log(xd);
let letterses = [];
let res = [];
let text = hex2a(task2);

text.forEach(function (element) {
  if (letterses.includes(element)) {

  }
}, this);

for (var i = 0; i < 255; i++) {
  let text = decryptSolt(hex2a(task2), i);
  let bol = onlyLetters(text);
  //console.log(text);
  if (bol) {
    //  console.log(text, '\n');
  }
}



## Lab 2
 https://drive.google.com/open?id=1qpnVYECVndw7HPJQ-kVFUXEI93O-uj9Jp-xEBTbegto 
## Lab 3

Работает, только нужно использовать 'чистый' sha1 я взял отсюда https://codereview.stackexchange.com/questions/37648/python-implementation-of-sha1

import hlextend
import requests
import hashlib

macAuth = 'http://ec2-35-159-11-170.eu-central-1.compute.amazonaws.com/mac/trythis';
knownMessage = 'Guys who understand that using Hash function as Mac is one very bad practice: Thai Duong; Juliano Rizzo; Flickr (the hard way);';
key = 'awG3342efsdf';
keyLenght = len(key);
myName = 'EvgeniyKamensky';

serverSha = sha1(key + knownMessage); 

clientSha = hlextend.new('sha1')
message = clientSha.extend(myName, knownMessage, keyLenght, serverSha, raw=True);
clientShaMAC = clientSha.hexdigest()

nextServerSha = sha1(key + message); 

print(serverSha);
print(clientShaMAC);
print(nextServerSha);

### Attack example
import hlextend
import requests

macAuth = 'http://ec2-35-159-11-170.eu-central-1.compute.amazonaws.com/mac/trythis';
knownMessage = 'Guys who understand that using Hash function as Mac is one very bad practice: Thai Duong; Juliano Rizzo; Flickr (the hard way);';
knownSSH = '094AB1E805BF6A29EC29D7C4E1ECB87D524C8EC1';
myName = 'EvgeniyKamensky';

for x in range(20, 31):

   sha = hlextend.new('sha1')
   message = sha.extend(myName, knownMessage, x, knownSSH);
   ssh = sha.hexdigest()
   
   user = {'message': message, 'mac': ssh }
   r = requests.post(macAuth, data = user)   
   print(x)
   print(r.text)
   
 также собственная реализация (но key нужно менять руками) https://drive.google.com/open?id=1T4TxRVsCZVENVQE9cePEK40lR2fIRRyXbUaBtCeu5Yc
