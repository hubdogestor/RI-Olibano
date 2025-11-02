import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'OLÍBANO - Relações com Investidores',
    short_name: 'OLÍBANO RI',
    description: 'Centro premium de terapias integrativas com modelo escalável',
    start_url: '/',
    display: 'standalone',
    background_color: '#f8f1e8',
    theme_color: '#ac4e15',
    icons: [
      {
        src: '/brand/monogram.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  }
}
