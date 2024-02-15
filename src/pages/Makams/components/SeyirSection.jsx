import { Flex, Text } from '@mantine/core'

export default function SeyirSection({ selectedMakam }) {
  return (
    <Flex className='relative h-[30rem] flex-col justify-between space-y-6 rounded-md bg-gradient-to-r from-yellow-100 to-yellow-300 px-4 py-4 text-center lg:w-[20rem] lg:py-12 xl:px-8'>
      <Text className='rounded-md bg-gradient-to-b from-yellow-400 to-yellow-500 px-10 py-2 text-xl font-bold text-white shadow-xl'>
        Seyir
      </Text>
      <Flex
        className='
       -translate-y-4 flex-wrap-reverse items-center justify-center gap-3'
      >
        {Array(6)
          .fill()
          .map((_, i) => {
            const root = selectedMakam?.journey.middle[`root${i + 1}`]
            const pow = selectedMakam?.journey.middle[`pow${i + 1}`]
            return root ? (
              <Flex
                key={i}
                gap='lg'
                align='center'
                justify='center'
                className='aspect-square h-28 rounded-full bg-gradient-to-b from-yellow-400 to-yellow-700 shadow-xl'
              >
                <Text className='text-sm text-white '>
                  {root}
                  <Text component='sup' fz='xs' fs='italic'>
                    {pow}
                  </Text>
                </Text>
              </Flex>
            ) : null
          })}
      </Flex>
    </Flex>
  )
}
