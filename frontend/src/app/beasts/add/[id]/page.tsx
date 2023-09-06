"use client"

import { FC } from "react";
import styles from './styles.module.scss'
import { FieldNameItem, FieldValueItem } from "./components/components";
import { Button } from "@/components/components";

const fieldsNamesStub: {
  name: string,
  onClick: () => void
}[] = [
  {
    name: "Name",
    onClick: () => {}
  },
  {
    name: "Description",
    onClick: () => {}
  },
  {
    name: "Tactical description",
    onClick: () => {}
  },
  {
    name: "Avatar",
    onClick: () => {}
  },
  {
    name: "Category",
    onClick: () => {}
  }
]

const fieldsValuesStub: {
  content: string,
  onClick: () => void,
  votes: number,
  isSelected: boolean,
}[] = [
  {
    content: "5 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque luctus eleifend tortor, eu porttitor neque fermentum eget. Cras ligula quam, lobortis ac malesuada eu, tempor eget ante. Quisque facilisis est a nisi pharetra, eget ornare velit venenatis. Phasellus accumsan luctus felis at accumsan. Suspendisse nec ultricies neque. Sed vel molestie felis. Vestibulum bibendum convallis dolor, ac feugiat nibh vulputate quis. Aliquam hendrerit nibh sit amet posuere blandit.\n" +
      "\n" +
      "Nullam accumsan, nulla vitae convallis tincidunt, augue nunc accumsan tellus, eu vehicula velit diam in quam. Nullam tempus nibh mi, bibendum vulputate nisl ullamcorper ac. Donec tincidunt blandit aliquam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse finibus purus non porta elementum. Nulla ut dictum eros. Nam felis tortor, mollis vel risus non, porta convallis nulla. Etiam massa nisl, pellentesque a dictum quis, venenatis ut lorem. Pellentesque facilisis semper mi quis blandit. Suspendisse ut rutrum magna. Cras id purus eu augue egestas rhoncus. Phasellus et sapien est.\n" +
      "\n" +
      "Morbi finibus diam velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In vel lorem faucibus, eleifend magna non, placerat diam. Fusce tincidunt, neque ac luctus rhoncus, dolor mi pharetra arcu, faucibus volutpat ex ipsum.",
    onClick: () => {},
    votes: 1,
    isSelected: false,
  },
  {
    content: "4 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque luctus eleifend tortor, eu porttitor neque fermentum eget. Cras ligula quam, lobortis ac malesuada eu, tempor eget ante. Quisque facilisis est a nisi pharetra, eget ornare velit venenatis. Phasellus accumsan luctus felis at accumsan. Suspendisse nec ultricies neque. Sed vel molestie felis. Vestibulum bibendum convallis dolor, ac feugiat nibh vulputate quis. Aliquam hendrerit nibh sit amet posuere blandit.\n" +
      "\n" +
      "Nullam accumsan, nulla vitae convallis tincidunt, augue nunc accumsan tellus, eu vehicula velit diam in quam. Nullam tempus nibh mi, bibendum vulputate nisl ullamcorper ac. Donec tincidunt blandit aliquam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse finibus purus non porta elementum. Nulla ut dictum eros. Nam felis tortor, mollis vel risus non, porta convallis nulla. Etiam massa nisl, pellentesque a dictum quis, venenatis ut lorem. Pellentesque facilisis semper mi quis blandit. Suspendisse ut rutrum magna. Cras id purus eu augue egestas rhoncus. Phasellus et sapien est.\n" +
      "\n" +
      "Morbi finibus diam velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In vel lorem faucibus, eleifend magna non, placerat diam. Fusce tincidunt, neque ac luctus rhoncus, dolor mi pharetra arcu, faucibus volutpat ex ipsum.",
    onClick: () => {},
    votes: 3,
    isSelected: false,
  },
  {
    content: "2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque luctus eleifend tortor, eu porttitor neque fermentum eget. Cras ligula quam, lobortis ac malesuada eu, tempor eget ante. Quisque facilisis est a nisi pharetra, eget ornare velit venenatis. Phasellus accumsan luctus felis at accumsan. Suspendisse nec ultricies neque. Sed vel molestie felis. Vestibulum bibendum convallis dolor, ac feugiat nibh vulputate quis. Aliquam hendrerit nibh sit amet posuere blandit.\n" +
      "\n" +
      "Nullam accumsan, nulla vitae convallis tincidunt, augue nunc accumsan tellus, eu vehicula velit diam in quam. Nullam tempus nibh mi, bibendum vulputate nisl ullamcorper ac. Donec tincidunt blandit aliquam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse finibus purus non porta elementum. Nulla ut dictum eros. Nam felis tortor, mollis vel risus non, porta convallis nulla. Etiam massa nisl, pellentesque a dictum quis, venenatis ut lorem. Pellentesque facilisis semper mi quis blandit. Suspendisse ut rutrum magna. Cras id purus eu augue egestas rhoncus. Phasellus et sapien est.\n" +
      "\n" +
      "Morbi finibus diam velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In vel lorem faucibus, eleifend magna non, placerat diam. Fusce tincidunt, neque ac luctus rhoncus, dolor mi pharetra arcu, faucibus volutpat ex ipsum.",
    onClick: () => {},
    votes: 10,
    isSelected: false,
  },
  {
    content: "3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque luctus eleifend tortor, eu porttitor neque fermentum eget. Cras ligula quam, lobortis ac malesuada eu, tempor eget ante. Quisque facilisis est a nisi pharetra, eget ornare velit venenatis. Phasellus accumsan luctus felis at accumsan. Suspendisse nec ultricies neque. Sed vel molestie felis. Vestibulum bibendum convallis dolor, ac feugiat nibh vulputate quis. Aliquam hendrerit nibh sit amet posuere blandit.\n" +
      "\n" +
      "Nullam accumsan, nulla vitae convallis tincidunt, augue nunc accumsan tellus, eu vehicula velit diam in quam. Nullam tempus nibh mi, bibendum vulputate nisl ullamcorper ac. Donec tincidunt blandit aliquam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse finibus purus non porta elementum. Nulla ut dictum eros. Nam felis tortor, mollis vel risus non, porta convallis nulla. Etiam massa nisl, pellentesque a dictum quis, venenatis ut lorem. Pellentesque facilisis semper mi quis blandit. Suspendisse ut rutrum magna. Cras id purus eu augue egestas rhoncus. Phasellus et sapien est.\n" +
      "\n" +
      "Morbi finibus diam velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In vel lorem faucibus, eleifend magna non, placerat diam. Fusce tincidunt, neque ac luctus rhoncus, dolor mi pharetra arcu, faucibus volutpat ex ipsum.",
    onClick: () => {},
    votes: 9,
    isSelected: false,
  },
  {
    content: "1  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque luctus eleifend tortor, eu porttitor neque fermentum eget. Cras ligula quam, lobortis ac malesuada eu, tempor eget ante. Quisque facilisis est a nisi pharetra, eget ornare velit venenatis. Phasellus accumsan luctus felis at accumsan. Suspendisse nec ultricies neque. Sed vel molestie felis. Vestibulum bibendum convallis dolor, ac feugiat nibh vulputate quis. Aliquam hendrerit nibh sit amet posuere blandit.\n" +
      "\n" +
      "Nullam accumsan, nulla vitae convallis tincidunt, augue nunc accumsan tellus, eu vehicula velit diam in quam. Nullam tempus nibh mi, bibendum vulputate nisl ullamcorper ac. Donec tincidunt blandit aliquam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse finibus purus non porta elementum. Nulla ut dictum eros. Nam felis tortor, mollis vel risus non, porta convallis nulla. Etiam massa nisl, pellentesque a dictum quis, venenatis ut lorem. Pellentesque facilisis semper mi quis blandit. Suspendisse ut rutrum magna. Cras id purus eu augue egestas rhoncus. Phasellus et sapien est.\n" +
      "\n" +
      "Morbi finibus diam velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In vel lorem faucibus, eleifend magna non, placerat diam. Fusce tincidunt, neque ac luctus rhoncus, dolor mi pharetra arcu, faucibus volutpat ex ipsum.",
    onClick: () => {},
    votes: 15,
    isSelected: true,
  }
]

const AddBeastRequestPage: FC = () => {
  const sortedVariantsByVotes = fieldsValuesStub.sort((a, b) => b.votes - a.votes)

  return <div className={styles.beastRequestPage}>
    <div className={styles.beastRequestPageBoard}>
      <div className={styles.beastRequestPageFieldsNamesList}>
        {fieldsNamesStub.map(({name, onClick}, index) => <FieldNameItem name={name} key={index} onClick={onClick}/>)}
      </div>
      <div className={styles.beastRequestPageFieldsValuesList}>
        {sortedVariantsByVotes.map(({content, onClick, votes, isSelected}, index) => <FieldValueItem content={content} key={index} onClick={onClick} position={`${index + 1}`} isSelected={isSelected}/>)}
      </div>
    </div>
    <div className={styles.beastRequestPageLowerActionsPanel}>
      <Button name={"Insert page"} onClick={() => console.log("Beast added!")} stylesConfig={{"--button-bg-color": "green", "--button-name-color": "white"}}/>
    </div>
  </div>
}

export default AddBeastRequestPage