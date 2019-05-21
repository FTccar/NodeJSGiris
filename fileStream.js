var fs = require('fs')
fs.readFile('dosya.txt',function(error,data){
    if(error){
        throw error;
    }
    console.log(data); //bu şekilde buffer şeklinde döner.
    console.log(data.toString()); //Bu şekilde text'in içeriğini döner.
});


// writeFile ile dosya var ise komple değiştirerek yazar yok ise yeni dosya oluşturur.
fs.writeFile("dosya2.txt","Ferdi Tüccar", function(error){
    if(error){
        throw error;
    }
    console.log("Yazıldı");
});


// appendFile ile dosya var ise ekleme yapar. Dosya içeriğini silmez!!
fs.appendFile("dosya2.txt","Kadriye Tüccar", function(error){
    if(error){
        throw error;
    }
    console.log("Eklendi");
});


// Dosya silme işleminde kullanılır
fs.unlink("dosya2.txt", function(error){
    if(error){
        throw error;
    }
    console.log("Silindi");
});