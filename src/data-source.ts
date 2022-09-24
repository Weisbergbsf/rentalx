import "reflect-metadata"
//import { Category } from "./../modules/cars/entities/Category";
import { DataSource } from "typeorm";

export const dataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'root',
    password: 'root',
    database: 'rentx',
    synchronize: true,
    logging: true,
    entities: ["./src/modules/cars/entities/*.ts"],
    subscribers: [],
    migrations: ["./src/database/migrations/*.ts"],
})