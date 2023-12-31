import styles from './FilterModal.module.css'

import { Flex, Spacer, Text } from '@chakra-ui/react'

import ChevronDownIcon from '../../assets/Icons/ChevronDown'

import DatePicker from 'react-datepicker'

import { useDate } from '../../zustand/FilterModal'

interface Props {
  onChange: (type: string, option: string) => void;
}

export default function DateRange({ onChange }: Props) {
  const monthsInYear = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const { fromDate, toDate } = useDate()

  return (
    <div className={`${styles.custom_select__ctn} ${styles.custom__date_picker}`} onSubmit={(e) => e.preventDefault()}>

      <DatePicker
        peekNextMonth={false}
        popperClassName={styles.datepicker__popper}
        onChange={(date) => onChange('FROM', date ? date.toDateString() : '')}
        renderCustomHeader={({ date, increaseMonth, decreaseMonth }) => (
          <Flex marginBottom={4} justifyContent="space-between">
            <button className={styles.prev} onClick={() => decreaseMonth()}>
              <ChevronDownIcon />
            </button>
            <Text fontWeight={600} marginTop={1.5}>
              {monthsInYear[date.getMonth()]}, {date.getFullYear()}
            </Text>
            <button className={styles.next} onClick={() => increaseMonth()}>
              <ChevronDownIcon />
            </button>
          </Flex>
        )}
        customInput={(
          <button className={styles.select__bar}>
            <span>{fromDate?.substring(4) || 'Start Date'}</span>
            <div className={styles.icon}>
              <ChevronDownIcon />
            </div>
          </button>
        )} />
      <Spacer minWidth={1} />
      <DatePicker
        peekNextMonth={false}
        minDate={new Date(fromDate)}
        onChange={(date) => onChange('TO', date ? date.toDateString() : '')}
        renderCustomHeader={({ date, increaseMonth, decreaseMonth }) => (
          <Flex marginBottom={4} justifyContent="space-between">
            <button className={styles.prev} onClick={() => decreaseMonth()}>
              <ChevronDownIcon />
            </button>
            <Text fontWeight={600} marginTop={1.5}>
              {monthsInYear[date.getMonth()]}, {date.getFullYear()}
            </Text>
            <button className={styles.next} onClick={() => increaseMonth()}>
              <ChevronDownIcon />
            </button>
          </Flex>
        )}
        customInput={(
          <button className={styles.select__bar}>
            <span>{toDate?.substring(4) || 'End Date'}</span>
            <div className={styles.icon}>
              <ChevronDownIcon />
            </div>
          </button>
        )} />
    </div>
  )
}