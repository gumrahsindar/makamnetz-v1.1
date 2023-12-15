import { Box } from '@mantine/core'

export default function AudioPlayer({ src }) {
  return (
    <Box
      src={src}
      className='w-28 xl:w-56 mx-auto'
      controls
      component='audio'
    ></Box>
  )
}
