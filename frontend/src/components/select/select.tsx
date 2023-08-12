import { ChangeEventHandler, FC } from "react";
import { forwardRefWrapper } from "@/helpers/helpers";
import { ForwardRefExoticComponent, RefAttributes, SelectStyles } from "@/types/types";

import styles from './styles.module.scss';

type SelectOption = {
  name: string,
  value: string
}

type Props = {
  onChange: ChangeEventHandler<HTMLSelectElement>,
  options: SelectOption[],
  stylesConfig?: SelectStyles
}

const Select: FC<Props> = ({onChange, options, stylesConfig}) => {
  return  <select className={styles.select} onChange={onChange} style={stylesConfig}>
    {options.map(({name, value}, index) => <option key={index} className={styles.option} value={value}>{name}</option>)}
  </select>
}

const FormSelect: ForwardRefExoticComponent<Props & RefAttributes<unknown>> = forwardRefWrapper<unknown, Props>(({onChange, options, stylesConfig}, ref) => {
  return  <select className={styles.select} onChange={onChange} style={stylesConfig}>
    {options.map(({name, value}, index) => <option key={index} className={styles.option} value={value}>{name}</option>)}
  </select>
})

export {
  Select,
  FormSelect
}