import { Group, Stack } from '@mantine/core'
import GirisSection from './GirisSection'
import SeyirSection from './SeyirSection'
import SonucSection from './SonucSection'
import { ArrowRight } from '../../../components/ui/icons'

export default function MakamSeyir({ selectedMakam }) {
  return (
    <Stack className='w-9/12 rounded-md py-6 lg:my-8'>
      <Group className='relative flex min-w-[1000px] flex-row items-center justify-center space-x-4'>
        <GirisSection selectedMakam={selectedMakam} />
        <SeyirSection selectedMakam={selectedMakam} />
        <SonucSection selectedMakam={selectedMakam} />
        <ArrowRight className='left-[28%] top-[25%]' />
        <ArrowRight className='left-[62%] top-[25%]' />
      </Group>
    </Stack>
  )
}
