import { Project } from '@/types/Project';
import { Dictionary, t } from 'intlayer';

export default {
  key: 'projects',
  content: [
    {
      id: 'pendek-in',
      url: 'https://pendek-in.vercel.app/',
      title: 'Pendek-in',
      roles: t({
        en: ['Development'],
        id: ['Pengembangan']
      }),
      year: 2026,
      text: t({
        en: 'A full-stack URL shortener with per-user click analytics, custom aliases, expiry dates, Redis-backed rate limiting, a domain blacklist, and an admin control panel. Guests can shorten a handful of links per day; registered users get a dashboard with click trends, referrer breakdowns, and device stats per link, admins can see every user and link, deactivate abusive links, ban users, and blacklist domains.',
        id: 'Sebuah layanan pemendek URL full-stack yang dilengkapi dengan analitik klik per pengguna, alias kustom, tanggal kedaluwarsa, pembatasan laju (rate limiting) berbasis Redis, daftar hitam domain, serta panel kontrol admin. Pengguna tamu dapat memendekkan sejumlah terbatas tautan per hari, pengguna terdaftar mendapatkan dasbor yang menampilkan tren klik, rincian sumber trafik (referrer), dan statistik perangkat untuk setiap tautan; sementara admin dapat memantau seluruh pengguna dan tautan, menonaktifkan tautan yang disalahgunakan, memblokir pengguna, serta memasukkan domain ke dalam daftar hitam.'
      }),
      prev: 'in-progress',
      next: 'in-progress',
      thumbnail: '/images/pendek-in-homepage.webp',
      images: [
        '/images/pendek-in-homepage2.webp',
        '/images/pendek-in-login.webp',
        '/images/pendek-in-register.webp',
        '/images/pendek-in-dashboard-user.webp',
        '/images/pendek-in-link-management.webp',
        '/images/pendek-in-detail-link.webp',
        '/images/pendek-in-overview-admin.webp',
        '/images/pendek-in-dashboard-admin.webp',
        '/images/pendek-in-user-management.webp'
      ]
    },
    {
      id: 'scanmeat',
      url: 'https://scanmeat.streamlit.app/',
      title: 'Scan Meat!',
      roles: t({
        en: ['Development, Machine Learning'],
        id: ['Pengembangan, Machine Learning']
      }),
      year: 2026,
      text: t({
        en: 'ScanMeat! is an interactive web-based application designed to detect and classify beef freshness levels (Segar / Fresh, Setengah Segar / Half-Fresh, and Busuk / Rotten) from digital images in real time using YOLOv8s with Transfer Learning, following the CRISP-DM framework.',
        id: 'ScanMeat! adalah aplikasi berbasis web interaktif yang dirancang untuk mendeteksi dan mengklasifikasikan tingkat kesegaran daging sapi (Segar, Setengah Segar, dan Busuk) dari citra digital secara real-time menggunakan YOLOv8s dengan Transfer Learning, serta mengikuti kerangka kerja CRISP-DM.'
      }),
      prev: 'in-progress',
      next: 'in-progress',
      thumbnail: '/images/scanmeat-homepage.webp',
      images: [
        '/images/scanmeat-homepage.webp',
        '/images/scanmeat-secondpage.webp',
        '/images/scanmeat-fresh-meat.webp',
        '/images/scanmeat-half-fresh-meat.webp',
        '/images/scanmeat-spoiled-meat.webp'
      ]
    },
    {
      id: 'in-progress',
      url: null,
      title: t({
        en: 'In Progress',
        id: 'Dalam Pengerjaan'
      }),
      roles: t({
        en: ['Development'],
        id: ['Pengembangan']
      }),
      year: null,
      text: t({
        en: "I'm currently working on an exciting new project, refining ideas and building new features. Stay tuned for updates!",
        id: 'Saya sedang mengerjakan proyek baru yang menarik, menyempurnakan ide dan membangun fitur baru. Nantikan update-nya!'
      }),
      prev: 'pendek-in',
      next: 'pendek-in',
      thumbnail: '/images/in-progress.webp',
      images: null
    }
  ]
} satisfies Dictionary<Project[]>;
