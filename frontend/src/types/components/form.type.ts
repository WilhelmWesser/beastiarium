type FormInput = Record<string, string | number>

type InputsConfig = {
  name: string,
  defaultValue: string | number,
  isRequired?: boolean,
  isSelect?: boolean,
  isInput?: boolean,
}

export type {
  FormInput,
  InputsConfig
}