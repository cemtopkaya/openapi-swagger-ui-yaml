const express = require("express");
const pathToSwaggerUi = require("swagger-ui-dist").absolutePath();

const app = express();

app.use(express.static(pathToSwaggerUi));

app.use('/openapi', express.static('openapi_examples'))

console.log(
` /**********************************************************/
  * 3000 Portunda express sunucu ayağa kalkacak:
  *    http://localhost:3000
  * 
  * openapi_examples dizininde yer alan OpenApi 2, 3 ve 3.1 
  * versiyonlarında örnek dosyalar bulunuyor.
  * Açılacak sayfada aşağıdaki adresi yazarak API'nin 
  * hem belgelendirmesine hem de testi için aşağıdaki adresi
  * explore düğmesinin olduğu satıra yazarak proje dizinindeki 
  * dosyaları kontrol edebilirsiniz:
  *   http://localhost:3000/openapi/v3.0/uspto.yaml
  * 
  * Eğer farklı bir dizinde yaml/json formatında OpenApi dosyalarınız
  * var ise VS Code uzantılarından "Live Server" kurduktan sonra 
  * OpenApi dosyalarınızın (yaml/json) olduğu dizine giderek 
  * en alttaki çubukta yer alan "Go Live" düğmesine basarak 
  * http://localhost:5500 adresinde dosyalarınızın URL adreslerini
  * EXPLORE düğmesinin olduğu çubuğa yapıştırabilirsiniz.
  * 
  * Detaylar için Readme.md dosyasına bakabilirsiniz.
  * 
  **********************************************************/`
);
app.listen(3000);
