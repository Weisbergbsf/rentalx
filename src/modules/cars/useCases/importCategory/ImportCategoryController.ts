import { Request, Response } from "express";

import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

class ImportCategoryController {
    constructor(private importCategoryUseCasa: ImportCategoryUseCase) {}

    handle(request: Request, response: Response): Response {
        const { file } = request;

        this.importCategoryUseCasa.execute(file);

        return response.send();
    }
}

export { ImportCategoryController }