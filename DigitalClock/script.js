// weakly type language
console.log("Hello EMRE");
/*var name='emre', 
    surname='kavak', 
    age='27.8';
console.log(name,surname,age);

if(age!=='27.8')
    console.log('yeahh');

var a = 100 + '50'; 

console.log(a);

if (10 === '10' && false == 0) {

    console.log('Result one');
} else if (10 > 5 > 1 || 10 < 5 < 1) {
    console.log('Result two');
} else {
    console.log('Result three');
}

if (5 !== '5') {
    console.log('Condition is True');
} else {
    console.log('Condition is False');
}

if (10 == '10' && false == 0) {

    console.log('Condition is True');
} else {
    console.log('Condition is False');
}

function passExam(name, scrore){
    
    var passUni= 71;
    
    if(scrore>=passUni){
        console.log('You passes this course' + name + 'with score: ' + scrore);
    }
        
}

passExam('emre',100);

var res=function sum(a,b){
    return a+b;
}
console.log('res: ' + res(5,10));



var arr=[
    'emre kavak',
    1990,
    function (name){
        return 'hello ' + name;
    }
];
console.log(arr[2]('kavak'));

// Lecture: Arrays - Part 2

var colors = ['white', 'black', 'red'];

colors[1] = 'green';

colors.push('blue');
console.log(colors);
colors.pop();
console.log(colors);

colors.shift();
console.log(colors);

colors.unshift('purple');

console.log(colors.indexOf('brown'));

if(colors.indexOf('blue') === -1) {

    colors.push('blue');

    console.log(colors);

}

var obj= new Object();
// field leri (js de property deniyor sanırım) dynamic ekleyebiliyoruz. Awesome!!!
obj.name='emre';
obj.age=31;
obj['univercity']='GTU';
var b= new Object();
obj.son=b;
obj.son.name='evren';
console.log(obj);


var obj2={}; // create mpty objec
var obj3={
    name:'emre',
    surname:'kavak',
    age:'30',
    myfunc: function(name){
        return name;
    },
};

console.log(obj3);


var date= new Date();
console.log(date);
console.log(date.getFullYear());
console.log(date.getDay());
*/

function digitalClock(){    // create an digital dynamic clock on the html page
    var date= new Date();
    var hours=date.getHours() + '';
    var minutes=date.getMinutes() + '';
    var seconds=date.getSeconds() + '';
    var day= date.getDay() + '';
    
    if(hours.length<2){ // after midnight, we will just one digit, for fix problem we add '0' according to length digits
        hours='0'+hours;
    }
    
    if(minutes.length<2){
        minutes='0'+minutes;
    }
    
    if(seconds.length<2){
        seconds='0' + seconds;
    }
    var  weekDays=['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    
    var clock = weekDays[day] +' '+ hours +": "+ minutes + ': ' + seconds;  // clock variable holds all informations
    
    document.getElementById('clock').innerHTML=clock;
}

digitalClock();
setInterval(digitalClock,1000); // calls the function according to given ms again and again