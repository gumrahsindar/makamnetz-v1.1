import { Flex, Stack, Text } from '@mantine/core'

export default function GirisSection({ selectedMakam }) {
  return (
    <Stack className='h-[30rem] w-full justify-between space-y-6 rounded-md bg-gradient-to-r from-blue-100 to-blue-300 px-4 py-4 text-center lg:w-3/12 lg:py-12 xl:px-8'>
      <Text className='rounded-md bg-gradient-to-b from-blue-400 to-blue-600 px-10 py-2 text-xl text-white shadow-xl'>
        Giriş
      </Text>
      <Flex className='items-center justify-center gap-4 rounded-full bg-gradient-to-b from-blue-400 to-blue-600 px-4 shadow-xl  lg:aspect-square '>
        {Array(4)
          .fill()
          .map((_, i) => {
            const root = selectedMakam?.journey.begin[`root${i + 1}`]
            const pow = selectedMakam?.journey.begin[`pow${i + 1}`]
            return root ? (
              <Text key={i} className=' text-xl text-white '>
                {root}
                <Text component='sup' fz='xs'>
                  {pow}
                </Text>
              </Text>
            ) : null
          })}
      </Flex>
    </Stack>
  )
}
