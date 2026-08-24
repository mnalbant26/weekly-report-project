import fs from 'fs';

const existingData = JSON.parse(fs.readFileSync('data.json', 'utf8'));

const report3 = {
  "id": "hafta-3",
  "haftaNo": "3. Haftalık Rapor",
  "tarihAraligi": "20 Temmuz – 25 Temmuz 2026",
  "yil": 2026,
  "ay": "Temmuz",
  "aylar": ["Temmuz"],
  "baslik": "Web Tasarımında Düzen Mimarisi (Layout): Nested Layouts, CSS Grid, Flexbox, Nested Flexbox & CSS Position",
  "aciklama": "Bu rapor, verilen konular üzerinde yapılan araştırmalar, alınan notlar, edinilen bilgiler ve üzerinde çalışılan pratik uygulamaların haftalık bir derlemesidir.",
  "pdf_url": "haftalik_rapor_3_temmuz_2026.pdf",
  "arastirmaci": {
    "isim": "Araştırmacı",
    "rol": "Teknoloji & Pazarlama Stajyeri",
    "departman": "Ürün & İnovasyon"
  },
  "istatistikler": {
    "toplamSaat": 40,
    "gunlukSaat": 6.5,
    "toplamGun": 6,
    "konuSayisi": 15,
    "dosyaSayisi": 5,
    "pratikUygulama": "YouTube Header & CSS Grid/Flexbox Kartları"
  },
  "haftalikDegerlendirme": {
    "ozet": "Bu hafta web tasarımında profesyonel arayüzlerin temel omurgasını oluşturan sayfa düzeni (layout) teknikleri derinlemesine incelendi. Nested Layouts (iç içe dikey ve yatay düzen) mantığı, HTML'de gereksiz container kullanımını ifade eden 'Divitis' kavramı, iki boyutlu ızgara sistemi sunan CSS Grid (fr unit, row/column gap), tek boyutlu esnek alan yönetimi sağlayan CSS Flexbox (display: flex, flex: 1, rigid vs flexible layout) ve bunların iç içe kullanımı olan Nested Flexbox ile YouTube Header (üst gezinme çubuğu) tasarımı tamamlandı. Haftanın son günlerinde CSS Position (fixed, sticky, absolute) ile elementleri ekranda ve sayfada sabitleme kuralları ile GitHub Pages yayınlama akışı öğrenildi.",
    "kazanimlar": [
      "Vertical ve Horizontal düzenlerin iç içe kullanımıyla (Nested Layouts) karmaşık UI yapılarını modüler parçalara bölme kavrandı.",
      "Gereksiz <div> kullanımından (Divitis) kaçınmanın kod kalitesi ve okunabilirlik açısından önemi öğrenildi.",
      "CSS Grid ile 2 boyutlu ızgara tasarımı, fr ölçü birimi, gap komutları ve display: inline-block ihtiyacının kalkması pekiştirildi.",
      "CSS Flexbox ve Nested Flexbox ile YouTube üst menüsü (Header) Sol, Orta ve Sağ bölümler halinde dikey ve yatayda hizalandı.",
      "CSS Position (fixed, absolute, sticky) koordinat kuralları, VS Code AI ile sözdizimi hata ayıklama ve GitHub Pages yayını deneyimlendi."
    ],
    "gelecekHaftaHedefleri": [
      "Position Absolute ve z-index katman hiyerarşisi ile YouTube kart rozetlerini ve bildirimlerini konumlandırmak.",
      "Sidebar (sol menü) ve responsive kolon geçişlerini tamamlayarak YouTube klon projesini bitirmek.",
      "Extra CSS Features (Media Queries, Shorthand Properties, Semantic Elements) ile mobil uyumluluğu güçlendirmek.",
      "Bağımsız ilk web tasarım projesini sıfırdan geliştirip GitHub Pages üzerinden canlıya almak.",
      "Tailwind CSS teknolojisine giriş yaparak Utility-First CSS mantığını kavramak."
    ]
  },
  "ipuclari_ve_oneriler": {
    "gelistirme_onerileri": [
      {
        "baslik": "HTML'de 'Divitis' Tuzağından Kaçınma ve Anlamsal Gruplama",
        "kategori": "HTML Standartları",
        "onem": "Kritik",
        "aciklama": "Her elemanı rastgele <div> içine almak yerine yalnızca gerçek bir stil kapsayıcısı (container) veya Flex/Grid ebeveyni gerektiğinde <div> kullanılmalı; kodun okunabilirliği korunmalıdır."
      },
      {
        "baslik": "Grid vs Flexbox Seçim Kriteri",
        "kategori": "CSS Mimarisi",
        "onem": "Yüksek",
        "aciklama": "İki boyutlu (hem satır hem sütun) katı ve hizalı ızgara yapıları için CSS Grid (display: grid); tek yönlü (satır veya sütun), içeriğin boyutuna göre esneyebilen akışlar için Flexbox (display: flex) tercih edilmelidir."
      },
      {
        "baslik": "YouTube Header Bölümlemesinde 3'lü Nested Flexbox Kalıbı",
        "kategori": "Frontend Kalıpları",
        "onem": "Yüksek",
        "aciklama": "Üst gezinme çubuklarında Ana Header (display: flex, justify-content: space-between) altına Sol (Logo/Menü), Orta (Arama/Mikrofon) ve Sağ (Bildirim/Profil) şeklinde 3 alt flex kutusu açmak dikey ve yatay hizalamayı kusursuz kılar."
      },
      {
        "baslik": "Geliştirme Esnasında VS Code AI ile Syntax Kontrolü",
        "kategori": "Geliştirici Araçları",
        "onem": "Pratik",
        "aciklama": "Yazılan CSS ve HTML yapılarında beklenmeyen kaymalar olduğunda VS Code içerisindeki AI yardımcısından sözdizimi hatalarını açıklatmak hata ayıklama süresini ciddi oranda kısaltır."
      },
      {
        "baslik": "GitHub Pages ile Anlık Canlı Test",
        "kategori": "DevOps & Yayınlama",
        "onem": "Pratik",
        "aciklama": "Geliştirilen HTML/CSS projelerini GitHub repository'sine yükleyip GitHub Pages özelliğini açarak mobil cihazlardan ve farklı tarayıcılardan canlı test etmek hızlı geri bildirim sağlar."
      }
    ],
    "ileriye_donuk_arastirma": [
      {
        "baslik": "Katman Derinliği (z-index) ve Position Absolute",
        "odak": "CSS Mimarisi",
        "hedefSure": "4. Hafta",
        "aciklama": "Üst üste binen badge'ler, tooltip'ler ve modal pencerelerin doğru görünürlük katmanında kalması için position: absolute ve z-index ilişkisi çalışılmalıdır."
      },
      {
        "baslik": "Medya Sorguları (@media) ile Responsive Breakpoint Mimarisi",
        "odak": "Mobil Uyumluluk",
        "hedefSure": "4. Hafta",
        "aciklama": "Ekran genişliği 600px, 900px ve 1200px sınırlarına ulaştığında video sütun sayısını ve sidebar görünürlüğünü dinamik ayarlayan @media kuralları öğrenilmelidir."
      },
      {
        "baslik": "Modern CSS Kütüphaneleri: Tailwind CSS Keşfi",
        "odak": "Frontend Teknolojileri",
        "hedefSure": "4. Hafta",
        "aciklama": "Harici CSS dosyalarında class yazma yükünü kaldıran utility-first yaklaşımı ve Tailwind CSS'in responsive önekleri (sm:, md:, lg:) incelenmelidir."
      },
      {
        "baslik": "Sıfırdan Bağımsız Proje Tasarımı ve Klonlama Pratiği",
        "odak": "Uygulamalı Portfolyo",
        "hedefSure": "4. Hafta",
        "aciklama": "Pinterest veya Dribbble üzerinden seçilen sade bir web sitesi tasarımının video desteği olmadan bağımsız olarak kodlanıp yayına alınması."
      }
    ]
  },
  "gunler": [
    {
      "id": "pazartesi-h3",
      "gun": "Pazartesi",
      "tarih": "20 Temmuz 2026",
      "yil": 2026,
      "ay": 6,
      "gunNo": 20,
      "etiket": "Nested Layouts & Divitis Kavramı",
      "arastirilanKonular": [
        {
          "baslik": "Nested Layouts Technique (İç İçe Düzen Yapısı)",
          "icerik": "Web tasarımında iki ana düzen tipi vardır: Vertical Layout (elementlerin yukarıdan aşağıya doğru üst üste sıralandığı yapı) ve Horizontal Layout (elementlerin soldan sağa doğru yan yana dizildiği yapı). Bu iki yapıyı birbiri içerisine konumlandırarak (nesting) karmaşık arayüzler küçük, yönetilebilir parçalara ayrılarak adım adım inşa edilir."
        },
        {
          "baslik": "HTML'de Divitis Kavramı ve Kod Kalitesi",
          "icerik": "Sayfa yapısını oluştururken ihtiyaç yokken gereksiz ve aşırı sayıda <div> elementi kullanma durumuna sektörde 'Divitis' denir. Kod karmaşasına ve okunabilirliğin azalmasına yol açtığı için sadece gerçekten bir gruplama veya kapsayıcı (container) ihtiyacı olduğunda <div> kullanılmalıdır."
        }
      ],
      "pratikUygulama": {
        "baslik": "Arkadaş Kartları & Profil Düzeni (Oliver, Mimi, Rex)",
        "aciklama": "Nested layout teknikleri uygulanarak kedi profilleri için görsel, arkadaş sayısı ve 'Add Friend' butonu içeren kart düzeni kodlandı.",
        "etiketler": ["Nested Layouts", "Vertical & Horizontal", "Divitis", "Profil Kartları"]
      },
      "oneCikanBilgi": "Nested Layouts (iç içe dikey ve yatay düzenler) en karmaşık arayüzleri modüler hale getirir; 'Divitis'ten (gereksiz <div> kullanımından) kaçınmak kod temizliği için esastır."
    },
    {
      "id": "sali-h3",
      "gun": "Salı",
      "tarih": "21 Temmuz 2026",
      "yil": 2026,
      "ay": 6,
      "gunNo": 21,
      "etiket": "CSS Grid, fr Unit & Grid Gaps",
      "arastirilanKonular": [
        {
          "baslik": "Inline Styles vs Harici CSS Dosyaları",
          "icerik": "CSS kodlarını harici bir dosyada yazmak yerine doğrudan HTML elementlerinin içerisine style niteliği ekleyerek stil tanımlanabilir; ancak sürdürülebilirlik ve düzen için harici CSS dosyaları tercih edilmelidir."
        },
        {
          "baslik": "CSS Grid Mantığı (Satır ve Sütunlar)",
          "icerik": "Satırlardan (Rows) ve sütunlardan (Columns) oluşan iki boyutlu bir yerleşim sistemidir. Grid yapısı sayesinde elementleri ekranda milimetrik bir düzenle hizalamak çok daha kolay hale gelir."
        },
        {
          "baslik": "fr Unit (Fractional Unit) & Grid Komutları",
          "icerik": "fr Unit (Fractional Unit / Free Space), kullanılabilir boş alanı sütunlara oranlar halinde dağıtan esnek bir ölçü birimidir. Sütunlar arasına boşluk için column-gap, satırlar arasına boşluk için row-gap komutları kullanılır."
        },
        {
          "baslik": "display: inline-block İhtiyacının Kalkması",
          "icerik": "<div> elementlerine display: grid uygulandığında elementleri yan yana getirmek için daha önce kullanılan display: inline-block komutuna gerek kalmaz; ızgara sistemi hizalamayı otomatik yönetir."
        }
      ],
      "pratikUygulama": {
        "baslik": "Profil Kartları için 3 Sütunlu CSS Grid Izgarası",
        "aciklama": "Kedi profili kartları CSS Grid (display: grid, fr birimleri ve column-gap) ile 3 sütunlu esnek bir ızgara düzenine oturtuldu ve DevTools ile analiz edildi.",
        "etiketler": ["CSS Grid", "fr Unit", "column-gap", "row-gap", "display: grid"]
      },
      "oneCikanBilgi": "CSS Grid iki boyutlu (satır-sütun) yerleşim sunar; fr birimi boş alanı orantılı böler ve display: grid sayesinde inline-block ihtiyacı ortadan kalkar."
    },
    {
      "id": "carsamba-h3",
      "gun": "Çarşamba",
      "tarih": "22 Temmuz 2026",
      "yil": 2026,
      "ay": 6,
      "gunNo": 22,
      "etiket": "CSS Flexbox, Rigid vs Flexible Layout",
      "arastirilanKonular": [
        {
          "baslik": "CSS Flexbox Mimarisi (display: flex)",
          "icerik": "Flexbox, Grid gibi elementlere yeni bir display stili tanımlar (display: flex). Ancak Grid mantığındaki katı ızgara yapısının aksine, ortama ve içeriğe göre kolayca şekil alan çok daha esnek bir alan yönetimi sunar."
        },
        {
          "baslik": "Rigid vs Flexible Layout Karşılaştırması",
          "icerik": "Grid sisteminin daha esnetilemez, katı bir düzen (Rigid Layout) sunmasına karşın Flexbox içeriğin boyutuna göre esneyen esnek bir yapı (Flexible Layout) sağlar."
        },
        {
          "baslik": "flex: 1 Özelliği",
          "icerik": "Flexbox içerisindeki flex: 1 komutu, Grid sistemindeki 1fr kullanımı ile aynı mantıkta çalışarak kullanılabilir boş alanı eşit şekilde dağıtmaya yarar."
        },
        {
          "baslik": "Varsayılan Display Davranışı Değişimi",
          "icerik": "HTML'de <div> elementlerinin varsayılan display: block yapısı, display: flex uygulandığında değişerek içeriklerin esnek şekilde yan yana dizilmesini sağlar."
        }
      ],
      "pratikUygulama": {
        "baslik": "Bildirim Menüsü & Esnek Rozetler (Flexbox)",
        "aciklama": "Home (14), Notifications (3), Messages (5) satırlarını içeren, rozet sayılarını sağa yaslayan ve flex: 1 ile esneyen menü arayüzü kodlandı.",
        "etiketler": ["CSS Flexbox", "display: flex", "flex: 1", "Flexible Layout", "Menü Tasarımı"]
      },
      "oneCikanBilgi": "Flexbox tek boyutlu ve esnek (flexible) akışlar için idealdir; flex: 1 komutu ile kullanılabilir alan elemanlara dinamik dağıtılır."
    },
    {
      "id": "persembe-h3",
      "gun": "Perşembe",
      "tarih": "23 Temmuz 2026",
      "yil": 2026,
      "ay": 6,
      "gunNo": 23,
      "etiket": "Nested Flexbox & YouTube Header Tasarımı",
      "arastirilanKonular": [
        {
          "baslik": "Nested Flexbox (İç İçe Esnek Kutular)",
          "icerik": "Birden fazla farklı ögeyi (arama çubuğu, butonlar, logo, profil) yan yana ve dengeli barındıran yapılar için iç içe Flexbox konteynerleri kurgulanmasıdır."
        },
        {
          "baslik": "YouTube Header Bölümünün Yapılanması",
          "icerik": "YouTube projesinin üst kısmı sol, orta ve sağ olmak üzere üç ana bölüme ayrıldı; her bölüm kendi içinde birer Flexbox konteynerine dönüştürülerek simgeler, arama kutusu ve butonlar dikeyde kusursuz hizalandı."
        },
        {
          "baslik": "İkon Boyutlandırma ve Yönetimi",
          "icerik": "Projede kullanılacak ikonlar klasöre dahil edilerek esnek yapı içerisinde doğru boyutlandırıldı ve arayüzle bütünleştirildi."
        }
      ],
      "pratikUygulama": {
        "baslik": "YouTube Üst Menü (Header) Arayüzü Kodlandı",
        "aciklama": "Sol tarafta hamburger menü ve YouTube logosu, ortada arama çubuğu ve mikrofon butonu, sağ tarafta yükleme, bildirim ve kullanıcı profil ikonları iç içe flexbox ile hizalandı.",
        "etiketler": ["Nested Flexbox", "YouTube Header", "Navbar", "İkon Hizalama", "UI Bileşeni"]
      },
      "oneCikanBilgi": "YouTube header gibi karmaşık gezinme çubukları Sol, Orta ve Sağ olmak üzere üç ana Flexbox konteynerine bölünerek (Nested Flexbox) kusursuz dikey/yatay hizalama sağlanır."
    },
    {
      "id": "cuma-h3",
      "gun": "Cuma",
      "tarih": "24 Temmuz 2026",
      "yil": 2026,
      "ay": 6,
      "gunNo": 24,
      "etiket": "CSS Position, Fixed/Sticky & VS Code AI",
      "arastirilanKonular": [
        {
          "baslik": "CSS Position Komutları (Fixed & Sticky)",
          "icerik": "Elementleri sayfada serbestçe yerleştirmeyi sağlar. position: fixed veya position: sticky ile kullanıcı sayfayı kaydırsa bile belirli <div> elementleri ekranda veya sayfa üzerinde sabit tutulabilir."
        },
        {
          "baslik": "Esnek ve Sabit Boyutlandırma Davranışları",
          "icerik": "Ekran boyutuna göre şekil alması isteniyorsa top, bottom, left, right değerleri; sabit boyutu koruması isteniyorsa width ve height değerleri kullanılır."
        },
        {
          "baslik": "VS Code AI ile Syntax Hata Ayıklama",
          "icerik": "Kodlama esnasında yapılan syntax hatalarının VS Code AI bölümü kullanılarak hızlıca tespit edilip düzeltilmesi öğrenildi."
        },
        {
          "baslik": "GitHub Pages ile Canlı Önizleme",
          "icerik": "Hazırlanan projelerin GitHub Pages özelliğiyle canlı bir web sitesi bağlantısına dönüştürülüp paylaşılabileceği keşfedildi."
        }
      ],
      "pratikUygulama": {
        "baslik": "Fixed Header & Sabit Sidebar Yerleşimi (position.html)",
        "aciklama": "Sayfa kaydırıldığında üstte sabit kalan header ve solda sabit duran sidebar (div 1, div 2) konumlandırma egzersizi yapıldı.",
        "etiketler": ["CSS Position", "position: fixed", "position: sticky", "GitHub Pages", "VS Code AI"]
      },
      "oneCikanBilgi": "position: fixed elementi ekrana sabitler; top, bottom, left, right ile koordinatlar yönetilir; VS Code AI ise syntax hatalarını hızla çözmede kritik bir yardımcıdır."
    },
    {
      "id": "cumartesi-h3",
      "gun": "Cumartesi",
      "tarih": "25 Temmuz 2026",
      "yil": 2026,
      "ay": 6,
      "gunNo": 25,
      "etiket": "Sınav Hazırlığı & Haftalık Değerlendirme",
      "arastirilanKonular": [
        {
          "baslik": "Sınav Hazırlığı & Mental/Fiziksel Dinlenme",
          "icerik": "Pazar günü gireceği sınav nedeniyle Cumartesi günü mental ve fiziksel hazırlık yapıldı; gelecek hafta için HTML ve CSS kursunun kalan 2 dersini bitirip güçlü bir pratik yapma planı kurgulandı."
        }
      ],
      "pratikUygulama": {
        "baslik": "Haftalık Konu Tekrarı & Müfredat Planlaması",
        "aciklama": "Hafta boyunca öğrenilen Nested Layouts, CSS Grid, Flexbox, Nested Flexbox ve Position konuları gözden geçirildi.",
        "etiketler": ["Haftalık Özet", "Sınav Hazırlığı", "Planlama"]
      },
      "oneCikanBilgi": "Pazar günkü sınav öncesi mental ve fiziksel hazırlık yapıldı; sonraki hafta HTML/CSS kursunun kalan derslerinin tamamlanması hedeflendi."
    }
  ],
  "raw_content": `Haftalık Rapor 3 ( 20 Temmuz-25 Temmuz)

Bu rapor, verilen konular üzerinde yapılan araştırmalar, alınan notlar, edinilen bilgiler ve üzerinde çalışılan pratik uygulamaların haftalık bir derlemesidir.

------------------------------------------------------------
Pazartesi – 20 Temmuz 2026
------------------------------------------------------------
Bu haftaya, HTML ve CSS kursunda web tasarımının düzen yapısını (layout) derinlemesine anlamamızı sağlayan tekniklerle başladım. Karmaşık arayüzleri daha düzenli ve modüler parçalara bölmeyi kolaylaştıran Nested Layouts Technique üzerine detaylı çalışmalar yaptım.

Ders sürecinde web tasarımında temel olarak iki ana düzen tipi (layout) bulunduğunu öğrendim:
• Vertical Layout : Elementlerin yukarıdan aşağıya doğru üst üste sıralandığı yapı.
• Horizontal Layout : Elementlerin soldan sağa doğru yan yana dizildiği yapı.

Bu iki temel düzen yapısını birbiri içerisine konumlandırarak (nesting), profesyonel bir web sitesinde gördüğümüz en karmaşık ve zengin arayüzleri bile daha küçük, yönetilebilir parçalara ayırarak adım adım inşa edebileceğimizi fark ettim. Büyük bir bölümü önce dikey veya yatay olarak bölüp, ardından bu bölümlerin kendi içinde tekrar yatay ve dikey yapılara ayrılması mantığı kodlama sürecini oldukça kolaylaştırıyor.

Ayrıca derste HTML yazım süreciyle ilgili oldukça kritik ve sektörde sıkça kullanılan bir terim öğrendim: Divitis. Bu kavram, sayfa yapısını oluştururken ihtiyaç yokken gereksiz ve aşırı sayıda <div> elementi kullanma durumunu ifade etmek için kullanılıyor. Kod karmaşasına ve okunabilirliğin azalmasına yol açan bu durumdan kaçınmam gerektiğini; sadece gerçekten bir gruplama veya kapsayıcı (container) ihtiyacı olduğunda <div> kullanmanın kod kalitesi açısından ne kadar önemli olduğunu kavramış oldum.

Bugün öğrendiğim teknikleri uygulayarak yaptığım alıştırma çalışmalarını aşağıya ekliyorum: (Oliver, Mimi, Rex profil kartları)

------------------------------------------------------------
Salı – 21 Temmuz 2026
------------------------------------------------------------
Bugün kursa devam ederek web tasarımında sayfa düzenini oluşturmanın en güçlü yöntemlerinden biri olan CSS Grid konusuna geçiş yaptım. Bu derste hem sayfa yapısını daha esnek bir şekilde kurgulamayı hem de stillendirme mantığına dair farklı yaklaşımları inceledim.

Ders esnasında öncelikle Inline Styles mantığına değindik. CSS kodlarını harici bir dosyada yazmak yerine doğrudan HTML elementlerinin (örneğin bir <div> elementinin) içerisine style niteliği ekleyerek stil tanımlayabileceğimizi gördüm. Ancak projelerde kod düzenini korumak adına harici CSS dosyalarının genel kullanım için daha sürdürülebilir olduğunu bir kez daha hatırlamış oldum.

CSS Grid konusunun detaylarına inecek olursam; bu yapının mantıksal olarak satırlardan (Rows) ve sütunlardan (Columns) oluşan iki boyutlu bir yerleşim sistemi sunduğunu öğrendim. Grid yapısı sayesinde elementleri ekranda milimetrik bir düzenle hizalamak çok daha kolay hale geliyor.

Ders boyunca edindiğim kritik bilgileri ve yeni komutları şu şekilde derledim:
• Grid Layout: Elementleri dikey ve yatay eksende bir ızgara sistemine oturtmamızı sağlayan düzen yapısı.
• fr Unit: Fractional Unit veya Free Space anlamına gelen, esnek ızgara alanlarını tanımlamak için kullanılan özel bir CSS ölçü birimidir. Kullanılabilir boş alanı oranlar halinde sütunlara dağıtmamıza olanak tanır.
• Column Gap & Row Gap: Grid yapısı içerisindeki sütunların arasına boşluk eklemek için column-gap, satırların arasına boşluk eklemek için ise row-gap komutlarının kullanıldığını öğrendim.
• Inline Block İhtiyacının Ortadan Kalkması: <div> elementlerimize grid stilini uyguladığımızda (display: grid), elementleri yan yana getirmek için daha önce kullandığımız display: inline-block komutuna artık ihtiyaç duymadığımızı fark ettim. Grid sistemi, içeriğin hizalanmasını ve yan yana dizilimini otomatik ve çok daha esnek bir şekilde yönetiyor.

Öğrendiğim CSS Grid yapısını ve yeni komutları uygulayarak önceki pratiğe grid yapısını ekledim.

------------------------------------------------------------
Çarşamba – 22 Temmuz 2026
------------------------------------------------------------
Bugün kursa devam ederek CSS'in bir diğer güçlü ve esnek düzen yapısı olan Flexbox konusuna geçiş yaptım. Bu ders sayesinde daha önce öğrendiğim CSS Grid ile Flexbox arasındaki temel farkları ve hangi senaryoda hangisini kullanmanın daha doğru olacağını detaylıca inceleme fırsatı buldum.

Öğrendiğime göre Flexbox, tıpkı Grid gibi elementlere yeni bir display stili tanımlamamızı sağlıyor (display: flex). Ancak Grid mantığındaki katı ve belirli ızgara yapısının aksine, Flexbox çok daha esnek bir alan yönetimi sunuyor. Flex yapısındaki bir element ekranda varsayılan olarak yalnızca içerdiği ögenin boyutu kadar alan kaplıyor.

Bu derste Flexbox yapısına dair edindiğim temel bilgileri şu şekilde derledim:
• Rigid vs Flexible Layout: Grid sisteminin daha esnetilemez, katı bir düzen yapısı (Rigid Layout) sunmasına karşın, Flexbox'ın ortama ve içeriğe göre kolayca şekil alan çok daha esnek bir yapı (Flexible Layout) sunduğunu öğrendim.
• flex 1 Property: Flexbox içerisinde kullandığımız flex: 1 komutunun, Grid sistemindeki 1fr kullanımı ile aynı mantıkta çalıştığını ve kullanılabilir boş alanı eşit şekilde dağıtmaya yaradığını gördüm.
• Default Display Behavior: HTML'de <div> elementlerinin varsayılan olarak display: block yapısında olduğunu, display: flex uyguladığımızda ise bu davranışın tamamen değişerek içeriklerin esnek bir şekilde yan yana dizildiğini tekrar pekiştirmiş oldum.

Öğrendiğim Flexbox özelliklerini deneyerek oluşturduğum pratik çalışmasında (Home 14, Notifications 3, Messages 5) rozetli menü yapısını uyguladım.

------------------------------------------------------------
Perşembe – 23 Temmuz 2026
------------------------------------------------------------
Bugün derse devam ederek esnek düzen yapılarının daha gelişmiş bir kullanımı olan Nested Flexbox konusuna geçiş yaptım. Daha önce öğrendiğimiz temel Flexbox yapısını, daha karmaşık ve katmanlı arayüzler oluşturabilmek adına birbiri içine nasıl yerleştireceğimizi inceledik.

Ders esnasında özellikle YouTube (final) projemizin üst menü (Header) bölümünü kodlamaya başladık. Bir web sitesinin üst menüsü gibi içerisinde arama çubuğu, butonlar, logo ve profil simgeleri gibi birden fazla farklı ögeyi yan yana ve dengeli bir şekilde barındıran yapılar için Nested Flexbox kullanmanın en ideal yaklaşım olduğunu gördüm.

Bu çalışma sürecinde edindiğim temel noktaları şu şekilde derledim:
• Header Bölümünün Yapılanması: YouTube projesinin üst kısmını kontrolü kolaylaştırmak adına sol, orta ve sağ olmak üzere üç ana bölüme ayırdık.
• Nested Flex Layout: Ana Flexbox konteynerinin (display: flex) içindeki bu üç bölümü de kendi içinde birer Flexbox konteynerine dönüştürerek simgeleri, arama kutusunu ve butonları dikeyde kusursuz bir şekilde hizaladık.
• İkon Yönetimi: Projede kullanılacak ikonları klasörümüze dahil edip bu esnek yapı içerisinde doğru boyutlandırarak arayüzle bütünleştirdik.

İç içe esnek yapılar kurarak YouTube projesinin üst menü tasarımını geliştirdiğim ve ders sonu pratiklerimi tamamladığım çalışmaları gerçekleştirdim.

------------------------------------------------------------
Cuma – 24 Temmuz 2026
------------------------------------------------------------
Bugün kursa devam ederek web tasarımında elementlerin ekrandaki konumlarını milimetrik olarak yönetmemizi sağlayan CSS Position konusuna geçiş yaptım. Bu derste sayfa düzenine adeta yeni bir boyut kazandıran konumlandırma kurallarını ve geliştirmemi kolaylaştıran yeni araçları inceledim.

CSS Position komutlarının sayfadaki elementleri serbestçe yerleştirmemize imkan tanıdığını gördüm. Özellikle position: fixed veya position: sticky gibi komutlar sayesinde, kullanıcı sayfayı aşağıya doğru kaydırsa bile belirli <div> elementlerini ekranda veya sayfa üzerinde sabit tutabileceğimizi öğrendim.

Ders esnasında elementlerin boyutlandırma ve konumlandırma davranışlarına dair edindiğim kritik bilgileri şu şekilde derledim:
• Esnek Konumlandırma: Tarayıcı ekranının boyutları değiştiğinde <div> elementinin de bu değişime uyum sağlayarak şekil almasını istiyorsak top, bottom, left ve right değerlerini kullanabileceğimizi gördüm.
• Sabit Boyutlandırma: Elementin ekran boyutundan etkilenmeyip kendi formunu ve ölçüsünü korumasını istediğimiz durumlarda ise width ve height komutlarını tanımlamamız gerektiğini öğrendim.
• VS Code AI ve Syntax: Kodlama yaparken farkında olmadan oldukça fazla Syntax hatası yaptığımı fark ettim. VS Code içerisindeki AI bölümünü hatalarımı açıklatmak için kullandığımda, bu sözdizimi hatalarını hızlıca tespit edip düzeltme olanağı buldum.
• GitHub Pages: Ders dışında pratik süreçlerimi geliştirecek harika bir özellik öğrendim. GitHub'ın GitHub Pages adındaki özelliği sayesinde, hazırlayıp yüklediğimiz projeleri doğrudan canlı bir web sitesi bağlantısı olarak görüntüleyebileceğimizi ve paylaşabileceğimizi keşfettim.

Öğrendiğim CSS Position özelliklerini uygulayarak hazırladığım pratik çalışmasını (position.html header & sidebar) tamamladım.

------------------------------------------------------------
Cumartesi – 25 Temmuz 2026
------------------------------------------------------------
Cumartesi gününü araştırma ve çalışma ile dolduramadım çünkü daha önce bahsetmiş olduğum sınavım bu pazar günü olduğu için cumartesi günü mental ve fiziksel hazırlık amacıyla herhangi bir şey yapmadım. Önümüzdeki haftaki planım ise HTML ve CSS kursunda kalmış olan 2 dersi de bitirip üzerine güçlü bir pratik yaparak başlamak.`
};

const report4 = {
  "id": "hafta-4",
  "haftaNo": "4. Haftalık Rapor",
  "tarihAraligi": "27 Temmuz – 01 Ağustos 2026",
  "yil": 2026,
  "ay": "Temmuz / Ağustos",
  "aylar": ["Temmuz", "Ağustos"],
  "baslik": "İleri CSS Özellikleri, YouTube Klonunun Tamamlanması, İlk Bağımsız Web Sitesi & Tailwind CSS Giriş",
  "aciklama": "Bu rapor, verilen konular üzerinde yapılan araştırmalar, alınan notlar, edinilen bilgiler ve üzerinde çalışılan pratik uygulamaların haftalık bir derlemesidir.",
  "pdf_url": "haftalik_rapor_4_temmuz_agustos_2026.pdf",
  "arastirmaci": {
    "isim": "Araştırmacı",
    "rol": "Teknoloji & Pazarlama Stajyeri",
    "departman": "Ürün & İnovasyon"
  },
  "istatistikler": {
    "toplamSaat": 45,
    "gunlukSaat": 7.5,
    "toplamGun": 6,
    "konuSayisi": 18,
    "dosyaSayisi": 6,
    "pratikUygulama": "YouTube Klonu (Canlı), First Project & Tailwind Taslağı"
  },
  "haftalikDegerlendirme": {
    "ozet": "Bu hafta boyunca HTML ve CSS müfredatının ana projesi olan YouTube ana sayfası klonu tüm responsive özellikleri, sabit yan menüsü (Sidebar) ve hover tooltip detaylarıyla başarıyla tamamlanarak GitHub Pages üzerinden canlıya alındı. Ardından CSS'in ileri seviye konuları (Position Absolute, z-index katman derinliği, Selector Target Mechanics, white-space: nowrap, Media Queries ile responsive tasarım, Shorthand Properties, CSS Inheritance/Specificity ve Semantic Elements) pekiştirildi. Hiçbir öğretici (tutorial) takip etmeden Pinterest'ten esinlenilen ilk bağımsız web projesi ('Where Calm Meets Creativity') geliştirilip canlıya aktarıldı. Haftanın son günlerinde modern web geliştirmenin öncülerinden Tailwind CSS kütüphanesinin Utility-First yaklaşımı, Mobile First mimarisi, Built-in Dark Mode özellikleri CDN üzerinden pratik edilerek öğrenildi.",
    "kazanimlar": [
      "Position Absolute ve z-index kurallarıyla bağımsız katmanlı element konumlandırması uygulandı.",
      "YouTube ana sayfa klon projesi responsive sidebar, arama çubuğu ve hover tooltip'leri ile tamamlanıp canlıya alındı.",
      "Media Queries (@media), Shorthand Properties ve Anlamsal HTML5 (<header>, <nav>, <main>, <section>) etiketleri öğrenildi.",
      "Öğretici olmaksızın sıfırdan bağımsız ilk web sayfası (firstproject) kodlandı ve GitHub Pages ile yayınlandı.",
      "Tailwind CSS'in Utility-First felsefesi, Mobile First yaklaşımı ve dahili Dark Mode mekanizması kavrandı."
    ],
    "gelecekHaftaHedefleri": [
      "Üretken yapay zeka araçlarının ileri düzey özelliklerini ve Claude ekosistemini (Haiku, Sonnet, Opus, Extended Thinking) incelemek.",
      "Google AI Studio platformu ve parametreleri (Temperature, Media Resolution, System Instructions) ile pratik uygulamalar geliştirmek.",
      "Claude Routines otomasyon sistemini ve n8n ile AI Agent entegrasyonlarını araştırmak.",
      "Şirket uygulaması olan Handyman Instant test süreçlerini yürütmek."
    ]
  },
  "ipuclari_ve_oneriler": {
    "gelistirme_onerileri": [
      {
        "baslik": "Position Absolute ve Relative Ebeveyn İlişkisi",
        "kategori": "CSS Konumlandırma",
        "onem": "Kritik",
        "aciklama": "Position Absolute uygulanan bir elementin tüm sayfa yerine sadece kendi ebeveyn kutusu içinde konumlanması için üst kapsayıcıya position: relative verilmelidir."
      },
      {
        "baslik": "Metin Taşmalarını Engelleme: white-space: nowrap",
        "kategori": "Tipografi & UI",
        "onem": "Yüksek",
        "aciklama": "Butonlar, etiketler veya badge'ler dar alanlara girdiğinde metnin bölünmemesi için white-space: nowrap kullanılmalı; gerekirse overflow: hidden ve text-overflow: ellipsis ile taşma yönetilmelidir."
      },
      {
        "baslik": "Semantic Elements ile SEO ve Erişilebilirlik",
        "kategori": "HTML Standartları",
        "onem": "Yüksek",
        "aciklama": "Salt <div> kullanımı yerine <header>, <nav>, <main>, <section> ve <footer> etiketleri kullanılarak ekran okuyucuların ve arama motoru botlarının sayfa iskeletini anlaması sağlanmalıdır."
      },
      {
        "baslik": "Tailwind CSS Öğreniminde Dokümantasyon Odaklı İlerleme",
        "kategori": "Frontend Öğrenme Metodu",
        "onem": "Orta",
        "aciklama": "Tailwind CSS'te saatlerce pasif video izlemek yerine; arayüz kodlarken ihtiyaç duyulan stil sınıflarını doğrudan dokümantasyondan aratarak projeye uygulamak öğrenme hızını katlar."
      },
      {
        "baslik": "Bağımsız Projelerle Portfolyo Oluşturma",
        "kategori": "Kariyer & Pratik",
        "onem": "Pratik",
        "aciklama": "Kurs videolarını bitirdikten hemen sonra tutorial izlemeden Pinterest veya Dribbble'dan tasarım seçip klonlamak ve GitHub Pages üzerinden canlıya almak özgüveni ve problem çözme becerisini artırır."
      }
    ],
    "ileriye_donuk_arastirma": [
      {
        "baslik": "Tailwind CSS'i Node.js ve Vite Ortamında Derleme",
        "odak": "Build & Geliştirici Araçları",
        "hedefSure": "5. Hafta",
        "aciklama": "CDN yerine Node.js ve PostCSS/Vite yapılandırması kurularak üretim için optimize edilmiş, sadece kullanılan sınıfları barındıran hafif CSS bundle üretimi incelenmelidir."
      },
      {
        "baslik": "Büyük Dil Modelleri ve Claude Ekosistemi (Haiku, Sonnet, Opus)",
        "odak": "Yapay Zeka Mimarisi",
        "hedefSure": "5. Hafta",
        "aciklama": "Farklı LLM modellerinin maliyet, hız ve akıl yürütme yetenekleri karşılaştırılmalı; Extended Thinking ve Memory özellikleri araştırılmalıdır."
      },
      {
        "baslik": "Google AI Studio ile Prompt Mühendisliği ve API Dağıtımı",
        "odak": "Yapay Zeka Entegrasyonları",
        "hedefSure": "5. Hafta",
        "aciklama": "Temperature, System Instructions ve Multimodal girdi parametreleri denenerek doğrudan webden erişilebilir yapay zeka prototipleri geliştirilmelidir."
      },
      {
        "baslik": "Linux İşletim Sistemi ve Geliştirici Ortamları",
        "odak": "Sistem & Altyapı",
        "hedefSure": "5. Hafta",
        "aciklama": "Windows vs Linux karşılaştırması, dağıtım seçimi (Linux Mint / Zorin OS), dosya sistemi hiyerarşisi ve terminal komutları incelenmelidir."
      }
    ]
  },
  "gunler": [
    {
      "id": "pazartesi-h4",
      "gun": "Pazartesi",
      "tarih": "27 Temmuz 2026",
      "yil": 2026,
      "ay": 6,
      "gunNo": 27,
      "etiket": "Position Absolute & z-index Katman Düzeni",
      "arastirilanKonular": [
        {
          "baslik": "Position Absolute vs Position Fixed",
          "icerik": "Daha önce öğrenilen position: fixed elementi doğrudan tarayıcı ekranına sabitlerken, Position Absolute kuralı elementi doğrudan sayfanın kendisine bağlar. Böylece position: absolute ile konumlandırılan bir <div> elementi sayfa kaydırıldığında ekranda sabit kalmayıp sayfa üzerindeki kendi yerinde durmaya devam eder."
        },
        {
          "baslik": "z-index Özelliği ve Katman Önceliği",
          "icerik": "Sayfa üzerinde üst üste binen elementlerin hangisinin daha önde veya arka planda görüntüleneceğini belirleyen CSS özelliğidir. Daha yüksek bir z-index değerine sahip elementler daha düşük değere sahip elementlerin önünde belirir. Varsayılan değer 0'dır."
        }
      ],
      "pratikUygulama": {
        "baslik": "YouTube Sayfası Üzerinde Absolute & z-index Uygulaması",
        "aciklama": "Geliştirilmekte olan YouTube projesinde video kartı badge'leri ve katmanlı arayüz ögeleri position: absolute ve z-index ile konumlandırıldı.",
        "etiketler": ["Position Absolute", "z-index", "Layer Priority", "YouTube Projesi"]
      },
      "oneCikanBilgi": "position: absolute elementi sayfaya bağlar, z-index ise elementlerin üst üste binme (katman derinliği) sırasını yönetir."
    },
    {
      "id": "sali-h4",
      "gun": "Salı",
      "tarih": "28 Temmuz 2026",
      "yil": 2026,
      "ay": 6,
      "gunNo": 28,
      "etiket": "YouTube Klonu Bitişi, Tooltips & CSS Seçicileri",
      "arastirilanKonular": [
        {
          "baslik": "Selector Target Mechanics (Seçici Hedefleme)",
          "icerik": "Bir class selector'ının yanına virgül koyarak başka bir selector ismi daha eklendiğinde yazılan stiller her iki selector içindeki elemente uygulanır. Ancak virgül yerine boşluk bırakıldığında (.class-name img) doğrudan o class içindeki tüm alt görsel elementleri hedeflenir."
        },
        {
          "baslik": "Text Wrapping Control (white-space: nowrap)",
          "icerik": "white-space: nowrap; komutu kullanılarak metinlerin bulundukları alan daralsa bile otomatik olarak alt satıra kaymasını (wrapping) engellemek ve tek satırda kalmasını sağlamak öğrenildi."
        },
        {
          "baslik": "Hover Tooltips (İpucu Kutucukları)",
          "icerik": "Butonların ve etkileşimli ögelerin üzerine imleç ile gelindiğinde (hover) ilgili ögenin işlevini açıklayan küçük bilgilendirme metinlerinin (tooltip) görünmesini sağlayan tasarımsal detaylar uygulandı."
        },
        {
          "baslik": "Sidebar Integration & Kurs Projesinin Tamamlanması",
          "icerik": "Sayfanın sol alanına sabitlenen Sidebar bölümü oluşturularak ikonlar ve başlıklar hizalandı; HTML ve CSS kursunun ana projesi olan YouTube klon sayfası tam donanımlı ve responsive detaylarıyla bitirildi."
        }
      ],
      "pratikUygulama": {
        "baslik": "YouTube Klon Sayfası Canlıya Alındı (youtubeproject)",
        "aciklama": "Tam donanımlı ve responsive YouTube ana sayfası kodlanarak GitHub Pages üzerinden canlıya alındı: https://mnalbant26.github.io/youtubeproject/",
        "etiketler": ["YouTube Klonu", "white-space: nowrap", "Hover Tooltips", "Sidebar", "GitHub Pages"],
        "dosyalar": ["https://mnalbant26.github.io/youtubeproject/"]
      },
      "oneCikanBilgi": "white-space: nowrap metinlerin alt satıra kaymasını engeller; YouTube klon projesi responsive sidebar ve hover tooltip detaylarıyla başarıyla bitirildi."
    },
    {
      "id": "carsamba-h4",
      "gun": "Çarşamba",
      "tarih": "29 Temmuz 2026",
      "yil": 2026,
      "ay": 6,
      "gunNo": 29,
      "etiket": "Extra CSS Features: Media Queries & Semantic HTML",
      "arastirilanKonular": [
        {
          "baslik": "Responsive Design & Media Queries (@media)",
          "icerik": "CSS içerisinde @media (max-width: ...) komutu kullanılarak ekran boyutu değiştiğinde sayfanın kaç sütun (Column) şeklinde görüntüleneceği belirlenir. Bu sayede mobil cihazlar ve geniş ekranlar için dinamik düzenler oluşturulur."
        },
        {
          "baslik": "Shorthand Properties (Kısayol Özellikleri)",
          "icerik": "padding-top, padding-right, padding-bottom ve padding-left şeklinde dört ayrı komut yerine tek bir 'padding' komutu yazılarak yanına değerlerin eklenmesiyle kod kalabalığı azaltılır."
        },
        {
          "baslik": "CSS Inheritance & Specificity (Kalıtım ve Öncelik)",
          "icerik": "Kapsayıcı elemana verilen stillerin içerideki alt elementleri etkilemesi (Inheritance, özellikle metin stillerinde) ve özel tanımlanmış kuralların genel kurallara göre öncelikli olması (Specificity) pekiştirildi."
        },
        {
          "baslik": "Semantic Elements (<header>, <nav>, <main>, <section>)",
          "icerik": "HTML'de <div> ile aynı işlevi gören ancak ekran okuyucuların (Screen Readers) ve arama motorlarının sayfa yapısını daha doğru anlamasını sağlayan semantik elementler kavrandı."
        },
        {
          "baslik": "Code Comments (Yorum Satırları)",
          "icerik": "Geliştirme sürecinde kendimize notlar bırakmak için tarayıcı tarafından çalıştırılmayan HTML (<!-- Comment -->) ve CSS (/* Comment */) yorum satırları öğrenildi."
        }
      ],
      "pratikUygulama": {
        "baslik": "Responsive Kolon Düzenleri & Semantik İskelet Pratiği",
        "aciklama": "Ekran genişliğine göre sütun sayısını değiştiren medya sorguları ve anlamsal HTML5 etiketleri uygulandı.",
        "etiketler": ["Media Queries", "Shorthand", "Semantic HTML", "CSS Specificity", "Responsive"]
      },
      "oneCikanBilgi": "Media queries (@media) cihaz boyutuna duyarlı tasarımlar sağlar; Semantic elementler (<header>, <nav>, <main>, <section>) SEO ve erişilebilirliği maksimize eder."
    },
    {
      "id": "persembe-h4",
      "gun": "Perşembe",
      "tarih": "30 Temmuz 2026",
      "yil": 2026,
      "ay": 6,
      "gunNo": 30,
      "etiket": "İlk Bağımsız Proje: First Project & GitHub Pages",
      "arastirilanKonular": [
        {
          "baslik": "Öğreticisiz Bağımsız İlk Proje Yaklaşımı",
          "icerik": "Kurs videolarını tamamladıktan sonra herhangi bir tutorial takip etmeden bağımsız ilk proje geliştirildi. Pinterest üzerinden sade bir web arayüzü seçilerek benzer görsellerle uyarlandı."
        },
        {
          "baslik": "Proje İskeletinin Kurulması & Anlamsal Etiketler",
          "icerik": "VS Code içerisinde boş bir HTML dosyası açılarak sayfanın temel yapı taşları, anlamsal etiketleri, metinleri ve <div> gruplamaları oluşturuldu."
        },
        {
          "baslik": "CSS Stillendirme & background-image Kullanımı",
          "icerik": "Harici CSS dosyası oluşturularak sayfa düzeni işlendi. Kurs müfredatının dışına çıkılarak sayfanın arka planına özel görsel yerleştirme (background-image) uygulandı."
        },
        {
          "baslik": "Hata Yönetimi ve VS Code AI Kullanımı",
          "icerik": "Kodlama esnasında karşılaşılan stil hatalarında internet araştırmaları ve VS Code AI desteği kullanılarak hataların nedenleri hızlıca tespit edilip giderildi."
        },
        {
          "baslik": "GitHub Pages ile Canlı Web Sitesi Yayını",
          "icerik": "Proje GitHub üzerinde yeni bir repository'ye yüklenerek GitHub Pages ile canlı bir web sitesi bağlantısına dönüştürüldü: mnalbant26.github.io/firstproject"
        }
      ],
      "pratikUygulama": {
        "baslik": "'Where Calm Meets Creativity' Web Sayfası Geliştirildi",
        "aciklama": "Seçilen tasarım klonlanarak canlıya alındı: https://mnalbant26.github.io/firstproject/",
        "etiketler": ["Bağımsız Proje", "firstproject", "background-image", "GitHub Pages", "VS Code AI"],
        "dosyalar": ["https://mnalbant26.github.io/firstproject/"]
      },
      "oneCikanBilgi": "İlk bağımsız web projesi öğretici olmadan kodlandı, background-image ve AI destekli hata ayıklama teknikleriyle zenginleştirilip GitHub Pages'ta yayınlandı."
    },
    {
      "id": "cuma-h4",
      "gun": "Cuma",
      "tarih": "31 Temmuz 2026",
      "yil": 2026,
      "ay": 6,
      "gunNo": 31,
      "etiket": "Tailwind CSS Mantığı & Utility-First Yaklaşımı",
      "arastirilanKonular": [
        {
          "baslik": "Tailwind CSS'in Çalışma Mantığı",
          "icerik": "HTML tarafında her element için ayrı class isimleri belirleyip harici CSS dosyasında bu sınıflara tek tek property tanımlama zahmetini ortadan kaldıran, doğrudan HTML class niteliğine yazılan hazır stil sınıflarıyla hızlı biçimlendirme sağlayan modern bir teknolojidir."
        },
        {
          "baslik": "Utility-First Approach (İşlevsel Sınıf Yaklaşımı)",
          "icerik": "CSS özelliklerinin daha sadeleşmiş kısa kodlar halinde (Utility) sunulmasıdır. Örneğin margin-top yerine mt- benzeri pratik yapılar kullanılarak doğrudan HTML üzerinde stillendirme yapılır."
        },
        {
          "baslik": "Mobile First Approach (Mobil Öncelikli Tasarım)",
          "icerik": "Tailwind CSS varsayılan olarak Mobile First yaklaşımıyla çalışır. Yazılan tüm stiller öncelikle mobil ekranlara göre şekillenir; tablet ve masaüstü için sm:, md:, lg: gibi breakpoint ön ekleri kullanılır."
        },
        {
          "baslik": "Built-in Dark Mode (Dahili Karanlık Mod)",
          "icerik": "Kütüphane içerisinde gelen dark: komutu sayesinde kullanıcının tarayıcı veya sistem tercihlerine göre otomatik karanlık mod entegrasyonu sağlanır."
        },
        {
          "baslik": "Tailwind Directives & Customization",
          "icerik": "Standart stillerin yanı sıra directives yapılarını kullanarak kendi özel kurallarımızı oluşturabileceğimizi ve .custom-name şeklinde harici CSS kısmındaki kuralların tek seferde uygulanmasını sağladığını öğrendim."
        }
      ],
      "pratikUygulama": {
        "baslik": "Tailwind CSS Dokümantasyon İncelemesi & Sözdizimi Analizi",
        "aciklama": "Tailwind CSS'in utility sınıfları, renk paletleri ve responsive önekleri kapsamlı rehberler eşliğinde incelendi.",
        "etiketler": ["Tailwind CSS", "Utility-First", "Mobile First", "Dark Mode", "Directives"]
      },
      "oneCikanBilgi": "Tailwind CSS Utility-First yaklaşımı ile harici CSS yazma yükünü kaldırır, mobile-first mantığı ve dahili dark mode (dark:) desteği ile geliştirme hızını katlar."
    },
    {
      "id": "cumartesi-h4",
      "gun": "Cumartesi",
      "tarih": "01 Ağustos 2026",
      "yil": 2026,
      "ay": 7,
      "gunNo": 1,
      "etiket": "Tailwind CDN Pratiği & Öğrenme Stratejisi",
      "arastirilanKonular": [
        {
          "baslik": "Tailwind CSS CDN Kurulumu & VS Code Eklentisi",
          "icerik": "VS Code içerisine Tailwind CSS eklentisi kuruldu ve HTML dosyasına CDN bağlantı satırı eklendi. CDN yapısının küçük çaplı pratikler için yeterli olduğu, profesyonel projelerde tam performans için Node.js kurulumu gerektiği öğrenildi."
        },
        {
          "baslik": "Syntax & Öğrenme Süreci Adaptasyonu",
          "icerik": "Standart CSS komutlarına hakim olunmasına rağmen Tailwind'deki kısa kod yapılarının ve isimlerin farklı olması sebebiyle dokümantasyon desteğiyle pratik yapmanın önemi kavrandı."
        },
        {
          "baslik": "Öğrenme Stratejisi & Inline Styling Avantajları",
          "icerik": "Saatlerce süren uzun kurs videoları izlemek yerine projeler üzerinde ihtiyaç duydukça dokümantasyona bakarak ilerlemenin çok daha verimli olduğu; tüm stillerin HTML class'ında yer almasının harici CSS yönetme yükünü kaldırdığı bizzat deneyimlendi."
        }
      ],
      "pratikUygulama": {
        "baslik": "Tailwind CSS Practice Arayüz Taslağı",
        "aciklama": "VS Code Tailwind eklentisi ve CDN bağlantısı kullanılarak degrade arka planlı 'Tailwind CSS Practice' test sayfası kodlandı.",
        "etiketler": ["Tailwind Practice", "CDN", "VS Code Extension", "Öğrenme Stratejisi"]
      },
      "oneCikanBilgi": "Tailwind CSS'i öğrenmenin en etkili yolu video izlemek yerine pratik yaparak dokümantasyonu aktif kullanmaktır; CDN hızlı prototipleme için idealdir."
    }
  ],
  "raw_content": `Haftalık Rapor 4 ( 27 Temmuz - 1 Ağustos)

Bu rapor, verilen konular üzerinde yapılan araştırmalar, alınan notlar, edinilen bilgiler ve üzerinde çalışılan pratik uygulamaların haftalık bir derlemesidir.

------------------------------------------------------------
Pazartesi – 27 Temmuz 2026
------------------------------------------------------------
Bu haftaya, geçen hafta giriş yaptığımız konumlandırma kurallarının devamı niteliğindeki Position Absolute ve elementlerin katman düzenini yöneten z-index konuları ile başladım. Bu ders sayesinde elementleri sayfa üzerinde tamamen bağımsız bir şekilde konumlandırmayı ve çakışan ögelerin görünürlük sırasını kontrol etmeyi öğrendim.

Daha önce öğrendiğim position: fixed kuralı elementi doğrudan tarayıcı ekranına sabitleyerek sayfa kaydırılsa bile ekranda sabit tutarken, Position Absolute kuralının elementi tarayıcıya değil doğrudan sayfanın kendisine bağladığını gördüm. Böylece position: absolute ile konumlandırılan bir <div> elementi sayfa kaydırıldığında ekranda sabit kalmayıp sayfa üzerindeki kendi yerinde durmaya devam ediyor.

Ders esnasında elementlerin katman derinliğini belirleyen z-index özelliğine dair edindiğim temel bilgileri şu şekilde derledim:
• z-index Property: Sayfa üzerinde üst üste binen elementlerin hangisinin daha önde veya arka planda görüntüleneceğini belirleyen CSS özelliğidir.
• Layer Priority: Daha yüksek bir z-index değerine sahip olan elementlerin, mevcuttaki daha düşük değere sahip elementlerin önünde belireceğini öğrendim.
• Default Value: HTML üzerindeki tüm elementlerin varsayılan z-index değerinin 0 olduğunu ve katman sırasını değiştirmek istediğimizde bu değeri özelleştirmemiz gerektiğini pekiştirdim.

Öğrendiğim bu yeni konumlandırma ve katman özelliklerini doğrudan geliştirmekte olduğumuz YouTube ana sayfa projesi üzerinde uygulayarak pratik yaptım.

------------------------------------------------------------
Salı – 28 Temmuz 2026
------------------------------------------------------------
Bugün, kursun başından beri adım adım geliştirdiğimiz büyük YouTube ana sayfa projesinin son aşamalarına geçerek projeyi başarıyla tamamladım. Bu derste hem sayfanın sol tarafında yer alan yan menü (Sidebar) bölümünü kodladık hem de gelişmiş CSS seçici (Selector) teknikleri ve kullanıcı etkileşimleri üzerine odaklandık.

Projenin yan menü yapısını kurgularken ve genel arayüz ayarlamalarını yaparken CSS tarafında kod yazımını oldukça pratikleştiren ve detaylı hedefleme yapmamızı sağlayan kritik kurallar öğrendim.

Bu ders kapsamında edindiğim temel teknik bilgileri ve düzenlemeleri şu şekilde derledim:
• Selector Target Mechanics: Bir class selector'ının yanına virgül koyarak başka bir selector ismi daha eklediğimizde, yazılan stillerin her iki selector içindeki element kapsama alanına uygulandığını gördüm. Ancak virgül yerine boşluk bırakıp örneğin img yazdığımızda (.class-name img), doğrudan o class yapısının içerisindeki tüm görsel elementlerini hedefleyebildiğimizi öğrendim.
• Text Wrapping Control: white-space: nowrap; komutunu kullanarak, metinlerin bulundukları alan daralsa bile otomatik olarak alt satıra kaymasını (wrapping) engellemeyi ve tek bir satırda kalmasını sağlamayı öğrendim.
• Hover Tooltips: Butonların ve etkileşimli ögelerin üzerine imleç ile gelindiğinde (hover), ilgili ögenin ne işe yaradığını açıklayan küçük bilgilendirme metinlerinin (tooltip) görünmesini sağlayan tasarımsal detayları uyguladık.
• Sidebar Integration: Sayfanın sol alanına sabitlediğimiz Sidebar bölümünü oluşturarak ikonları ve başlıkları hizaladık, projenin genel düzenini tamamladık.

Bu ders ile birlikte HTML ve CSS kursunun ana projesi olan YouTube klon sayfasını tam donanımlı ve responsive detaylarıyla bitirmiş oldum. Projenin tamamlanmış haline ait linki ve ayrıca ekran görüntüsünü aşağıya ekliyorum:
Link: https://mnalbant26.github.io/youtubeproject/

------------------------------------------------------------
Çarşamba – 29 Temmuz 2026
------------------------------------------------------------
Bugün, kursun genel müfredatındaki projeyi tamamladıktan sonra CSS'in daha ileri seviye konularını ve kod kalitesini artıran yapılarını kapsayan Extra CSS Features bölümüne geçiş yaptım. Bu derste hem farklı ekran boyutlarına uyum sağlayan tasarımlar yapmayı hem de daha temiz, sürdürülebilir kod yazma tekniklerini öğrendim.

Ders esnasında web sitelerinin mobil ve tablet gibi farklı cihazlarda sorunsuz görünmesini sağlayan Responsive Design mantığını ve HTML/CSS'in daha anlamlı kılınmasını sağlayan yapısal özellikleri inceledik.

Bu ders kapsamında edindiğim temel teknik bilgileri ve pratik yöntemleri şu şekilde derledim:
• Responsive Design & Media Queries: CSS içerisinde @media (max-width: ...) komutunu kullanarak, ekran boyutu değiştiğinde sayfanın kaç sütun (Column) şeklinde görüntüleneceğini belirleyebildiğimizi öğrendim. Bu sayede mobil cihazlar ve geniş ekranlar için dinamik düzenler oluşturabiliyoruz.
• Shorthand Properties: padding-top, padding-right, padding-bottom ve padding-left şeklinde alt alta dört ayrı komut yazmak yerine, sadece padding komutunu yazıp yanına değerleri sırasıyla ekleyerek kod kalabalığını azaltıp çok daha az yer kaplayan pratik komutlar oluşturabileceğimi gördüm.
• CSS Inheritance: Arayüzdeki bir <div> veya kapsayıcı elemana verilen stillerin, onun içerisindeki alt elementleri de etkilemesi durumunu ifade eden Inheritance kavramını öğrendim. Bu durumun özellikle metin stillendirme özelliklerinde (Text Properties) sıklıkla geçerli olduğunu fark ettim.
• CSS Specificity: Bir element için özel olarak tanımlanmış bir stil kuralının, genel selector'lar üzerinden tanımlanan kurala göre öncelikli olduğunu pekiştirdim. CSS'in bu öncelik sıralamasını dikkate alarak stilleri uyguladığını gördüm.
• Semantic Elements: HTML'de header, nav, main ve section gibi Semantic Elements adı verilen yapılar bulunduğunu öğrendim. Bu elementlerin çalışma mantığı olarak <div> ile tamamen aynı işlevi gördüğünü, ancak ekran okuyucuların (Screen Readers) ve arama motorlarının sayfa yapısını daha doğru anlamasını sağladığını kavramış oldum. Bu doğrultuda <div> yapılarımızı bu anlamsal elementlerin içerisine yerleştirmenin en doğru yaklaşım olduğunu gördüm.
• Code Comments: Kod yazım sürecinde kendimize notlar bırakmak adına tarayıcı tarafından çalıştırılmayan HTML (<!-- Comment -->) ve CSS (/* Comment */) yorum satırlarını kullanmayı öğrendim.

------------------------------------------------------------
Perşembe – 30 Temmuz 2026
------------------------------------------------------------
Bugün, HTML ve CSS kurs videolarını tamamen tamamladıktan sonra öğrendiğim tüm bilgileri pekiştirmek ve kendi sınırlarımı görmek adına herhangi bir öğretici (tutorial) takip etmeden bağımsız ilk projemi yapmaya karar verdim.

Sıfırdan bir fikir üretmek yerine, sektörde de sıklıkla uygulandığı gibi halihazırda var olan basit bir tasarımı klonlayarak başlamanın en doğru yaklaşım olacağını düşündüm. Bunun için Pinterest üzerinden web tasarımı örneklerini inceledim ve içime sinen sade bir arayüz seçtim. Tasarımı birebir klonlayabilmek adına orijinal görsellere ulaşmam gerekiyordu ancak kaynakları bulamadığım için benzer görseller kullanarak ana hatlarıyla seçtiğim tasarıma sadık kalan ama ufak farklılıklar da barındıran bir proje kurguladım.

Geliştirme sürecinde izlediğim adımlar ve edindiğim deneyimler şu şekilde oldu:
• Proje İskeletinin Kurulması: İlk olarak VS Code içerisinde boş bir HTML dosyası açarak sayfanın temel yapı taşlarını ve anlamsal etiketlerini oluşturdum. Ardından metinleri, görselleri ve butonları doğru gruplayabilmek adına <div> yapılarını kurguladım.
• CSS ile Stillendirme & Arka Plan: Harici bir CSS dosyası oluşturarak sayfa düzenini, hizalamaları ve stil detaylarını adım adım işledim. Bu süreçte kurs müfredatının dışına çıkarak kendi araştırmalarımla sayfanın arka planını özel bir görselle değiştirmeyi (background image) öğrendim ve tasarıma uyguladım.
• Hata Yönetimi ve AI Kullanımı: Kodlama esnasında doğal olarak bazı hatalarla karşılaştım ve yazdığım stillerin istediğim gibi çalışmadığı anlar oldu. Bu noktada hem internet üzerinden araştırmalar yaptım hem de VS Code içerisindeki AI desteğinden faydalandım. AI'a hatalarımı açıklatarak nerede eksik yaptığımı tespit ettim ve bilmediğim kısımları sorarak öğrenme sürecimi hızlandırdım.
• GitHub Pages ile Canlıya Alma: Günün sonunda öğrendiklerimin büyük bir kısmını pratiğe döktüğüm bağımsız ilk projem ortaya çıktı. Projeyi sadece yerelde bırakmayıp GitHub üzerinde yeni bir repository oluşturarak kodlarımı yükledim. Ardından GitHub Pages özelliğini aktifleştirerek projem için canlı bir web sitesi bağlantısı oluşturdum.

Kendi başıma geliştirdiğim ve canlıya aldığım ilk projemin linki: 
mnalbant26.github.io/firstproject

------------------------------------------------------------
Cuma – 31 Temmuz 2026
------------------------------------------------------------
Bugün, HTML ve temel CSS konularını başarıyla tamamlayıp ilk bağımsız projemi geliştirdikten sonra, modern web geliştirme süreçlerinde sıklıkla tercih edilen CSS kütüphanelerinden biri olan Tailwind CSS teknolojisine göz atmaya karar verdim. Konuyu kavramak adına kapsamlı bir anlatım sunan rehber içeriklerini takip ederek Tailwind CSS'in çalışma mantığını ve sunduğu avantajları inceledim.

Öğrendiğime göre Tailwind CSS; HTML tarafında her element için ayrı class isimleri belirleyip harici CSS dosyasında bu sınıflara tek tek property tanımlama zahmetini ortadan kaldıran bir yapı sunuyor. Bunun yerine, doğrudan HTML içerisindeki class niteliğine yazılan hazır stil sınıflarıyla hızlıca biçimlendirme yapmamızı sağlıyor.

Bu çalışma sürecinde Tailwind CSS yapısına dair edindiğim temel bilgileri ve özellikleri şu şekilde derledim:
• Utility-First Approach: CSS özelliklerinin daha sadeleşmiş kısa kodlar halinde (Utility) karşımıza çıktığını gördüm. Örneğin margin-top gibi standart CSS komutları yerine mt- benzeri pratik yapıları kullanarak doğrudan HTML üzerinde stillendirme yapılabildiğini öğrendim.
• Mobile First Approach: Tailwind CSS'in varsayılan olarak Mobile First yaklaşımıyla çalıştığını fark ettim. Yazdığımız tüm stiller öncelikle mobil ekranlara göre şekilleniyor; tablet veya masaüstü gibi daha geniş ekranlar için özelleştirmeler yapmak gerektiğinde ise breakpoint ve media query mantığındaki özel ön ekleri kullanmamız gerekiyor.
• Built-in Dark Mode: Kütüphane içerisinde gelen dark: komutu sayesinde karanlık mod entegrasyonunun oldukça kolaylaştığını gördüm. Bu yapı, kullanıcının tarayıcı veya sistem tercihlerine göre sayfanın otomatik olarak dark mode ya da light mode görünümüne geçmesini sağlıyor.
• Tailwind Directives & Customization: Standart stillerin yanı sıra directives yapılarını kullanarak kendi custom kurallarımızı oluşturabileceğimizi öğrendim. Hazırladığımız özel stil kuralı kümesini, istediğimiz elemente .custom-name şeklinde tanımlayarak harici CSS kısmındaki tüm kuralların tek seferde uygulanmasını sağlayabiliyoruz.

Özetlemek gerekirse Tailwind CSS, kod yazım hızını artıran ve geliştiricilere tasarım süreçlerinde son derece geniş bir özelleştirme esnekliği sunan modern bir teknoloji.

------------------------------------------------------------
Cumartesi – 1 Ağustos 2026
------------------------------------------------------------
Haftayı kapatırken Tailwind CSS tarafında öğrendiğim teorik bilgileri pekiştirmek ve pratik bir deneyim kazanmak amacıyla küçük bir çalışma yapmaya karar verdim.

Geliştirme ortamımı hazırlayarak VS Code içerisine Tailwind CSS eklentisini kurdum ve yeni bir HTML dosyası oluşturarak içerisine CDN bağlantı satırını ekledim. Bu süreçte CDN yapısının küçük çaplı ve basit arayüz pratikleri için son derece yeterli olduğunu, ancak çok sayfalı profesyonel projelerde tam performansla kullanabilmek için Node.js kurulumu yapılması gerektiğini öğrendim.

Pratik süresince edindiğim deneyimleri ve gözlemlerimi şu şekilde derledim:
• Syntax & Learning Curve: Standart CSS komutlarına hâkim olmama rağmen Tailwind CSS tarafındaki kısa kod yapılarının ve isimlerin tamamen farklı olması sebebiyle adaptasyon sürecinin biraz zaman alacağını fark ettim.
• Workflow Strategy: Nerede nasıl bir stil kullanmam gerektiğini kavramış olsam da henüz komut hafızam tam oturmadığı için dokümantasyondan araştırarak kod yazmaya devam ediyorum. Bu noktada Tailwind için saatlerce süren uzun kurs videoları izlemek yerine, projeler üzerinde ihtiyaç duydukça dokümantasyondan bakarak ilerlemenin çok daha mantıklı bir öğrenme stratejisi olduğunu düşündüm.
• Inline Styling Advantages: Tüm stillerin doğrudan HTML elementlerinin class niteliğinde yer almasının, ilgili ögenin stilini bulmayı oldukça kolaylaştırdığını ve harici bir CSS dosyası yönetme yükünü ortadan kaldırdığını bizzat deneyimledim.

Oluşturduğum HTML dosyası üzerinde temel <div> yapılarını Tailwind sınıflarıyla stillendirerek henüz yolun başında olan fakat pratik kazandıran ilk taslağımı oluşturdum.`
};

const report5 = {
  "id": "hafta-5",
  "haftaNo": "5. Haftalık Rapor",
  "tarihAraligi": "10 Ağustos – 15 Ağustos 2026",
  "yil": 2026,
  "ay": "Ağustos",
  "aylar": ["Ağustos"],
  "baslik": "İleri Düzey Üretken Yapay Zeka, Claude Ekosistemi, Google AI Studio, n8n AI Agent & SaaS Mimarisi",
  "aciklama": "Bu rapor, verilen konular üzerinde yapılan araştırmalar, alınan notlar, edinilen bilgiler ve üzerinde çalışılan pratik uygulamaların haftalık bir derlemesidir.",
  "pdf_url": "haftalik_rapor_5_agustos_2026.pdf",
  "arastirmaci": {
    "isim": "Araştırmacı",
    "rol": "Teknoloji & Pazarlama Stajyeri",
    "departman": "Ürün & İnovasyon"
  },
  "istatistikler": {
    "toplamSaat": 45,
    "gunlukSaat": 7.5,
    "toplamGun": 6,
    "konuSayisi": 20,
    "dosyaSayisi": 8,
    "pratikUygulama": "Thumbnail Analiz, Emotio UI, n8n Telegram AI Botu & Handyman Testi"
  },
  "haftalikDegerlendirme": {
    "ozet": "Bu hafta boyunca üretken yapay zeka ekosisteminin ileri düzey araçları ve mimarileri kapsamlı olarak incelendi. Claude modelleri (Haiku, Sonnet, Opus), Extended Thinking, Memory ve Projects yapıları; Claude Cowork, Claude Code ve Claude Design pratikleri araştırıldı. Google AI Studio parametreleri (Temperature, System Instructions, Media Resolution) ile YouTube Thumbnail analiz uygulaması geliştirildi. Claude Routines otomasyon sistemi, 4 bileşenli prompt formülü ve Emotio duygu günlüğü arayüzü kodlandı. Windows vs Linux karşılaştırması ve Linux dosya sistemi mimarisi (bin, lib, etc, home) incelendi. n8n platformu üzerinde Memory ve Tavily internet arama aracıyla güçlendirilmiş Telegram AI Agent botu canlıya alındı. Son olarak SaaS mimari prensipleri (Frontend, Backend, Cloudflare D1 veri tabanı) ve tüm haftalık raporları bir araya getiren Haftalık Rapor Portalı projelendirildi.",
    "kazanimlar": [
      "Claude model ailesi (Haiku, Sonnet, Opus), Extended Thinking, Memory ve Claude Cowork / Code araçları kavrandı.",
      "Google AI Studio'da Temperature ve System Instructions parametreleri ile YouTube Thumbnail Analiz aracı geliştirildi.",
      "Claude Routines, 4 adımlı Prompt Formülü (Instructions, Context, Task, Output) ve Emotio web arayüzü prototiplendi.",
      "Windows vs Linux karşılaştırması, Linux Mint/Zorin OS dağıtımları, kök dizin hiyerarşisi ve terminal komutları öğrenildi.",
      "n8n platformunda AI Agent + Memory + Tavily internet arama motoru ile otonom Telegram botu başarıyla inşa edildi.",
      "Handyman Instant mobil ve web uygulamalarının test senaryoları tamamlandı; Haftalık Rapor Web Portalı mimarisi kurgulandı."
    ],
    "gelecekHaftaHedefleri": [
      "Haftalık Rapor Web Portalı'nı Google AI Studio desteğiyle tam işlevsel bir uygulamaya dönüştürmek.",
      "GitHub ve Vercel sürekli entegrasyonu (CI/CD) ile portalı canlı web sitesi olarak yayınlamak.",
      "Sisteme yeni haftalık rapor eklendiğinde portalı otomatik güncelleyen n8n iş akışını (workflow) kurmak."
    ]
  },
  "ipuclari_ve_oneriler": {
    "gelistirme_onerileri": [
      {
        "baslik": "Claude için 4 Bileşenli Kusursuz Prompt Formülü",
        "kategori": "Prompt Mühendisliği",
        "onem": "Kritik",
        "aciklama": "Modelden en yüksek verimi almak için her prompt şu 4 ana bileşeni içermelidir: 1) Instructions (kimlik ve kurallar), 2) Context (arka plan ve kaynaklar), 3) Task (tek ve net teslim edilebilir görev), 4) Output Format (çıktı yapısı)."
      },
      {
        "baslik": "Claude Code Token Tasarrufu ve /compact Kullanımı",
        "kategori": "Yapay Zeka & Optimizasyon",
        "onem": "Yüksek",
        "aciklama": "Türkçe karakterlerin 2 kat fazla token harcaması sebebiyle .md ve skill tanımları İngilizce tutulmalı; oturum limiti yaklaşırken /compact komutuyla bağlam özetlenerek temiz oturuma taşınmalıdır."
      },
      {
        "baslik": "n8n AI Agent Mimarisine Hafıza (Memory) ve Arama (Tavily) Katmanı",
        "kategori": "Otomasyon & AI",
        "onem": "Yüksek",
        "aciklama": "Chatbot'ların bağlamı kaybetmemesi için n8n üzerinde mutlaka Memory düğümü bağlanmalı; güncel bilgi ihtiyaçları için Tavily API'si Tool olarak tanımlanmalıdır."
      },
      {
        "baslik": "SaaS Güvenliği: .env ve .gitignore Disiplini",
        "kategori": "SaaS & Güvenlik",
        "onem": "Kritik",
        "aciklama": "API anahtarları ve gizli değişkenler asla doğrudan koda yazılmamalı, .env dosyasında saklanmalı ve .gitignore içine eklenerek GitHub'a sızması kesinlikle engellenmelidir."
      },
      {
        "baslik": "Linux Distro Değişiminde .config Klasörü Yedekleme",
        "kategori": "Linux & Sistem",
        "onem": "Pratik",
        "aciklama": "Dağıtım değiştirirken (Distro Hopping) home dizinindeki gizli .config klasörünü yedekleyip (Ctrl+H) yeni sisteme aktarmak tüm uygulama ve arayüz ayarlarını korur."
      }
    ],
    "ileriye_donuk_arastirma": [
      {
        "baslik": "Haftalık Rapor Web Portalı Geliştirme ve Canlı Dağıtım",
        "odak": "Full-Stack Web Portalı",
        "hedefSure": "6. Hafta",
        "aciklama": "Tüm haftalık raporların görüntülenebileceği, istatistiklerinin ve detaylarının incelenebileceği interaktif bir web portalının Google AI Studio ve Vercel ile geliştirilmesi."
      },
      {
        "baslik": "n8n ile Otomatik Rapor Dağıtım İş Akışı",
        "odak": "İş Akışı Otomasyonu",
        "hedefSure": "6. Hafta",
        "aciklama": "Her yeni haftalık rapor eklendiğinde JSON verisini güncelleyen ve portalı otomatik derleyen n8n otomasyonunun kurgulanması."
      },
      {
        "baslik": "Cloudflare D1 & Serverless API Entegrasyonu",
        "odak": "Bulut Veri Tabanı",
        "hedefSure": "6. Hafta",
        "aciklama": "Portaldaki verileri bağımsız bir SQLite bulut veri tabanında (Cloudflare D1) tutarak Wrangler CLI ile dinamik API uç noktalarının oluşturulması."
      }
    ]
  },
  "gunler": [
    {
      "id": "pazartesi-h5",
      "gun": "Pazartesi",
      "tarih": "10 Ağustos 2026",
      "yil": 2026,
      "ay": 7,
      "gunNo": 10,
      "etiket": "Claude Modelleri & Google AI Studio Parametreleri",
      "arastirilanKonular": [
        {
          "baslik": "Claude Model Ailesi (Haiku, Sonnet, Opus)",
          "icerik": "Haiku: Basit görevler ve hızlı özet çıkarma için optimize edilmiş hızlı model. Sonnet: Yazma, kodlama ve analizde ana model (Opus'a kıyasla 5 kat az kaynak harcar). Opus: Karmaşık, çok katmanlı problemler ve yüksek context için en gelişmiş model."
        },
        {
          "baslik": "Extended Thinking ve Memory Özellikleri",
          "icerik": "Extended Thinking aktif edildiğinde model karmaşık analizleri adım adım gerçekleştirir. Memory ise tüm konuşmalar boyunca kritik detayları hatırlamasını sağlar."
        },
        {
          "baslik": "Projects, Claude Cowork, Code & Design",
          "icerik": "Projects ile özel çalışma alanları ve referans dosyaları oluşturma; Claude Cowork ile bilgisayar dosyalarına erişen otonom çalışan yapısı; Claude Code ile Claude.md kılavuz dosyası ve planlama modu; Claude Design ve Getdesign.md ile tasarım estetiği aktarımı."
        },
        {
          "baslik": "Google AI Studio ve Temel Model Parametreleri",
          "icerik": "Gemini, Gemma, Imagen, Veo modelleri için platform. Parametreler: Temperature (mantıksal/güvenli vs yaratıcı çıktı dengesi), Media Resolution (görsel piksel yoğunluğu), System Instructions (davranış kalıpları özelleştirme), Advanced Settings (Add Stop Sequence, Output Length)."
        }
      ],
      "pratikUygulama": {
        "baslik": "YouTube Thumbnail Analiz & Optimizasyon Prompt Akışı",
        "aciklama": "Google AI Studio üzerinde yapıştırılan YouTube bağlantısı üzerinden videonun thumbnail görselini çekip analiz eden ve görsel üzerinde iyileştirme önerileri sunan prompt akışı geliştirildi.",
        "etiketler": ["Google AI Studio", "Thumbnail Analizi", "Gemini", "Prompt Akışı", "System Instructions"]
      },
      "oneCikanBilgi": "Claude'da Sonnet günlük iş yüklerinin omurgasıdır; Google AI Studio parametreleri (Temperature, System Instructions) çıktının kalitesini ve amacını doğrudan şekillendirir."
    },
    {
      "id": "sali-h5",
      "gun": "Salı",
      "tarih": "11 Ağustos 2026",
      "yil": 2026,
      "ay": 7,
      "gunNo": 11,
      "etiket": "Claude Routines, Emotio UI & Handyman Hazırlığı",
      "arastirilanKonular": [
        {
          "baslik": "Claude Routines ve Otomasyon Mimarisi",
          "icerik": "Claude Code içerisinde görevleri belirli zamanlarda ya da tetikleyicilerle otomatik yürüten sistemdir. Anthropic bulutunda Remote veya yerel makinede Local çalışabilir. Limitler: Pro için 5, Max için 15, Teams için 25 Routine/gün. Triggers: App Trigger (manuel) ve Schedule Trigger (zaman ayarlı). Connectors ve MCP Server altyapısı."
        },
        {
          "baslik": "Claude için 4 Bileşenli Prompt Formülü",
          "icerik": "1) Instructions: Modelin neyi, hangi kimlikle yapacağını belirten kurallar. 2) Context: Arka plan bilgisi ve kaynak belgeler. 3) Task: İstenen net ve spesifik teslim edilebilir görev. 4) Output Format: Çıktının tam formatı ve yapısı."
        },
        {
          "baslik": "Google AI Studio Dağıtım ve Antigravity",
          "icerik": "Share sekmesiyle görünürlük izinleri, Publish ile canlı bağlantı oluşturma ve Export seçeneğiyle Google Antigravity aracı kullanılarak projenin yerel bilgisayara aktarılması ve test edilmesi deneyimlendi."
        },
        {
          "baslik": "Handyman Instant Test Ortamı Kurulumu",
          "icerik": "Şirket uygulaması Handyman Instant için Android Emulator kurularak hem müşteri hem de uzman (Pro) sürümleri yüklendi; test ortamı hazırlandı."
        }
      ],
      "pratikUygulama": {
        "baslik": "Emotio - İnteraktif Duygu Günlüğü Web Arayüzü Geliştirildi",
        "aciklama": "Duygu ile günlük kavramlarını birleştiren interaktif butonlar, farklı seçimlerde değişen duygu kutucukları ve logolu bir header içeren Emotio web arayüzü Claude yönlendirmeleriyle kodlandı.",
        "etiketler": ["Emotio", "Duygu Günlüğü", "Web Arayüzü", "Claude Routines", "Android Emulator"]
      },
      "oneCikanBilgi": "Etkili prompt 4 ayaktan oluşur: Instructions + Context + Task + Output Format. Claude Routines ise MCP server ve zamanlayıcılarla otonom görevleri yürütür."
    },
    {
      "id": "carsamba-h5",
      "gun": "Çarşamba",
      "tarih": "12 Ağustos 2026",
      "yil": 2026,
      "ay": 7,
      "gunNo": 12,
      "etiket": "Windows vs Linux Kapsamlı Karşılaştırması",
      "arastirilanKonular": [
        {
          "baslik": "Kurulum ve Sürücü (Driver) Desteği",
          "icerik": "Windows Microsoft hesabı zorunlu tutarken Linux özgür bir yapı sunar; Dual Boot olarak kurulabilir. Windows pazar payı büyüklüğüyle donanım desteğinde öndedir. Linux'ta ise çoğu sürücü çekirdeğe (Kernel) gömülü gelir; yalnızca Nvidia ve bazı Wi-Fi donanımlarında manuel işlem gerekebilir."
        },
        {
          "baslik": "Uygulama Ekosistemi ve Kişiselleştirme",
          "icerik": "Windows'ta .exe indirme yaygınken Linux'ta paket yöneticileri/uygulama mağazasından tek komutla kurulum yapılır; Linux kullanıcının tercihine göre sınırsız arayüz özelleştirmesi sunar."
        },
        {
          "baslik": "Performans, Gizlilik (Telemetri) ve Oyun Desteği",
          "icerik": "Windows arka planda yoğun telemetri ve servis çalıştırırken Linux dağıtımlarında telemetri yoktur ve sistem hafiftir. Windows oyun desteğinde Anti-Cheat yazılımları nedeniyle öndedir."
        },
        {
          "baslik": "Geliştirici Deneyimi ve Genel Değerlendirme",
          "icerik": "Windows geliştirici araçlarında ilerlemiş olsa da Windows 11'in çökme, güncelleme ve gizlilik sorunlarına karşın Linux'un geliştirici dostu, hafif ve güvenli olduğu tespit edildi."
        }
      ],
      "pratikUygulama": {
        "baslik": "Windows vs Linux Karşılaştırma Analiz Raporu",
        "aciklama": "Kurulum, donanım sürücüleri, uygulama mağazaları, telemetri/gizlilik, oyun uyumluluğu ve geliştirici araçları başlıklarında detaylı karşılaştırma yapıldı.",
        "etiketler": ["Windows vs Linux", "Kernel Sürücüleri", "Telemetri", "Geliştirici Deneyimi"]
      },
      "oneCikanBilgi": "Linux telemetrisiz yapısı, çekirdeğe gömülü sürücüleri ve hafifliğiyle geliştiricilere üstün kontrol sağlarken; Windows oyun ve donanım üretici yazılımlarında öndedir."
    },
    {
      "id": "persembe-h5",
      "gun": "Perşembe",
      "tarih": "13 Ağustos 2026",
      "yil": 2026,
      "ay": 7,
      "gunNo": 13,
      "etiket": "Linux Dosya Hiyerarşisi, Terminal & Handyman Testi",
      "arastirilanKonular": [
        {
          "baslik": "Linux Dağıtımları (Distro) ve Kurulum Yönetimi",
          "icerik": "Başlangıç için Linux Mint ve Zorin OS dağıtımlarının öne çıktığı; ISO dosyasının Rufus veya Balena ile USB'ye yazdırılarak kurulduğu incelendi. Yazılımların tek komutla toplu güncellenebilmesi ve yeniden başlatma gerektirmemesi öğrenildi. Windows uygulamaları için Wine ve Bottles araçları not edildi."
        },
        {
          "baslik": "Linux Dosya Sistemi Hiyerarşisi ve Güvenlik",
          "icerik": "bin (ikili sistem komutları), lib (kütüphane kodları), etc (yapılandırma dosyaları), boot (çekirdek ve başlatma), home (kullanıcı belgeleri), usr & var (programlar, loglar), dev & tmp (aygıt ve geçici dosyalar). Merkezi depolardan yükleme mimarisi nedeniyle antivirüs ihtiyacı düşüktür; gerekirse ClamAV kullanılır."
        },
        {
          "baslik": "Terminal Temel Komutları ve Özelleştirme",
          "icerik": "cd (dizin değiştir), cp (kopyala), mv (taşı/yeniden adlandır), ls (listele), pwd (aktif dizin yolu), Tab tuşu (otomatik tamamlama). Distro Hopping esnasında .config klasörünün yedeklenmesi (Ctrl+H)."
        },
        {
          "baslik": "Handyman Instant Test Senaryolarının Yürütülmesi",
          "icerik": "Handyman Instant hem mobil uygulaması hem de web sitesi için iletilen sadeleştirilmiş test rehberi adım adım uygulanarak bulgular raporlandı."
        }
      ],
      "pratikUygulama": {
        "baslik": "Handyman Instant Testleri Tamamlandı & Raporlandı",
        "aciklama": "Handyman Instant mobil uygulaması ve web sitesi için tüm test senaryoları yürütülerek bulgular eksiksiz iletildi.",
        "etiketler": ["Linux Dosya Sistemi", "Terminal Komutları", "Handyman Instant Test", "ClamAV"]
      },
      "oneCikanBilgi": "Linux dosya mimarisinde kök dizin hiyerarşisi (bin, lib, etc, home) standarttır; terminalde Tab ve temel komutlar (cd, cp, mv, ls, pwd) geliştirici hızını katlar."
    },
    {
      "id": "cuma-h5",
      "gun": "Cuma",
      "tarih": "14 Ağustos 2026",
      "yil": 2026,
      "ay": 7,
      "gunNo": 14,
      "etiket": "Claude Code Modları, Token Stratejisi & n8n AI Agent",
      "arastirilanKonular": [
        {
          "baslik": "Claude Code Çalışma Modları (Modes)",
          "icerik": "Manual (tek tek onay), Edit Automatically (otomatik güncelleme), Plan (kod analizi ve detaylı yol haritası sunan en kritik mod), Auto (güvenli adımları onaylar), Bypass Permissions (onaysız tam yetki ile çalışma)."
        },
        {
          "baslik": "Token ve Efor Yönetimi / Optimizasyon",
          "icerik": "/context (limit takibi), /compact (bağlamı özetleme), /rewind (hatalı denemeleri hafızadan silme), /init (Claude.md oluşturma). Türkçe karakterlerin 2 kat fazla token harcaması sebebiyle .md ve skill tanımlarının İngilizce tutulması, Docling CLI ile dönüştürme ve .cloudignore kullanımı."
        },
        {
          "baslik": "n8n ile İş Akışı (Workflow) Otomasyonu",
          "icerik": "Farklı servisleri birbirine bağlayan self-hosted açık kaynak otomasyon platformu. Kavramlar: Workflow (akışın bütünü), Node (işlem adımı), Execution (tek bir tetiklenme)."
        },
        {
          "baslik": "Pratik Otomasyon: Telegram & AI Agent Entegrasyonu",
          "icerik": "1) Trigger: telegram-on message tetikleyicisi ve bot API anahtarı bağlantısı. 2) AI Agent & Node yapısı: Input, model seçimi, parametreler, Output. 3) Çift Yönlü İletişim: telegram-send text message ve Publish. 4) Memory ve Context Tanımlama: Geçmiş mesajları hatırlama ve System Messages bağlamı. 5) Araç Entegrasyonu: Tavily arama motoru API'sinin Tool olarak eklenmesi."
        }
      ],
      "pratikUygulama": {
        "baslik": "Telegram Üzerinde Çalışan Hafızalı & Arama Yetenekli AI Botu (Work_Test)",
        "aciklama": "n8n üzerinde OpenAI modeli, Memory düğümü ve Tavily arama aracıyla çalışan Telegram AI Agent akışı kuruldu ve test edildi.",
        "etiketler": ["n8n", "AI Agent", "Telegram Bot", "Tavily Search API", "Memory Node", "Claude Code"]
      },
      "oneCikanBilgi": "Claude Code Plan Modu ve /compact komutu token tasarrufunun anahtarıdır; n8n + AI Agent + Memory + Tavily Tool mimarisiyle otonom Telegram botları kolayca kurgulanır."
    },
    {
      "id": "cumartesi-h5",
      "gun": "Cumartesi",
      "tarih": "15 Ağustos 2026",
      "yil": 2026,
      "ay": 7,
      "gunNo": 15,
      "etiket": "SaaS Mimarisi & Haftalık Rapor Portalı Tasarımı",
      "arastirilanKonular": [
        {
          "baslik": "Claude Uzaktan Yönetim ve Mobil Remote Control",
          "icerik": "Evdeki bilgisayar açıkken cep telefonundaki Claude App üzerinden aynı aktif geliştirme oturumuna bağlanarak uzaktan kod üretimi (Mac sistemlerde Amphetamine ile uyku modunu engelleme)."
        },
        {
          "baslik": "SaaS Temel Bileşenleri ve Dağıtım Altyapısı",
          "icerik": "Frontend (arayüz), Backend (iş mantığı/doğrulama) ve Database (Cloudflare D1 SQLite kalıcı veri tabanı). Dağıtım için Cloudflare, Vercel veya Netlify; VS Code terminalinde Wrangler CLI ile özel domain bağlantısı."
        },
        {
          "baslik": "Güvenlik, Çevre Değişkenleri ve Ödeme Sistemleri",
          "icerik": "API anahtarlarının .env dosyasında saklanması, .gitignore koruması, Claude ile Security Audit (istek sınırlama, bot koruması). Türkiye operasyonlarında ödeme için Paddle veya Creem kullanımı."
        },
        {
          "baslik": "Google AI Studio Gelişmiş Kullanım Alanları ve Veri Gizliliği",
          "icerik": "System Instructions ile marka sesi tanımlama, ekran paylaşımıyla canlı UX analizi, Multimodal ses/görsel (TTS, Imagen), Pay-per-request maliyet avantajı ve kurumsal hassas verilerde veri gizliliği için API kullanımı."
        },
        {
          "baslik": "Haftalık Rapor Portalı Proje Tasarımı ve Yol Haritası",
          "icerik": "Tüm haftalık raporların görüntülenebileceği, istatistiklerinin ve detaylarının incelenebileceği bir Web Portalı tasarımı. Yol Haritası: 1) Geliştirme (Google AI Studio desteği), 2) Versiyonlama & Dağıtım (GitHub + Vercel), 3) Otomasyon (yeni rapor eklendiğinde güncelleyen n8n iş akışı)."
        }
      ],
      "pratikUygulama": {
        "baslik": "Haftalık Rapor Web Portalı Mimarisi & Yol Haritası Kurgulandı",
        "aciklama": "Bugüne kadar hazırlanan tüm raporların görüntüleneceği web portalı projesinin mimari bileşenleri ve aşamaları planlandı.",
        "etiketler": ["SaaS Mimarisi", "Cloudflare D1", "Google AI Studio", "Haftalık Rapor Portalı", "n8n Otomasyonu"]
      },
      "oneCikanBilgi": "Modern bir SaaS; Frontend + Backend + Cloudflare D1 veri tabanından oluşur; tüm haftalık raporları derleyen Haftalık Rapor Portalı mimarisi bu prensiplerle tasarlandı."
    }
  ],
  "raw_content": `Haftalık Rapor 5 ( 10 Ağustos - 15 Ağustos)

Bu rapor, verilen konular üzerinde yapılan araştırmalar, alınan notlar, edinilen bilgiler ve üzerinde çalışılan pratik uygulamaların haftalık bir derlemesidir.

------------------------------------------------------------
Pazartesi – 10 Ağustos 2026
------------------------------------------------------------
Bu haftaya, üretken yapay zeka araçlarının ileri düzey özelliklerini, Claude ekosistemini ve Google AI Studio platformunu detaylıca inceleyerek başladım.

Claude ve Model Yapısı
Claude ayarlarındaki instructions kısmını doldurarak modelin vereceği yanıtların kapsamını ve tarzını şekillendirebildiğimizi öğrendim. Farklı görev tipleri için optimize edilmiş modelleri ve kullanım senaryolarını şu şekilde derledim:
• Haiku: Basit görevler, soru-cevap ve hızlı özet çıkarma işlemleri için optimize edilmiş oldukça hızlı bir modeldir.
• Sonnet: Yazma, kodlama, analiz ve araştırma gibi temel iş yüklerinde ana model olarak kullanılır; Opus modeline kıyasla beş kat daha az kaynak harcar.
• Opus: Karmaşık ve çok katmanlı problemleri çözebilen, diğer modellerin yetersiz kaldığı durumlar ile yüksek context içeren metin analizleri için saklanması gereken en gelişmiş modeldir.
• Extended Thinking: Bu özellik aktif edildiğinde model yalnızca doğrudan yanıt vermekle kalmayıp karmaşık analizleri adım adım gerçekleştirir; mesaj limitini daha fazla kullansa da çok katmanlı problemlerde daha spesifik ve kullanışlı çıktılar sağlar.
• Memory: Modelin tüm konuşmalar boyunca kritik detayları hatırlamasına olanak tanır.

Claude kullanımına başlarken çalışma bağlamı, iletişim tercihleri ile mevcut proje ve hedeflerin tanımlandığı üç temel sohbetin açılmasının verimliliği artırdığını gördüm. Ayrıca Claude'un çoklu dosya yüklemelerinde bağlamı kaybetmediğini; doğrudan görsel veya video üretemese de görsel oluşturma araçları için prompt yazdırarak kullanılabileceğini öğrendim.

Projects, Claude Cowork ve Claude Code
Farklı çalışma alanları için Projects başlığı altında özel alanlar açılabildiğini, referans dosyalarının bu projelere tanımlanabildiğini ve projelerin public veya private olarak ayarlanabildiğini inceledim. Claude'un Excel tabloları, PowerPoint sunumları ve çalışan HTML dosyaları oluşturabildiğini gördüm. Claude ile çalışırken önce bir outline oluşturup ardından bölüm bölüm genişletme ve final düzenleme yapma akışının en sağlıklı yöntem olduğunu belirledim.

İleri düzey araçlar tarafında edindiğim teknik bilgileri şu şekilde özetledim:
• Claude Cowork: Standart sohbet arayüzünden farklı olarak bir çalışan gibi hareket eden, bilgisayar dosyalarına ve klasörlerine erişebilen, karmaşık ve tekrarlayan işlerde kullanılan bir yapıdır. Yapılandırma için .md dosyalarına instruction ve bilgiler yazılır; yapılan değişikliklerde dosyayı sıfırdan oluşturmak yerine mevcut yapının üzerine inşa eder.
• Skills & Scheduled Tasks: Belirli görevleri istenilen formatta yürütmek için hazır instruction kümeleri (Skills) oluşturulabildiğini ve promptları belirli gün/saatlerde otomatik tetiklemek için görev planlayıcı (Scheduled Tasks) kullanılabildiğini öğrendim.
• Claude Code: Bir projeyi aşama aşama üzerine ekleyerek ve düzenleyerek ilerletmenin en sağlıklı yaklaşım olduğunu; Claude Code kullanabilmek için profesyonel bir yazılımcı olmaktan ziyade ne oluşturulmak istendiğini net bilmenin kritik olduğunu gördüm. Geliştirme sürecinde projeye başlamadan önce Claude.md dosyası oluşturulması, çok dosyalı projelerde planlama modunun atlanmaması ve bir hata iki defadan fazla tekrarlanırsa oturumu sıfırlayıp yeni bir sohbet başlatılması gerektiğini öğrendim.
• Claude Design: Getdesign.md üzerinden farklı markaların tasarım estetiğinin .md formatında projeye aktarılabildiğini, daha kısa promptların daha az token harcadığını ve oluşturulan tasarımların template olarak dışa aktarılabildiğini öğrendim.

Google AI Studio ve Temel Parametreler
Google'ın Gemini, Gemma, Imagen, Veo ve Text-to-Speech modellerini denemek için geliştirilmiş ücretsiz web tabanlı platformu olan Google AI Studio'yu inceledim. İki veya daha fazla yazılımın iletişimini sağlayan API kavramının yanında model çıktılarını doğrudan etkileyen parametreleri öğrendim:
• Temperature: Çıktının ne kadar mantıksal/güvenli ya da yaratıcı olacağını belirler.
• Media Resolution: Modele girdi olarak verilen görsel verilerin piksel yoğunluk seviyesini ifade eder.
• System Instructions: Modelin temel davranış kalıplarını özelleştiren alandır.
• Advanced Settings: Çıktıyı belirli bir kelime veya sembol dizisinde durduran Add Stop Sequence kuralı ile tek yanıtta üretilebilecek azami kelime adedini belirleyen Output Length sınırlarını kapsar.

Günün Pratik Çalışması
Google AI Studio üzerinde edindiğim parametre bilgilerini kullanarak bir uygulama geliştirdim. Yapıştırılan bir YouTube bağlantısı üzerinden ilgili videonun thumbnail görselini çekip analiz eden ve görsel üzerinde uygulanabilecek iyileştirme önerilerini sunan bir prompt akışı oluşturdum.

------------------------------------------------------------
Salı – 11 Ağustos 2026
------------------------------------------------------------
Bugün, Claude içerisindeki otomasyon mekanizmalarını, etkili prompt yapılarını, Google AI Studio üzerindeki dağıtım süreçlerini ve şirket uygulaması olan Handyman Instant test hazırlıklarını inceledim.

Claude Routines ve Otomasyon Mimarisi
Claude Code içerisinde yer alan ve görevleri belirli zamanlarda ya da tetikleyicilerle otomatik olarak yürüten Claude Routines otomasyon sistemini öğrendim. Görevlerin Anthropic bulut altyapısı üzerinde Remote olarak veya yerel makinede Local olarak çalışabildiğini gördüm.

Routines sistemine dair edindiğim yapısal bilgileri ve kuralları şu şekilde derledim:
• Çalışma Mantığı ve Limitler: Normal kullanımda yazılan prompt anında sonuç üretirken, Routine kullanımında tanımlanan görevler bir tetikleyici çalıştığında devreye girer. Token harcamasını Claude Code ile aynı havuzdan yapar ve plan seviyelerine göre günlük belirli limitlere sahiptir (Pro için 5, Max için 15, Teams için 25 Routine/gün).
• Triggers: Görevleri manuel başlatmak için App Trigger, belirlenen zaman aralıklarında otomatik çalıştırmak (örneğin repository çekme, analiz etme ve sonuç üretme) için Schedule Trigger kullanıldığını öğrendim.
• Connectors & MCP Server: Routines yapısının dış dünyayla iletişim kurmasını sağlayan entegrasyonlara Connectors dendiğini, arka planda MCP server yapısı üzerinden çalıştığını ve kullanıcının doğrudan hazır ya da özel sunucuları bağlayabildiğini gördüm.

Claude için Prompt Formülü
Claude'a ne kadar iyi context verilirse o kadar kaliteli çıktılar alındığını gözlemledim. Modelden en doğru sonucu alabilmek için prompt yapısının dört ana bileşenden oluşması gerektiğini öğrendim:
• Instructions: Modelin neyi, hangi kimlikle ve nasıl yapacağını belirten kurallar.
• Context: Arka plan bilgisi, kaynak belgeler ve sınırlılıklar.
• Task: İstenen net, tek ve spesifik teslim edilebilir görev.
• Output Format: Çıktının tam olarak hangi formatta ve yapıda olması gerektiği.

Claude ile Web Geliştirme Pratiği (Emotio)
Öğrendiğim teorik bilgileri pekiştirmek amacıyla Claude üzerinde sıfırdan bir web arayüzü tasarladım. Sıradan bir sayfa yerine bir konsept oluşturmak istedim ve duygu ile günlük kavramlarını birleştirerek Emotio isimli interaktif bir duygu günlüğü projesi kurguladım. Claude'a aşama aşama yönlendirmeler vererek interaktif butonlar, farklı seçimlerde değişen duygu kutucukları ve logolu bir header içeren genel sayfa iskeletini başarıyla oluşturdum.

Google AI Studio ve Antigravity
Google AI Studio'da hazırlanan uygulamaların paylaşım ve dağıtım adımlarını inceledim. Share sekmesinden görünürlük izinlerinin ayarlanabildiğini, Publish sekmesiyle doğrudan bağlantı üzerinden erişilebilir bir uygulamaya dönüştürülebildiğini öğrendim. Ayrıca Export seçeneği üzerinden Google Antigravity aracını kullanarak projenin yerel bilgisayara aktarılabildiğini ve test edilebildiğini deneyimledim.

Handyman Instant Test Süreci
Şirket uygulaması olan Handyman Instant için Musa Abi ile görüşerek bilgisayarıma bir Android Emulator kurdum. Emulator üzerine uygulamanın hem müşteri hem de uzman (Pro) sürümlerini yükledim. İlk aşamada gönderilen test senaryolarını netleştirmekte zorlansam da ertesi gün iletilen sadeleştirilmiş rehber doğrultusunda test ortamını hazır hale getirdim.

------------------------------------------------------------
Çarşamba – 12 Ağustos 2026
------------------------------------------------------------
Bugün, yazılım geliştirme ortamları ve işletim sistemlerinin dinamiklerini daha iyi kavramak adına Windows vs Linux karşılaştırması üzerine kapsamlı bir araştırma gerçekleştirdim. İki işletim sisteminin kurulum, donanım desteği, uygulama ekosistemi, performans ve geliştirici deneyimi açısından sunduğu avantaj ve dezavantajları inceledim.

Yapmış olduğum detaylı karşılaştırmayı ve edindiğim temel çıkarımları şu başlıklar altında derledim:

Kurulum ve Sürücü Desteği
• Kurulum Süreci: Her iki işletim sisteminde de kurulum süreçlerinin zor olmadığını ancak Windows'un kurulum esnasında bir Microsoft hesabı zorunlu kıldığını, Linux tarafının ise bu konuda çok daha özgür bir yapı sunduğunu gördüm. Ayrıca mevcut Windows sisteminin yanına Linux'un Dual Boot olarak kolaylıkla kurulabildiğini inceledim.
• Sürücü (Driver) Yönetimi: Windows tarafında sürücülerin genellikle manuel veya üçüncü parti yazılımlarla kurulması gerektiğini, pazar payının büyüklüğü sebebiyle donanım desteğinde Windows'un önde olduğunu belirledim. Linux'ta ise çoğu sürücünün doğrudan çekirdeğe (Kernel) gömülü olarak otomatik yüklendiğini; yalnızca Nvidia ekran kartları veya bazı Wi-Fi donanımlarında manuel işlem gerekebildiğini öğrendim. Ancak fare, klavye ve mikrofon gibi donanımların ince ayarlarını yapmaya yarayan üretici yazılımlarının Linux ekosisteminde bulunmadığını fark ettim.

Uygulama Ekosistemi ve Kişiselleştirme
• Uygulama Kurulumu: Windows'ta en yaygın yöntemin web sitelerinden .exe dosyası indirmek olduğunu, Microsoft Store'un aranan çoğu uygulamayı barındırmaması sebebiyle az kullanıldığını gördüm. Linux tarafında ise çoğu uygulamanın doğrudan dağıtımın uygulama mağazasından tek tıkla veya birkaç terminal komutuyla zahmetsizce kurulduğunu, genellikle açık kaynaklı alternatif yazılımlara yönelindiğini öğrendim.
• Kişiselleştirme Sınırları: Windows'un dahili kişiselleştirme olanaklarının kısıtlı olduğunu (Windhawk gibi üçüncü parti araçlara ihtiyaç duyulduğunu), Linux tarafında ise arayüz ve sistem özelleştirmelerinin tamamen kullanıcının bilgi düzeyine ve tercihine bağlı olarak sınırsız olduğunu gördüm.

Performans, Gizlilik ve Oyun Desteği
• Gizlilik ve Kaynak Tüketimi: Windows'un arka planda yoğun bir veri çekme (telemetri) ve servis çalıştırma işlemi gerçekleştirdiğini, bu durumun sistemi özellikle giriş seviyesi cihazlarda daha hantal hale getirdiğini saptadım. Linux dağıtımlarında ise telemetrinin neredeyse hiç bulunmadığını ve arka planda gereksiz servisler çalışmadığı için sistemin oldukça hafif ve akıcı işlediğini gördüm.
• Oyun Uyumluluğu: Oyun desteği konusunda Windows'un tartışmasız liderliğini koruduğunu; Linux tarafında ise çevrimdışı (offline) oyunların sorunsuz çalışmasına rağmen hile karşıtı (Anti-Cheat) yazılımlar nedeniyle bazı çevrimiçi oyunların oynanamadığını inceledim.

Geliştirici Deneyimi ve Genel Değerlendirme
Yazılımcı topluluklarında ve forumlarda yaptığım araştırmalarda, \"Windows programlama için kötü bir tercih mi?\" sorusuna geliştiricilerin çoğunlukla olumsuz yanıt vermediğini, Windows'un geliştirici araçları tarafında geçmişe kıyasla önemli bir yol katettiğini gördüm. Buna karşın genel kullanıcı deneyimi açısından Windows'un (özellikle en çok sorun bildirilen Windows 11 sürümünün) hesap yönetimi zorunlulukları, beklenmedik çökmeler, uzun süren sistem güncellemeleri ve gizlilik kaygıları nedeniyle eleştirildiğini; gizlilik ve güvenlik konularında Linux'un belirgin bir üstünlüğe sahip olduğunu tespit ettim.

------------------------------------------------------------
Perşembe – 13 Ağustos 2026
------------------------------------------------------------
Bugün, Linux işletim sisteminin pratik kullanım detaylarını, dosya mimarisini, yazılım yönetimini ve terminal temellerini kapsayan geniş bir araştırma yaptım. Ayrıca şirket uygulaması olan Handyman Instant üzerindeki test senaryolarını tamamladım.

Linux Dağıtımları, Kurulum ve Yazılım Yönetimi
Linux dünyasına adım atarken en çok kafa karıştıran konunun Distro seçimi olduğunu, ancak sürece doğrudan sade arayüze sahip bir dağıtımla başlamanın en sağlıklı yöntem olduğunu gördüm. Bu doğrultuda başlangıç seviyesi için Linux Mint ve Zorin OS dağıtımlarının öne çıktığını belirledim.

İşletim sisteminin kurulum ve yönetim süreçlerine dair edindiğim temel bilgileri şu şekilde derledim:
• Kurulum Süreci: Seçilen dağıtımın ISO dosyasını indirip Rufus veya Balena gibi araçlarla bir USB belleğe yazdırarak bilgisayarı bu bellek üzerinden başlatıp kurulumun tamamlandığını inceledim.
• Yazılım ve Güncelleme Yönetimi: Windows tarafındaki web sitelerinden .exe arayıp kurma yönteminin aksine, Linux'ta uygulama mağazalarını kullanmanın güncelleme takibi ve güvenlik açısından çok daha pratik olduğunu gördüm. Yazılımların ve sistem bileşenlerinin tek bir komutla toplu halde güncellenebildiğini ve güncellemelerden sonra genellikle sistemi yeniden başlatmaya gerek kalmadığını öğrendim.
• Uyumluluk Araçları: Windows uygulamalarını çalıştırmak için Wine uyumluluk aracından ve .exe dosyalarını yönetmek için Bottles uygulamasından yararlanılabildiğini, ancak Adobe yazılımları gibi bazı özel programlar için halen Windows ihtiyacının sürdüğünü belirledim.
• Oyun Uyumluluğu: Singleplayer oyunların büyük bir kısmının sorunsuz çalıştığını, ancak Anti-Cheat yazılımları barındıran Counter-Strike, Riot oyunları ve Fortnite gibi multiplayer yapımlarda kısıtlamalar yaşandığını gördüm.

Linux Dosya Sistemi ve Güvenlik
Linux'un Windows'tan tamamen farklı olan kök dizin ve dosya sistemi hiyerarşisini detaylıca inceledim:
• bin: Çalıştırılabilir ikili sistem dosyalarının ve komutların derlendiği klasördür.
• lib: Programların çalışırken ihtiyaç duyduğu kütüphane kodlarının toplandığı alandır. (Windows'taki System32 mantığı gibi bin ve lib klasörlerinin silinmemesi gerektiğini öğrendim.)
• etc: Sistemin ve kurulu yazılımların yapılandırma dosyalarını barındırır.
• boot: Linux'un sistem başlatma ve çekirdek dosyalarını içerir.
• home: Kullanıcıya ait kişisel belgelerin ve ayarların bulunduğu ana dizindir.
• usr & var: Kullanıcı programlarını, değişken verileri ve log dosyalarını tutar.
• dev & tmp: Donanım aygıt dosyalarını ve geçici sistem dosyalarını barındırır.

Güvenlik tarafında, uygulamaların merkezi depolar üzerinden yüklenmesi ve sistem mimarisi sebebiyle genel olarak bir antivirüs ihtiyacı bulunmadığını, gerek duyulursa ClamAV yazılımının kullanılabileceğini öğrendim.

Terminal Komutları, Özelleştirme ve Sorun Giderme
Grafik arayüzler gelişmiş olsa da terminal kullanımının geliştirici süreçlerinde kritik olduğunu fark ettim. Terminalde Tab tuşunun otomatik tamamlama işlevini gördüğünü ve en temel komutların şunlar olduğunu öğrendim:
• cd: Dizin değiştirmeyi sağlar.
• cp: Dosya ve klasörleri kopyalar.
• mv: Dosyaları taşır veya yeniden adlandırır.
• ls: Bulunulan dizindeki dosyaları listeler.
• pwd: O an bulunulan aktif dizin yolunu ekrana yazdırır.

Arayüzü özelleştirmek için yeni başlayanların mevcut Desktop Environment yapısına sadık kalmasının paket çakışmalarını önlediğini; dağıtım değiştirirken (Distro Hopping) home dizinindeki gizli .config klasörünü yedekleyip (Ctrl + H) yeni sisteme aktarmanın tüm ayarları koruduğunu gördüm. Olası teknik sorunlarda yapay zeka araçlarından destek almanın ve İngilizce aramalar yapmanın en hızlı çözüm yöntemi olduğunu saptadım.

Handyman Instant Test Çalışmaları
Handyman Instant'ın hem mobil uygulaması hem de web sitesi için Musa Abi tarafından iletilen sadeleştirilmiş test rehberini adım adım uyguladım. İstenen tüm test senaryolarını detaylı bir şekilde yürüterek elde ettiğim bulguları eksiksiz olarak raporlayıp ilettim.

------------------------------------------------------------
Cuma – 14 Ağustos 2026
------------------------------------------------------------
Bugün, Claude Code ekosisteminin gelişmiş modlarını, token optimizasyonu stratejilerini ve açık kaynaklı iş akışı otomasyon platformu olan n8n üzerinde yapay zeka destekli otonom sistemler kurgulamayı inceledim.

Claude Code Modları, Proje Mimarisi ve Token Optimizasyonu
Claude tarafında abonelik modelinin, yoğun API kullanım maliyetlerine kıyasla çok daha ekonomik bir çözüm sunduğunu belirledim. Claude Code arayüzündeki operasyonel modları, komutları ve token tasarrufu yöntemlerini şu şekilde derledim:
• Çalışma Modları (Modes):
  o Manual: Her kod düzenlemesinden önce kullanıcıdan tek tek onay alır.
  o Edit Automatically: Seçili metin bloğunu veya tüm dosyayı otomatik olarak günceller.
  o Plan: Üretim aşamasına geçmeden önce kodu analiz ederek detaylı bir yol haritası sunar; mimariyi tasarlarken kullanılması gereken en kritik moddur.
  o Auto: Güvenlik testlerinden geçen adımları onaylar, riskli işlemlerde durur.
  o Bypass Permissions: Eklenti ayarlarından aktifleştirildiğinde kullanıcıya hiçbir onay sormadan tüm görevleri duraksız yürütür.
• Token ve Efor Yönetimi: Efor seviyesi yükseltildiğinde hata payı minimuma iner ancak harcanan token miktarı artar. /context komutuyla oturumun limit durumu ve harcanan tokenler takip edilebilir. Limit yaklaşırken /compact komutu ile mevcut bağlam özetlenerek temiz bir oturuma aktarılabilir; başarısız denemeleri hafızadan silmek için ise /rewind komutu kullanılır.
• Proje Yapılandırması (Claude.md): Projenin tüm kurallarını, sınırlarını ve gereksinimlerini tanımlayan kılavuz dosyasıdır; /init komutuyla oluşturulur.
• Optimizasyon Stratejileri: Türkçe karakterlerin İngilizceye kıyasla yaklaşık 2 kat daha fazla token tüketmesi nedeniyle .md dosyalarının ve skill tanımlarının İngilizce tutulması gerektiğini gördüm. Dosyaların .md formatına dönüştürülmesinde Docling CLI aracının token tasarrufu sağladığını, büyük dosyaların .cloudignore ile hariç tutulabildiğini; yerel çalıştırmanın (Local) testler için, bulut çalıştırmanın (Cloud) ise kesintisiz operasyonlar için ideal olduğunu belirledim.

n8n ile Yapay Zeka Destekli İş Akışı (Workflow) Otomasyonu
Farklı servis ve uygulamaları birbirine bağlayarak süreçleri otomatikleştiren n8n platformunu inceledim. Platformun bulut aboneliği yerine kendi sunucularımızda ücretsiz olarak barındırılabileceğini (Self-hosted) öğrendim.

Sistem mimarisine dair edindiğim temel kavramlar:
• Workflow: Sistemin ve otomasyon akışının bütünü.
• Node: İş akışı içerisindeki her bir işlem kutucuğu/adımı.
• Execution: Bir akışın baştan sona tek bir kez tetiklenip çalışması.

Pratik Otomasyon Uygulaması: Telegram & AI Agent Entegrasyonu
Öğrendiklerimi uygulamak adına Telegram üzerinden çalışan akıllı bir asistan botu kurguladım:
1. Trigger Entegrasyonu: Akışı başlatmak için telegram-on message tetikleyicisini seçtim; Telegram üzerinde oluşturduğum botun API anahtarını tanımlayarak platforma bağladım.
2. AI Agent & Node Yapısı: Akışa bir AI Agent düğümü ekledim. Bu düğümün Input (gelen veri), Settings (model seçimi, API parametreleri) ve Output (üretilen çıktı) alanlarını yapılandırdım.
3. Çift Yönlü İletişim: Modelin ürettiği yanıtın Telegram'a geri gönderilmesi için akışın sonuna telegram-send text message düğümünü bağladım. Akışın kesintisiz çalışması için projeyi Publish durumuna getirdim.
4. Memory ve Context Tanımlama: Botun geçmiş mesajları unutmaması için sisteme bir Memory düğümü entegre ettim. Ardından System Messages alanına rol, satış koşulları ve sınırları belirten detaylı bir bağlam (Context) tanımladım.
5. Araç Entegrasyonu (Tavily): Botun güncel internet aramaları yapabilmesi adına Tavily arama motorunun API bağlantısını bir Tool olarak sisteme dahil ettim ve model talimatlarına internet araması gerektiğinde bu aracı kullanması kuralını ekledim.

------------------------------------------------------------
Cumartesi – 15 Ağustos 2026
------------------------------------------------------------
Haftanın son gününde mobil üzerinden uzaktan geliştirme iş akışlarını, SaaS platform mimarisini, Google AI Studio'nun gelişmiş kullanım senaryolarını inceledim ve edindiğim tüm bu araçları bir araya getirecek yeni bir proje planı kurguladım.

Claude Uzaktan Yönetim ve SaaS Mimari Temelleri
Geliştirme süreçlerini mekandan bağımsız hale getirmek ve modern SaaS projeleri inşa etmek adına edindiğim temel altyapı prensiplerini şu şekilde derledim:
• Mobil Remote Control: Evdeki bilgisayar açık ve bağlı durumdayken cep telefonundaki Claude App üzerinden aynı aktif geliştirme oturumuna bağlanarak kod üretiminin ve proje takibinin kesintisiz sürdürülebileceğini gördüm. Sistemin kesintiye uğramaması adına Mac sistemlerde Amphetamine gibi uyku modu engelleyici araçların kullanım mantığını inceledim.
• SaaS Temel Bileşenleri: Bir SaaS projesinin arayüz (Frontend), iş mantığı/doğrulama kuralları (Backend) ve verilerin kalıcı saklandığı veri tabanı (Database) olmak üzere üç ana ayaktan oluştuğunu; bağımsız veri yönetimi için Cloudflare D1 (SQLite) gibi çözümlerin ideal olduğunu belirledim.
• Dağıtım ve Alan Adı Yönetimi: Projelerin Cloudflare, Vercel veya Netlify üzerinden yayınlanabileceğini; VS Code terminalinde Wrangler CLI (wrangler login) ile Cloudflare entegrasyonu kurularak özel domain ve sub-domain bağlantılarının saniyeler içinde yapılandırılabildiğini öğrendim.
• Güvenlik ve Çevre Değişkenleri: API anahtarlarının doğrudan koda yazılmayıp .env dosyalarında tutulması, bu dosyaların GitHub'a sızmasını önlemek adına .gitignore içine dahil edilmesi gerektiğini gördüm. Ayrıca projelerin güvenlik açıklarını denetlemek için Claude üzerinden Security Audit yaptırmanın (istek sınırlandırma, bot koruması kontrolü) kritik önemini kavradım.
• Ödeme ve API Entegrasyonları: Üçüncü parti sohbet botu entegrasyonlarında bağımsız OpenAI API anahtarları tanımlanması ve bütçe aşımına karşı harcama limiti konulması gerektiğini; Türkiye operasyonlarında ödeme altyapısı olarak Paddle veya Creem gibi sağlayıcıların regülasyon süreçlerini kolaylaştırdığını inceledim.

Google AI Studio Kullanım Alanları ve Veri Gizliliği
Google AI Studio platformunun sunduğu olanakları ve dikkat edilmesi gereken noktaları şu başlıklar altında özetledim:
• System Instructions ile Marka Kimliği: Modele belirli bir marka sesi, tonlama ve negatif kural kümesi tanımlanarak her sorguda aynı bağlamı baştan anlatma ihtiyacının ortadan kalktığını gördüm.
• Canlı Analiz ve UX Çözümleri: Ekran paylaşımı özelliğiyle rakip web sitelerinin canlı olarak analiz ettirilebildiğini; yüklenen ekran görüntülerinden font, renk ve yerleşim detaylarını içeren UX tasarım promptları üretilebildiğini deneyimledim.
• Multimodal Üretim (TTS ve Imagen): Gemini Flash ile özelleştirilebilir ton ve aksanlarda seslendirmeler (Text-to-Speech) yapılabildiğini; Imagen modelleriyle profesyonel ürün görselleri üretilebildiğini öğrendim.
• Maliyet ve Veri Gizliliği Dengesi: Platformun kullandığın kadar öde (Pay-per-request) modeliyle aylık çok düşük maliyetler sunduğunu; ancak ücretsiz plandaki verilerin model eğitiminde kullanılabileceğini, bu nedenle kurumsal ve hassas verilerle çalışırken mutlaka API veya ücretli plana geçilerek veri gizliliğinin güvenceye alınması gerektiğini saptadım.

Haftalık Rapor Portalı Proje Tasarımı
Hafta boyunca öğrendiğim araçları somut bir ürüne dönüştürmek adına pratik bir proje fikri geliştirdim. Bugüne kadar hazırladığım tüm haftalık raporların görüntülenebileceği, istatistiklerinin ve detaylarının incelenebileceği bir Haftalık Rapor Web Portalı tasarlamaya karar verdim.

Projenin iskeletini ve mimari yol haritasını şu şekilde planladım:
1. Geliştirme: Uygulamanın temel bileşenlerini ve arayüzünü Google AI Studio desteğiyle kurgulamak.
2. Versiyonlama & Dağıtım: Kod dosyalarını GitHub üzerine aktarıp Vercel entegrasyonuyla projeyi canlı bir web sitesine dönüştürmek.
3. Otomasyon (n8n): Sisteme her yeni haftalık rapor eklendiğinde portalın otomatik olarak güncellenmesini sağlayacak bir n8n iş akışı kurmak.

Önümüzdeki hafta bu portalın geliştirme ve dağıtım süreçlerine doğrudan başlayacağım.`
};

// Filter out existing duplicates if any, and append all 5 reports in order
const allReports = [
  existingData[0],
  existingData[1],
  report3,
  report4,
  report5
];

fs.writeFileSync('data.json', JSON.stringify(allReports, null, 2), 'utf8');
console.log('Successfully updated data.json with 5 reports!');
