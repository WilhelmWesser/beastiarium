import { ButtonStyles, InputStyles, SelectStyles, TextAreaStyles } from "@/types/types";

const beastImageInputStyles: InputStyles = {
  "--custom-input-border-color": 'black',
  "--custom-input-border-radius": '25px',
  "--custom-input-border-height": '300px',
  "--custom-input-border-width": '200px',
  "--custom-input-background-color": 'black',
  "--custom-input-position": 'absolute',
  "--custom-input-opacity": "0",
  "--custom-input-margin": "0 16vw 0 0",
}

const openABRButtonStyles: ButtonStyles = {
  "--button-bg-color": 'green',
  "--button-name-color": 'white'
}

const cancelABRButtonStyles: ButtonStyles = {
  "--button-bg-color": 'red',
  "--button-name-color": 'white'
}

const beastNameInputStyles: InputStyles = {
  "--custom-input-border-radius": "0",
  "--custom-input-top-border": "none",
  "--custom-input-left-border": "none",
  "--custom-input-right-border": "none",
}

const beastClassSelectStyles: SelectStyles = {
  "--custom-select-margin": "15px 0 0 0",
  "--custom-select--option-background-color": "#ede7d5",
}

const abrPageTextAreaStyles: TextAreaStyles = {
  "--custom-textarea-border-color": "black",
  "--custom-textarea-bottom-border": "none",
  "--custom-textarea-left-border": "none",
  "--custom-textarea-right-border": "none",
  "--custom-textarea-border-radius": "0",
  "--custom-textarea-height": "35vh",
  "--custom-textarea-scrollbar-color": "brown",
}

export {
  abrPageTextAreaStyles,
  beastClassSelectStyles,
  beastNameInputStyles,
  cancelABRButtonStyles,
  beastImageInputStyles,
  openABRButtonStyles,
}