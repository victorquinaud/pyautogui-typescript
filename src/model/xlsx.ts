import xlsx from "node-xlsx"
import { resolve } from "path"
import { readFileSync } from "fs"

type XLSX = { name: string; data: any[][] }[]

export default class excel {

  constructor(
    readonly from: string = "./xlsx",
  ) {}

  readFile(fileName: string, path?: string): XLSX {
    try {
      path = resolve(path ?? this.from, fileName)
      const file = xlsx.parse(readFileSync(path))
      console.log(JSON.stringify(file))
      return file
    } catch (error: any) {
      throw new Error(error.message)
    }
  }
}


const e = new excel().readFile("data.xlsx")
