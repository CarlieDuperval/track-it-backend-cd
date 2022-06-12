// import { getProductCollection } from "../gateway/connectDb.js";

// export const createProduct = async (product) => {
//   const col = await getProductCollection();
//   const { insertedId } = await col.insertOne(product);
//   return insertedId;
// };

// export const getProduct = async (name) => {
//   const col = await getProductCollection();
//   const product = await col.findOne({ name });
//   return product;
// };

// export const getAllProducts = async () => {
//   const col = await getProductCollection();
//   const allProducts = await col.find({}).toArray();
//   return allProducts;
// };

// export const updateProduct = async (name, updateObj) => {
//   const col = await getProductCollection();
//   await col.updateOne({ name }, { $set: updateObj });
// };

// export const getProductById = async (id) => {
//   try {
//     const col = await getProductCollection.doc(id).get();
//     return {
//       id: col.id,
//       ...col.data(),
//     };
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const getProductByFilter = async (productFilter) => {
//   if (!productFilter) {
//     productFilter = {};
//   }
//   const { name, productCategory, cost, salePrice, date } = productFilter;
//   let query = getProductCollection;
//   if (name) {
//     query = query.where("name", "==", name);
//   }
//   if (productCategory) {
//     query = query.where("productCategory", "==", productCategory);
//   }
//   if (cost) {
//     query = query.where("cost", "==", cost);
//   }
//   if (salePrice) {
//     query = query.where("salePrice", "==", salePrice);
//   }
//   if (date) {
//     query = query.where("date", "==", date);
//   }
//   try {
//     const snapshot = await query.get();
//     const col = snapshot.docs.map((doc) => {
//       const product = doc.data();
//       product.id = doc.id;
//       return product;
//     });
//     return col;
//   } catch (error) {
//     console.error(error);
//   }
// };
