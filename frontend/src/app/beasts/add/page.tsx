"use client"

import { FC, ReactNode } from "react";

import styles from './styles.module.scss'
import { SubmitHandler } from "react-hook-form";
import { FormInput } from "@/types/types";
import { ABRForm } from "./components/components";

type Props = {
  onSubmit: SubmitHandler<FormInput>,
}

const BeastAddPage: FC<Props> = () => {
  return <div className={styles.abrPage}>
    <div className={styles.abrFormWrapper}>
      <ABRForm onSubmit={() => console.log("Submitted")}/>
    </div>
  </div>
}

export default BeastAddPage