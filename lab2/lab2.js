
/*
var request = require('request');


var m = Math.pow(2, 32);
var user = { id: 22333 };
var userPlay = {
  id: 22333,
  bet: 100909187,
  number: -1508046046

};

var userUrl = 'http://ec2-35-159-11-170.eu-central-1.compute.amazonaws.com/casino/createacc';
var playUrl = 'http://ec2-35-159-11-170.eu-central-1.compute.amazonaws.com/casino/playMt';
//Id = {playerID} & bet = {amountOfMoney} & number = {theNumberYouBetOn}
request({ url: userUrl, qs: user }, function (error, response, body) {

  if (error) { console.log(error); return; }
  console.log("Get response: " + response.statusCode);
  console.log("Get response: " + body);
});



function Next() {
  var _last = (a * _last + c) % m; // m is 2^32
  return _last;
}
//: http://: http://ec2-35-159-11-170.eu-central-1.compute.amazonaws.com/casino/playLcg?id=SomeSecureId&bet=1&number=2939351765.eu-central-1.compute.amazonaws.com/casino/playLcg?id=SomeSecureId&bet=1&number=2939351765
request({ url: playUrl, qs: userPlay }, function (error, response, body) {

  if (error) { console.log(error); return; }
  console.log("Get response: " + body);
});



//Get response: {"id":"22333","money":1000,"deletionTime":"2017-11-23T20:57:42.5166849Z"}
f1 = { message: "You lost this time", account: { "id": "22333", "money": 900, "deletionTime": "2017-11-23T20:57:42.5166849Z" }, "realNumber": 634720290 }
f2 = { "message": "You lost this time", "account": { "id": "22333", "money": 800, "deletionTime": "2017-11-23T20:57:42.5166849Z" }, "realNumber": -1610591975 }
f3 = { "message": "You lost this time", "account": { "id": "22333", "money": 799, "deletionTime": "2017-11-23T20:57:42.5166849Z" }, "realNumber": 1748240292 }
f4 = { "message": "You lost this time", "account": { "id": "22333", "money": 798, "deletionTime": "2017-11-23T20:57:42.5166849Z" }, "realNumber": 19050163 }
f5 = { "message": "You lost this time", "account": { "id": "22333", "money": 797, "deletionTime": "2017-11-23T20:57:42.5166849Z" }, "realNumber": 742925430 }
f6 = { "message": "You lost this time", "account": { "id": "22333", "money": 796, "deletionTime": "2017-11-23T20:57:42.5166849Z" }, "realNumber": -903491235 }
f7 = { "message": "You lost this time", "account": { "id": "22333", "money": 795, "deletionTime": "2017-11-23T20:57:42.5166849Z" }, "realNumber": 64660248 }
f8 = { "message": "You lost this time", "account": { "id": "22333", "money": 794, "deletionTime": "2017-11-23T20:57:42.5166849Z" }, "realNumber": 2027735959 }
f9 = { "message": "You lost this time", "account": { "id": "22333", "money": 793, "deletionTime": "2017-11-23T20:57:42.5166849Z" }, "realNumber": 981627914 }
f10 = { "message": "You lost this time", "account": { "id": "22333", "money": 792, "deletionTime": "2017-11-23T20:57:42.5166849Z" }, "realNumber": -2075864095 }


var m = Math.pow(2, 32);
var x1 = 572188241;
var x2 = 762964860;
var x3 = 512708779;

var xx3 = 0;
var xx4 = 0;

let c = 0, xx2 = 0;

last_a = -m;

for (let a = 0; a < m; a++) {
  c = x2 - ((x1 * a) % m);
  xx3 = (x2 * a + c) % m;
  if (xx3 == x3) {
    console.log('-----------------------');
    console.log(a, '   ', c);
    console.log('-----------------------');
    return;
  }
}
console.log('none');


const a = 1664525;
const c = -3281063073;
const l = -1508046046;

const res = (a * l + c) % m;
console.log(res);*


//{"id":"22333","money":1000,"deletionTime":"2017-11-23T23:35:11.7773980Z"}*

var request = require('request');

var user = { id: 22334 };
var userPlay = {
  id: 22334,
  bet: 1,
  number: 1

};

var userUrl = 'http://ec2-35-159-11-170.eu-central-1.compute.amazonaws.com/casino/createacc';
var playUrl = 'http://ec2-35-159-11-170.eu-central-1.compute.amazonaws.com/casino/playMt';

request({ url: userUrl, qs: user }, function (error, response, body) {
  if (error) { console.log(error); return; }
  console.log("Get response: " + body);
});

console.log('from: ', new Date());
request({ url: playUrl, qs: userPlay }, function (error, response, body) {

  if (error) { console.log(error); return; }
  console.log("Get response: " + body);
  console.log('to: ', new Date());

});
*/
var MersenneTwister = require('mersenne-twister');
var generator = new MersenneTwister();

const x1 = 480913780;
const x2 = 498595043;


let res = 0;
generator.init_seed(1511503547);
for (let i = 0; i <= 20; i++) {
  res = generator.random_int();
  // if(x1 == res){  
  console.log(res);
  //  }
}
console.log('finish');
