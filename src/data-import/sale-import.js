export const createSalesFromFile = async (fileName) => {
  //read the file
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
    //Add new array to container for bulk insert
    salesData[0] = Number.parseInt(salesData[0]);
    sales.push(salesData);
  }
  await createMultipleProducts(sales);
};
