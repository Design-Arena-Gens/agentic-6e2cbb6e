export default function Home() {
  return (
    <div className="container">
      <header className="header">
        <h1 className="title">श्रीमद् भगवद्गीता</h1>
        <p className="subtitle">अध्याय १ - अर्जुनविषादयोग</p>
        <p className="subtitle" style={{ fontSize: '1.2rem', marginTop: '0.5rem', color: '#718096' }}>
          Chapter 1 - Arjuna Vishada Yoga
        </p>
      </header>

      <main>
        <article className="verse-card">
          <div className="speaker">धृतराष्ट्र उवाच</div>
          <div className="verse-number">श्लोक १ (Verse 1)</div>

          <div className="verse-text">
            धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः।<br />
            मामकाः पाण्डवाश्र्चैव किमकुर्वत सञ्जय॥ १॥
          </div>

          <div className="divider"></div>

          <div className="meaning-section">
            <h2 className="meaning-title">भावार्थ (Meaning)</h2>
            <p className="meaning-text">
              धृतराष्ट्र ने कहा -- हे संजय! धर्मभूमि कुरुक्षेत्र में युद्ध की इच्छा से एकत्र हुए
              मेरे तथा पाण्डु के पुत्रों ने क्या किया?
            </p>
          </div>

          <div className="meaning-section" style={{ marginTop: '2rem' }}>
            <h2 className="meaning-title" style={{ color: '#764ba2' }}>
              English Translation
            </h2>
            <p className="meaning-text">
              Dhritarashtra said: O Sanjaya, after gathering on the holy field of Kurukshetra,
              and desiring to fight, what did my sons and the sons of Pandu do?
            </p>
          </div>

          <div className="meaning-section" style={{ marginTop: '2rem' }}>
            <h2 className="meaning-title" style={{ color: '#667eea' }}>
              Commentary
            </h2>
            <p className="meaning-text">
              This is the opening verse of the Bhagavad Gita, where the blind King Dhritarashtra
              inquires from his minister Sanjaya about the events unfolding on the battlefield
              of Kurukshetra. The term "dharma-kshetra" (field of dharma) is significant,
              indicating that this is a sacred land where righteousness prevails. Dhritarashtra,
              knowing the virtuous nature of the Pandavas and the holy significance of Kurukshetra,
              is anxious to learn the outcome of the impending battle between his sons
              (the Kauravas) and his nephews (the Pandavas).
            </p>
          </div>
        </article>

        <div className="verse-card" style={{ background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)' }}>
          <h3 style={{
            fontFamily: "'Noto Serif Devanagari', serif",
            fontSize: '1.5rem',
            color: '#764ba2',
            marginBottom: '1rem',
            textAlign: 'center'
          }}>
            About This Verse
          </h3>
          <p style={{
            fontSize: '1.1rem',
            lineHeight: '1.8',
            color: '#4a5568',
            textAlign: 'justify'
          }}>
            The Bhagavad Gita begins with this question from the blind King Dhritarashtra.
            Despite being physically blind, he possessed the inner vision granted by the sage Vyasa,
            allowing his minister Sanjaya to describe the events of the battle. This opening verse
            sets the stage for the entire dialogue between Lord Krishna and Arjuna, which forms
            the essence of the Gita's teachings on dharma, karma, devotion, and self-realization.
          </p>
        </div>
      </main>

      <footer className="footer">
        <p>॥ ॐ तत्सत् ॥</p>
        <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>
          Om Tat Sat - That Absolute Truth
        </p>
      </footer>
    </div>
  )
}
