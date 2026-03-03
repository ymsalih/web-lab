import './App.css'
// ÖNEMLİ: Görsel dosyanızın adı src/assets/profil.jpg olmalıdır.
import profilResmi from './assets/WhatsApp Image 2026-01-02 at 22.52.40.jpeg'

function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">Ana içeriğe atla</a>

      <header>
        <div className="site-title">Salih Atiç</div>
        <nav aria-label="Ana navigasyon">
          <ul>
            <li><a href="#hakkimda">Hakkımda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">İletişim</a></li>
          </ul>
        </nav>
      </header>

      <main id="main-content">
        <section id="hakkimda">
          <div className="about-content">
            <figure>
              <img src={profilResmi} alt="Salih Atiç'in vesikalık fotoğrafı" />
              <figcaption>Salih Atiç - Öğrenci No: 230541026</figcaption>
            </figure>
            <div className="about-text">
              <h1>Kişisel Portfolyo</h1>
              <p>Web Tasarımı ve Programlama dersi kapsamında geliştirilen modern, erişilebilir ve responsive (Flex/Grid) portfolyo sayfasıdır.</p>

              <ul className="skill-tags" role="list" aria-label="Beceri etiketleri">
                <li>HTML5</li>
                <li>CSS3 (Flex/Grid)</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>TypeScript</li>
                <li>Git</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="projeler">
          <h2>Projelerim</h2>
          <div className="project-grid">
            <article className="project-card">
              <img src="https://via.placeholder.com/400x200?text=Proje+1" alt="E-Ticaret sitesi anasayfa ekran görüntüsü" />
              <h3>E-Ticaret Sitesi</h3>
              <p>React ve Node.js ile geliştirilmiş tam kapsamlı bir e-ticaret uygulaması.</p>
              <ul className="skill-tags">
                <li>React</li>
                <li>Node.js</li>
                <li>MongoDB</li>
              </ul>
            </article>

            <article className="project-card">
              <img src="https://via.placeholder.com/400x200?text=Proje+2" alt="Blog uygulaması yazı listesi görünümü" />
              <h3>Blog Uygulaması</h3>
              <p>Kişisel blog platformu. Markdown destekli yazı editörü barındırır.</p>
              <ul className="skill-tags">
                <li>TypeScript</li>
                <li>Next.js</li>
              </ul>
            </article>

            <article className="project-card">
              <img src="https://via.placeholder.com/400x200?text=Proje+3" alt="Hava durumu uygulaması arayüzü" />
              <h3>Hava Durumu</h3>
              <p>OpenWeather API kullanılarak geliştirilmiş anlık hava durumu bilgisi sunan platform.</p>
              <ul className="skill-tags">
                <li>JavaScript</li>
                <li>API</li>
              </ul>
            </article>
          </div>
        </section>

        <section id="iletisim">
          <h2>İletişim</h2>
          <form action="#" method="POST" noValidate>
            <fieldset>
              <legend>İletişim Formu</legend>

              <div className="form-group">
                <label htmlFor="name">Ad Soyad: </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  minLength={2}
                  aria-describedby="name-error"
                />
                <small id="name-error" className="error-msg" role="alert"></small>
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
                <label htmlFor="subject">Konu: </label>
                <select id="subject" name="subject" required aria-describedby="subject-error">
                  <option value="">-- Seçiniz --</option>
                  <option value="is">İş Teklifi</option>
                  <option value="soru">Soru</option>
                  <option value="oneri">Öneri</option>
                </select>
                <small id="subject-error" className="error-msg" role="alert"></small>
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

      <footer>
        <p>&copy; 2026 Salih Atiç. Tüm hakları saklıdır.</p>
      </footer>
    </>
  )
}

export default App