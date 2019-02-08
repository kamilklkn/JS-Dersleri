
//alert("Udemy javasicrip kuırsuna hoşgeldin");
//console.log("Udemy kursuna hoşgeldiniz");
//var e="kamil";
//console.log(e);

/*
    1. Boşluklar dikkate alınmaz,
    2. Türkçe karakterler kullanılmaz,
    3. Küçük büyük harfe karşı duyarlı bir dil,
    4. Değişken tanımlama "var" iel yapılır,
*/

var Emrah=5;
var Emrah=10;

console.log("Toplam: "+(Emrah+Emrah));
//------------------- ÖZEL KARAKTERLER -------------------//

var text1= "Kamil Kalkan \"Udemy\" kursları";
var text2= "Kamil Kalkan \"Udemy\" \n kursları";
var text3= "Kamil Kalkan \"Udemy\" kursları";
document.write(text1);
document.write("<br>-----<br>");
document.write(text2);
document.write("<br>-----<br>");
//alert(text2);

//------------------- DEĞİŞKEN İSİMLERİ  -------------------//

/*
    1. Değişken isimleri _ ile başlayabilir.
    2. Değişken isimleri 235 karakter uzunluğundan fazla olmaz.
    3. Büyük küçük harf duyarlılığı var.
    4. Türkçe karakter kullanılmaz.
    5. Rakamkm ile başlayamaz.
    6. Atama işlemi = ile yapılır.
*/

//------------------- DEĞİŞKENLER  -------------------//
/*
    Değişken Türleri
    1. String
    2. Number
    3. Boolean
    4. Null 
    5. Undefined
*/

// Değişken türünü öğrenme + String
    var name="Kamil Kalkan";
    console.log(name+" Bu bir "+ typeof name + " değişkendir.");

// Number
    var number=12; //"" kullanmazsak number sayı olarak atama yapar.
    var number_decimal=12.01; 
    console.log(number+" Bu bir "+typeof number +" değişkendeğişkendir.");    
    console.log(number_decimal+" Bu bir "+typeof number_decimal+" sayıdır");

    // document.write(number+" Bu bir "+typeof+" değişkendeğişkendir.");
    // document.write(number_decimal+" Bu bir "+typeof+" sayıdır");

// Boolean Değişken
    var _boolean=true;
    console.log(_boolean +" Bu bir "+typeof _boolean +" değişken.");

// Null değişken
    var _null=null;
    console.log(_null+" Bu bir "+ typeof _null+" değişkendir.");

//Undefined
    var _undefined;
    console.log(_undefined+" Bu bir "+typeof _undefined+" değişkendir.");