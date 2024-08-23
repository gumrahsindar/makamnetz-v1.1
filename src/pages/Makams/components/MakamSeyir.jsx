import { Group, Stack } from '@mantine/core'
import GirisSection from './GirisSection'
import SeyirSection from './SeyirSection'
import SonucSection from './SonucSection'
import { ArrowRight } from '../../../components/ui/icons'

export default function MakamSeyir({ selectedMakam }) {
  return (
    <Stack className='w-9/12 rounded-md py-2 lg:my-8'>
      <Group className='relative ml-2 flex min-w-[1000px] flex-row items-center justify-center space-x-2' wrap='nowrap'>
        <GirisSection selectedMakam={selectedMakam} />
        <SeyirSection selectedMakam={selectedMakam} />
        <SonucSection selectedMakam={selectedMakam} />
        <ArrowRight className='left-[29%] top-[20%]' />
        <ArrowRight className='left-[69%] top-[20%]' />
      </Group>
    </Stack>
  )
}
