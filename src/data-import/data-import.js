"srt".split();

export const createProductFromFile = async (fileName) => {
  //read the file
  const data = fs.readFileSync(fileName, "utf-8").toString();
  // Put each line into an array of string
  const fileArray = data.split("\n");
  // create a container for each bulk insert
  const products = [];
  for (const line of fileArray) {
    // turn each line into and array
    let productData = line.split(","); // each element separate with comma is a index in the array
    //check for data inside the array
    if (!productData[0] || productData[0] === "NameDescription") {
      console.log("This is not NameDescription", productData[0]);
      continue;
    }
    //Add new array to container for bulk insert
    productData[0] = Number.parseInt(productData[0]);
    products.push(productData);
  }
  await createMultipleProducts(products);
};
