import { Flex, Stack, Text } from '@mantine/core'

export default function SeyirSection({ selectedMakam }) {
  return (
    <Stack className='relative h-[32rem] w-[24rem] flex-col space-y-6 rounded-md bg-gradient-to-r from-yellow-100 to-yellow-300 px-4 py-4 text-center lg:py-12'>
      <Text
        ff={'Inder'}
        className='rounded-md bg-gradient-to-b from-yellow-400 to-yellow-500 px-10 py-2 text-xl font-bold text-white shadow-xl'
      >
        Seyir
      </Text>
      <Flex className='aspect-square flex-wrap items-center justify-center gap-4 px-4'>
        {Array(6)
          .fill()
          .map((_, i) => {
            const root = selectedMakam?.journey.middle[`root${i + 1}`]
            const pow = selectedMakam?.journey.middle[`pow${i + 1}`]
            return root ? (
              <Flex
                key={i}
                className='aspect-square h-36 items-center justify-center rounded-full bg-gradient-to-b from-yellow-400 to-yellow-700 p-2 shadow-xl'
              >
                <Text className='text-lg text-white '>
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
