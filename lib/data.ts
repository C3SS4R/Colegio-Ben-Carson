// Conteúdo real do Instituto Médio Privado Ben Carson.
// Fonte: inventário fiel do site estático original. Factos verdadeiros — nada inventado.

export const site = {
  name: 'Instituto Médio Privado Ben Carson',
  shortName: 'Ben Carson',
  tagline: 'Instituto Médio Privado',
  motto: 'Tudo por si e para si',
  url: 'https://www.imagbc.ao',
  email: 'geral@imagbc.ao',
  website: 'www.imagbc.ao',
  phoneMain: '+244939328544',
  phoneMainDisplay: '(+244) 939 328 544',
  phones: ['(+244) 927 961 096', '(+244) 946 390 903', '(+244) 928 603 085'],
  whatsapp: '244939328544',
  address: 'Camama, Vila Kiaxi, Rua n.º 34, Luanda, Angola',
  addressShort: 'Camama · Vila Kiaxi · Rua 34, Luanda',
  mapLink: 'https://maps.app.goo.gl/ZofSHKxMNWe8UZ9G6',
  geo: { lat: -8.9214637, lng: 13.2901132 },
  founded: 'Agosto de 2023',
  schoolYear: '2026/2027',
  facebook: 'https://www.facebook.com/',
};

export const nav = [
  {
    label: 'O Instituto',
    href: '/#sobre',
    children: [
      { label: 'Visão geral', href: '/#sobre' },
      { label: 'Equipa', href: '/#equipa' },
      { label: 'Galeria', href: '/#galeria' },
      { label: 'Momentos Extraescolares', href: '/momentos-extraescolares' },
      { label: 'História', href: '/#historia' },
      { label: 'Parceiros', href: '/#parceiros' },
    ],
  },
  {
    label: 'Cursos',
    href: '/#cursos',
    children: [
      { label: 'Todos os cursos', href: '/#cursos' },
      { label: 'Grade Curricular', href: '/#grade' },
      { label: 'Corpo Docente', href: '/#docentes' },
      { label: 'Preços', href: '/#precos' },
    ],
  },
  { label: 'Inscrições', href: '/inscricoes' },
  { label: 'Atualidade', href: '/#atualidade' },
  { label: 'Fale Connosco', href: '/#contactos' },
];

export const heroStats = [
  { value: 4, suffix: '', label: 'Cursos técnicos' },
  { value: '10ª–13ª', label: '4 anos de formação' },
  { value: 2023, label: 'Fundado em Luanda', isYear: true },
];

export const values = [
  { name: 'Excelência Académica', icon: 'BookOpen' },
  { name: 'Disciplina', icon: 'Handshake' },
  { name: 'Ética e Integridade', icon: 'Scale' },
  { name: 'Inovação', icon: 'Lightbulb' },
  { name: 'Responsabilidade Social', icon: 'Globe' },
  { name: 'Respeito', icon: 'Heart' },
  { name: 'Compromisso', icon: 'Settings' },
  { name: 'Espírito Empreendedor', icon: 'Rocket' },
  { name: 'Cooperação', icon: 'Link2' },
];

export const visionMission = {
  vision:
    'Ser uma instituição de ensino técnico de referência em Angola, reconhecida pela excelência académica, inovação pedagógica, formação ética e preparação de profissionais competentes, capazes de responder às exigências do mercado de trabalho e contribuir para o desenvolvimento sustentável do país.',
  mission:
    'Formar cidadãos e profissionais qualificados, disciplinados, éticos e inovadores, por meio de um ensino técnico-científico de qualidade, aliado à educação moral, tecnológica e empreendedora, preparando-os para o ensino superior, mercado de trabalho e serviço à sociedade.',
};

export const pillars = [
  { name: 'Ensino de Qualidade', icon: 'GraduationCap', text: 'Currículos actualizados, metodologias modernas e foco na aprendizagem.' },
  { name: 'Formação Integral', icon: 'Users', text: 'Desenvolvimento de competências técnicas, éticas e humanas.' },
  { name: 'Preparação para o Futuro', icon: 'TrendingUp', text: 'Investimos no potencial dos nossos alunos para um futuro de sucesso.' },
  { name: 'Compromisso com Angola', icon: 'Landmark', text: 'Educar hoje para transformar vidas e desenvolver o país.' },
];

export type Course = {
  id: string;
  n: string;
  title: string;
  profile: string;
  chips: string[];
  photo: string;
  skills: string[];
  outlets: string[];
  cta: string;
  icon: string;
};

export const courses: Course[] = [
  {
    id: 'financas',
    n: '01',
    title: 'Finanças',
    profile: 'Técnico de Finanças',
    chips: ['4 Anos · 10ª–13ª', 'Alta empregabilidade'],
    photo: '/img/financas.jpg',
    icon: 'Wallet',
    skills: [
      'Analisar e interpretar mercados financeiros e instrumentos de investimento.',
      'Elaborar relatórios financeiros e demonstrações de fluxo de caixa.',
      'Gerir carteiras de crédito, risco e activos financeiros.',
      'Processar operações bancárias e câmbio de divisas.',
      'Interpretar legislação fiscal angolana (IVA, IRT, Imposto Industrial).',
      'Assegurar conformidade financeira e regulatória da empresa.',
    ],
    outlets: ['Bancos', 'Seguradoras', 'Fundos de pensões', 'Consultoria financeira', 'Dep. financeiros', 'Mercado de capitais (BODIVA)'],
    cta: 'Uma carreira em bancos, seguradoras e gestão financeira.',
  },
  {
    id: 'informatica',
    n: '02',
    title: 'Informática de Gestão',
    profile: 'Técnico de Informática de Gestão',
    chips: ['4 Anos · 10ª–13ª', 'Área em crescimento'],
    photo: '/img/sala-informatica.jpg',
    icon: 'Monitor',
    skills: [
      'Operar e parametrizar softwares de gestão (ERP).',
      'Automatizar processos de negócio.',
      'Implementar comércio eletrónico e CRM.',
      'Garantir segurança e integridade de dados.',
      'Manutenção básica de redes e computadores.',
      'Gerir infraestruturas de TI e servidores.',
    ],
    outlets: ['Dep. de TI', 'Software & tecnologia', 'Telecomunicações', 'Bancos & seguradoras', 'Organismos públicos', 'ONGs'],
    cta: 'Uma das áreas de maior procura e crescimento em Angola.',
  },
  {
    id: 'contabilidade',
    n: '03',
    title: 'Contabilidade',
    profile: 'Técnico de Contabilidade',
    chips: ['4 Anos · 10ª–13ª', 'Sempre procurado'],
    photo: '/img/pratica-contabilidade.jpg',
    icon: 'BarChart3',
    skills: [
      'Processar e classificar documentação contabilística e fiscal.',
      'Elaborar demonstrações financeiras (Balanços e Resultados).',
      'Controlar contas de clientes, fornecedores e bancos.',
      'Interpretar a legislação fiscal angolana atualizada.',
      'Submeter declarações fiscais obrigatórias (IVA, IRT, Imposto Industrial).',
      'Assegurar a conformidade legal da empresa.',
    ],
    outlets: ['Gabinetes de Contabilidade', 'Bancos', 'Empresas de Auditoria', 'Grandes Superfícies', 'PMEs'],
    cta: 'A competência de que toda empresa precisa — sempre procurada.',
  },
  {
    id: 'gestao',
    n: '04',
    title: 'Gestão Empresarial',
    profile: 'Técnico de Gestão Empresarial',
    chips: ['4 Anos · 10ª–13ª', 'Perfil empreendedor'],
    photo: '/img/pratica-gestao.jpg',
    icon: 'Building2',
    skills: [
      'Coordenar departamentos e equipas.',
      'Planear e supervisionar operações diárias.',
      'Desenvolver planos de negócio e estratégias de marketing.',
      'Gerir recursos humanos e folha de salários.',
      'Actuar como Assistente de Direcção.',
      'Assumir funções de Gestor de RH e de Vendas.',
    ],
    outlets: ['Empresas de todos os sectores', 'Organismos públicos', 'Ministérios', 'Empreendedorismo próprio', 'Consultoria de gestão', 'ONGs'],
    cta: 'Preparação para gerir, liderar e empreender.',
  },
];

export const grade = [
  { title: 'Formação Geral', icon: 'BookOpen', items: ['Língua Portuguesa', 'Matemática', 'Inglês', 'Educação Física'] },
  { title: 'Formação Técnica', icon: 'BarChart3', items: ['Contabilidade Geral', 'Gestão de Empresas', 'Fiscalidade', 'Informática Aplicada'] },
  { title: 'Formação Sociocultural', icon: 'Scale', items: ['Empreendedorismo', 'Ética e Cidadania', 'Direito Comercial', 'Formação em Contexto de Trabalho'] },
];

export const leader = {
  name: 'Paulo Cassenda',
  role: 'Director Geral',
  photo: '/img/equipa/paulo-cassenda.jpg',
  bio: 'Lidera a visão e a estratégia institucional do Instituto Ben Carson.',
};

export const team = [
  { name: 'Júnior Lopes', role: 'Subdirector Pedagógico', photo: '/img/equipa/junior-lopes.jpg' },
  { name: 'Gabriel Américo', role: 'Subdirector Financeiro', photo: '/img/equipa/gabriel-americo.jpg' },
  { name: 'Simão Hebo', role: 'Subdirector Administrativo', photo: '/img/equipa/simao-hebo.jpg' },
  { name: 'Helda Neto', role: 'Secretária Geral', photo: '/img/equipa/helda-neto.jpg' },
];

export const docentes = [
  { name: 'Estre Jerónimo', role: 'Administração de Empresas', photo: '/img/docentes/estre-jeronimo.jpg' },
  { name: 'José Gamboa', role: 'Contabilidade', photo: '/img/docentes/jose-gamboa.jpg' },
  { name: 'Rafael Serrão', role: 'Direito', photo: '/img/docentes/rafael-serrao.jpg' },
];

export const partners = [
  { name: 'HR.Space', logo: '/img/parceiros/HR_SPACE.jpeg' },
  { name: 'Instituto Médio Técnico Privado Imaculado Coração de Maria', logo: '/img/parceiros/ICM.jpeg' },
  { name: 'Mundo da Tecnologia', logo: '/img/parceiros/Mundo da Tecnologia.jpeg' },
  { name: 'NN Congest', logo: '/img/parceiros/NN CONGEST.jpeg' },
];

export const timeline = [
  { year: 'Ago 2023', title: 'Fundação do Instituto', text: 'Nasce o IMAG Ben Carson, da visão de empreendedores angolanos.' },
  { year: 'Identidade', title: 'O legado do nome Ben Carson', text: 'Perseverança, excelência e superação como princípios.' },
  { year: 'Formação', title: 'Ensino Médio Técnico-Profissional', text: 'Quatro cursos técnicos da 10ª à 13ª classe.' },
  { year: 'Hoje', title: 'Rumo a uma referência nacional', text: 'A crescer como instituição de excelência em Angola.' },
];

export const historia = [
  'O Instituto Médio Privado de Administração e Gestão Ben Carson (IMAG Ben Carson) nasceu da visão de um grupo de empreendedores angolanos comprometidos com a transformação da educação em Angola, acreditando que o conhecimento, a inovação e a formação de qualidade são os principais instrumentos para o desenvolvimento da sociedade.',
  'Fundado em Agosto de 2023, o Instituto foi criado para responder à crescente necessidade de formação técnico-profissional de excelência no ensino médio, preparando jovens para os desafios do ensino superior, do mercado de trabalho e do empreendedorismo.',
  'O nome Ben Carson representa a valorização da perseverança, da excelência e da superação — princípios que inspiram diariamente a comunidade educativa na formação de cidadãos íntegros, competentes e preparados para liderar o futuro.',
  'Mais do que transmitir conhecimentos, o IMAG Ben Carson forma profissionais capazes de pensar criticamente, resolver problemas, utilizar tecnologias modernas, trabalhar em equipa e agir com ética e responsabilidade.',
];

// Galeria "Vida no Instituto" — mosaico
export const galleryHome = [
  { src: '/img/vida-grupo.jpg', alt: 'Grupo de alunos do Instituto Ben Carson', span: 'wide' },
  { src: '/img/aluna-patio.jpg', alt: 'Aluna no pátio do Instituto Ben Carson', span: 'tall' },
  { src: '/img/alunas-confianca.jpg', alt: 'Alunas do Instituto Ben Carson', span: 'tall' },
  { src: '/img/sala-informatica.jpg', alt: 'Sala de informática com alunos', span: '' },
  { src: '/img/pratica-contabilidade.jpg', alt: 'Alunas em prática de contabilidade', span: 'wide' },
  { src: '/img/aula.jpg', alt: 'Aula no Instituto Ben Carson', span: 'tall' },
  { src: '/img/visita-miradouro.jpg', alt: 'Visita de estudo em Luanda', span: 'wide' },
  { src: '/img/grupo-institucional.jpg', alt: 'Alunos em evento institucional', span: '' },
  { src: '/img/aluna-sorriso.jpg', alt: 'Aluna do Instituto Ben Carson', span: '' },
];

export const news = [
  { tag: 'Visita de Estudo', title: 'Alunos exploram a cidade de Luanda', text: 'Saídas de campo que ligam a sala de aula à realidade da cidade e das instituições.', photo: '/img/visita-miradouro.jpg' },
  { tag: 'Visita Institucional', title: 'Contacto com instituições de referência', text: 'Os alunos conhecem de perto o funcionamento de organismos e empresas.', photo: '/img/visita-tribunal.jpg' },
  { tag: 'Comunidade', title: 'A comunidade que aprende em conjunto', text: 'Convívio, cultura e espírito de equipa dentro e fora da sala de aula.', photo: '/img/visita-edificio.jpg' },
];

// Matrículas
export const prices = [
  { classe: '10ª Classe', value: 14000 },
  { classe: '11ª Classe', value: 16000 },
  { classe: '12ª Classe', value: 18000 },
  { classe: '13ª Classe', value: 20000 },
];

export const fees = [
  { item: 'Matrícula', value: '2.000 Kz' },
  { item: 'Confirmação', value: '5.000 Kz' },
  { item: 'Cartão de Estudante', value: '3.000 Kz' },
  { item: 'Uniforme Diário', value: '18.000 Kz' },
  { item: 'Uniforme de Ed. Física', value: '9.000 Kz' },
];

export const documents = [
  'Cópia do Bilhete de Identidade (BI)',
  'Certificado Original da 9ª Classe',
  'Duas fotos tipo passe',
];

export const matriculaSteps = [
  { n: '01', title: 'Contacte-nos', text: 'Fale connosco por WhatsApp, telefone ou preencha o formulário para reservar a sua vaga.', icon: 'MessageCircle' },
  { n: '02', title: 'Entregue os documentos', text: 'BI, certificado da 9ª classe e duas fotos tipo passe. Simples e rápido.', icon: 'FileText' },
  { n: '03', title: 'Confirme a vaga', text: 'Pague a matrícula e a confirmação. Está pronto para começar em 2026/2027.', icon: 'CheckCircle2' },
];

export const contactSubjects = [
  'Informações sobre matrículas',
  'Informações sobre cursos',
  'Propinas e taxas',
  'Outro assunto',
];

export const courseOptions = ['Finanças', 'Informática de Gestão', 'Contabilidade', 'Gestão Empresarial'];
export const classeOptions = ['10ª Classe', '11ª Classe', '12ª Classe', '13ª Classe'];

// Benefícios da landing de pré-inscrição (sem alegação de diploma MED — removida de propósito)
export const inscricaoBenefits = [
  { title: '4 Anos', sub: 'Da 10ª à 13ª classe', icon: 'GraduationCap' },
  { title: '4 Cursos', sub: 'Técnicos em procura', icon: 'BookOpen' },
  { title: 'Empregabilidade', sub: 'Áreas com saída profissional', icon: 'TrendingUp' },
  { title: 'Futuro', sub: 'Ensino superior ou trabalho', icon: 'Rocket' },
];

// 44 momentos extraescolares (000–043)
export const momentos = Array.from({ length: 44 }, (_, i) => {
  const num = String(i).padStart(3, '0');
  return {
    thumb: `/img/momentos-extraescolares/thumbs/momento-${num}.jpg`,
    full: `/img/momentos-extraescolares/momento-${num}.jpg`,
    alt: `Momento extraescolar no Instituto Ben Carson — foto ${i + 1}`,
  };
});
