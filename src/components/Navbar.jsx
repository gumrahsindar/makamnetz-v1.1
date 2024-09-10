import { Anchor, Box, Divider, Flex, Group, Image } from '@mantine/core'
import { IconBrandYoutubeFilled, IconBrandGithub, IconLanguage } from '@tabler/icons-react'
import { Link } from 'react-router-dom'

const links = [
  // uncomment when hardcoding is removed
  // { name: 'ÇEŞNİ EVRENİ', href: '/cesni-world' },
  { name: 'Makamlar', href: '/makams' },
  { name: 'Makam Ağı', href: '/makam-network' },
]

export default function Navbar() {
  return (
    <Box py='xl' component='header'>
      <Flex component='nav' justify='space-between' align='center'>
        <Anchor component={Link} to='/' underline='never'>
          {/* <Image w={200} src='/logo.png' /> */}
          <h1 className='home-text-shadow font-baskerville  text-center text-5xl text-white'>
            Makam<span className='tracking-wide text-yellow-500'>Netz</span>
          </h1>
        </Anchor>
        <Group gap='5rem' justify='space-between'>
          {/* hardcoding start */}
          <Anchor
            ff={'Inder'}
            underline='never'
            href='https://makam-netzfrontend.vercel.app/'
            target='_blank'
            classNames={{
              root: 'text-gray-100 hover:text-yellow-400 duration-300 text-lg font-semibold uppercase',
            }}
          >
            ÇEŞNİ EVRENİ
          </Anchor>
          {/* hardcoding end */}
          {links.map((link) => (
            <Anchor
              ff={'Inder'}
              component={Link}
              classNames={{
                root: 'text-gray-100 hover:text-yellow-400 duration-300 text-lg font-semibold uppercase',
              }}
              underline='never'
              key={link.name}
              to={link.href}
            >
              {link.name}
            </Anchor>
          ))}
        </Group>
        <Group>
          <Anchor
            className=' text-gray-400 duration-300 hover:text-yellow-400'
            target='_blank'
            href='https://www.youtube.com/@MakamNetz'
          >
            <IconBrandYoutubeFilled size={25} />
          </Anchor>
          <Anchor
            className=' text-gray-400 duration-300 hover:text-yellow-400'
            target='_blank'
            href='https://github.com/ProjectMakamNetz'
          >
            <IconBrandGithub size={25} />
          </Anchor>
          <Anchor
            className='text-gray-400 duration-300 hover:text-yellow-400'
            target='_blank'
            href='https://youtube.com'
          >
            <IconLanguage size={25} />
          </Anchor>
        </Group>
      </Flex>
      <Divider my={'sm'} />
    </Box>
  )
}
