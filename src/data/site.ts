export const site = {
  name: 'OrthoFit Schuhtechnik GmbH',
  tagline: 'Orthopädie-Schuhtechnik in Magdeburg & Schönhausen',
  description: 'OrthoFit Schuhtechnik – Ihr Spezialist für orthopädische Maßschuhe, individuelle Einlagen, Bewegungsanalyse und das BIOPATHOTEC Schmerzkonzept in Magdeburg und Schönhausen.',
  owner: 'Volker Herbst',
  ownerTitle: 'Orthopädie-Schuhmachermeister',
  email: 'info@orthofit-schuhtechnik.de',
  phone: '0391 54 32 611',
  phoneSchönhausen: '039323 75 76 64',
  fax: '0391 54 15 256',
  vatId: 'DE813805911',
  registerNumber: 'HRB 17729, Amtsgericht Stendal',
  social: {
    facebook: 'https://www.facebook.com/MovecontrolOrthoFit',
    instagram: 'https://www.instagram.com/orthofit_magdeburg/',
  },
} as const;

export const standorte = [
  {
    name: 'Magdeburg',
    street: 'Universitätsplatz 11',
    zip: '39104',
    city: 'Magdeburg',
    phone: '0391 54 32 611',
    fax: '0391 54 15 256',
    email: 'info@orthofit-schuhtechnik.de',
    mapsQuery: 'OrthoFit+Schuhtechnik+GmbH+Universitätsplatz+11+39104+Magdeburg',
    oeffnungszeiten: [
      { tag: 'Montag', zeit: '09:00 – 13:00 & 15:00 – 18:00 Uhr' },
      { tag: 'Dienstag', zeit: 'Geschlossen' },
      { tag: 'Mittwoch', zeit: '09:00 – 13:00 Uhr' },
      { tag: 'Donnerstag', zeit: '09:00 – 13:00 & 15:00 – 18:00 Uhr' },
      { tag: 'Freitag', zeit: '09:00 – 13:00 & 15:00 – 18:00 Uhr' },
    ],
    hauptstandort: true,
  },
  {
    name: 'Schönhausen',
    street: 'Bismarckstraße 8',
    zip: '39524',
    city: 'Schönhausen (Elbe)',
    phone: '039323 75 76 64',
    email: 'info@orthofit-schuhtechnik.de',
    mapsQuery: 'OrthoFit+Schuhtechnik+GmbH+Bismarckstraße+8+39524+Schönhausen',
    oeffnungszeiten: [
      { tag: 'Dienstag', zeit: '09:00 – 13:00 & 14:00 – 17:00 Uhr' },
    ],
    hauptstandort: false,
  },
] as const;

export const leistungen = [
  { slug: 'orthopaedische-massschuhe', title: 'Orthopädische Maßschuhe', icon: '👞', kurz: 'Individuell handgefertigt auf Ihrem persönlichen Leisten.' },
  { slug: 'individuelle-einlagen', title: 'Individuelle Einlagen', icon: '🦶', kurz: 'Maßgefertigte Einlagen nach umfassender Fußanalyse.' },
  { slug: 'schmerzkonzept', title: 'BIOPATHOTEC Schmerzkonzept', icon: '💡', kurz: 'Biomechanisches Schmerzkonzept für Fuß, Knie, Hüfte und Wirbelsäule.' },
  { slug: 'bewegungsanalyse', title: 'Bewegungsanalyse', icon: '📊', kurz: 'Computergestützte Ganganalyse mit 2D-Video und Fußdruckmessung.' },
  { slug: 'schuhzurichtung', title: 'Schuhzurichtung', icon: '🔧', kurz: 'Orthopädische Anpassung Ihrer Konfektionsschuhe.' },
  { slug: 'diabetiker', title: 'Diabetiker-Versorgung', icon: '🩺', kurz: 'DIABETEC Konzept zum Schutz des diabetischen Fußes.' },
  { slug: 'rheumatiker', title: 'Rheumatiker-Versorgung', icon: '🤲', kurz: 'Spezielle Versorgungskonzepte für Rheuma-Patienten.' },
  { slug: 'bandagen', title: 'Bandagen & Kompression', icon: '🩹', kurz: 'Stabilisierung und Regenerationsförderung.' },
  { slug: 'arbeitssicherheitsschuhe', title: 'Arbeitssicherheitsschuhe', icon: '🥾', kurz: 'Orthopädische Einlagen nach DGUV-Richtlinien.' },
] as const;

export const navigation = [
  { label: 'Start', href: '/' },
  {
    label: 'Leistungen', href: '/leistungen/',
    children: leistungen.map(l => ({ label: l.title, href: `/leistungen/${l.slug}/` })),
  },
  { label: 'Für Sportler', href: '/zielgruppen/sport/' },
  { label: 'Kontakt', href: '/kontakt/' },
] as const;
