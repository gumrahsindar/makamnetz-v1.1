import { Box, Divider, Flex, Combobox, useCombobox, TextInput } from '@mantine/core'
import { useEffect, useState } from 'react'
import MakamInfo from './components/MakamInfo'
import MakamSeyir from './components/MakamSeyir'
import { makams } from '../../components/constants/makams'
import { useDisclosure } from '@mantine/hooks'
import { Modal, Button } from '@mantine/core'

export default function Makams() {
  const [opened, { open, close }] = useDisclosure(false)
  const combobox = useCombobox()
  const [value, setValue] = useState('')
  const [selectedMakam, setSelectedMakam] = useState(makams[0])
  const shouldFilterOptions = !makams.some((item) => item.name === value)
  const filteredOptions = shouldFilterOptions
    ? makams.filter((item) => item.name.toLowerCase().includes(value.toLowerCase().trim()))
    : makams

  // const sortFilteredOptions = filteredOptions.sort((a, b) => {
  //   if (a.name < b.name) {
  //     return -1
  //   }
  //   if (a.name > b.name) {
  //     return 1
  //   }
  //   return 0
  // })

  const sortFilteredOptions = filteredOptions.sort((a, b) => a.name.localeCompare(b.name, 'tr'))

  const options = sortFilteredOptions.map((item) => (
    <Combobox.Option value={item.name} key={item.slug} active={item.name === value}>
      {item.name}
    </Combobox.Option>
  ))

  useEffect(() => {
    // open modal on first render
    open()
  }, [])

  return (
    <Box component='section' id='makams' m='sm' className='mx-auto'>
      <Flex direction={{ base: 'column', md: 'row' }} align={{ base: 'center', md: 'flex-start' }} gap={20}>
        <Flex maw={{ md: 375 }} gap={10} direction={'column'} p='sm'>
          <Box>
            <Combobox
              classNames={{
                options: 'text-white bg-slate-600 rounded-md',
                option: 'hover:bg-slate-500 duration-500 tracking-wide hover:text-yellow-400 ',
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
                <Combobox.Options mah={700} style={{ overflowY: 'auto' }}>
                  {options.length === 0 ? (
                    <Combobox.Empty className='italic text-zinc-300'>Makam bulunamadı</Combobox.Empty>
                  ) : (
                    options
                  )}
                </Combobox.Options>
              </Combobox.Dropdown>
            </Combobox>
          </Box>
          <Divider />
          <MakamInfo selectedMakam={selectedMakam} />
        </Flex>
        <MakamSeyir selectedMakam={selectedMakam} />
      </Flex>
      <Modal
        size={'70rem'}
        classNames={{
          content: 'bg-white text-gray-900',
          header: 'bg-slate-800 text-white',
        }}
        opened={opened}
        onClose={close}
        title='Seyir modelleri bilgilendirme'
        c={'dark'}
      >
        {/* Modal content */}
        <p className='my-4'>
          Bu sayfada, kaynaklardaki makam tanımları ve bu tanımlar doğrultusunda modellenmiş Perde ve Perde/Çeşni seyir
          şemalarını inceleyebilir, ney ve lavta ile çalınmış örnek ses kayıtlarını* dinleyebilirsiniz.
        </p>
        <p className='mb-4'>Seyir modellerinin oluşturulmasında yararlanılan başlıca kaynaklar şunlardır:</p>
        <ul className='mb-4 list-disc pl-10'>
          <li>
            Dimitri Kantemir, <i>Kitâbu İlmi’l-Musiki alâ Vechi’l-Hurufât</i> [1700?] (Tura, 2002)
          </li>
          <li>
            Kemani Hızır Ağa, <i>Tefhîmü'l-Makamât fi Tevlîdi'n-Nağamât</i> [1740?] (Tekin, 2003)
          </li>
          <li>
            Abdülbaki Nasır Dede, <i>Tedkik ü Tahkik</i> [1794] (Tura, 2006)
          </li>
          <li>
            Haşim Bey, <i>Mecmûa-i Kârhâ ve Nakşhâ ve Şarkiyyât</i> [1864] (Yalçın, 2016)
          </li>
          <li>
            Rauf Yekta, “La Musique Turquie”, <i>Encyclopédie de la musique et dictionnaire du Conservatoire</i> (Albert
            Lavignac, ed., 1922)
          </li>
          <li>
            İsmail Hakkı Özkan, <i>Türk Musikisi Nazariyatı ve Usulleri Küdüm Velveleleri</i>, 1987
          </li>
          <li>
            Yakup Fikret Kutluğ, <i>Türk Musikisinde Makamlar</i>, 2000
          </li>
        </ul>
        <p className='mb-4'>
          Her makam için kaynaklarda belirtilen farklı seyir varyasyonları dikkate alınmış, 150 farklı makam seyir
          şeması oluşturulmuş ve böylece hem klasik hem de güncel Türk müziği teorileri bir araya getirilmiştir.
        </p>
        <p className='mb-4'>
          Modelde “Başlangıç” ve “Karar” bölümleri arasında yer alan “Seyir” bölümündeki Perde/Çeşni yapılarının belirli
          bir sırayla kullanılma zorunluluğu yoktur. Bu Perde/Çeşni yapılarının ilişkide olduğu diğer Perde/Çeşni
          yapılarını incelemek ve makamların olası geçkileri ve genişlemeleri hakkında daha fazla bilgi edinmek için
          “Çeşni Evreni” ve “Makam Ağı” sayfalarına göz atabilirsiniz.
        </p>
        <small>*Tüm kayıtlar 4 ses aşağıdan (Rast = 440 Hz) çalınmıştır.</small>
      </Modal>
    </Box>
  )
}
