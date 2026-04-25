const bannerSrc = "assets/bio-banner.png";
const charlotteCardSrc = "assets/charlotte-card.png";
const charlotteStampSrc = "assets/charlotte-stamp.png";

const facts = ["infp so469 ell mel-phleg"];
const interests = ["hello charlotte", "anime", "music"];

export default function Home() {
  return (
    <div className="page">
      <header className="profile">
        <div className="profile__top">
          <div className="identity">
            <div>
              <h1>maf</h1>
              <p>@meowmaf4w5</p>
            </div>
          </div>
          
        </div>

        <div className="status-row" aria-label="profile status">
          <span>charlotte kisser</span>
        </div>

        <div className="hero">
          <div className="banner">
            <img src={bannerSrc} alt="шарлотта любимая" />
            <div className="banner__caption">cr : idk !</div>
          </div>

          <aside className="polaroid" aria-label="charlotte portrait">
            <img src={charlotteCardSrc} alt="шарлотта q84 портрет" />
            <div>
              <strong>current mood</strong>
              <span>soft</span>
            </div>
          </aside>
        </div>
      </header>

      <nav className="tabs" aria-label="bio sections">
        <a href="#main">main</a>
        <a href="#interests">interests</a>
        <a href="#comfort">comfort</a>
        <a href="#notes">notes</a>
      </nav>

      <main>
        <section className="intro" id="main">
          <div className="quote">
            <span>все фд в основном инфо !</span>
          </div>

          <div className="tags" aria-label="personality tags">
            {facts.map((fact) => (
              <span key={fact}>{fact}</span>
            ))}
          </div>
        </section>

        <section className="section section--main">
          <div className="section__label">main</div>
          <div className="section__content">
            <p>
              заполню позже ! 
            </p>
          </div>
        </section>

        <section className="section section--visual" id="interests">
          <div className="section__label">interests</div>
          <div className="section__content names">
            {interests.map((interest) => (
              <span key={interest}>{interest}</span>
            ))}
          </div>
          <img className="stamp" src={charlotteStampSrc} alt="шарлотта q84 stamp" />
        </section>

        <section className="section" id="comfort">
          <div className="section__label">comfort</div>
          <div className="section__content">
            <p>неагрессивное общение !</p>
          </div>
        </section>

        <section className="soft-grid" aria-label="extra bio notes">
          <div>
            <strong>currently</strong>
            <p>67</p>
          </div>
          <div>
            <strong>likes</strong>
            <p>шарлоттку и some kind of horror</p>
          </div>
          <div>
            <strong>note</strong>
            <p>he / him or any pronouns </p>
          </div>
        </section>

        <section className="note" id="notes">
          <div>
            <strong>byf</strong>
            <p>
              стараюсь писать первым и отвечать всегда моментально ! если не отвечаю
              просто подначьте ! если не шарю за ваш фд то с удовольствием зашарю !
            </p>
          </div>
          <div>
            <strong>dni</strong>
            <p>агрессивное общение, игнор без причин !</p>
          </div>
        </section>
      </main>
    </div>
  );
}
