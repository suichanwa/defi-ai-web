import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

export const LANGUAGE_STORAGE_KEY = 'defi-ai-app-language'

export const supportedLanguages = {
  en: 'English',
  es: 'Espanol',
  id: 'Bahasa Indonesia',
  ja: '日本語',
} as const

export type SupportedLanguage = keyof typeof supportedLanguages

export const normalizeLanguage = (language?: string | null): SupportedLanguage => {
  const normalized = language?.toLowerCase().trim()

  if (!normalized) {
    return 'en'
  }

  if (normalized.startsWith('ja')) {
    return 'ja'
  }

  if (normalized.startsWith('id')) {
    return 'id'
  }

  if (normalized.startsWith('es')) {
    return 'es'
  }

  return 'en'
}

export const getBrowserLanguage = (): SupportedLanguage => {
  if (typeof navigator === 'undefined') {
    return 'en'
  }

  return normalizeLanguage(navigator.language)
}

const resources = {
  en: {
    translation: {
      nav: {
        download: 'Download APK',
        backHome: 'Back to Home',
        language: 'Language',
      },
      language: {
        auto: 'Auto',
      },
      hero: {
        titleLine1: 'Your Keys.',
        titleLine2: 'Your Crypto.',
        description:
          'A Solana wallet built for real DeFi users. Trade, track, and message - all from your phone, with no one else holding your keys.',
        status: 'End-to-end messaging | Zero custody risk',
        phoneAlt: 'defi-ai-app wallet preview',
      },
      features: {
        heading: "Everything you need. Nothing you don't.",
        description:
          'Self-custody first, Solana fast, and built for real DeFi flows. Every feature is there because you use it.',
        items: {
          selfCustody: {
            title: 'Self-Custody',
            description: 'Your private keys live on your device. Not on a server. Not with us.',
          },
          portfolio: {
            title: 'Solana Portfolio',
            description: 'Track your SOL and tokens in real time with live on-chain pricing.',
          },
          swap: {
            title: 'Send / Receive / Swap',
            description: 'Full DeFi actions in a clean mobile interface. No fluff.',
          },
          messaging: {
            title: 'Secure Messaging',
            description: 'End-to-end encrypted in-app chat. Talk crypto without leaving your wallet.',
          },
        },
      },
      download: {
        heading: 'Get defi-ai-app',
        description: 'Available for Android. Free. Open source.',
        footer: 'Self-custodial | Solana | Android',
      },
      downloadPage: {
        badge: 'ANDROID APK',
        heading: 'Download defi-ai-app',
        description: 'Latest self-custodial Solana wallet build, ready to install on your phone.',
        directLink: 'Direct link',
        installTitle: 'Install steps',
        installStep1: '1. Tap Download APK.',
        installStep2: '2. Open the file when it finishes.',
        installStep3: '3. Allow installs from your browser if prompted.',
        installStep4: '4. Launch defi-ai-app and set up your wallet.',
        troubleTitle: 'Having trouble?',
        troubleBody:
          'If the download does not start, open the direct link above or make sure the APK exists at {{path}} in your deployed site.',
      },
      footer: {
        copy: '(c) 2026 defi-ai-app | Built on Solana',
      },
    },
  },
  es: {
    translation: {
      nav: {
        download: 'Descargar APK',
        backHome: 'Volver al inicio',
        language: 'Idioma',
      },
      language: {
        auto: 'Auto',
      },
      hero: {
        titleLine1: 'Tus claves.',
        titleLine2: 'Tu cripto.',
        description:
          'Una billetera de Solana creada para usuarios reales de DeFi. Opera, sigue tu cartera y chatea desde tu telefono, sin que nadie mas custodie tus claves.',
        status: 'Mensajeria cifrada | Riesgo de custodia cero',
        phoneAlt: 'vista previa de la billetera defi-ai-app',
      },
      features: {
        heading: 'Todo lo que necesitas. Nada de sobra.',
        description:
          'Autocustodia primero, Solana rapido y pensado para flujos DeFi reales. Cada funcion esta ahi porque la usas.',
        items: {
          selfCustody: {
            title: 'Autocustodia',
            description: 'Tus claves privadas viven en tu dispositivo. No en un servidor. No con nosotros.',
          },
          portfolio: {
            title: 'Portafolio Solana',
            description: 'Sigue tu SOL y tus tokens en tiempo real con precios on-chain.',
          },
          swap: {
            title: 'Enviar / Recibir / Swap',
            description: 'Acciones DeFi completas en una interfaz movil limpia. Sin relleno.',
          },
          messaging: {
            title: 'Mensajeria segura',
            description: 'Chat cifrado de extremo a extremo dentro de la app. Habla de cripto sin salir de tu wallet.',
          },
        },
      },
      download: {
        heading: 'Consigue defi-ai-app',
        description: 'Disponible para Android. Gratis. Codigo abierto.',
        footer: 'Autocustodia | Solana | Android',
      },
      downloadPage: {
        badge: 'APK PARA ANDROID',
        heading: 'Descargar defi-ai-app',
        description: 'La version mas reciente de la wallet autocustodiada de Solana, lista para instalar en tu telefono.',
        directLink: 'Enlace directo',
        installTitle: 'Pasos de instalacion',
        installStep1: '1. Toca Descargar APK.',
        installStep2: '2. Abre el archivo cuando termine.',
        installStep3: '3. Permite instalaciones desde tu navegador si se solicita.',
        installStep4: '4. Abre defi-ai-app y configura tu wallet.',
        troubleTitle: 'Tienes problemas?',
        troubleBody:
          'Si la descarga no comienza, abre el enlace directo de arriba o asegurate de que el APK exista en {{path}} dentro de tu sitio desplegado.',
      },
      footer: {
        copy: '(c) 2026 defi-ai-app | Construido sobre Solana',
      },
    },
  },
  id: {
    translation: {
      nav: {
        download: 'Unduh APK',
        backHome: 'Kembali ke Beranda',
        language: 'Bahasa',
      },
      language: {
        auto: 'Otomatis',
      },
      hero: {
        titleLine1: 'Kunci Anda.',
        titleLine2: 'Kripto Anda.',
        description:
          'Wallet Solana untuk pengguna DeFi sungguhan. Trading, pantau aset, dan kirim pesan langsung dari ponsel Anda, tanpa ada pihak lain yang memegang kunci Anda.',
        status: 'Pesan terenkripsi end-to-end | Risiko kustodi nol',
        phoneAlt: 'pratinjau wallet defi-ai-app',
      },
      features: {
        heading: 'Semua yang Anda butuhkan. Tanpa yang tidak perlu.',
        description:
          'Utamakan self-custody, cepat di Solana, dan dibuat untuk alur DeFi nyata. Setiap fitur ada karena memang Anda gunakan.',
        items: {
          selfCustody: {
            title: 'Self-Custody',
            description: 'Private key Anda tetap di perangkat Anda. Bukan di server. Bukan pada kami.',
          },
          portfolio: {
            title: 'Portofolio Solana',
            description: 'Pantau SOL dan token Anda secara real time dengan harga on-chain.',
          },
          swap: {
            title: 'Kirim / Terima / Swap',
            description: 'Fitur DeFi lengkap dalam antarmuka seluler yang rapi. Tanpa bising.',
          },
          messaging: {
            title: 'Pesan Aman',
            description: 'Chat terenkripsi end-to-end di dalam aplikasi. Bahas kripto tanpa meninggalkan wallet Anda.',
          },
        },
      },
      download: {
        heading: 'Dapatkan defi-ai-app',
        description: 'Tersedia untuk Android. Gratis. Open source.',
        footer: 'Self-custody | Solana | Android',
      },
      downloadPage: {
        badge: 'APK ANDROID',
        heading: 'Unduh defi-ai-app',
        description: 'Versi terbaru wallet Solana self-custody, siap dipasang di ponsel Anda.',
        directLink: 'Tautan langsung',
        installTitle: 'Langkah instalasi',
        installStep1: '1. Ketuk Unduh APK.',
        installStep2: '2. Buka file setelah selesai.',
        installStep3: '3. Izinkan instalasi dari browser Anda jika diminta.',
        installStep4: '4. Jalankan defi-ai-app dan siapkan wallet Anda.',
        troubleTitle: 'Mengalami masalah?',
        troubleBody:
          'Jika unduhan tidak dimulai, buka tautan langsung di atas atau pastikan APK tersedia di {{path}} pada situs yang Anda deploy.',
      },
      footer: {
        copy: '(c) 2026 defi-ai-app | Dibangun di atas Solana',
      },
    },
  },
  ja: {
    translation: {
      nav: {
        download: 'APKをダウンロード',
        backHome: 'ホームへ戻る',
        language: '言語',
      },
      language: {
        auto: '自動',
      },
      hero: {
        titleLine1: 'あなたの鍵。',
        titleLine2: 'あなたの暗号資産。',
        description:
          '本物のDeFiユーザー向けに作られたSolanaウォレットです。取引、資産確認、メッセージ送信まで、すべてスマホで完結。鍵を預ける必要はありません。',
        status: 'エンドツーエンド暗号化メッセージ | カストディリスクゼロ',
        phoneAlt: 'defi-ai-appウォレットのプレビュー',
      },
      features: {
        heading: '必要なものだけを、過不足なく。',
        description:
          'セルフカストディを最優先に、Solanaの高速性を活かし、実際のDeFiフロー向けに設計。使う機能だけを載せています。',
        items: {
          selfCustody: {
            title: 'セルフカストディ',
            description: '秘密鍵はあなたの端末内に保存されます。サーバーにも、私たちの管理下にも置かれません。',
          },
          portfolio: {
            title: 'Solanaポートフォリオ',
            description: 'SOLとトークンの残高をオンチェーン価格でリアルタイムに追跡できます。',
          },
          swap: {
            title: '送金 / 受取 / スワップ',
            description: '余計な要素を省いたモバイルUIで、必要なDeFi操作をまとめて実行できます。',
          },
          messaging: {
            title: 'セキュアメッセージ',
            description: 'アプリ内チャットはエンドツーエンド暗号化。ウォレットを離れずに暗号資産の会話ができます。',
          },
        },
      },
      download: {
        heading: 'defi-ai-appを入手',
        description: 'Android対応。無料。オープンソース。',
        footer: 'セルフカストディ | Solana | Android',
      },
      downloadPage: {
        badge: 'ANDROID APK',
        heading: 'defi-ai-appをダウンロード',
        description: '最新のセルフカストディ型Solanaウォレットを、スマホにすぐインストールできます。',
        directLink: '直接リンク',
        installTitle: 'インストール手順',
        installStep1: '1. APKをダウンロードをタップします。',
        installStep2: '2. ダウンロード完了後にファイルを開きます。',
        installStep3: '3. 求められた場合は、ブラウザからのインストールを許可します。',
        installStep4: '4. defi-ai-appを起動してウォレットを設定します。',
        troubleTitle: 'うまくいかない場合',
        troubleBody:
          'ダウンロードが始まらない場合は上の直接リンクを開くか、デプロイ先サイトの {{path}} にAPKが存在することを確認してください。',
      },
      footer: {
        copy: '(c) 2026 defi-ai-app | Solana上に構築',
      },
    },
  },
}

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    supportedLngs: Object.keys(supportedLanguages),
    nonExplicitSupportedLngs: true,
    load: 'languageOnly',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      lookupLocalStorage: LANGUAGE_STORAGE_KEY,
      caches: ['localStorage'],
    },
    react: {
      useSuspense: false,
    },
  })

if (typeof document !== 'undefined') {
  document.documentElement.lang = normalizeLanguage(i18n.resolvedLanguage ?? i18n.language)
  i18n.on('languageChanged', (language) => {
    document.documentElement.lang = normalizeLanguage(language)
  })
}

export default i18n