import { Anchor, Box, Divider, Flex, Group, Image } from '@mantine/core'
import { IconBrandYoutubeFilled, IconBrandGithub, IconLanguage } from '@tabler/icons-react'
import { Link } from 'react-router-dom'

const links = [
  { name: 'ÇEŞNİ EVRENİ', href: '/cesni-world' },
  { name: 'Makamlar', href: '/makams' },
  { name: 'Makam Ağı', href: '/makam-network' },
]

export default function RootLayout() {
  return (
    <Box py='xl' component='header'>
      <Flex component='nav' justify='space-between' align='center'>
        <Anchor component={Link} to='/'>
          <Image w={200} src='/logo.png' />
        </Anchor>
        <Group gap='5rem' justify='space-between'>
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
            href='https://youtube.com'
          >
            <IconBrandYoutubeFilled size={25} />
          </Anchor>
          <Anchor
            className=' text-gray-400 duration-300 hover:text-yellow-400'
            target='_blank'
            href='https://github.com'
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
