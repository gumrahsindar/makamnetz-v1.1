import { Group, Stack } from '@mantine/core'
import GirisSection from './GirisSection'
import SeyirSection from './SeyirSection'
import SonucSection from './SonucSection'
import { ArrowRight } from '../../../components/ui/icons'

export default function MakamSeyir({ selectedMakam }) {
  return (
    <Stack className='w-9/12 rounded-md py-6 lg:my-8'>
      <Group className='relative flex flex-col items-start space-x-4 lg:flex-row lg:items-center lg:justify-center'>
        <GirisSection selectedMakam={selectedMakam} />
        <SeyirSection selectedMakam={selectedMakam} />
        <SonucSection selectedMakam={selectedMakam} />
        <ArrowRight />
      </Group>
    </Stack>
  )
}
