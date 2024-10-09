import { Post } from '@nestjs/common';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'justin',
  password: 'justin123',
  database: 'blog-test',
  synchronize: true,
  logging: true,
  entities: [Post],
  subscribers: [],
  migrations: [],
});
