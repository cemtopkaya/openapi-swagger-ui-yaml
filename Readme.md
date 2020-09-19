
## Swagger-UI İle OpenApi Dosyalarını Görüntüleyebilmek

3000 Portunda express sunucu ayağa kalkacak:
   http://localhost:3000
  
openapi_examples dizininde yer alan OpenApi 2, 3 ve 3.1 
versiyonlarında örnek dosyalar bulunuyor.
Açılacak sayfada aşağıdaki adresi yazarak API'nin 
hem belgelendirmesine hem de testi için aşağıdaki adresi
explore düğmesinin olduğu satıra yazarak proje dizinindeki 
dosyaları kontrol edebilirsiniz:
  http://localhost:3000/openapi/v3.0/uspto.yaml

## OpenApi Dosyalarınızı Swagger-UI İçinde Kullanılabilir Kılmak

Kök dizininde `openapi_examples` isimli dizinde çeşitli OpenApi 
dosyalarınızı YAML/JSON webden erişilebilir hale getirmek için 
`express` içinde aşağıdaki ayarı yapıyoruz:

```
app.use('/openapi', express.static('openapi_examples'))
```

Böylece `/openapi` altında dosyalara erişebiliyoruz. Bkz.
 http://localhost:3000/openapi/v3.0/uspto.yaml 
  
## OpenApi Dosyalarınızı Web Sunucuda Ulaşılabilir Kılmak

Eğer farklı bir dizinde yaml/json formatında OpenApi dosyalarınız
var ise VS Code uzantılarından [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) kurduktan sonra 
OpenApi dosyalarınızın (yaml/json) olduğu dizine giderek 
en alttaki çubukta yer alan "Go Live" düğmesine basarak 
http://localhost:5500 adresinde dosyalarınızın URL adreslerini
EXPLORE düğmesinin olduğu çubuğa yapıştırabilirsiniz.