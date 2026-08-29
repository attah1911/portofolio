import { Career } from '@/types/Career';
import { Dictionary, t } from 'intlayer';

export default {
  key: 'career',
  content: [
    {
      id: 'lepkom',
      title: t({
        en: 'LePKom — Laboratory Assistant & Administration',
        id: 'LePKom — Asisten Laboratorium & Administrasi'
      }),
      roles: t({
        en: ['Instructor', 'Laboratory Assistant'],
        id: ['Instruktur', 'Asisten Laboratorium']
      }),
      start: new Date('2023-09-01').getTime(),
      end: null,
      text: t({
        en: (
          <ul className='list-disc space-y-1 pl-5'>
            <li>
              Taught Web Development, DBMS, desktop applications, and computer networks to hundreds
              of students
            </li>
            <li>
              Developed ability to break down complex technical concepts into clear, digestible
              explanations
            </li>
            <li>
              Managed student records, enrollment workflows, and course logistics across multiple
              cohorts
            </li>
            <li>
              Learned that systematic thinking and clear communication are as critical as technical
              skill
            </li>
            <li>
              Deepened expertise in Web Development, DBMS design, and desktop application
              architecture
            </li>
          </ul>
        ),
        id: (
          <ul className='list-disc space-y-1 pl-5'>
            <li>
              Mengajar Web Development, DBMS, aplikasi desktop, dan jaringan komputer kepada ratusan
              mahasiswa
            </li>
            <li>
              Mengembangkan kemampuan memecah konsep teknis kompleks menjadi penjelasan yang jelas
              dan mudah dipahami
            </li>
            <li>
              Mengelola data mahasiswa, alur enrollment, dan logistik kursus di multiple cohort
            </li>
            <li>
              Belajar bahwa systematic thinking dan komunikasi yang jelas sama penting dengan skill
              teknis
            </li>
            <li>
              Memperdalam expertise di Web Development, desain DBMS, dan arsitektur aplikasi desktop
            </li>
          </ul>
        )
      })
    },
    {
      id: 'dicoding-asah',
      title: t({
        en: 'Dicoding Asah 2025 — Front-End Web & Back-End with AI',
        id: 'Dicoding Asah 2025 — Front-End Web & Back-End with AI'
      }),
      roles: t({
        en: ['Online Bootcamp', 'Independent Study Certificate'],
        id: ['Online Bootcamp', 'Studi Independen Bersertifikat']
      }),
      start: new Date('2025-07-28').getTime(),
      end: new Date('2026-01-14').getTime(),
      text: t({
        en: (
          <ul className='list-disc space-y-1 pl-5'>
            <li>
              Completed 250+ hours of structured bootcamp covering Front-End Web Development,
              Back-End Development, and Software Engineering
            </li>
            <li>
              Built capstone project integrating trained machine learning models directly into a web
              application for mining value chain decision-making
            </li>
            <li>
              First hands-on experience deploying AI models within web applications—realized web
              development extends far beyond CRUD operations
            </li>
            <li>
              Deepened understanding of connecting front-end interfaces, back-end logic, and machine
              learning into cohesive systems
            </li>
            <li>
              Shifted perspective on web development scope: from dynamic interfaces to intelligent,
              data-driven platforms
            </li>
          </ul>
        ),
        id: (
          <ul className='list-disc space-y-1 pl-5'>
            <li>
              Menyelesaikan 250+ jam bootcamp terstruktur tentang Front-End Web Development,
              Back-End Development, dan Software Engineering
            </li>
            <li>
              Membangun capstone project yang mengintegrasikan model machine learning terlatih
              langsung ke dalam aplikasi web untuk sistem pengambil keputusan mining value chain
            </li>
            <li>
              Pengalaman pertama kali melakukan deployment model AI dalam aplikasi web—menyadari
              bahwa web development jauh melampaui operasi CRUD
            </li>
            <li>
              Memperdalam pemahaman tentang menghubungkan interface front-end, logika back-end, dan
              machine learning menjadi sistem yang kohesif
            </li>
            <li>
              Mengubah perspektif tentang scope web development: dari interface dinamis menjadi
              platform yang intelligent dan data-driven
            </li>
          </ul>
        )
      })
    }
  ]
} satisfies Dictionary<Career[]>;
