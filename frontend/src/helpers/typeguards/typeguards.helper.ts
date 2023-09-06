import { LeadershipPosition } from "@/types/types";

function isLeadershipPosition(str: string): str is LeadershipPosition {
  return str === '1' || str === '2' || str === '3'
}

export {
  isLeadershipPosition
}