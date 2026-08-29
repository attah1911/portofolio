import { HomeData } from './page';
import { Dictionary, insert, nest, t } from 'intlayer';

export default {
  key: 'home-page',
  content: {
    nodeType: 'null',
    hero: {
      title: t({
        en: (
          <h1>
            <span className='sm:mr-auto'>Inspired By <em>ideas.</em></span>{' '}
            <span className='sm:ml-auto'>
              Driven by <em>code.</em>
            </span>{' '}
          </h1>
        ),
        id: (
          <h1>
            <span className='sm:mr-auto'>Terinspirasi oleh <em>ide.</em></span>{' '}
            <span className='sm:ml-auto'>
              Digerakkan oleh <em>kode.</em>
            </span>{' '}
          </h1>
        )
      }),
      left: {
        title: t({
          en: 'Available for Work',
          id: 'Tersedia untuk Bekerja'
        }),
        text: t({
          en: 'Open to internship opportunities, freelance work, and projects where I can build something that makes a difference.',
          id: 'Terbuka untuk peluang magang, freelance, dan proyek di mana saya bisa membangun sesuatu yang berarti.'
        })
      },
      center: {
        title: t({
          en: 'Who am i?',
          id: 'Siapa saya?'
        }),
        text: t({
          en: "I'm Muhammad Hatta Yudia Gymnastiar, an Information Systems graduate and Web Developer. I build digital solutions one line at a time and believe great projects are crafted through attention to detail.",
          id: 'Saya Muhammad Hatta Yudia Gymnastiar, seorang lulusan Sistem Informasi dan Web Developer. Saya membangun solusi digital baris demi baris dan percaya proyek hebat lahir dari perhatian pada detail.'
        })
      },
      right: {
        title: t({
          en: 'Information Systems at Universitas Gunadarma',
          id: 'Sistem Informasi di Universitas Gunadarma'
        }),
        text: t({
          en: 'Information Systems graduate from Universitas Gunadarma, turning theory into projects and learning into experience.',
          id: 'Lulusan Sistem Informasi dari Universitas Gunadarma, mengubah teori menjadi proyek dan pembelajaran menjadi pengalaman.'
        })
      }
    },
    mission: {
      text: t({
        en: 'This is my mission — Every challenge, experience, and line of code is an opportunity to improve. Every project can inspire colleagues and the community. Every repetition makes a difference, because excellence is simply the limit we converge toward.',
        id: 'Ini misi saya — Setiap tantangan, pengalaman, dan baris kode adalah kesempatan untuk berkembang. Setiap proyek bisa menginspirasi rekan dan komunitas. Setiap pengulangan membawa perbedaan, karena keunggulan hanyalah batas yang kita dekati.'
      }),
      items: [
        {
          id: 'eat',
          text: t({
            en: 'eat',
            id: 'makan'
          })
        },
        {
          id: 'sleep',
          text: t({
            en: 'sleep',
            id: 'tidur'
          })
        },
        {
          id: 'code',
          text: t({
            en: 'code',
            id: 'kode'
          })
        },
        {
          id: 'repeat',
          text: t({
            en: 'repeat',
            id: 'ulang'
          })
        }
      ]
    },
    career: {
      title: t({
        en: <h2>Experience Overview</h2>,
        id: (
          <h2>
            Ringkasan Pengalaman
          </h2>
        )
      })
    },
    experience: {
      title: t({
        en: 'Experience',
        id: 'Pengalaman'
      }),
      text: t({
        en: `"I solve problems by bridging data, design, and development. From conceptualizing products and crafting intuitive user interfaces to building robust web applications, I focus on creating digital solutions that are both practical and technically sound."`,
        id: `"Saya memecahkan masalah dengan menjembatani data, desain, dan pengembangan. Mulai dari mengonsep produk dan merancang antarmuka pengguna yang intuitif hingga membangun aplikasi web yang andal, saya fokus menciptakan solusi digital yang praktis dan solid secara teknis."`
      })
    },
    projects: {
      title: t({
        en: (
          <h2>
            Some of <b>my projects</b>
          </h2>
        ),
        id: (
          <h2>
            Beberapa <b>proyek saya</b>
          </h2>
        )
      })
    },
    but: {
      title: t({
        en: 'BUT',
        id: 'TAPI'
      }),
      text: t({
        en: "It's not all about technology",
        id: 'Tidak semuanya tentang teknologi'
      })
    },
    about: {
      title: t({
        en: <h2>Person Overview</h2>,
        id: (
          <h2>
            Ringkasan <em>Diri</em>
          </h2>
        )
      }),
      about: {
        badge: t({
          en: '#about',
          id: '#tentang'
        }),
        text: t({
          en: (
            <div>
              <p>
                I try not to let life run on autopilot. After all, we only get one. I enjoy paying
                attention to the little things, having a good conversation, feeling the warmth of
                the sun, learning something new, or simply noticing details that would usually go
                unnoticed.
              </p>

              <p>
                I enjoy being around people who share knowledge while staying humble. In the end,
                growing together has always seemed more meaningful than growing alone.
              </p>

              <p>
                There's a quote that has always stayed with me:{' '}
                <i>"Make a bet that love exists, and perform an act of love."</i>.
              </p>
            </div>
          ),
          id: (
            <div>
              <p>
                Saya berusaha agar hidup tidak berjalan di mode otomatis. Toh, kita hanya punya
                satu. Saya suka memperhatikan hal-hal kecil, mengobrol dengan baik, merasakan
                hangatnya matahari, belajar sesuatu yang baru, atau sekadar menyadari detail yang
                biasanya terlewat.
              </p>

              <p>
                Saya senang berada di dekat orang yang berbagi ilmu sambil tetap rendah hati.
                Pada akhirnya, tumbuh bersama selalu terasa lebih bermakna daripada tumbuh
                sendirian.
              </p>

              <p>
                Ada sebuah kutipan yang selalu saya ingat:{' '}
                <i>"Bertaruhlah bahwa cinta itu ada, dan lakukanlah sebuah tindakan cinta."</i>.
              </p>
            </div>
          )
        })
      },
      better: {
        text: t({
          en: 'I want to be better than I was yesterday.',
          id: 'Saya ingin menjadi lebih baik dari kemarin.'
        })
      },
      love: {
        text: t({
          en: 'I love playing video games.',
          id: 'Saya suka bermain video game.'
        })
      },
      location: {
        title: insert(
          t({
            en: 'Located in {{country}} {{gmt}}',
            id: 'Berada di {{country}} {{gmt}}'
          })
        )
      },
      hobbies: {
        title: t({
          en: 'Beyond Code',
          id: 'Di Luar Kode'
        }),
        text: t({
          en: (
            <div>
              <p>
                A large part of my free time ends up in video games, especially those that challenge
                patience, persistence, and the desire to improve. I also enjoy participating in
                hackathons and attending talks, always looking for new ideas, people, and
                experiences.
              </p>

              <p>
                But nothing replaces a good conversation or spending time with friends and family.
                Simple moments like these help me slow down, recharge, and remember that life
                happens far beyond the screen.
              </p>
            </div>
          ),
          id: (
            <div>
              <p>
                Sebagian besar waktu luang saya habis untuk video game, terutama yang menguji
                kesabaran, ketekunan, dan keinginan untuk berkembang. Saya juga senang mengikuti
                hackathon dan talk, selalu mencari ide, orang, dan pengalaman baru.
              </p>

              <p>
                Tapi tak ada yang menggantikan percakapan yang baik atau waktu bersama teman dan
                keluarga. Momen sederhana seperti itu membantu saya melambat, mengisi ulang energi,
                dan mengingat bahwa hidup terjadi jauh di luar layar.
              </p>
            </div>
          )
        })
      },
      gallery: {
        images: [
          '/images/hatta1.webp',
          '/images/hattawork.webp',
          '/images/hattagraduated.webp',
          '/images/hatta-friends.webp',
          '/images/hatta-friends-2.webp'
        ]
      }
    },
    skills: {
      title: 'Hard Skills',
      items: nest('skills')
    },
    cta: {
      title: 'CTA',
      text: t({
        en: "Let's turn ideas into efficient solutions together. Let's make it happen.",
        id: 'Mari bersama mengubah ide menjadi solusi yang efisien. Mari wujudkannya.'
      })
    }
  }
} satisfies Dictionary<HomeData>;
