import HomeCards from './components/HomeCards'

export default function Home() {
  return (
    <section className='home-bg absolute inset-0 h-screen overflow-y-auto bg-cover bg-center bg-no-repeat'>
      <div className='container mx-auto flex justify-center overscroll-y-auto pt-16'>
        <div className='flex flex-col gap-20 p-5'>
          <h1 className='home-text-shadow font-baskerville  text-center text-7xl text-white md:text-8xl'>
            Makam<span className='tracking-wide text-yellow-500'>Netz</span>
          </h1>
          <div className='flex flex-col flex-wrap gap-10 lg:flex-row'>
            <HomeCards />
          </div>
        </div>
      </div>
    </section>
  )
}
