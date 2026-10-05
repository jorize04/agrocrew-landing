// Internacionalización: Español de Latinoamérica (es) e inglés (en_US).
// Cada texto traducible tiene un atributo data-i18n con su clave.
const TEXTOS = {
  es: {
    'nav.funcionalidades': 'Funcionalidades', 'nav.paraQuien': 'Para quién es', 'nav.impacto': 'Impacto',
    'nav.equipo': 'Equipo', 'nav.proyecto': 'Proyecto',
    'hero.titulo': 'Descubre qué cultivos son compatibles con tu terreno',
    'hero.texto': 'AgroCrew cruza datos oficiales de suelos (MIDAGRI), riesgo de inundación (ANA) y clima (Open-Meteo), y con inteligencia artificial te explica qué sembrar y por qué.',
    'hero.boton': 'Ver funcionalidades',
    'func.titulo': 'Funcionalidades',
    'func.1.t': 'Registra tu terreno', 'func.1.d': 'Ubica tu predio por departamento, provincia y distrito, e indica si tienes riego.',
    'func.2.t': 'Conoce tu suelo', 'func.2.d': 'Te mostramos la clasificación oficial de tu tierra explicada en palabras sencillas.',
    'func.3.t': 'Recibe alertas de riesgo', 'func.3.d': 'Te avisamos si tu predio está cerca de una zona de inundación o si se esperan lluvias intensas.',
    'func.4.t': 'Ranking de cultivos explicado con IA', 'func.4.d': 'Una lista de cultivos compatibles con su puntaje, y una explicación clara redactada por inteligencia artificial.',
    'seg.titulo': 'Para quién es',
    'seg.1.t': 'Pequeños productores', 'seg.1.d': 'Que quieren decidir qué sembrar con más información.',
    'seg.2.t': 'Productores en zonas de riesgo', 'seg.2.d': 'Que necesitan saber si su terreno está expuesto a inundaciones.',
    'seg.3.t': 'Asesores y gobiernos locales', 'seg.3.d': 'Que requieren reportes por zona para planificar la asistencia técnica.',
    'imp.titulo': 'Impacto',
    'imp.ods.t': 'ODS 2: Hambre cero (meta 2.4)',
    'imp.ods.d': 'Contribuimos a sistemas de producción de alimentos sostenibles y resilientes: el productor elige cultivos adecuados a su suelo y clima, y se anticipa a inundaciones que pueden destruir su cosecha.',
    'imp.amb.t': 'Beneficio ambiental',
    'imp.amb.d': 'Usar cada terreno según su capacidad reduce la erosión y la degradación del suelo, y evitar siembras en zonas de riesgo o con poca agua reduce el desperdicio de agua, semillas y fertilizantes.',
    'eq.titulo': 'Equipo', 'eq.texto': 'Estudiantes de Ingeniería de Sistemas de Información de la UPC.',
    'pro.titulo': 'Conoce el proyecto', 'pro.texto': 'Revisa la documentación de nuestra API desplegada en AWS o el código fuente en GitHub.',
    'pro.api': 'Ver la API', 'pro.codigo': 'Ver el código',
    'pie.terminos': 'Términos y condiciones',
    'pie.aviso': 'Las recomendaciones son referenciales y no reemplazan la evaluación de un ingeniero agrónomo.',
    'ter.volver': 'Volver al inicio', 'ter.titulo': 'Términos y condiciones', 'ter.fecha': 'Última actualización: octubre de 2026',
    'ter.1.t': '1. Sobre AgroCrew',
    'ter.1.d': 'AgroCrew es un proyecto académico del curso Arquitectura de Aplicaciones Web de la Universidad Peruana de Ciencias Aplicadas (UPC). Ofrece recomendaciones de cultivos a partir de datos públicos y de inteligencia artificial.',
    'ter.2.t': '2. Carácter referencial de las recomendaciones',
    'ter.2.d': 'Las evaluaciones, rankings, alertas y explicaciones son referenciales. No reemplazan la evaluación de un ingeniero agrónomo ni garantizan el rendimiento de una cosecha. Las decisiones de siembra son responsabilidad del usuario.',
    'ter.3.t': '3. Fuentes de datos',
    'ter.3.d': 'La plataforma usa información pública del MIDAGRI y el SERFOR (capacidad de uso del suelo), la ANA (puntos críticos de riesgo hídrico), el INEI (ubigeo) y Open-Meteo (clima). AgroCrew no es responsable de errores, cambios o interrupciones en esas fuentes.',
    'ter.4.t': '4. Uso de inteligencia artificial',
    'ter.4.d': 'Las explicaciones de cada evaluación pueden ser redactadas por un modelo de inteligencia artificial (Google Gemini) a partir de los datos agronómicos del predio. La IA no decide el ranking, y no se le envían datos personales del usuario.',
    'ter.5.t': '5. Cuenta y datos personales',
    'ter.5.d': 'Para usar la plataforma el usuario se registra con su nombre y correo. La contraseña se guarda cifrada. Los datos se usan solo para prestar el servicio y generar reportes agregados por zona, sin identificar a las personas, conforme a la Ley N.° 29733 de Protección de Datos Personales del Perú.',
    'ter.6.t': '6. Uso adecuado',
    'ter.6.d': 'El usuario se compromete a registrar información veraz y a no usar la plataforma para fines ilícitos ni para afectar su funcionamiento.',
    'ter.7.t': '7. Cambios en estos términos',
    'ter.7.d': 'Estos términos pueden actualizarse. La versión vigente estará siempre publicada en esta página.'
  },
  en: {
    'nav.funcionalidades': 'Features', 'nav.paraQuien': 'Who it is for', 'nav.impacto': 'Impact',
    'nav.equipo': 'Team', 'nav.proyecto': 'Project',
    'hero.titulo': 'Find out which crops suit your land',
    'hero.texto': 'AgroCrew combines official soil data (MIDAGRI), flood risk (ANA) and weather (Open-Meteo), and uses artificial intelligence to explain what to plant and why.',
    'hero.boton': 'See features',
    'func.titulo': 'Features',
    'func.1.t': 'Register your land', 'func.1.d': 'Locate your plot by department, province and district, and tell us whether you have irrigation.',
    'func.2.t': 'Understand your soil', 'func.2.d': 'We show you the official classification of your land explained in plain words.',
    'func.3.t': 'Get risk alerts', 'func.3.d': 'We warn you if your plot is near a flood-prone area or if heavy rain is expected.',
    'func.4.t': 'Crop ranking explained by AI', 'func.4.d': 'A list of compatible crops with their score, and a clear explanation written by artificial intelligence.',
    'seg.titulo': 'Who it is for',
    'seg.1.t': 'Small farmers', 'seg.1.d': 'Who want to decide what to plant with better information.',
    'seg.2.t': 'Farmers in risk areas', 'seg.2.d': 'Who need to know whether their land is exposed to flooding.',
    'seg.3.t': 'Advisors and local governments', 'seg.3.d': 'Who need reports by area to plan technical assistance.',
    'imp.titulo': 'Impact',
    'imp.ods.t': 'SDG 2: Zero Hunger (target 2.4)',
    'imp.ods.d': 'We contribute to sustainable and resilient food production systems: farmers choose crops suited to their soil and climate, and anticipate floods that can destroy their harvest.',
    'imp.amb.t': 'Environmental benefit',
    'imp.amb.d': 'Using each plot according to its capacity reduces soil erosion and degradation, and avoiding planting in risk areas or with too little water reduces waste of water, seeds and fertilizers.',
    'eq.titulo': 'Team', 'eq.texto': 'Information Systems Engineering students at UPC.',
    'pro.titulo': 'Explore the project', 'pro.texto': 'Check the documentation of our API deployed on AWS or the source code on GitHub.',
    'pro.api': 'See the API', 'pro.codigo': 'See the code',
    'pie.terminos': 'Terms and conditions',
    'pie.aviso': 'Recommendations are for reference only and do not replace an agronomist’s assessment.',
    'ter.volver': 'Back to home', 'ter.titulo': 'Terms and conditions', 'ter.fecha': 'Last updated: October 2026',
    'ter.1.t': '1. About AgroCrew',
    'ter.1.d': 'AgroCrew is an academic project of the Web Application Architecture course at Universidad Peruana de Ciencias Aplicadas (UPC). It provides crop recommendations based on public data and artificial intelligence.',
    'ter.2.t': '2. Recommendations are for reference only',
    'ter.2.d': 'Assessments, rankings, alerts and explanations are for reference only. They do not replace an agronomist’s assessment and do not guarantee crop yields. Planting decisions are the user’s responsibility.',
    'ter.3.t': '3. Data sources',
    'ter.3.d': 'The platform uses public information from MIDAGRI and SERFOR (land use capacity), ANA (critical flood-risk points), INEI (geographic codes) and Open-Meteo (weather). AgroCrew is not responsible for errors, changes or interruptions in those sources.',
    'ter.4.t': '4. Use of artificial intelligence',
    'ter.4.d': 'The explanation of each assessment may be written by an artificial intelligence model (Google Gemini) based on the plot’s agronomic data. The AI does not decide the ranking, and no personal user data is sent to it.',
    'ter.5.t': '5. Account and personal data',
    'ter.5.d': 'To use the platform, users register with their name and email. Passwords are stored encrypted. Data is used only to provide the service and to produce aggregated reports by area without identifying individuals, in accordance with Peru’s Personal Data Protection Law No. 29733.',
    'ter.6.t': '6. Acceptable use',
    'ter.6.d': 'Users agree to provide truthful information and not to use the platform for unlawful purposes or to disrupt its operation.',
    'ter.7.t': '7. Changes to these terms',
    'ter.7.d': 'These terms may be updated. The current version will always be published on this page.'
  }
};

function aplicarIdioma(idioma) {
  document.documentElement.lang = idioma === 'en' ? 'en-US' : 'es';
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const texto = TEXTOS[idioma][el.dataset.i18n];
    if (texto) el.textContent = texto;
  });
  // El botón muestra el idioma al que se puede cambiar
  document.querySelectorAll('[data-cambiar-idioma]').forEach((b) => {
    b.textContent = idioma === 'en' ? 'ES' : 'EN';
    b.setAttribute('aria-label', idioma === 'en' ? 'Cambiar a español' : 'Switch to English');
  });
  try { localStorage.setItem('idioma', idioma); } catch (e) { /* sin almacenamiento: solo esta página */ }
}

function idiomaInicial() {
  try {
    const guardado = localStorage.getItem('idioma');
    if (guardado) return guardado;
  } catch (e) { /* ignorar */ }
  return navigator.language && navigator.language.startsWith('en') ? 'en' : 'es';
}

let idiomaActual = idiomaInicial();
aplicarIdioma(idiomaActual);

document.querySelectorAll('[data-cambiar-idioma]').forEach((b) => {
  b.addEventListener('click', () => {
    idiomaActual = idiomaActual === 'en' ? 'es' : 'en';
    aplicarIdioma(idiomaActual);
  });
});
