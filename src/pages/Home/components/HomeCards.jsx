import { Link } from 'react-router-dom'

const cardItems = [
  {
    title: 'Çeşni Evreni',
    description:
      'Türk Müziğinde kullanılan Perdelerin ve Çeşni yapılarının ilişkilerini görselleştirilmiş bir ağ haritası üzerinde keşfedin.',
    image: '/images/home-cesni-space.png',
    alt: 'cesni space page screenshot',
    link: 'https://makam-netzfrontend.vercel.app/',
  },
  {
    title: 'Makamlar',
    description:
      'Kaynaklarda yer alan makam tanımları üzerinden modellenmiş PerdeÇeşni seyirlerini inceleyin, örnek kayıtları dinleyin.',
    image: '/images/home-makams.png',
    alt: 'makams page screenshot',
    link: '/makams',
  },
  {
    title: 'Makam Ağı',
    description:
      'Makam özelinde Perde ve Çeşnilerin birbirleri ile olan ilişkilerini değerlendirin. Farklı makamlar arasında geçiş yapabilmek için gerekli olan ortak yapıları inceleyin.',
    image: '/images/home-makam-network.png',
    alt: 'makam network page screenshot',
    link: '/makam-network',
  },
]

export default function HomeCards() {
  return cardItems.map((item, index) => (
    <Link key={index} to={item.link} className='duration-300 hover:scale-105'>
      <article className='flex min-h-[500px] flex-col gap-6 rounded-lg bg-zinc-800 px-4 pt-4 shadow-2xl lg:min-h-[565px]'>
        <h2 className='font-baskerville mt-4 text-center text-3xl font-bold text-yellow-400  xl:text-4xl'>
          {item.title}
        </h2>
        <p
          style={{ textWrap: 'pretty' }}
          className='text-md w-[40ch]  flex-grow   leading-8 text-white lg:w-[30ch] lg:text-lg '
        >
          {item.description}
        </p>
        <div className='relative mb-10 h-52 w-full'>
          <img
            className='absolute inset-0 h-full w-full rounded-lg object-cover shadow-2xl'
            src={item.image}
            alt={item.alt}
          />
        </div>
      </article>
    </Link>
  ))
}
