let num = "89";
let no=Number("");
console.log(no);
console.log(typeof(no));

let bl=Boolean(num);
console.log(typeof(bl),bl);

let nn=null;
console.log(typeof(String(nn)));

let s="jdjdj";
console.log(Boolean(s));
console.log(Boolean("false"));
console.log(Boolean(null));

/*
DATATYPE CONVERTING INTO NUMBER
""=>0
"898"(any number)=>898(converted into exact number)
true=>1
false=>0
"abce"=>NaN (not a number)

DATATYPE CONVERSION INTO STRING
8989="898"
true => "true"
false => "false"
null=> "null"

DATATYPE CONVERSION INTO BOOLEAN
0=> false;
909 => true;
"anyvalue"=> true;
""=>false
null => false

*/