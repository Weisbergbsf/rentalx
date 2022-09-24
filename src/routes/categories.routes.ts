import { Router } from "express";
import multer from "multer";

import createCateroryController  from "../modules/cars/useCases/createCategory";
import { importCategoryControlle } from "../modules/cars/useCases/importCategory";
import  listCategoriesController  from "../modules/cars/useCases/listCategories";

const categoriesRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

categoriesRoutes.post("/", (request, response) => {
  console.log("reloado funcionando....")
  return createCateroryController().handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
  console.log("reloado funcionando....")
  return listCategoriesController().handle(request, response);
});

categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
  return importCategoryControlle.handle(request, response);
});

export { categoriesRoutes };
