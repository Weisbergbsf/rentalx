import { dataSource } from "../../../../data-source";
import { Repository } from "typeorm";
import { Category } from "../../entities/Category";
import { ICategoriesRepository } from "../ICategoriesRepository";

class CategoriesRepository implements ICategoriesRepository {
  private repository: Repository<Category>;

   constructor() {
    this.repository = dataSource.manager.getRepository(Category);
  }

  async create({ name, description }): Promise<void> {
    const category = this.repository.create({
      name,
      description,
    });

    await this.repository.manager.save(category);
  }

  async list(): Promise<Category[]> {
    return await this.repository.find();
  }

  async findByName(name: string): Promise<Category> {
    return await this.repository.findOne({ where: { name } });
  }
}

export { CategoriesRepository };
