const express = require("express");
const app     = express();
app.set("view engine" , "ejs");
app.use(express.static(__dirname + "/dosyalar"));

var anasayfa=[
  {resim:"/images/5.png",
    resim:"/images/1.jpg",
    resim:"/images/1.jpg",
    resim:"/images/1.jpg"}

];



var cardlar=[
  {isim:"ANKARA KAVAKLIDERE",
  aciklama:"Gaziosmanpaşa Mah. Şehit Ömer SipahioğluSokak No:8 Kavaklıdere Çankaya / Ankara+90 312 426 23 82",
  resim:"/images/r7.jpg",
  index:0},

  {isim:"BODRUM YALIKAVAK MARİNA ",
  aciklama:"Gaziosmanpaşa Mah. Şehit Ömer SipahioğluSokak No:8 Kavaklıdere Çankaya / Ankara+90 312 426 23 82",
  resim:"/images/r1.jpg",
  index:1},

  {isim:"D MARİS BAY",
  aciklama:"Gaziosmanpaşa Mah. Şehit Ömer SipahioğluSokak No:8 Kavaklıdere Çankaya / Ankara+90 312 426 23 82",
  resim:"/images/r2.jpg",
  index:2},

  {isim:"İSTANBUL ETİLER",
  aciklama:"Gaziosmanpaşa Mah. Şehit Ömer SipahioğluSokak No:8 Kavaklıdere Çankaya / Ankara+90 312 426 23 82",
  resim:"/images/r3.jpg",
  index:3},

  {isim:"BİRLEŞİK ARAP EMİRLİKLERİ DUBAİ",
  aciklama:"Gaziosmanpaşa Mah. Şehit Ömer SipahioğluSokak No:8 Kavaklıdere Çankaya / Ankara+90 312 426 23 82",
  resim:"/images/r4.jpg",
  index:4},

  {isim:"BİRLEŞİK ARAP EMİRLİKLERİ ABU DHABİ",
  aciklama:"Gaziosmanpaşa Mah. Şehit Ömer SipahioğluSokak No:8 Kavaklıdere Çankaya / Ankara+90 312 426 23 82",
  resim:"/images/r5.jpg",
  index:5},

  {isim:"İSTANBUL KANYON",
  aciklama:"Gaziosmanpaşa Mah. Şehit Ömer SipahioğluSokak No:8 Kavaklıdere Çankaya / Ankara+90 312 426 23 82",
  resim:"/images/r6.jpg",
  index:6},

  {isim:"İSTANBUL İSTİNYEPARK",
  aciklama:"Gaziosmanpaşa Mah. Şehit Ömer SipahioğluSokak No:8 Kavaklıdere Çankaya / Ankara+90 312 426 23 82",
  resim:"/images/r1.jpg",
  index:7},

  {isim:"DOHA",
  aciklama:"Gaziosmanpaşa Mah. Şehit Ömer SipahioğluSokak No:8 Kavaklıdere Çankaya / Ankara+90 312 426 23 82",
  resim:"/images/r2.jpg",
  index:8},

  {isim:"MIAMI",
  aciklama:"Gaziosmanpaşa Mah. Şehit Ömer SipahioğluSokak No:8 Kavaklıdere Çankaya / Ankara+90 312 426 23 82",
  resim:"/images/r3.jpg",
  index:9},

  {isim:"NEW YORK",
  aciklama:"Gaziosmanpaşa Mah. Şehit Ömer SipahioğluSokak No:8 Kavaklıdere Çankaya / Ankara+90 312 426 23 82",
  resim:"/images/r4.jpg",
  index:10},

  {isim:"MYKONOS",
  aciklama:"Gaziosmanpaşa Mah. Şehit Ömer SipahioğluSokak No:8 Kavaklıdere Çankaya / Ankara+90 312 426 23 82",
  resim:"/images/r5.jpg",
  index:11},

  {isim:"SANDAL BEDESTENİ",
  aciklama:"Gaziosmanpaşa Mah. Şehit Ömer SipahioğluSokak No:8 Kavaklıdere Çankaya / Ankara+90 312 426 23 82",
  resim:"/images/r6.jpg",
  index:12},

  {isim:"MAÇKA PALAS",
  aciklama:"Gaziosmanpaşa Mah. Şehit Ömer SipahioğluSokak No:8 Kavaklıdere Çankaya / Ankara+90 312 426 23 82",
  resim:"/images/r7.jpg",
  index:13},

  {isim:"DALLAS(Çok Yakında Açılıyor)",
  aciklama:"Gaziosmanpaşa Mah. Şehit Ömer SipahioğluSokak No:8 Kavaklıdere Çankaya / Ankara+90 312 426 23 82",
  resim:"/images/r1.jpg",
  index:14},

  {isim:"LONDRA(Çok Yakında Açılıyor)",
  aciklama:"Gaziosmanpaşa Mah. Şehit Ömer SipahioğluSokak No:8 Kavaklıdere Çankaya / Ankara+90 312 426 23 82",
  resim:"/images/r2.jpg",
  index:15},

  {isim:"İSTANBUL BEBEK",
  aciklama:"Gaziosmanpaşa Mah. Şehit Ömer SipahioğluSokak No:8 Kavaklıdere Çankaya / Ankara+90 312 426 23 82",
  resim:"/images/r3.jpg",
  index:16},


  {isim:"BOSTON",
  aciklama:"Gaziosmanpaşa Mah. Şehit Ömer SipahioğluSokak No:8 Kavaklıdere Çankaya / Ankara+90 312 426 23 82",
  resim:"/images/r4.jpg",
  index:17},

];




var yemekKategoriler = [
  {id:1, isim: 'BAŞLANGIÇLAR'},
  {id:2, isim: 'SALATALAR'},
  {id:3, isim: 'ETLER'},
  {id:4, isim: 'STEAKLER'},
  {id:5, isim: 'DANA BONFİLELER'},
  {id:6, isim: 'BURGERLER'},
  {id:6, isim: 'GARNİTÜRLER'},
  {id:6, isim: 'TATLILAR'},
];

var yemekler = [
  {id:1, isim: 'DANA CARPACCIO', kategori:1},
  {id:2, isim: 'DANA FÜME', kategori:1},
  {id:3, isim: 'FÜME RIB EYE', kategori:1},
  {id:4, isim: 'STEAK TARTAR', kategori:1},
  {id:5, isim: 'KARİDES IZGARA', kategori:1},
  {id:6, isim: 'NUSR-ET SPESİYEL SUSHI', kategori:1},

  {id:7, isim: 'ROKA SALATASI', kategori:2},
  {id:8, isim: 'TULUM PEYNİR SALATASI', kategori:2},
  {id:9, isim: 'AKDENİZ SALATASI', kategori:2},
  {id:10, isim: 'KAŞIK SALATASI', kategori:2},
  {id:11, isim: 'DOMATES SALATASI', kategori:2},
  {id:12, isim: 'AVOKADO SALATASI', kategori:2},



  {id:13, isim: 'DANA KABURGA', kategori:3},
  {id:14, isim: 'DANA ANTRİKOT', kategori:3},
  {id:15, isim: 'DANA ŞAŞLIK', kategori:3},
  {id:16, isim: 'DANA SIRTI', kategori:3},
  {id:17, isim: 'NUSR-ET SPAGHETTI', kategori:3},




  {id:18, isim: 'DALLAS STEAK', kategori:4},
  {id:19, isim: 'NUSR-ET KOBE', kategori:4},
  {id:20, isim: 'NEW YORK STEAK', kategori:4},
  {id:21, isim: 'TOSCANA', kategori:4},
  {id:22, isim: 'TOMAHAWK', kategori:4},
  {id:23, isim: 'HARDAL SOSLU DALLAS STEAK', kategori:4},


  {id:24, isim: 'LOKUM', kategori:5},
  {id:25, isim: 'FILLET MİGNON BONFİLE', kategori:5},
  {id:26, isim: 'NUSR-ET SPECIAL', kategori:5},
  {id:27, isim: 'HARDAL SOSLU BONFİLE', kategori:5},

  {id:28, isim: 'NUSR-ET BURGER', kategori:6},
  {id:29, isim: 'LOKUM BURGER', kategori:6},


  {id:30, isim: 'PATATES KROKET', kategori:7},
  {id:31, isim: 'PATATES PÜRESİ', kategori:7},
  {id:32, isim: 'MANTAR', kategori:7},
  {id:33, isim: 'YAYLA ISPANAK', kategori:7},
  {id:34, isim: 'PATATES CİPSİ', kategori:7},
  {id:35, isim: 'SOĞAN ÇİÇEĞİ', kategori:7},


  {id:36, isim: 'ŞÖBİYET', kategori:8},
  {id:37, isim: 'PORTAKALLI TRUFFLE', kategori:8},
  {id:38, isim: 'HAVUÇ DİLİMİ', kategori:8},
  {id:39, isim: 'DONDURMA', kategori:8},

];

var menu=[
  {h1:"BAŞLANGIÇLAR"}
];

var hakkinda=[
  {aciklama:"2010 yIlInda kapIlarInI açan Nusr-Et Steakhouse; lezzetlİ etlerİ,benzersİz servİsİ ve butİk konseptİyle sektörün lİderlİğİnİ sürdürüyor.Et severler İçİn pek çok özgün seçenek yaratan,kısa süre İçİnde steakhouse kültürüne keyİflİ ve lezzetlİyenİ bİr yorum getİren Nusr-Et, et müdavİmlerİnİn vazgeçİlmezmekanI olarak hİzmet verİyor.AçIldIğI İlk günden bu yana et meraklIlarInIn İlk ve tek adresİhalİne gelen Nusr-Et Steakhouse;sunduğu zengİn lezzetler, sIcak ortamI servİsİylefark yaratIyor.Tüm şubelerİnde konuklarIn lezzet alIşkanlIklarInI vekonforlarInI ön planda tutan Nusr-Et Steakhouse;İstanbul Etİler, İstanbul Sandal Bedestenİ, Ankara KavaklIdere, D-Hotel Marİs,Bodrum YalIkavak Marİna, Dubaİ, Abu Dhabİ, Doha, Mİamİ, New York ve Mykonos'dabenzersİz etlerİ İle et severlerİn bİr numaralI tercİhİ olmaya devam edİyor.nusretin alIşIlagelmİş et ve hİzmet kalİtesİnİ burger konseptİnetaşIyan nusret burger İse, lezzetten ödün vermeyenlerİ,bebek, nişantaşı, kanyon ve İstİnyePark şubelerİnde ağIrlIyor."},
];

var rezervasyon=["REZERVASYONLARIMIZ DOLMUŞTUR! BİZİ TERCİH ETTİĞİNİZ İÇİN TEŞEKKÜR EDERİZ #saltbea"];

app.get("/", function(req,res){
  res.render("anasayfa",{ornekVar:anasayfa});
});

app.get("/hakkinda",function(req,res){
  res.render("hakkinda", { hakkinda} );
});


app.get("/restorantlar",function(req,res){
// var indexDegeri=req.params.index;
// var restIsim=cardlar[indexDegeri].isim;
// var restAciklama=cardlar[indexDegeri].aciklama;
// var restResim=cardlar[indexDegeri].resim;

  res.render("restorantlar",{yanilma:cardlar});
    // isim:restIsim,
    // aciklama:restAciklama,
    // resim:restResim,

});


// app.get("/menu",function(req,res){
//   res.sendFile(__dirname +"/views/menu.html");
//
// });

app.get("/menu",function(req,res){
  res.render("menu", {yemekKategoriler, yemekler});

});

app.get("/rezervasyon",function(req,res){
  res.render("rezervasyon",{rezervasyon});
});



// app.get("/:iletisim" , function(req,res){
//
// });







app.listen(8001);
