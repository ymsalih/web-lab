# CSS Kararları

## 1. Breakpoint Seçimi
Neden 640px ve 1024px seçtim? İçeriğim bu noktalarda nasıl değişiyor?
Mobil cihazlardan tablet ve masaüstüne geçişte en yaygın kullanılan endüstri standartları olduğu için 640px (tablet) ve 1024px (masaüstü) kırılım noktalarını belirledim. 640px'te dikey olan navigasyon menüsü ve "Hakkımda" bölümü yatay düzene geçiyor. 1024px'te ise içerik genişliği sınırlandırılarak (max-width: 1200px) proje kartları geniş ekrana yayılıyor.

## 2. Layout Tercihleri
Header için neden Flexbox seçtim? Proje kartları için neden Grid seçtim? auto-fit mi auto-fill mi kullandım, neden?
Header ve Navigasyon gibi elemanların tek bir eksende (yan yana) hizalanması gerektiği için Flexbox kullandım. Proje kartları gibi hem satır hem de sütun içeren iki boyutlu düzenlerde CSS Grid çok daha pratik olduğu için Grid tercih ettim. Grid yapısında `auto-fit` kullandım çünkü ekran genişlediğinde boş sütun kalmasını istemedim, mevcut kartların o boşluğu doldurarak esnemesi tasarımı daha akıcı hale getirdi.

## 3. Design Tokens
Hangi renk paletini seçtim ve neden? Spacing skalasını nasıl belirledim? Fluid typography için clamp değerlerini nasıl ayarladım?
Güven veren ve profesyonel duran koyu lacivert (primary) ve parlak mavi (secondary) tonlarını tercih ettim. Spacing (boşluk) skalasını 4'ün katları olacak şekilde (4px, 8px, 16px, 24px) sistematik bir yapıya oturtarak tutarlılık sağladım. Yazı boyutları için `clamp()` fonksiyonunda `rem + vw` birimlerini bir arada kullanarak metinlerin mobil ekrandan masaüstü ekrana geçerken kesintisiz ve akıcı bir şekilde büyümesini sağladım.

## 4. Responsive Stratejiler
Mobile-first yaklaşımını nasıl uyguladım? Hangi elemanlar breakpoint'lerde değişiyor? Görsel boyutları nasıl yönettim?
CSS kodlarımı yazarken varsayılan olarak mobil görünümü (dar ekranları) hedef aldım ve ekran büyüdükçe `min-width` kullanarak yeni özellikler ekledim. Örneğin form butonları mobilde %100 genişlikteyken, tablette kendi boyutuna dönüyor. Görsellerin küçük ekranlarda sayfadan taşmasını engellemek için `max-width: 100%` kuralını uyguladım ve orantılarının bozulmaması için `object-fit: cover` kullandım.