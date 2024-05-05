import { 
    Table, 
    Column, 
    Model, 
    DataType,
    AllowNull,
    ForeignKey,
    BelongsTo,
    HasMany,
    AfterCreate,
  } from "sequelize-typescript";
import Category from "./category.model";
import Rating from "./rating.model";
import Review from "./reviews.model";
  
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
        type: DataType.DECIMAL(10,2),
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
      allowNull: true,
      defaultValue: [],
      get: function () {
        return JSON.parse(this.getDataValue('images'));
      },
      set: function (value) {
        this.setDataValue('images', JSON.stringify(value));
      },
    })
	  declare images: string[]

    @Column({
      type: DataType.BOOLEAN,
      defaultValue: false,
    })
    declare isFeatured: boolean;

    @Column({
      type: DataType.INTEGER,
      defaultValue: 0
    })
    declare rating: number;

    @HasMany(() => Rating)
    ratings: Rating[];

    @HasMany(() => Review, {
      onDelete: 'CASCADE',
    })
    reviews: Review[];

    /*@AfterCreate
    static async calcularRating(product: Product) {
      console.log("Probando Hook")
      const ratings = await Rating.findAll({ where: { product_id: product.id } });
      const totalRatings = ratings.reduce((sum, valoracion) => sum + valoracion.rating_value, 0);
      const rating = totalRatings / ratings.length;
      product.rating = rating;
      product.save()
      console.log("El rating  de este producto es " + rating);
    }*/
    
  }
  
  export default Product;