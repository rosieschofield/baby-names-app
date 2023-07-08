import React from "react"

interface namesType {
    id:number,
    name: "string",
    sex: "string"
  }

function getBabyNames(names: namesType[]): namesType[] {
  return names;
}
