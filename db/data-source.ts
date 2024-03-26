import { DataSource, DataSourceOptions } from "typeorm";

export const dataSourceOptions: DataSourceOptions ={
    type: 'mysql',
    host: 'localhost',
    username: 'root',
    password: '1234',
    database: 'migration',
    entities: ['dist/**/*.entity.js'],
    migrations: ['dist/db/migrations/*.js'],
}

const dataSource=new DataSource(dataSourceOptions);

export default dataSource;