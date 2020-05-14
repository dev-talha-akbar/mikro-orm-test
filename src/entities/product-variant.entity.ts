import { Entity, PrimaryKey, Property } from "mikro-orm";
import { ObjectID } from 'mongodb'

@Entity()
export class ProductVariant {

  @PrimaryKey()
  _id!: ObjectID;

  @Property()
  title!: string;
}