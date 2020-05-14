import { Entity, OneToMany, Property, PrimaryKey, Collection } from 'mikro-orm'
import { ProductVariant } from './product-variant.entity'
import { ObjectID } from 'mongodb'

@Entity()
export class Product {

  @PrimaryKey()
  _id!: ObjectID;

  @Property()
  title!: string;

  @OneToMany(() => ProductVariant)
  variants = new Collection<ProductVariant>(this);
}