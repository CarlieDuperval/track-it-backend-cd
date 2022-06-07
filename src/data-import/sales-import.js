import { createMultipleSales } from "../services/sales-service.js";
import fs from "fs";
export const createSalesFromFile = async (fileName) => {
  //read the file
  const data = fs.readFileSync(fileName, "utf-8").toString();
  // Put each line into an array of string
  const fileArray = data.split("\n");
  // create a container for each bulk insert
  const sales = [];
  for (const line of fileArray) {
    // turn each line into and array
    let salesData = line.split("\t"); // each element separate with comma is a index in the array
    //check for data inside the array
    if (!salesData[0] || salesData[0] === "NameDescription") {
      console.log("This is NameDescription", salesData[0]);
      continue;
    }
    let newSale = {
      year: 2022,
      productName: salesData[0],
      productCategory: salesData[1],
      cost: Number.parseFloat(salesData[2]),
      price: Number.parseFloat(salesData[3]),
      // remove the first ( and replace it to - for each column qty
      qtySold: {
        jan:
          Number.parseFloat(salesData[4].replace("(", "-").replace(")", "")) ||
          0,
        feb:
          Number.parseFloat(salesData[5].replace("(", "-").replace(")", "")) ||
          0,
        mar:
          Number.parseFloat(salesData[6].replace("(", "-").replace(")", "")) ||
          0,
        apr:
          Number.parseFloat(salesData[7].replace("(", "-").replace(")", "")) ||
          0,
        may:
          Number.parseFloat(salesData[8].replace("(", "-").replace(")", "")) ||
          0,
        jun:
          Number.parseFloat(salesData[9].replace("(", "-").replace(")", "")) ||
          0,
        jul:
          Number.parseFloat(salesData[10].replace("(", "-").replace(")", "")) ||
          0,
        aug:
          Number.parseFloat(salesData[11].replace("(", "-").replace(")", "")) ||
          0,
        sep:
          Number.parseFloat(salesData[12].replace("(", "-").replace(")", "")) ||
          0,
        oct:
          Number.parseFloat(salesData[13].replace("(", "-").replace(")", "")) ||
          0,
        nov:
          Number.parseFloat(salesData[14].replace("(", "-").replace(")", "")) ||
          0,
        dec:
          Number.parseFloat(salesData[15].replace("(", "-").replace(")", "")) ||
          0,
        total:
          Number.parseFloat(salesData[16].replace("(", "-").replace(")")) || 0,
      },
    };
    sales.push(newSale);
  }
  await createMultipleSales(sales);
};
createSalesFromFile("Sales Tracking 2022 - Full.tsv");
