import './App.css'

function App() {
  return (
    <>
      {/* Erişilebilirlik için navigasyonu atlama bağlantısı [cite: 994, 1011] */}
      <a href="#main-content" className="skip-link">
        Ana içeriğe atla
      </a>

      {/* Sayfa Başlık Alanı [cite: 741, 742] */}
      <header>
        <nav aria-label="Ana navigasyon"> {/* [cite: 981, 982] */}
          <ul>
            <li><a href="#hakkimda">Hakkımda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">İletişim</a></li>
          </ul>
        </nav>
      </header>

      {/* Birincil İçerik Alanı - Sayfada sadece bir kez kullanılır [cite: 747, 748, 818] */}
      <main id="main-content">

        {/* Hakkımda Bölümü [cite: 750, 752, 1191] */}
        <section id="hakkimda">
          <h1>Salih Atiç - Kişisel Portfolyo</h1> {/* Ana başlık hiyerarşisi [cite: 857, 868] */}
          <figure> {/* [cite: 761, 920] */}
            <img
              src="profilResmi"
              alt="Salih Atiç'in vesikalık fotoğrafı" // Anlamlı alt metin [cite: 906, 918]
            />
            <figcaption>Salih Atiç - Öğrenci No: 230541026</figcaption>
          </figure>
          <p>Web Tasarımı ve Programlama dersi kapsamında geliştirilen erişilebilir portfolyo sayfasıdır.</p>
        </section>

        {/* Projeler Bölümü [cite: 1196] */}
        <section id="projeler">
          <h2>Projelerim</h2> {/* Bölüm başlığı [cite: 751, 858] */}
          <article> {/* Bağımsız içerik bloğu [cite: 753, 754] */}
            <h3>Web Projesi 1</h3>
            <p>Vite ve React kullanılarak oluşturulmuş ilk laboratuvar çalışması.</p>
          </article>
        </section>

        {/* İletişim Formu Bölümü [cite: 799, 1088, 1179] */}
        <section id="iletisim">
          <h2>İletişim</h2>
          {/* novalidate: Özel hata mesajları için tarayıcı balonlarını kapatır [cite: 1167, 1168] */}
          <form action="#" method="POST" noValidate>
            <fieldset> {/* İlişkili alanları gruplar [cite: 1043, 1092] */}
              <legend>İletişim Formu</legend>

              <div className="form-group">
                <label htmlFor="name">Ad Soyad: </label> {/* label-id ilişkisi  */}
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  minLength={2} // [cite: 1080, 1097]
                  aria-describedby="name-error" // [cite: 957, 1099]
                />
                <small id="name-error" className="error-msg" role="alert"></small> {/* [cite: 1098, 1170] */}
              </div>

              <div className="form-group">
                <label htmlFor="email">E-posta: </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  aria-describedby="email-error"
                />
                <small id="email-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mesajınız:</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  minLength={10}
                  aria-describedby="message-error"
                ></textarea>
                <small id="message-error" className="error-msg" role="alert"></small>
              </div>

              <button type="submit">Gönder</button>
            </fieldset>
          </form>
        </section>
      </main>

      {/* Alt Bilgi Alanı [cite: 759, 760] */}
      <footer>
        <p>&copy; 2026 Salih Atiç. Tüm hakları saklıdır.</p>
      </footer>
    </>
  )
}

export default App