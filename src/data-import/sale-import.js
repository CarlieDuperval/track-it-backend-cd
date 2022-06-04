import { createMultipleSales } from "../services/sales-service.js";

export const createSalesFromFile = async (fileName) => {
  //read the file
  debugger;
  const data = fs.readFileSync(fileName, "utf-8").toString();
  // Put each line into an array of string
  const fileArray = data.split("\n");
  // create a container for each bulk insert
  const sales = [];
  for (const line of fileArray) {
    // turn each line into and array
    let salesData = line.split(","); // each element separate with comma is a index in the array
    //check for data inside the array
    if (!salesData[0] || salesData[0] === "NameDescription") {
      console.log("This is not NameDescription", salesData[0]);
      continue;
    }
    let newSale = {
      year: 2021,
      name: salesData[0],
      productCategory: salesData[1],
      cost: salesData[2],
      price: salesData[3],
      qtySold: {
        jan: Number.parseFloat(salesData[4].replace("(", "-").replace(")", "")),
        feb: Number.parseFloat(salesData[5].replace("(", "-").replace(")", "")),
        mar: Number.parseFloat(salesData[6].replace("(", "-").replace(")", "")),
        apr: Number.parseFloat(salesData[7].replace("(", "-").replace(")", "")),
        may: Number.parseFloat(salesData[8].replace("(", "-").replace(")", "")),
        jun: Number.parseFloat(salesData[9].replace("(", "-").replace(")", "")),
        jul: Number.parseFloat(
          salesData[10].replace("(", "-").replace(")", "")
        ),
        aug: Number.parseFloat(
          salesData[11].replace("(", "-").replace(")", "")
        ),
        sep: Number.parseFloat(
          salesData[12].replace("(", "-").replace(")", "")
        ),
        oct: Number.parseFloat(
          salesData[13].replace("(", "-").replace(")", "")
        ),
        nov: Number.parseFloat(
          salesData[14].replace("(", "-").replace(")", "")
        ),
        dec: Number.parseFloat(
          salesData[15].replace("(", "-").replace(")", "") // remove the first ( and replace it to -
        ),
        total: Number.parseFloat(salesData[16].replace("(", "-").replace(")")),
      },
    };
    sales.push(newSale);
  }
  await createMultipleSales(sales);
};
createSalesFromFile("Sales.csv");
