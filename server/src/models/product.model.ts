import { 
    Table, 
    Column, 
    Model, 
    DataType,
    AllowNull,
    ForeignKey,
    BelongsTo,
    HasMany,
  } from "sequelize-typescript";
import Category from "./category.model";
import Rating from "./rating.model";
  
  export enum sizes {
    S = 'S',
    M = 'M',
    L = 'L',
    XL = 'XL'
}

  @Table({
    timestamps: false,
    tableName: "products",
    modelName: "Product"
  })
  class Product extends Model {
    @Column({
      primaryKey: true,
      type: DataType.UUID,
      defaultValue: DataType.UUIDV4,
    })
    declare id: string;
  
    @Column({
      type: DataType.STRING,
    })
    declare name: string;
  
    @Column({
      type: DataType.STRING,
    })
    declare description: string;

    @Column({
        type: DataType.ENUM(...Object.values(sizes))
      })
    declare size: string;

    @Column({
        type: DataType.STRING,
      })
    declare color: string;

    @Column({
        type: DataType.DECIMAL(2,10),
      })
    declare price: number;
    
    @AllowNull(false)
    @ForeignKey(() => Category)
    @Column({ type: DataType.UUID })
    category_id!: string

    @BelongsTo(() => Category)
    category!: Category

    @Column({
      type: DataType.JSON,
      defaultValue: [],
      get() {
        const rawValue = this.getDataValue('images')
        return rawValue ? JSON.parse(rawValue) : []
      },
      set(value: string[]) {
        this.setDataValue('images', JSON.stringify(value))
      },
    })
	  declare images: JSON

    @Column({
      type: DataType.BOOLEAN,
      defaultValue: false,
    })
    declare isFeatured: boolean;

    @Column({
      type: DataType.DECIMAL(2,10),
      defaultValue: 0
    })
    declare rating: number;

    @HasMany(() => Rating)
    ratings: Rating[];

  }

  Product.addHook('afterCreate', 'calcularRating', async (product: Product) => {
    const ratings = await Rating.findAll({ where: { product_id: product.id } });
    const totalRatings = ratings.reduce((sum, valoracion) => sum + valoracion.rating_value, 0);
    const rating = totalRatings / ratings.length || 0;
    await product.update({ rating });
  });
  
  export default Product;