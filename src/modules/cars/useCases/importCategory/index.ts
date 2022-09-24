import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ImportCategoryController } from "./ImportCategoryController";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

const categoriesRepository = null;//new CategoriesRepository();

const importCategoryUseCasa = new ImportCategoryUseCase(categoriesRepository);

const importCategoryControlle = new ImportCategoryController(
  importCategoryUseCasa
);

export { importCategoryControlle };
