/* =========================================================
   Traductions FR / EN
   - Le français est la langue par défaut (texte déjà présent dans le HTML).
   - data-i18n="clé"       -> remplace le texte brut
   - data-i18n-html="clé"  -> remplace le contenu HTML (liens, <strong>, <em>…)
   - <html data-title="clé"> -> clé utilisée pour le titre de l'onglet
   ========================================================= */

const TRANSLATIONS = {
  fr: {
    "page.title": "Défi IA Embarquée Toulouse",
    "page.title.community": "Communauté – Défi IA Embarquée Toulouse",
    "page.title.seminars": "Séminaires – Défi IA Embarquée Toulouse",

    "nav.intro": "Introduction",
    "nav.news": "Actualités",
    "nav.seminars": "Séminaires",
    "nav.community": "Communauté",
    "nav.collaborators": "Collaborateurs",
    "nav.contact": "Contact",

    "header.title": "Défi Embarquabilité de l'IA",
    "header.subtitle":
      "Recherche et animation scientifique autour de l’intelligence artificielle embarquée à Toulouse",

    "intro.title": "Introduction",
    "intro.text":
      'Le défi <strong>"Embarquabilité de l\'IA"</strong> s’inscrit dans le cadre de l\'institut ' +
      '<a href="https://aniti.univ-toulouse.fr" target="_blank">ANITI de Toulouse</a> ' +
      'et de la chaire ' +
      '<a href="https://aniti.univ-toulouse.fr/fr_fr/embeddability-and-safety-assurance-of-ml-based-systems-under-certification" target="_blank">' +
      'CertifEmbAI – Certification of Machine Learning-based Systems</a>. ' +
      'Le défi réunit les chercheurs toulousains du <strong>LAAS</strong>, du <strong>IRIT</strong>, ' +
      'de l’<strong>ENAC</strong>, de l’<strong>ISAE</strong>, de l’<strong>ONERA</strong> et d’autres établissements, ' +
      'tous engagés dans les travaux autour de l’<strong>IA embarquée</strong>.',

    "news.title": "Actualités",
    "news.1":
      '<strong>3 novembre 2026 (14h, ENAC) :</strong> <strong>Séminaire</strong> avec ' +
      '<strong>Iryna de Albuquerque Silva (CEA List)</strong> : ' +
      '<em>"Aidge : un framework open-source et collaboratif pour la conception, ' +
      'l\'optimisation et le déploiement de l\'IA embarquée"</em>.',
    "news.2":
      '<strong>7 avril 2026 (10h-12h, ENAC) :</strong> Session <em>"Quantification des réseaux de neurones"</em>',
    "news.3":
      '<strong>20 février 2026 (14h-16h, ENAC) :</strong> Réunion de lancement du défi à <strong>l\'ENAC Toulouse</strong>.',
    "news.4":
      '<strong>30 novembre 2026 (14h, ENAC) :</strong> <strong>Séminaire</strong> avec ' +
      '<strong>Orégane Desrentes (Inria - LMF)</strong> : ' +
      '<em>"Tutorial on the FloPoCo generator"</em>.',

    "community.title": "Communauté",
    "community.subtitle": "Doctorants, publications et projets autour de l’IA embarquée à Toulouse",
    "phd.title": "Thèses en cours",
    "phd.1.meta": "Début de thèse : 01/11/2024",
    "phd.1.text": "IA embarquée sous forme de circuits sur FPGA.",
    "phd.2.meta": "Début de thèse : 01/10/2026",
    "phd.2.text": "IA embarquée et circuits neuromorphiques.",
    "phd.3.meta": "Début de thèse : 16/11/2026 – ONERA / ENAC",
    "phd.3.text": "Quantification formelle des DNNs sur FPGA.",
    "phd.4.text": "Architecture d'IA sur puce pour la détection de particules en temps réel.",
    "pub.title": "Publications 2026",

    "seminars.title": "Séminaires",
    "seminars.subtitle": "Rencontres scientifiques autour de l’IA embarquée",
    "seminars.upcoming": "À venir",
    "seminars.past": "Séminaires passés",

    "collab.title": "Collaborateurs",
    "role.mcf": "MCF",
    "role.mcfhdr": "MCF (HDR)",
    "role.dr": "DR",
    "role.cr": "CR",
    "role.ir": "IR",
    "role.prof": "Prof.",
    "role.phd": "Doctorante",
    "role.animatrice": "(Animatrice)",
    "role.animateur": "(Animateur)",

    "contact.title": "Contact",
    "contact.text":
      '<strong>Liste de diffusion :</strong><br>' +
      'Pour vous inscrire ou diffuser une information, envoyez un email à : ' +
      '<a href="mailto:defi-ia-embarque@groupes.renater.fr">defi-ia-embarque@groupes.renater.fr</a>',

    "footer.text": "© 2026 Défi Embarquabilité de l'IA Toulouse"
  },

  en: {
    "page.title": "Toulouse Embedded AI Challenge",
    "page.title.community": "Community – Toulouse Embedded AI Challenge",
    "page.title.seminars": "Seminars – Toulouse Embedded AI Challenge",

    "nav.intro": "Introduction",
    "nav.news": "News",
    "nav.seminars": "Seminars",
    "nav.community": "Community",
    "nav.collaborators": "Collaborators",
    "nav.contact": "Contact",

    "header.title": "AI Embeddability Challenge",
    "header.subtitle":
      "Research and scientific outreach on embedded artificial intelligence in Toulouse",

    "intro.title": "Introduction",
    "intro.text":
      'The <strong>"AI Embeddability"</strong> challenge is part of the ' +
      '<a href="https://aniti.univ-toulouse.fr" target="_blank">ANITI institute in Toulouse</a> ' +
      'and of the chair ' +
      '<a href="https://aniti.univ-toulouse.fr/fr_fr/embeddability-and-safety-assurance-of-ml-based-systems-under-certification" target="_blank">' +
      'CertifEmbAI – Certification of Machine Learning-based Systems</a>. ' +
      'The challenge brings together Toulouse-based researchers from <strong>LAAS</strong>, <strong>IRIT</strong>, ' +
      '<strong>ENAC</strong>, <strong>ISAE</strong>, <strong>ONERA</strong> and other institutions, ' +
      'all working on <strong>embedded AI</strong>.',

    "news.title": "News",
    "news.1":
      '<strong>November 3, 2026 (2 pm, ENAC):</strong> <strong>Seminar</strong> by ' +
      '<strong>Iryna de Albuquerque Silva (CEA List)</strong>: ' +
      '<em>"Aidge: an open-source, collaborative framework for the design, ' +
      'optimization and deployment of embedded AI"</em>.',
    "news.2":
      '<strong>April 7, 2026 (10 am-12 pm, ENAC):</strong> Session <em>"Neural network quantization"</em>',
    "news.3":
      '<strong>February 20, 2026 (2-4 pm, ENAC):</strong> Kick-off meeting of the challenge at <strong>ENAC Toulouse</strong>.',
    "news.4":
      '<strong>November 30, 2026 (2 pm, ENAC):</strong> <strong>Seminar</strong> by ' +
      '<strong>Orégane Desrentes (Inria - LMF)</strong>: ' +
      '<em>"Tutorial on the FloPoCo generator"</em>.',

    "community.title": "Community",
    "community.subtitle": "PhD students, publications and projects on embedded AI in Toulouse",
    "phd.title": "Ongoing PhDs",
    "phd.1.meta": "PhD start: November 1, 2024",
    "phd.1.text": "Embedded AI as circuits on FPGA.",
    "phd.2.meta": "PhD start: October 1, 2026",
    "phd.2.text": "Embedded AI and neuromorphic circuits.",
    "phd.3.meta": "PhD start: November 16, 2026 – ONERA / ENAC",
    "phd.3.text": "Formal quantization of DNNs on FPGA.",
    "phd.4.text": "On-chip AI architecture for real-time particle detection.",
    "pub.title": "2026 Publications",

    "seminars.title": "Seminars",
    "seminars.subtitle": "Scientific meetings on embedded AI",
    "seminars.upcoming": "Upcoming",
    "seminars.past": "Past seminars",

    "collab.title": "Collaborators",
    "role.mcf": "Assoc. Prof.",
    "role.mcfhdr": "Assoc. Prof. (HDR)",
    "role.dr": "Research Director",
    "role.cr": "Researcher",
    "role.ir": "Research Engineer",
    "role.prof": "Prof.",
    "role.phd": "PhD student",
    "role.animatrice": "(Coordinator)",
    "role.animateur": "(Coordinator)",

    "contact.title": "Contact",
    "contact.text":
      '<strong>Mailing list:</strong><br>' +
      'To subscribe or share information, send an email to: ' +
      '<a href="mailto:defi-ia-embarque@groupes.renater.fr">defi-ia-embarque@groupes.renater.fr</a>',

    "footer.text": "© 2026 Toulouse AI Embeddability Challenge"
  }
};

const DEFAULT_LANG = "fr";

function getSavedLang() {
  try {
    const saved = localStorage.getItem("lang");
    if (saved && TRANSLATIONS[saved]) return saved;
  } catch (e) { /* stockage indisponible : on ignore */ }
  return DEFAULT_LANG;
}

function setLang(lang) {
  const dict = TRANSLATIONS[lang];
  if (!dict) return;

  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    const key = el.getAttribute("data-i18n-html");
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });

  const titleKey = document.documentElement.getAttribute("data-title") || "page.title";
  if (dict[titleKey]) document.title = dict[titleKey];

  document.querySelectorAll(".lang-switch button").forEach(btn => {
    btn.setAttribute("aria-pressed", btn.dataset.lang === lang ? "true" : "false");
  });

  try { localStorage.setItem("lang", lang); } catch (e) { /* ignore */ }
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".lang-switch button").forEach(btn => {
    btn.addEventListener("click", () => setLang(btn.dataset.lang));
  });
  setLang(getSavedLang());
});
