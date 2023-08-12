import { FC, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { BeastCreateDto } from "@/types/types";
import { Button, FormInput as Input, FormSelect as Select, FormTextArea as TextArea } from "@/components/components";
import {
  abrPageTextAreaStyles,
  beastImageInputStyles,
  beastNameInputStyles,
  cancelABRButtonStyles,
  initialAddBeastRequestState,
  openABRButtonStyles,
  BUTTONS_NAMES,
  INPUTS_NAMES,
  INPUTS_PLACEHOLDERS,
  SELECTS_NAMES,
  TEXTAREAS_NAMES,
  TEXTAREAS_PLACEHOLDERS
} from "@/configs/configs";

import styles from './styles.module.scss'
import { beastClassSelectStyles } from "@/configs/styles/abr-page.config";

type Props = {
  onSubmit: SubmitHandler<BeastCreateDto>,
}

const beastsCLassesStub = [
  {
    name: "Beast",
    value: "beast"
  },
  {
    name: "Vampire",
    value: "vampire"
  },
  {
    name: "Beast",
    value: "beast"
  },
  {
    name: "Vampire",
    value: "vampire"
  }
]

const ABRForm: FC<Props> = ({onSubmit}) => {
  const { register, handleSubmit, getFieldState, formState: { errors } } = useForm<BeastCreateDto>({ defaultValues: initialAddBeastRequestState });
  const [image, setImage] = useState<Blob | MediaSource>()
  return <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
    <div className={styles.leftPage}>
      <div className={styles.leftPageUpperSection}>
        <Input onInput={(event) => {
          if (event.currentTarget?.files) {
            setImage(event.currentTarget.files[0])
          }
        }} {...register(INPUTS_NAMES.BEAST_IMAGE, { required: true })} type={"file"} stylesConfig={beastImageInputStyles}/>
        <img style={{width: '200px', height: '300px', borderRadius: '25px'}} src={image ? URL.createObjectURL(image): "/unknown_monster_image.png"}/>
        <div className={styles.beastNameClassSection}>
          <Input onInput={() => {}} {...register(INPUTS_NAMES.NAME, { required: true })} placeholder={INPUTS_PLACEHOLDERS.BEAST_NAME} stylesConfig={beastNameInputStyles}/>
          <Select options={beastsCLassesStub} {...register(SELECTS_NAMES.BEAST_CLASS_ID)} stylesConfig={beastClassSelectStyles}/>
        </div>
      </div>
      <Button name={BUTTONS_NAMES.CANCEL_ABR} onClick={() => console.log("Cancel")} stylesConfig={cancelABRButtonStyles}/>
    </div>
    <div className={styles.rightPage}>
      <div className={styles.rightPageUpperSection}>
        <TextArea onInput={() => {}} {...register(TEXTAREAS_NAMES.DESCRIPTION, { required: true })} placeholder={TEXTAREAS_PLACEHOLDERS.DESCRIPTION} stylesConfig={abrPageTextAreaStyles}/>
        <TextArea onInput={() => {}} {...register(TEXTAREAS_NAMES.TACTIC_DESCRIPTION, { required: true })} placeholder={TEXTAREAS_PLACEHOLDERS.TACTIC_DESCRIPTION} stylesConfig={abrPageTextAreaStyles}/>
      </div>
      <Button name={BUTTONS_NAMES.OPEN_ABR} onClick={() => console.log("Open ABR")} stylesConfig={openABRButtonStyles}/>
    </div>
  </form>
}

export { ABRForm }