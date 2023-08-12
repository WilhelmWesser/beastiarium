import { BeastCreateDto } from "@/types/types";

const initialAddBeastRequestState: BeastCreateDto = {
  name: "",
  beastClassId: 0,
  description: "",
  imgLink: "",
  tacticDescription: ""
}

export { initialAddBeastRequestState }