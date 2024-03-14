import { Flex, Stack, Text } from '@mantine/core'

export default function GirisSection({ selectedMakam }) {
  return (
    <Stack className='h-[34rem]  space-y-6 rounded-md bg-gradient-to-r from-blue-100 to-blue-300 px-4 py-4 text-center lg:w-[300px] lg:py-12 xl:px-8'>
      <Text className='mb-10 rounded-md bg-gradient-to-b from-blue-400 to-blue-600 px-10 py-2 text-xl font-bold text-white shadow-xl'>
        Başlangıç
      </Text>
      <Flex className='aspect-square items-center justify-center gap-4 px-4'>
        {Array(4)
          .fill()
          .map((_, i) => {
            const root = selectedMakam?.journey.begin[`root${i + 1}`]
            const pow = selectedMakam?.journey.begin[`pow${i + 1}`]
            return root ? (
              <Flex
                key={i}
                className='aspect-square h-32 items-center justify-center gap-6 rounded-full bg-gradient-to-b from-blue-400 to-blue-600 shadow-xl'
              >
                <Text className='text-lg text-white'>
                  {root}
                  <Text component='sup' fz='xs' fs='italic'>
                    {pow}
                  </Text>
                </Text>
              </Flex>
            ) : null
          })}
      </Flex>
    </Stack>
  )
}
