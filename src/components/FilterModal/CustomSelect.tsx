import styles from './FilterModal.module.css'

import ChevronDownIcon from '../../assets/Icons/ChevronDown'
import CheckIcon from '../../assets/Icons/Check'

interface Props {
  label: string,
  value: Array<string>;
  options: Array<any>;
  onChange: (option: string) => void;
}

export default function CustomSelect({ label, value, options, onChange }: Props) {
  return (
    <div className={styles.custom_select__ctn} onSubmit={(e) => e.preventDefault()}>
      <button className={styles.select__bar}>
        <span>{value?.toString()?.replaceAll(',', ', ') || label}</span>
        <ChevronDownIcon />
      </button>
      <div className={styles.options}>
        {options?.map(option => <button
          key={option}
          className={value.includes(option) ? styles.option__active : ''}
          onClick={() => onChange(option)}>
          <div className={styles.empty__check} >
            <CheckIcon />
          </div>
          {option}
        </button>)}
      </div>
    </div>
  )
}