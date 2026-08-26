import type { CategorySlug } from '@/lib/categories';
import type { Locale } from './config';

interface CategoryText {
  title: string;
  shortTitle: string;
  blurb: string;
  subtitle: string;
}

export interface Dictionary {
  meta: {
    /** Combined with siteName at render time: "Newcomers BC · <this>". */
    homeTitleSuffix: string;
    homeDescription: string;
    /** Appended after a translated count and the category subtitle. */
    resourcesSuffixTail: string;
  };
  hero: {
    eyebrow: string;
    /** One span per line. Some languages don't split "British Columbia" the way English does. */
    titleLines: string[];
    tagline: string;
    searchPlaceholder: string;
    searchLabel: string;
    clearLabel: string;
  };
  home: {
    startHereTitle: string;
    startHereNote: string;
    otherTitle: string;
    exploreResources: string;
    resultsFoundOne: string;
    resultsFoundOther: string;
    /** Contains {q} for the search term. */
    noResults: string;
    communityNote: string;
  };
  category: {
    backToTopics: string;
    resourceCountOne: string;
    resourceCountOther: string;
  };
  resourceTypes: {
    Tip: string;
    Action: string;
    'Next step': string;
    Community: string;
  };
  common: {
    switchLanguage: string;
    lightMode: string;
    darkMode: string;
    backToTopLabel: string;
    opensNewTab: string;
  };
  footer: {
    disclaimerLabel: string;
    disclaimer: string;
    aboutLinksLabel: string;
    aboutLinks: string;
    translationNote: string;
    supportLabel: string;
  };
  categories: Record<CategorySlug, CategoryText>;
}

export const dictionaries: Record<Locale, Dictionary> = {
  es: {
    meta: {
      homeTitleSuffix: 'Recursos de Instalación para la Columbia Británica',
      homeDescription:
        'Guías gratuitas y en lenguaje sencillo para personas recién llegadas a la Columbia Británica: vivienda, salud, trabajo, identificación, escuelas y más. Cada consejo enlaza directamente a una fuente oficial.',
      resourcesSuffixTail:
        'recursos gratuitos y verificados para personas recién llegadas a la Columbia Británica.',
    },
    hero: {
      eyebrow: 'Bienvenido a',
      titleLines: ['Columbia', 'Británica'],
      tagline:
        'Consejos breves y recursos confiables para ayudarte a comenzar tu nueva vida en Canadá.',
      searchPlaceholder: 'Busca vivienda, empleo, salud…',
      searchLabel: 'Buscar recursos',
      clearLabel: 'Borrar búsqueda',
    },
    home: {
      startHereTitle: 'Empieza aquí',
      startHereNote: 'Las cuatro cosas más importantes durante tus primeras semanas.',
      otherTitle: 'Todo lo demás',
      exploreResources: 'Ver recursos',
      resultsFoundOne: '{n} recurso encontrado',
      resultsFoundOther: '{n} recursos encontrados',
      noResults: 'No se encontraron recursos para “{q}”. Prueba con otra palabra.',
      communityNote: 'Nota de la comunidad',
    },
    category: {
      backToTopics: 'Volver a los temas',
      resourceCountOne: '{n} recurso',
      resourceCountOther: '{n} recursos',
    },
    resourceTypes: { Tip: 'Consejo', Action: 'Acción', 'Next step': 'Siguiente paso', Community: 'Comunidad' },
    common: {
      switchLanguage: 'Elegir idioma',
      lightMode: 'Cambiar a modo claro',
      darkMode: 'Cambiar a modo oscuro',
      backToTopLabel: 'Volver arriba',
      opensNewTab: '(se abre en una pestaña nueva)',
    },
    footer: {
      disclaimerLabel: 'Aviso:',
      disclaimer:
        'Newcomers BC es un recurso independiente creado para ayudar a las personas que desean vivir, visitar o explorar Canadá. No está afiliado, respaldado ni operado por el Gobierno de Canadá, el Gobierno de la Columbia Británica, ni por ninguna de las organizaciones enlazadas en este sitio.',
      aboutLinksLabel: 'Sobre los enlaces:',
      aboutLinks:
        'Cada recurso enlaza a una organización real de BC o federal, verificada en el sitio actual de cada organización. Las páginas del gobierno se reestructuran de vez en cuando, así que si un enlace deja de funcionar, busca el nombre de la organización directamente.',
      translationNote:
        'El menú y los títulos de esta página están traducidos. Los consejos y los sitios enlazados permanecen en inglés.',
      supportLabel: 'Apoya este proyecto',
    },
    categories: {
      settlement: {
        title: 'Instalación y Orientación',
        shortTitle: 'Instalación',
        blurb: 'Comienza con los servicios esenciales y aprende a orientarte en BC.',
        subtitle:
          'Lo esencial de la primera semana: los trámites y las personas que abren paso a todo lo demás.',
      },
      housing: {
        title: 'Vivienda y Necesidades Básicas',
        shortTitle: 'Vivienda',
        blurb: 'Encuentra un hogar, conoce tus derechos y accede a apoyos esenciales.',
        subtitle:
          'Un lugar seguro donde vivir y lo esencial para equiparlo, además de tus derechos como inquilino.',
      },
      healthcare: {
        title: 'Salud y Bienestar',
        shortTitle: 'Salud',
        blurb: 'Consulta a un médico, surte una receta y entiende qué cubre el MSP.',
        subtitle: 'Cómo entrar al sistema de salud de BC, y qué cubre y qué no.',
      },
      employment: {
        title: 'Empleo y Reconocimiento de Credenciales',
        shortTitle: 'Empleo',
        blurb: 'Encuentra trabajo y logra que reconozcan tu experiencia en BC.',
        subtitle: 'Lograr que reconozcan tu experiencia y encontrar un trabajo acorde a ella.',
      },
      language: {
        title: 'Idioma y Comunicación',
        shortTitle: 'Idioma',
        blurb: 'Mejora tu inglés con clases gratuitas y herramientas cotidianas.',
        subtitle:
          'Gana confianza con el inglés sin presión, con clases, práctica y herramientas del día a día.',
      },
      legal: {
        title: 'Apoyo Legal y Derechos',
        shortTitle: 'Legal',
        blurb: 'Conoce tus derechos y accede a ayuda legal gratuita.',
        subtitle:
          'Conocer tus derechos y saber dónde conseguir ayuda gratuita cuando algo no te parece justo.',
      },
      financial: {
        title: 'Educación Financiera y Manejo del Dinero',
        shortTitle: 'Dinero',
        blurb: 'Administra tu dinero y construye tu historial crediticio en Canadá.',
        subtitle: 'Entender la banca, el crédito y los impuestos canadienses desde cero.',
      },
      transportation: {
        title: 'Transporte y Movilidad',
        shortTitle: 'Transporte',
        blurb: 'Obtén tu licencia, usa el transporte público y recorre la Columbia Británica.',
        subtitle:
          'Conducir, transporte público y transbordadores: la logística práctica para moverte por la provincia.',
      },
      'mental-health': {
        title: 'Salud Mental y Bienestar Emocional',
        shortTitle: 'Bienestar',
        blurb: 'Cuida tu salud emocional durante la transición.',
        subtitle: 'El permiso para sentirte abrumado, y apoyo real cuando necesitas más que eso.',
      },
      social: {
        title: 'Integración Social y Conexión Comunitaria',
        shortTitle: 'Comunidad',
        blurb: 'Conecta con tu comunidad y construye relaciones reales.',
        subtitle: 'Formar un círculo de personas, amistades, mentores y comunidad en una nueva ciudad.',
      },
      education: {
        title: 'Educación y Aprendizaje en BC',
        shortTitle: 'Educación',
        blurb: 'Inscríbete en la escuela, financia tus estudios y sigue aprendiendo en BC.',
        subtitle: 'Inscribirte en la escuela, financiar más estudios y construir credenciales canadienses.',
      },
      'working-holiday': {
        title: 'Visa de Vacaciones y Trabajo (IEC)',
        shortTitle: 'Vacaciones y Trabajo',
        blurb:
          'Planifica tu permiso de Experiencia Internacional Canadá, desde la solicitud hasta la llegada.',
        subtitle:
          'Todo lo que necesitas para trabajar y viajar en Canadá con un permiso de Experiencia Internacional Canadá.',
      },
    },
  },

  ja: {
    meta: {
      homeTitleSuffix: 'ブリティッシュコロンビア州 定住サポート情報',
      homeDescription:
        'ブリティッシュコロンビア州に来た新しい移住者のための、無料でわかりやすいガイドです。住居、医療、仕事、身分証明書、学校などを網羅し、それぞれのヒントは公式情報源に直接リンクしています。',
      resourcesSuffixTail: '件の無料で信頼できるリソースを、BC州の新しい移住者向けに掲載しています。',
    },
    hero: {
      eyebrow: 'ようこそ',
      titleLines: ['ブリティッシュ', 'コロンビア州へ'],
      tagline: 'カナダでの新生活を始めるための、短くわかりやすいヒントと信頼できるリソース。',
      searchPlaceholder: '住居、仕事、医療などを検索…',
      searchLabel: 'リソースを検索',
      clearLabel: '検索をクリア',
    },
    home: {
      startHereTitle: 'まずはここから',
      startHereNote: '最初の数週間で重要な4つのこと。',
      otherTitle: 'その他のトピック',
      exploreResources: 'リソースを見る',
      resultsFoundOne: '{n}件のリソースが見つかりました',
      resultsFoundOther: '{n}件のリソースが見つかりました',
      noResults: '「{q}」に一致するリソースが見つかりませんでした。別のキーワードをお試しください。',
      communityNote: 'コミュニティからの情報',
    },
    category: {
      backToTopics: 'トピック一覧に戻る',
      resourceCountOne: '{n}件のリソース',
      resourceCountOther: '{n}件のリソース',
    },
    resourceTypes: { Tip: 'ヒント', Action: 'やるべきこと', 'Next step': '次のステップ', Community: 'コミュニティ' },
    common: {
      switchLanguage: '言語を選択',
      lightMode: 'ライトモードに切り替え',
      darkMode: 'ダークモードに切り替え',
      backToTopLabel: 'ページの先頭に戻る',
      opensNewTab: '(新しいタブで開きます)',
    },
    footer: {
      disclaimerLabel: '免責事項:',
      disclaimer:
        'Newcomers BCは、カナダでの生活・訪問・観光を希望する人々を支援するために作られた独立系のリソースです。カナダ政府、ブリティッシュコロンビア州政府、またはサイト内でリンクされているいずれの団体とも提携・承認・運営関係はありません。',
      aboutLinksLabel: 'リンクについて:',
      aboutLinks:
        '掲載しているリソースは、すべて実在するBC州または連邦政府機関のもので、各団体の最新サイトを確認したうえで掲載しています。政府のウェブページは随時再編成されるため、リンク切れの場合は団体名で直接検索してください。',
      translationNote: 'このページのメニューや見出しは翻訳されています。ヒントの内容やリンク先のサイトは英語のままです。',
      supportLabel: 'このプロジェクトを支援する',
    },
    categories: {
      settlement: {
        title: '定住とナビゲーション',
        shortTitle: '定住',
        blurb: '基本的なサービスから始めて、BC州での生活に慣れましょう。',
        subtitle: '最初の1週間に必要な手続きと、その後すべての土台となる人々とのつながり。',
      },
      housing: {
        title: '住居と生活必需品',
        shortTitle: '住居',
        blurb: '住まいを見つけ、自分の権利を知り、必要な支援にアクセスしましょう。',
        subtitle: '安心して暮らせる住まいと生活に必要なもの、そして入居者としての権利について。',
      },
      healthcare: {
        title: '医療とウェルネス',
        shortTitle: '医療',
        blurb: '医師の診察を受け、処方箋を受け取り、MSPの補償内容を理解しましょう。',
        subtitle: 'BC州の医療制度に加入する方法と、保険が適用される範囲・されない範囲について。',
      },
      employment: {
        title: '就労と資格の認定',
        shortTitle: '就労',
        blurb: '自分の経歴を認めてもらい、それに合った仕事を見つけましょう。',
        subtitle: 'これまでの職歴やスキルを認定してもらい、それに合った仕事を見つける方法。',
      },
      language: {
        title: '言語とコミュニケーション',
        shortTitle: '言語',
        blurb: '無料のクラスや日常で使えるツールで、英語力に自信をつけましょう。',
        subtitle: '無理のないペースで、クラス・練習・日常のツールを通じて英語への自信を育てましょう。',
      },
      legal: {
        title: '法的サポートと権利',
        shortTitle: '法律',
        blurb: '自分の権利を知り、無料の法律相談にアクセスしましょう。',
        subtitle: '自分の権利を知り、不当だと感じたときに無料で相談できる場所を知っておきましょう。',
      },
      financial: {
        title: '金融リテラシーとお金の管理',
        shortTitle: 'お金',
        blurb: 'お金を管理し、カナダでの信用情報を築きましょう。',
        subtitle: 'カナダの銀行制度・クレジット・税金について、基礎から理解しましょう。',
      },
      transportation: {
        title: '交通機関と移動',
        shortTitle: '交通',
        blurb: '運転免許を取得し、公共交通機関を利用して、BC州内を移動しましょう。',
        subtitle: '運転、公共交通機関、フェリーなど、州内を移動するための実用的な情報。',
      },
      'mental-health': {
        title: 'メンタルヘルスと心の健康',
        shortTitle: '心の健康',
        blurb: '移住による変化の中で、自分の心の健康を大切にしましょう。',
        subtitle: '圧倒されてもいい、ということ。そして、それ以上のサポートが必要なときのための本当の支援。',
      },
      social: {
        title: '社会的つながりとコミュニティ',
        shortTitle: 'コミュニティ',
        blurb: '地域とつながり、本当の人間関係を築きましょう。',
        subtitle: '新しい街で、友人・メンター・コミュニティといった人とのつながりを築いていく方法。',
      },
      education: {
        title: 'BC州での教育と学び',
        shortTitle: '教育',
        blurb: '学校に登録し、学費の支援を受け、BC州で学び続けましょう。',
        subtitle: '学校への登録、進学のための資金支援、カナダでの学歴の構築について。',
      },
      'working-holiday': {
        title: 'ワーキングホリデービザ (IEC)',
        shortTitle: 'ワーホリ',
        blurb: '申請から到着まで、国際経験カナダ(IEC)許可の準備をサポートします。',
        subtitle: '国際経験カナダ(IEC)許可でカナダで働きながら旅行するために必要なすべての情報。',
      },
    },
  },

  ko: {
    meta: {
      homeTitleSuffix: '브리티시컬럼비아 정착 지원 정보',
      homeDescription:
        '브리티시컬럼비아주에 새로 온 이민자를 위한 무료 안내입니다. 주거, 의료, 취업, 신분증, 교육 등 다양한 정보를 쉬운 언어로 제공하며, 각 팁은 공식 출처로 바로 연결됩니다.',
      resourcesSuffixTail: '개의 무료 검증된 자료를 BC주 신규 이민자를 위해 제공합니다.',
    },
    hero: {
      eyebrow: '환영합니다',
      titleLines: ['브리티시', '컬럼비아'],
      tagline: '캐나다에서의 새로운 삶을 시작하는 데 도움이 되는 간단한 팁과 신뢰할 수 있는 자료.',
      searchPlaceholder: '주거, 취업, 의료 등을 검색…',
      searchLabel: '자료 검색',
      clearLabel: '검색 지우기',
    },
    home: {
      startHereTitle: '여기서 시작하세요',
      startHereNote: '첫 몇 주 동안 가장 중요한 네 가지.',
      otherTitle: '그 외 모든 항목',
      exploreResources: '자료 보기',
      resultsFoundOne: '{n}개의 자료를 찾았습니다',
      resultsFoundOther: '{n}개의 자료를 찾았습니다',
      noResults: '“{q}”에 맞는 자료를 찾을 수 없습니다. 다른 단어로 검색해 보세요.',
      communityNote: '커뮤니티 참고 정보',
    },
    category: {
      backToTopics: '주제 목록으로 돌아가기',
      resourceCountOne: '{n}개의 자료',
      resourceCountOther: '{n}개의 자료',
    },
    resourceTypes: { Tip: '팁', Action: '실행 항목', 'Next step': '다음 단계', Community: '커뮤니티' },
    common: {
      switchLanguage: '언어 선택',
      lightMode: '라이트 모드로 전환',
      darkMode: '다크 모드로 전환',
      backToTopLabel: '맨 위로 이동',
      opensNewTab: '(새 탭에서 열림)',
    },
    footer: {
      disclaimerLabel: '안내:',
      disclaimer:
        'Newcomers BC는 캐나다에서 살거나, 방문하거나, 여행하고자 하는 사람들을 돕기 위해 만들어진 독립적인 자료입니다. 캐나다 정부, 브리티시컬럼비아주 정부, 또는 이 사이트에 링크된 어떤 단체와도 제휴, 승인, 운영 관계가 없습니다.',
      aboutLinksLabel: '링크에 대하여:',
      aboutLinks:
        '모든 자료는 실제 BC주 또는 연방 정부 기관으로 연결되며, 각 기관의 현재 웹사이트를 기준으로 확인되었습니다. 정부 웹페이지는 종종 개편되므로, 링크가 끊어졌다면 해당 기관의 이름으로 직접 검색해 보세요.',
      translationNote: '이 페이지의 메뉴와 제목은 번역되어 있습니다. 팁 내용과 연결된 사이트는 영어로 제공됩니다.',
      supportLabel: '이 프로젝트 후원하기',
    },
    categories: {
      settlement: {
        title: '정착 및 안내',
        shortTitle: '정착',
        blurb: '필수 서비스부터 시작해 BC주에서의 생활에 익숙해지세요.',
        subtitle: '첫 주에 꼭 필요한 서류와, 이후 모든 것을 여는 열쇠가 되는 사람들.',
      },
      housing: {
        title: '주거 및 기본 생활',
        shortTitle: '주거',
        blurb: '집을 구하고, 권리를 알고, 필수 지원을 받으세요.',
        subtitle: '안전하게 살 곳과 그곳을 채울 생필품, 그리고 세입자로서의 권리.',
      },
      healthcare: {
        title: '의료 및 건강',
        shortTitle: '의료',
        blurb: '진료를 받고, 처방전을 받고, MSP 보장 범위를 이해하세요.',
        subtitle: 'BC주 의료 제도에 가입하는 방법과 보장 범위, 보장되지 않는 부분.',
      },
      employment: {
        title: '취업 및 경력 인정',
        shortTitle: '취업',
        blurb: '경력을 인정받고, 그에 맞는 일자리를 찾으세요.',
        subtitle: '경력을 인정받고 그에 맞는 일자리를 찾는 방법.',
      },
      language: {
        title: '언어 및 소통',
        shortTitle: '언어',
        blurb: '무료 수업과 일상 도구로 영어에 자신감을 가지세요.',
        subtitle: '수업, 연습, 일상 도구를 통해 부담 없이 영어 자신감을 키우세요.',
      },
      legal: {
        title: '법률 지원 및 권리',
        shortTitle: '법률',
        blurb: '권리를 알고 무료 법률 지원을 받으세요.',
        subtitle: '자신의 권리를 알고, 부당하다고 느낄 때 무료로 도움을 받을 수 있는 곳을 알아두세요.',
      },
      financial: {
        title: '금융 이해 및 자산 관리',
        shortTitle: '금융',
        blurb: '돈을 관리하고 캐나다에서 신용 기록을 쌓으세요.',
        subtitle: '캐나다의 은행, 신용, 세금을 기초부터 이해하세요.',
      },
      transportation: {
        title: '교통 및 이동',
        shortTitle: '교통',
        blurb: '운전면허를 취득하고, 대중교통을 이용하고, BC주를 이동하세요.',
        subtitle: '운전, 대중교통, 페리 등 주 전역을 이동하기 위한 실질적인 정보.',
      },
      'mental-health': {
        title: '정신 건강 및 웰빙',
        shortTitle: '웰빙',
        blurb: '이주 과정에서 정서적 건강을 돌보세요.',
        subtitle: '벅찬 감정을 느껴도 괜찮다는 것, 그리고 그 이상이 필요할 때의 실질적인 지원.',
      },
      social: {
        title: '사회적 통합 및 커뮤니티 연결',
        shortTitle: '커뮤니티',
        blurb: '지역 사회와 연결되고 진정한 관계를 쌓으세요.',
        subtitle: '새로운 도시에서 친구, 멘토, 커뮤니티 등 사람들과의 관계를 쌓아가세요.',
      },
      education: {
        title: 'BC주 교육 및 학습',
        shortTitle: '교육',
        blurb: '학교에 등록하고, 학비를 지원받고, BC주에서 계속 배우세요.',
        subtitle: '학교 등록, 추가 학업을 위한 자금 지원, 캐나다 학력 취득에 대하여.',
      },
      'working-holiday': {
        title: '워킹 홀리데이 비자 (IEC)',
        shortTitle: '워킹홀리데이',
        blurb: '신청부터 도착까지, 국제 경험 캐나다(IEC) 허가를 계획하세요.',
        subtitle: '국제 경험 캐나다(IEC) 허가로 캐나다에서 일하고 여행하는 데 필요한 모든 정보.',
      },
    },
  },

  pa: {
    meta: {
      homeTitleSuffix: 'ਬ੍ਰਿਟਿਸ਼ ਕੋਲੰਬੀਆ ਲਈ ਵਸੇਬਾ ਸਰੋਤ',
      homeDescription:
        'ਬ੍ਰਿਟਿਸ਼ ਕੋਲੰਬੀਆ ਵਿੱਚ ਨਵੇਂ ਆਏ ਲੋਕਾਂ ਲਈ ਮੁਫ਼ਤ, ਸਰਲ ਭਾਸ਼ਾ ਵਿੱਚ ਗਾਈਡ: ਰਿਹਾਇਸ਼, ਸਿਹਤ, ਨੌਕਰੀ, ਪਛਾਣ-ਪੱਤਰ, ਸਕੂਲ ਅਤੇ ਹੋਰ ਬਹੁਤ ਕੁਝ। ਹਰੇਕ ਸੁਝਾਅ ਸਿੱਧਾ ਇੱਕ ਅਧਿਕਾਰਤ ਸਰੋਤ ਨਾਲ ਜੁੜਿਆ ਹੋਇਆ ਹੈ।',
      resourcesSuffixTail: 'ਮੁਫ਼ਤ, ਭਰੋਸੇਯੋਗ ਸਰੋਤ ਬ੍ਰਿਟਿਸ਼ ਕੋਲੰਬੀਆ ਵਿੱਚ ਨਵੇਂ ਆਏ ਲੋਕਾਂ ਲਈ।',
    },
    hero: {
      eyebrow: 'ਜੀ ਆਇਆਂ ਨੂੰ',
      titleLines: ['ਬ੍ਰਿਟਿਸ਼', 'ਕੋਲੰਬੀਆ'],
      tagline: 'ਕੈਨੇਡਾ ਵਿੱਚ ਆਪਣੀ ਨਵੀਂ ਜ਼ਿੰਦਗੀ ਸ਼ੁਰੂ ਕਰਨ ਵਿੱਚ ਮਦਦ ਲਈ ਸੰਖੇਪ ਸੁਝਾਅ ਅਤੇ ਭਰੋਸੇਯੋਗ ਸਰੋਤ।',
      searchPlaceholder: 'ਰਿਹਾਇਸ਼, ਨੌਕਰੀ, ਸਿਹਤ ਆਦਿ ਖੋਜੋ…',
      searchLabel: 'ਸਰੋਤ ਖੋਜੋ',
      clearLabel: 'ਖੋਜ ਸਾਫ਼ ਕਰੋ',
    },
    home: {
      startHereTitle: 'ਇੱਥੋਂ ਸ਼ੁਰੂ ਕਰੋ',
      startHereNote: 'ਪਹਿਲੇ ਹਫ਼ਤਿਆਂ ਵਿੱਚ ਸਭ ਤੋਂ ਜ਼ਰੂਰੀ ਚਾਰ ਗੱਲਾਂ।',
      otherTitle: 'ਬਾਕੀ ਸਭ ਕੁਝ',
      exploreResources: 'ਸਰੋਤ ਵੇਖੋ',
      resultsFoundOne: '{n} ਸਰੋਤ ਮਿਲਿਆ',
      resultsFoundOther: '{n} ਸਰੋਤ ਮਿਲੇ',
      noResults: '“{q}” ਨਾਲ ਮੇਲ ਖਾਂਦਾ ਕੋਈ ਸਰੋਤ ਨਹੀਂ ਮਿਲਿਆ। ਕੋਈ ਹੋਰ ਸ਼ਬਦ ਅਜ਼ਮਾਓ।',
      communityNote: 'ਭਾਈਚਾਰਕ ਜਾਣਕਾਰੀ',
    },
    category: {
      backToTopics: 'ਵਿਸ਼ਿਆਂ ਵੱਲ ਵਾਪਸ ਜਾਓ',
      resourceCountOne: '{n} ਸਰੋਤ',
      resourceCountOther: '{n} ਸਰੋਤ',
    },
    resourceTypes: { Tip: 'ਸੁਝਾਅ', Action: 'ਕਾਰਵਾਈ', 'Next step': 'ਅਗਲਾ ਕਦਮ', Community: 'ਭਾਈਚਾਰਾ' },
    common: {
      switchLanguage: 'ਭਾਸ਼ਾ ਚੁਣੋ',
      lightMode: 'ਲਾਈਟ ਮੋਡ ਵਿੱਚ ਬਦਲੋ',
      darkMode: 'ਡਾਰਕ ਮੋਡ ਵਿੱਚ ਬਦਲੋ',
      backToTopLabel: 'ਉੱਪਰ ਵਾਪਸ ਜਾਓ',
      opensNewTab: '(ਨਵੀਂ ਟੈਬ ਵਿੱਚ ਖੁੱਲ੍ਹਦਾ ਹੈ)',
    },
    footer: {
      disclaimerLabel: 'ਬੇਦਾਅਵਾ:',
      disclaimer:
        "Newcomers BC ਇੱਕ ਸੁਤੰਤਰ ਸਰੋਤ ਹੈ ਜੋ ਉਹਨਾਂ ਲੋਕਾਂ ਦੀ ਮਦਦ ਲਈ ਬਣਾਇਆ ਗਿਆ ਹੈ ਜੋ ਕੈਨੇਡਾ ਵਿੱਚ ਰਹਿਣਾ, ਘੁੰਮਣਾ ਜਾਂ ਵੇਖਣਾ ਚਾਹੁੰਦੇ ਹਨ। ਇਹ ਕੈਨੇਡਾ ਸਰਕਾਰ, ਬ੍ਰਿਟਿਸ਼ ਕੋਲੰਬੀਆ ਸਰਕਾਰ, ਜਾਂ ਇਸ ਸਾਈਟ ਉੱਤੇ ਜੋੜੀ ਗਈ ਕਿਸੇ ਵੀ ਸੰਸਥਾ ਨਾਲ ਸੰਬੰਧਿਤ, ਪ੍ਰਵਾਨਿਤ ਜਾਂ ਸੰਚਾਲਿਤ ਨਹੀਂ ਹੈ।",
      aboutLinksLabel: 'ਲਿੰਕਾਂ ਬਾਰੇ:',
      aboutLinks:
        "ਹਰੇਕ ਸਰੋਤ ਇੱਕ ਅਸਲੀ BC ਜਾਂ ਸੰਘੀ ਸੰਸਥਾ ਵੱਲ ਜਾਂਦਾ ਹੈ, ਜਿਸਦੀ ਪੁਸ਼ਟੀ ਹਰੇਕ ਸੰਸਥਾ ਦੀ ਮੌਜੂਦਾ ਸਾਈਟ ਨਾਲ ਕੀਤੀ ਗਈ ਹੈ। ਸਰਕਾਰੀ ਪੰਨੇ ਸਮੇਂ-ਸਮੇਂ 'ਤੇ ਬਦਲੇ ਜਾਂਦੇ ਹਨ, ਇਸ ਲਈ ਜੇ ਕੋਈ ਲਿੰਕ ਕੰਮ ਨਾ ਕਰੇ, ਤਾਂ ਸੰਸਥਾ ਦਾ ਨਾਂ ਸਿੱਧਾ ਖੋਜੋ।",
      translationNote:
        'ਇਸ ਸਫ਼ੇ ਦੇ ਮੀਨੂ ਅਤੇ ਸਿਰਲੇਖ ਅਨੁਵਾਦ ਕੀਤੇ ਗਏ ਹਨ। ਸੁਝਾਵਾਂ ਦੀ ਸਮੱਗਰੀ ਅਤੇ ਜੁੜੀਆਂ ਸਾਈਟਾਂ ਅੰਗਰੇਜ਼ੀ ਵਿੱਚ ਹੀ ਰਹਿੰਦੀਆਂ ਹਨ।',
      supportLabel: 'ਇਸ ਪ੍ਰੋਜੈਕਟ ਦੀ ਹਮਾਇਤ ਕਰੋ',
    },
    categories: {
      settlement: {
        title: 'ਵਸੇਬਾ ਅਤੇ ਦਿਸ਼ਾ-ਨਿਰਦੇਸ਼',
        shortTitle: 'ਵਸੇਬਾ',
        blurb: 'ਜ਼ਰੂਰੀ ਸੇਵਾਵਾਂ ਨਾਲ ਸ਼ੁਰੂ ਕਰੋ ਅਤੇ BC ਵਿੱਚ ਆਪਣਾ ਰਸਤਾ ਲੱਭੋ।',
        subtitle: 'ਪਹਿਲੇ ਹਫ਼ਤੇ ਦੀਆਂ ਜ਼ਰੂਰੀ ਗੱਲਾਂ: ਉਹ ਕਾਗਜ਼ਾਤ ਅਤੇ ਲੋਕ ਜੋ ਬਾਕੀ ਸਭ ਕੁਝ ਸੌਖਾ ਬਣਾਉਂਦੇ ਹਨ।',
      },
      housing: {
        title: 'ਰਿਹਾਇਸ਼ ਅਤੇ ਮੁੱਢਲੀਆਂ ਲੋੜਾਂ',
        shortTitle: 'ਰਿਹਾਇਸ਼',
        blurb: 'ਘਰ ਲੱਭੋ, ਆਪਣੇ ਹੱਕ ਜਾਣੋ, ਅਤੇ ਜ਼ਰੂਰੀ ਸਹਾਇਤਾ ਤੱਕ ਪਹੁੰਚੋ।',
        subtitle: "ਰਹਿਣ ਲਈ ਸੁਰੱਖਿਅਤ ਥਾਂ ਅਤੇ ਇਸਨੂੰ ਭਰਨ ਲਈ ਜ਼ਰੂਰੀ ਚੀਜ਼ਾਂ, ਨਾਲ ਹੀ ਕਿਰਾਏਦਾਰ ਵਜੋਂ ਤੁਹਾਡੇ ਹੱਕ।",
      },
      healthcare: {
        title: 'ਸਿਹਤ ਸੰਭਾਲ ਅਤੇ ਤੰਦਰੁਸਤੀ',
        shortTitle: 'ਸਿਹਤ',
        blurb: 'ਡਾਕਟਰ ਨੂੰ ਮਿਲੋ, ਦਵਾਈ ਲਵੋ, ਅਤੇ ਸਮਝੋ ਕਿ MSP ਕੀ ਕਵਰ ਕਰਦਾ ਹੈ।',
        subtitle: 'BC ਦੀ ਸਿਹਤ ਪ੍ਰਣਾਲੀ ਵਿੱਚ ਦਾਖਲ ਹੋਣਾ, ਅਤੇ ਇਹ ਜਾਣਨਾ ਕਿ ਇਹ ਕੀ ਕਵਰ ਕਰਦੀ ਹੈ ਅਤੇ ਕੀ ਨਹੀਂ।',
      },
      employment: {
        title: 'ਰੁਜ਼ਗਾਰ ਅਤੇ ਯੋਗਤਾ ਮਾਨਤਾ',
        shortTitle: 'ਰੁਜ਼ਗਾਰ',
        blurb: 'ਆਪਣੇ ਤਜਰਬੇ ਨੂੰ ਮਾਨਤਾ ਦਿਵਾਓ ਅਤੇ ਇਸ ਦੇ ਅਨੁਸਾਰ ਨੌਕਰੀ ਲੱਭੋ।',
        subtitle: 'ਆਪਣੇ ਤਜਰਬੇ ਨੂੰ ਮਾਨਤਾ ਦਿਵਾਉਣਾ ਅਤੇ ਉਸ ਦੇ ਅਨੁਸਾਰ ਨੌਕਰੀ ਲੱਭਣਾ।',
      },
      language: {
        title: 'ਭਾਸ਼ਾ ਅਤੇ ਗੱਲਬਾਤ',
        shortTitle: 'ਭਾਸ਼ਾ',
        blurb: 'ਮੁਫ਼ਤ ਕਲਾਸਾਂ ਅਤੇ ਰੋਜ਼ਾਨਾ ਸਾਧਨਾਂ ਨਾਲ ਆਪਣੀ ਅੰਗਰੇਜ਼ੀ ਵਿੱਚ ਭਰੋਸਾ ਵਧਾਓ।',
        subtitle: 'ਬਿਨਾਂ ਕਿਸੇ ਦਬਾਅ ਦੇ, ਕਲਾਸਾਂ, ਅਭਿਆਸ ਅਤੇ ਰੋਜ਼ਾਨਾ ਸਾਧਨਾਂ ਰਾਹੀਂ ਅੰਗਰੇਜ਼ੀ ਵਿੱਚ ਭਰੋਸਾ ਬਣਾਓ।',
      },
      legal: {
        title: 'ਕਾਨੂੰਨੀ ਸਹਾਇਤਾ ਅਤੇ ਹੱਕ',
        shortTitle: 'ਕਾਨੂੰਨੀ',
        blurb: 'ਆਪਣੇ ਹੱਕ ਜਾਣੋ ਅਤੇ ਮੁਫ਼ਤ ਕਾਨੂੰਨੀ ਮਦਦ ਤੱਕ ਪਹੁੰਚੋ।',
        subtitle: "ਆਪਣੇ ਹੱਕ ਜਾਣਨਾ, ਅਤੇ ਜਦੋਂ ਕੁਝ ਗ਼ਲਤ ਲੱਗੇ ਤਾਂ ਮੁਫ਼ਤ ਮਦਦ ਕਿੱਥੋਂ ਲੈਣੀ ਹੈ, ਇਹ ਜਾਣਨਾ।",
      },
      financial: {
        title: 'ਵਿੱਤੀ ਜਾਗਰੂਕਤਾ ਅਤੇ ਪੈਸੇ ਦਾ ਪ੍ਰਬੰਧਨ',
        shortTitle: 'ਪੈਸਾ',
        blurb: 'ਆਪਣੇ ਪੈਸੇ ਦਾ ਪ੍ਰਬੰਧਨ ਕਰੋ ਅਤੇ ਕੈਨੇਡਾ ਵਿੱਚ ਕ੍ਰੈਡਿਟ ਇਤਿਹਾਸ ਬਣਾਓ।',
        subtitle: 'ਕੈਨੇਡੀਅਨ ਬੈਂਕਿੰਗ, ਕ੍ਰੈਡਿਟ ਅਤੇ ਟੈਕਸਾਂ ਨੂੰ ਸ਼ੁਰੂ ਤੋਂ ਸਮਝਣਾ।',
      },
      transportation: {
        title: 'ਆਵਾਜਾਈ ਅਤੇ ਘੁੰਮਣਾ-ਫਿਰਨਾ',
        shortTitle: 'ਆਵਾਜਾਈ',
        blurb: 'ਲਾਇਸੈਂਸ ਲਵੋ, ਟਰਾਂਜ਼ਿਟ ਵਰਤੋ, ਅਤੇ ਬ੍ਰਿਟਿਸ਼ ਕੋਲੰਬੀਆ ਵਿੱਚ ਘੁੰਮੋ।',
        subtitle: 'ਗੱਡੀ ਚਲਾਉਣਾ, ਟਰਾਂਜ਼ਿਟ ਅਤੇ ਫੈਰੀਆਂ: ਸੂਬੇ ਵਿੱਚ ਘੁੰਮਣ ਲਈ ਵਿਹਾਰਕ ਜਾਣਕਾਰੀ।',
      },
      'mental-health': {
        title: 'ਮਾਨਸਿਕ ਸਿਹਤ ਅਤੇ ਤੰਦਰੁਸਤੀ',
        shortTitle: 'ਤੰਦਰੁਸਤੀ',
        blurb: 'ਇਸ ਤਬਦੀਲੀ ਦੌਰਾਨ ਆਪਣੀ ਭਾਵਨਾਤਮਕ ਸਿਹਤ ਦਾ ਖਿਆਲ ਰੱਖੋ।',
        subtitle: 'ਦਬਾਅ ਮਹਿਸੂਸ ਕਰਨ ਦੀ ਇਜਾਜ਼ਤ, ਅਤੇ ਜਦੋਂ ਲੋੜ ਹੋਵੇ ਤਾਂ ਅਸਲ ਸਹਾਇਤਾ।',
      },
      social: {
        title: 'ਸਮਾਜਿਕ ਏਕੀਕਰਨ ਅਤੇ ਭਾਈਚਾਰਕ ਸੰਪਰਕ',
        shortTitle: 'ਭਾਈਚਾਰਾ',
        blurb: 'ਆਪਣੇ ਭਾਈਚਾਰੇ ਨਾਲ ਜੁੜੋ ਅਤੇ ਅਸਲ ਰਿਸ਼ਤੇ ਬਣਾਓ।',
        subtitle: 'ਨਵੇਂ ਸ਼ਹਿਰ ਵਿੱਚ ਦੋਸਤਾਂ, ਸਲਾਹਕਾਰਾਂ ਅਤੇ ਭਾਈਚਾਰੇ ਦਾ ਇੱਕ ਦਾਇਰਾ ਬਣਾਉਣਾ।',
      },
      education: {
        title: 'BC ਵਿੱਚ ਸਿੱਖਿਆ ਅਤੇ ਸਿਖਲਾਈ',
        shortTitle: 'ਸਿੱਖਿਆ',
        blurb: 'ਸਕੂਲ ਵਿੱਚ ਦਾਖਲ ਹੋਵੋ, ਪੜ੍ਹਾਈ ਲਈ ਫੰਡ ਲਵੋ, ਅਤੇ BC ਵਿੱਚ ਸਿੱਖਦੇ ਰਹੋ।',
        subtitle: 'ਸਕੂਲ ਵਿੱਚ ਦਾਖਲਾ ਲੈਣਾ, ਹੋਰ ਪੜ੍ਹਾਈ ਲਈ ਫੰਡਿੰਗ, ਅਤੇ ਕੈਨੇਡੀਅਨ ਯੋਗਤਾਵਾਂ ਬਣਾਉਣਾ।',
      },
      'working-holiday': {
        title: 'ਵਰਕਿੰਗ ਹਾਲੀਡੇ ਵੀਜ਼ਾ (IEC)',
        shortTitle: 'ਵਰਕਿੰਗ ਹਾਲੀਡੇ',
        blurb: "ਅਰਜ਼ੀ ਤੋਂ ਲੈ ਕੇ ਪਹੁੰਚਣ ਤੱਕ, ਆਪਣੇ ਇੰਟਰਨੈਸ਼ਨਲ ਐਕਸਪੀਰੀਅੰਸ ਕੈਨੇਡਾ ਪਰਮਿਟ ਦੀ ਯੋਜਨਾ ਬਣਾਓ।",
        subtitle: "ਇੰਟਰਨੈਸ਼ਨਲ ਐਕਸਪੀਰੀਅੰਸ ਕੈਨੇਡਾ ਪਰਮਿਟ 'ਤੇ ਕੈਨੇਡਾ ਵਿੱਚ ਕੰਮ ਕਰਨ ਅਤੇ ਘੁੰਮਣ ਲਈ ਲੋੜੀਂਦੀ ਹਰ ਚੀਜ਼।",
      },
    },
  },

  tl: {
    meta: {
      homeTitleSuffix: 'Mga Mapagkukunan para sa Pananahan sa British Columbia',
      homeDescription:
        'Libre at simpleng mga gabay para sa mga bagong dating sa British Columbia: pabahay, kalusugan, trabaho, ID, paaralan, at marami pang iba. Bawat tip ay direktang naka-link sa opisyal na mapagkukunan.',
      resourcesSuffixTail: 'libre at pinagkakatiwalaang mapagkukunan para sa mga bagong dating sa British Columbia.',
    },
    hero: {
      eyebrow: 'Maligayang pagdating sa',
      titleLines: ['British', 'Columbia'],
      tagline:
        'Maiikling tip at mapagkakatiwalaang mapagkukunan para tulungan kang simulan ang bagong buhay mo sa Canada.',
      searchPlaceholder: 'Maghanap ng pabahay, trabaho, kalusugan…',
      searchLabel: 'Maghanap ng mapagkukunan',
      clearLabel: 'I-clear ang paghahanap',
    },
    home: {
      startHereTitle: 'Magsimula rito',
      startHereNote: 'Ang apat na bagay na mahalaga sa unang mga linggo mo.',
      otherTitle: 'Ang lahat ng iba pa',
      exploreResources: 'Tingnan ang mga mapagkukunan',
      resultsFoundOne: '{n} mapagkukunan ang nahanap',
      resultsFoundOther: '{n} mga mapagkukunan ang nahanap',
      noResults: 'Walang nahanap na tumutugma sa “{q}”. Subukan ang ibang salita.',
      communityNote: 'Tala mula sa komunidad',
    },
    category: {
      backToTopics: 'Bumalik sa mga paksa',
      resourceCountOne: '{n} mapagkukunan',
      resourceCountOther: '{n} mga mapagkukunan',
    },
    resourceTypes: { Tip: 'Tip', Action: 'Gawain', 'Next step': 'Susunod na hakbang', Community: 'Komunidad' },
    common: {
      switchLanguage: 'Pumili ng wika',
      lightMode: 'Lumipat sa light mode',
      darkMode: 'Lumipat sa dark mode',
      backToTopLabel: 'Bumalik sa itaas',
      opensNewTab: '(magbubukas sa bagong tab)',
    },
    footer: {
      disclaimerLabel: 'Paalala:',
      disclaimer:
        'Ang Newcomers BC ay isang independiyenteng mapagkukunan na ginawa para tulungan ang mga taong nais manirahan, bumisita, o mag-explore sa Canada. Hindi ito kaakibat, inendorso, o pinapatakbo ng Gobyerno ng Canada, ng Gobyerno ng British Columbia, o ng alinmang organisasyong naka-link sa site na ito.',
      aboutLinksLabel: 'Tungkol sa mga link:',
      aboutLinks:
        'Bawat mapagkukunan ay naka-link sa tunay na organisasyon ng BC o pederal, na na-verify laban sa kasalukuyang site ng bawat organisasyon. Paminsan-minsan ay nire-restructure ang mga pahina ng gobyerno, kaya kung may sirang link, hanapin na lang ang pangalan ng organisasyon nang direkta.',
      translationNote:
        'Isinalin ang mga menu at heading ng pahinang ito. Ang mga tip mismo at ang mga site na naka-link ay nananatiling nasa Ingles.',
      supportLabel: 'Suportahan ang proyektong ito',
    },
    categories: {
      settlement: {
        title: 'Pananahan at Oryentasyon',
        shortTitle: 'Pananahan',
        blurb: 'Magsimula sa mahahalagang serbisyo at matutong mag-navigate sa BC.',
        subtitle:
          'Ang mga pangunahing pangangailangan sa unang linggo: ang mga papeles at taong magbubukas ng lahat ng iba pa.',
      },
      housing: {
        title: 'Pabahay at Pangunahing Pangangailangan',
        shortTitle: 'Pabahay',
        blurb: 'Humanap ng tirahan, alamin ang iyong mga karapatan, at makakuha ng mahahalagang suporta.',
        subtitle:
          'Isang ligtas na lugar na titirhan at ang mga pangunahing kailangan mo rito, kasama ang iyong mga karapatan bilang nangungupahan.',
      },
      healthcare: {
        title: 'Pangangalagang Pangkalusugan',
        shortTitle: 'Kalusugan',
        blurb: 'Magpatingin sa doktor, magpagamot, at unawain kung ano ang saklaw ng MSP.',
        subtitle: 'Kung paano makapasok sa sistema ng kalusugan ng BC, at alamin kung ano ang saklaw nito at hindi.',
      },
      employment: {
        title: 'Trabaho at Pagkilala sa Kredensyal',
        shortTitle: 'Trabaho',
        blurb: 'Makuha ang pagkilala sa iyong karanasan at makahanap ng trabahong bagay dito.',
        subtitle: 'Pagkuha ng pagkilala sa iyong karanasan at paghahanap ng trabahong angkop dito.',
      },
      language: {
        title: 'Wika at Komunikasyon',
        shortTitle: 'Wika',
        blurb: 'Palakasin ang iyong kumpiyansa sa Ingles gamit ang libreng klase at mga araw-araw na kasangkapan.',
        subtitle:
          'Palakasin ang kumpiyansa sa Ingles nang walang pressure, sa tulong ng mga klase, pagsasanay, at pang-araw-araw na kasangkapan.',
      },
      legal: {
        title: 'Suportang Legal at Karapatan',
        shortTitle: 'Legal',
        blurb: 'Alamin ang iyong mga karapatan at makakuha ng libreng tulong legal.',
        subtitle:
          'Alamin ang iyong mga karapatan, at kung saan makakakuha ng libreng tulong kapag may pakiramdam kang hindi makatarungan.',
      },
      financial: {
        title: 'Literasiya sa Pananalapi at Pamamahala ng Pera',
        shortTitle: 'Pera',
        blurb: 'Pamahalaan ang iyong pera at bumuo ng credit history sa Canada.',
        subtitle: 'Unawain ang banking, credit, at buwis sa Canada mula sa simula.',
      },
      transportation: {
        title: 'Transportasyon at Paggalaw',
        shortTitle: 'Transportasyon',
        blurb: 'Kumuha ng lisensya, sumakay sa transit, at maglakbay sa British Columbia.',
        subtitle: 'Pagmamaneho, pampublikong transportasyon, at ferry: ang praktikal na lohistika ng paggalaw sa lalawigan.',
      },
      'mental-health': {
        title: 'Kalusugang Mental at Kagalingan',
        shortTitle: 'Kagalingan',
        blurb: 'Alagaan ang iyong emosyonal na kalusugan habang nagbabago ang buhay mo.',
        subtitle: 'Pahintulot na madama ang labis na pagod, at tunay na suporta kapag kailangan mo ng higit pa rito.',
      },
      social: {
        title: 'Integrasyong Panlipunan at Koneksyon sa Komunidad',
        shortTitle: 'Komunidad',
        blurb: 'Kumonekta sa iyong komunidad at bumuo ng tunay na relasyon.',
        subtitle: 'Pagbuo ng bilog ng mga tao, kaibigan, mentor, at komunidad sa isang bagong lungsod.',
      },
      education: {
        title: 'Edukasyon at Pag-aaral sa BC',
        shortTitle: 'Edukasyon',
        blurb: 'Magparehistro sa paaralan, kumuha ng pondo para sa pag-aaral, at magpatuloy na matuto sa BC.',
        subtitle: 'Pagpaparehistro sa paaralan, pagpopondo sa karagdagang pag-aaral, at pagbuo ng kredensyal na Canadian.',
      },
      'working-holiday': {
        title: 'Working Holiday Visa (IEC)',
        shortTitle: 'Working Holiday',
        blurb: 'Planuhin ang iyong International Experience Canada permit, mula sa aplikasyon hanggang sa pagdating.',
        subtitle:
          'Lahat ng kailangan mo para makapagtrabaho at makapaglakbay sa Canada gamit ang International Experience Canada permit.',
      },
    },
  },

  'zh-Hans': {
    meta: {
      homeTitleSuffix: '不列颠哥伦比亚省定居资源',
      homeDescription:
        '为初到不列颠哥伦比亚省的新移民提供的免费、通俗易懂的指南，涵盖住房、医疗、就业、身份证件、教育等内容。每条提示均直接链接到官方来源。',
      resourcesSuffixTail: '项免费、可信的资源，专为不列颠哥伦比亚省新移民提供。',
    },
    hero: {
      eyebrow: '欢迎来到',
      titleLines: ['不列颠', '哥伦比亚省'],
      tagline: '简明实用的提示和可信资源，助您在加拿大开启新生活。',
      searchPlaceholder: '搜索住房、就业、医疗等…',
      searchLabel: '搜索资源',
      clearLabel: '清除搜索',
    },
    home: {
      startHereTitle: '从这里开始',
      startHereNote: '初到的前几周最重要的四件事。',
      otherTitle: '其他内容',
      exploreResources: '查看资源',
      resultsFoundOne: '找到 {n} 项资源',
      resultsFoundOther: '找到 {n} 项资源',
      noResults: '未找到与“{q}”匹配的资源，请尝试其他关键词。',
      communityNote: '社区分享信息',
    },
    category: {
      backToTopics: '返回主题列表',
      resourceCountOne: '{n} 项资源',
      resourceCountOther: '{n} 项资源',
    },
    resourceTypes: { Tip: '提示', Action: '行动事项', 'Next step': '下一步', Community: '社区分享' },
    common: {
      switchLanguage: '选择语言',
      lightMode: '切换到浅色模式',
      darkMode: '切换到深色模式',
      backToTopLabel: '返回顶部',
      opensNewTab: '(在新标签页中打开)',
    },
    footer: {
      disclaimerLabel: '免责声明：',
      disclaimer:
        'Newcomers BC 是一个独立资源网站，旨在帮助希望在加拿大生活、访问或探索的人们。本网站与加拿大政府、不列颠哥伦比亚省政府，或本站链接的任何机构均无关联，未获其认可，也非由其运营。',
      aboutLinksLabel: '关于链接：',
      aboutLinks:
        '每项资源均链接到真实的BC省或联邦机构，并已对照该机构现有网站进行核实。政府网页会不定期改版，如链接失效，请直接搜索该机构名称查找。',
      translationNote: '本页面的菜单和标题已翻译。提示内容及所链接的网站仍为英文。',
      supportLabel: '支持本项目',
    },
    categories: {
      settlement: {
        title: '定居与导航',
        shortTitle: '定居',
        blurb: '从基本服务入手，熟悉在BC省的生活。',
        subtitle: '初到第一周最重要的事项：为您打开其他一切大门的手续和联系人。',
      },
      housing: {
        title: '住房与基本生活需求',
        shortTitle: '住房',
        blurb: '找到住所，了解自身权利，获取必要的支持。',
        subtitle: '一个安全的居所及必需用品，以及作为租户应享有的权利。',
      },
      healthcare: {
        title: '医疗与健康',
        shortTitle: '医疗',
        blurb: '看医生、配药，并了解MSP的保障范围。',
        subtitle: '如何加入BC省的医疗体系，以及了解它覆盖和不覆盖的内容。',
      },
      employment: {
        title: '就业与资历认证',
        shortTitle: '就业',
        blurb: '让您的工作经验获得认可，并找到与之匹配的工作。',
        subtitle: '让您的经验获得认可，并找到与之相符的工作。',
      },
      language: {
        title: '语言与沟通',
        shortTitle: '语言',
        blurb: '通过免费课程和日常工具，从容提升英语水平。',
        subtitle: '通过课程、练习和日常工具，从容建立英语自信，无需有压力。',
      },
      legal: {
        title: '法律支持与权利',
        shortTitle: '法律',
        blurb: '了解自身权利，获取免费法律援助。',
        subtitle: '了解自身权利，并在感到不公平时知道去哪里寻求免费帮助。',
      },
      financial: {
        title: '理财知识与资金管理',
        shortTitle: '理财',
        blurb: '管理您的资金，建立在加拿大的信用记录。',
        subtitle: '从零开始了解加拿大的银行、信用和税务制度。',
      },
      transportation: {
        title: '交通与出行',
        shortTitle: '交通',
        blurb: '考取驾照，乘坐公共交通，畅游不列颠哥伦比亚省。',
        subtitle: '驾驶、公共交通与渡轮：省内出行的实用信息。',
      },
      'mental-health': {
        title: '心理健康与身心福祉',
        shortTitle: '身心健康',
        blurb: '在这段转变过程中，照顾好自己的情绪健康。',
        subtitle: '允许自己感到不知所措，并在需要更多支持时获得真正的帮助。',
      },
      social: {
        title: '社会融入与社区联系',
        shortTitle: '社区',
        blurb: '融入当地社区，建立真挚的人际关系。',
        subtitle: '在新城市中建立朋友、导师和社区的人际圈子。',
      },
      education: {
        title: 'BC省教育与学习',
        shortTitle: '教育',
        blurb: '注册入学，申请助学资金，在BC省持续学习。',
        subtitle: '注册入学、为继续深造申请资金，以及积累加拿大的学历资历。',
      },
      'working-holiday': {
        title: '打工度假签证 (IEC)',
        shortTitle: '打工度假',
        blurb: '从申请到抵达，规划您的国际经验加拿大计划(IEC)许可。',
        subtitle: '凭国际经验加拿大计划(IEC)许可在加拿大工作和旅行所需了解的一切。',
      },
    },
  },

  'zh-Hant': {
    meta: {
      homeTitleSuffix: '卑詩省定居資源',
      homeDescription:
        '為初到卑詩省的新移民提供的免費、淺白易懂指南，涵蓋住房、醫療、就業、身份證件、教育等內容。每項提示均直接連結至官方資源。',
      resourcesSuffixTail: '項免費、可靠的資源，專為卑詩省新移民提供。',
    },
    hero: {
      eyebrow: '歡迎來到',
      titleLines: ['卑詩省'],
      tagline: '簡明實用的提示與可靠資源，助您展開在加拿大的新生活。',
      searchPlaceholder: '搜尋住房、就業、醫療等…',
      searchLabel: '搜尋資源',
      clearLabel: '清除搜尋',
    },
    home: {
      startHereTitle: '由此開始',
      startHereNote: '初到首幾星期最重要的四件事。',
      otherTitle: '其他內容',
      exploreResources: '查看資源',
      resultsFoundOne: '找到 {n} 項資源',
      resultsFoundOther: '找到 {n} 項資源',
      noResults: '找不到符合「{q}」的資源，請嘗試其他關鍵字。',
      communityNote: '社群分享資訊',
    },
    category: {
      backToTopics: '返回主題列表',
      resourceCountOne: '{n} 項資源',
      resourceCountOther: '{n} 項資源',
    },
    resourceTypes: { Tip: '提示', Action: '行動事項', 'Next step': '下一步', Community: '社群分享' },
    common: {
      switchLanguage: '選擇語言',
      lightMode: '切換至淺色模式',
      darkMode: '切換至深色模式',
      backToTopLabel: '返回頂部',
      opensNewTab: '（在新分頁開啟）',
    },
    footer: {
      disclaimerLabel: '免責聲明：',
      disclaimer:
        'Newcomers BC 是一個獨立資源網站，旨在協助希望在加拿大生活、探訪或探索的人士。本網站與加拿大政府、卑詩省政府，或本站連結的任何機構均無關聯，未獲其認可，亦非由其營運。',
      aboutLinksLabel: '關於連結：',
      aboutLinks:
        '每項資源均連結至真實的卑詩省或聯邦機構，並已對照該機構現有網站核實。政府網頁不時會重新整理架構，如連結失效，請直接搜尋該機構名稱查找。',
      translationNote: '此頁面的選單與標題已翻譯。提示內容及所連結的網站仍為英文。',
      supportLabel: '支持本專案',
    },
    categories: {
      settlement: {
        title: '定居與導覽',
        shortTitle: '定居',
        blurb: '從基本服務入手，熟悉在卑詩省的生活。',
        subtitle: '初到首星期最重要的事項：為您打開一切的手續與聯繫人。',
      },
      housing: {
        title: '住房與基本生活需求',
        shortTitle: '住房',
        blurb: '找到住所，了解自身權利，取得必要支援。',
        subtitle: '一個安全的居所及必需用品，以及作為租客應有的權利。',
      },
      healthcare: {
        title: '醫療與健康',
        shortTitle: '醫療',
        blurb: '看醫生、配藥，並了解MSP的保障範圍。',
        subtitle: '如何加入卑詩省的醫療制度，以及了解它涵蓋與不涵蓋的內容。',
      },
      employment: {
        title: '就業與資歷認證',
        shortTitle: '就業',
        blurb: '讓您的工作經驗獲得認可，並找到合適的工作。',
        subtitle: '讓您的經驗獲得認可，並找到與之相符的工作。',
      },
      language: {
        title: '語言與溝通',
        shortTitle: '語言',
        blurb: '透過免費課程和日常工具，輕鬆提升英語信心。',
        subtitle: '透過課程、練習和日常工具，在無壓力的情況下建立英語信心。',
      },
      legal: {
        title: '法律支援與權利',
        shortTitle: '法律',
        blurb: '了解自身權利，取得免費法律協助。',
        subtitle: '了解自身權利，並在感到不公平時知道可以到哪裡尋求免費協助。',
      },
      financial: {
        title: '理財知識與資金管理',
        shortTitle: '理財',
        blurb: '管理您的資金，建立在加拿大的信用記錄。',
        subtitle: '從零開始了解加拿大的銀行、信貸與稅務制度。',
      },
      transportation: {
        title: '交通與出行',
        shortTitle: '交通',
        blurb: '考取駕照，乘搭公共交通，暢遊卑詩省。',
        subtitle: '駕駛、公共交通與渡輪：省內出行的實用資訊。',
      },
      'mental-health': {
        title: '心理健康與身心福祉',
        shortTitle: '身心健康',
        blurb: '在這段轉變期間，照顧好自己的情緒健康。',
        subtitle: '容許自己感到不知所措，並在需要更多支援時獲得真正的幫助。',
      },
      social: {
        title: '社會融入與社群連結',
        shortTitle: '社群',
        blurb: '融入當地社群，建立真摯的人際關係。',
        subtitle: '在新城市建立朋友、導師和社群的人際圈子。',
      },
      education: {
        title: '卑詩省教育與學習',
        shortTitle: '教育',
        blurb: '註冊入學，申請助學資金，在卑詩省持續進修。',
        subtitle: '註冊入學、為進修申請資金，以及累積加拿大學歷資歷。',
      },
      'working-holiday': {
        title: '打工度假簽證 (IEC)',
        shortTitle: '打工度假',
        blurb: '由申請到抵達，規劃您的國際經驗加拿大計劃(IEC)許可。',
        subtitle: '憑國際經驗加拿大計劃(IEC)許可在加拿大工作和旅行所需知道的一切。',
      },
    },
  },
};
