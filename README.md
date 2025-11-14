# 🎮 Battlepass Ödül Sistemi

Modern, responsive ve erişilebilir bir battlepass ödül talep arayüzü.

## ✨ Özellikler

### 🚀 Modern Teknolojiler
- ✅ **Vanilla JavaScript** - jQuery bağımlılığı kaldırıldı
- ✅ **ES6+ Syntax** - Modern JavaScript özellikleri (Class, Arrow Functions, etc.)
- ✅ **Modüler Kod Yapısı** - Ayrı CSS ve JS dosyaları
- ✅ **LocalStorage Desteği** - Durum kalıcılığı

### 🎨 Gelişmiş Görsel Özellikler
- ✅ **Smooth Animasyonlar** - CSS transitions ve keyframe animations
- ✅ **Hover Efektleri** - İnteraktif buton geri bildirimleri
- ✅ **Shimmer Effect** - Progress bar üzerinde parlama efekti
- ✅ **Pulse Animasyonu** - Ödül toplama sırasında görsel geri bildirim
- ✅ **Gradient Backgrounds** - Modern gradient arka planlar

### 📱 Responsive Tasarım
- ✅ **Mobile-First** - Mobil cihazlar için optimize edilmiş
- ✅ **Responsive Scaling** - Farklı ekran boyutlarına uyumlu
- ✅ **Touch-Friendly** - Dokunmatik ekranlar için optimize

### ♿ Erişilebilirlik
- ✅ **ARIA Labels** - Ekran okuyucular için uyumlu
- ✅ **Keyboard Navigation** - Klavye ile tam kontrol (Tab, Enter, Space)
- ✅ **Focus States** - Odaklanma durumları için görsel göstergeler
- ✅ **Reduced Motion** - Hareket hassasiyeti olan kullanıcılar için destek
- ✅ **High Contrast Mode** - Yüksek kontrast modu desteği

### 🎯 Gelişmiş Özellikler
- ✅ **State Management** - localStorage ile durum yönetimi
- ✅ **Auto-Save** - Otomatik kaydetme
- ✅ **Debug Console** - Geliştirici konsolunda debug komutları
- ✅ **Celebration Effect** - Tüm ödüller toplandığında özel efekt
- ✅ **Tooltips** - Hover ile bilgi kutuları (opsiyonel)

## 🎮 Kullanım

### Temel Kullanım
1. Sayfayı bir web tarayıcısında açın
2. Tek tek ödülleri toplamak için küçük butonlara tıklayın
3. Tüm ödülleri birden toplamak için "Claim All" butonuna tıklayın

### Klavye Kontrolleri
- `Tab` - Butonlar arasında gezinme
- `Enter` veya `Space` - Seçili butona tıklama
- `Shift + Tab` - Geriye doğru gezinme

### Geliştirici Komutları
Tarayıcı konsolunda (`F12`) kullanılabilir:

```javascript
// Tüm ödülleri sıfırla
battlepass.reset()

// Toplanan ödül sayısını görüntüle
battlepass.claimedCount

// Tüm battlepass nesnesini incele
window.battlepass
```

## 📂 Dosya Yapısı

```
battlepass-site/
├── index.html          # Ana HTML dosyası
├── style.css           # Modern CSS stilleri
├── app.js              # Vanilla JavaScript kodu
├── README.md           # Dokümantasyon
└── assets/             # Görseller
    ├── backround.PNG
    ├── progress.png
    ├── pt_button.png
    ├── pt_button_press.png
    ├── bg_botton.png
    └── bg_button_press.png
```

## 🔧 Teknik Detaylar

### Tarayıcı Desteği
- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+

### Performans
- 🚀 **Hızlı Yükleme** - Preload ile kritik kaynaklar
- 🚀 **Optimize Edilmiş Animasyonlar** - CSS transforms ve opacity kullanımı
- 🚀 **Küçük Dosya Boyutu** - Harici bağımlılık yok

### Güvenlik
- 🔒 **XSS Koruması** - Güvenli DOM manipülasyonu
- 🔒 **CSP Uyumlu** - Content Security Policy ile uyumlu
- 🔒 **LocalStorage Validation** - Try-catch ile hata yönetimi

## 🎨 Özelleştirme

### Renk Değişkenleri
`style.css` dosyasındaki CSS değişkenlerini düzenleyerek renkleri özelleştirebilirsiniz:

```css
:root {
    --primary-gold: #ffd700;
    --claimed-green: #4caf50;
    --bg-dark: #2b1f1d;
    --progress-orange: #ff8c00;
    --white: #ffffff;
}
```

### Buton Sayısını Değiştirme
`app.js` dosyasında:
```javascript
this.totalButtons = 6; // İstediğiniz sayıya değiştirin
```

## 📝 Değişiklik Günlüğü

### v2.0 (2025)
- ✨ jQuery kaldırıldı, vanilla JavaScript'e geçildi
- ✨ Modern ES6+ Class yapısı
- ✨ Erişilebilirlik özellikleri eklendi
- ✨ LocalStorage ile durum yönetimi
- ✨ Gelişmiş animasyonlar ve efektler
- ✨ Responsive tasarım
- ✨ Debug console komutları
- ✨ Modüler dosya yapısı
- ✨ Performance optimizasyonları

### v1.0 (Önceki)
- Temel HTML/CSS/jQuery yapısı
- Inline kod
- Basit animasyonlar

## 🤝 Katkıda Bulunma

1. Projeyi fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add some amazing feature'`)
4. Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. Pull Request açın

## 📄 Lisans

Bu proje açık kaynak kodludur ve serbestçe kullanılabilir.

## 🙏 Teşekkürler

Modern web teknolojileri ve en iyi pratikler kullanılarak geliştirilmiştir.

---

**Geliştirici:** Claude Code
**Versiyon:** 2.0
**Son Güncelleme:** 2025
