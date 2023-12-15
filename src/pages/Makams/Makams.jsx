import { Box, Divider, Flex, Stack, Combobox, useCombobox, TextInput } from '@mantine/core'
import { useState } from 'react'
import MakamInfo from './components/MakamInfo'
import MakamSeyir from './components/MakamSeyir'
import { makams } from '../../components/constants/makams'

export default function Makams() {
  const combobox = useCombobox()
  const [value, setValue] = useState('')
  const [selectedMakam, setSelectedMakam] = useState(makams[0])
  const shouldFilterOptions = !makams.some((item) => item.name === value)
  const filteredOptions = shouldFilterOptions
    ? makams.filter((item) => item.name.toLowerCase().includes(value.toLowerCase().trim()))
    : makams

  const options = filteredOptions.map((item) => (
    <Combobox.Option value={item.name} key={item.slug} active={item.name === value}>
      {item.name}
    </Combobox.Option>
  ))
  console.log(options)

  return (
    <Box component='section' id='makams' m='sm'>
      <Flex justify='space-between' gap='md'>
        <Stack p='sm' className='w-3/12 rounded-md'>
          <Box>
            <Combobox
              classNames={{
                options: 'text-white bg-slate-700 rounded-md',
                option: 'hover:bg-slate-600 duration-200 tracking-wide',
              }}
              onOptionSubmit={(optionValue) => {
                setValue(optionValue)
                setSelectedMakam(makams.find((makam) => makam.name === optionValue))
                combobox.closeDropdown()
              }}
              store={combobox}
            >
              <Combobox.Target>
                <TextInput
                  classNames={{
                    description: 'text-white italic',
                    input: 'text-white',
                  }}
                  size='md'
                  variant='filled'
                  radius='md'
                  description='Bir makam seçin veya yazın'
                  placeholder='Makam adı'
                  value={value}
                  onChange={(event) => {
                    setValue(event.currentTarget.value)
                    combobox.openDropdown()
                    combobox.updateSelectedOptionIndex()
                  }}
                  onClick={() => combobox.openDropdown()}
                  onFocus={() => combobox.openDropdown()}
                  onBlur={() => combobox.closeDropdown()}
                />
              </Combobox.Target>

              <Combobox.Dropdown>
                <Combobox.Options>
                  {options.length === 0 ? <Combobox.Empty>Nothing found</Combobox.Empty> : options}
                </Combobox.Options>
              </Combobox.Dropdown>
            </Combobox>
          </Box>
          <Divider />
          <MakamInfo selectedMakam={selectedMakam} />
        </Stack>
        <MakamSeyir selectedMakam={selectedMakam} />
      </Flex>
    </Box>
  )
}
