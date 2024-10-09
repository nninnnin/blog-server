// Your models in your app are your database tables.

import { Column, Entity } from 'typeorm';

@Entity()
export class Post {
  @Column()
  id: number;
  @Column()
  title: string;
  content: string;
  created_at: Date;
  updated_at: Date;
}
