Projelerimize bağımlılık ekleyeceksek örneğin npm ile bootstrap indirecek isek ilk önce aşağıda ki kodu yazarak 
package.json dosyasını projemizde oluşturmasını istiyoruz. Bu sayede yüklenecek her package bu dosyada version bilgisi ile birlikte
tutulacaktır. 

npm init -y 

Daha sonrasında indirilecek package indilir ;
npm install bootstrap

Package silinmek istendiğind;
npm uninstall {packagename}

Bir de yazılımcının bağlılıları vardır. Bunları package.json da ki dependency sekmesinin altında tutmamak gerekir. 
Örneğin unit test için indirilen package yazılımcıyı bağlar. Bu nedenle bağlılılara unit test package'ı eklenirken;

npm install jasmine --save-dev 

Eğer bir versiona özel package indirmek istiyorsanız;
npm install bootstrap@3.3.7


sende ki package'leri npm'de ki son sürümleri ile karşılaştırmanı sağlıyor. 
npm outdated

tüm package'lerın update edilmesi için kod aşağıdadır. Ancak 3.3.7 olarak aldıysan son sürümü getirmez. o version'da değişiklik
var ise onun update'ini alır.
npm update


Sürekli server'ı durdurup tekrar çalıştırmak yerine dosyaları izler. Bir değişiklik varsa sadece proxy sayfasını yenilemek 
Değişikliği görmek için yeterlidir. 
 
nmp install -g modemon