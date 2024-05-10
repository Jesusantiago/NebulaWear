import { 
    Table, 
    Column, 
    Model, 
    DataType,
    BelongsTo,
    AllowNull,
    ForeignKey,
    BelongsToMany,
    AfterCreate,
  } from "sequelize-typescript";
import Product from "./product.model";
import User from "./users.model";
  
  @Table({
    timestamps: false,
    tableName: "ratings",
    modelName: "Rating"
  })

  class Rating extends Model {
    @Column({
      primaryKey: true,
      type: DataType.UUID,
      defaultValue: DataType.UUIDV4,
    })
    declare id: string;
    
    @AllowNull(false)
    @ForeignKey(() => User)
    @Column({ type: DataType.UUID })
    user_id!: string

    @BelongsTo(() => User)
    user!: User
    
    @AllowNull(false)
    @ForeignKey(() => Product)
    @Column({ type: DataType.UUID })
    product_id!: string

    @BelongsTo(() => Product)
    product!: Product
  
    @Column({
      type: DataType.INTEGER,
      defaultValue: 0
    })
    declare rating_value: number;

    /*@AfterCreate
    static async calcularRating(rating: Rating) {
      console.log("Probando Hook" + rating.rating_value)
      const product = await Product.findOne({where: {id:  rating.product_id}});
      const ratings = await Rating.findAll({ where: { product_id: rating.product_id } });
      console.log("proanbodas "+ratings)
      const totalRatings = ratings.reduce((sum, rating) => sum + rating.rating_value, 0);
      console.log(totalRatings)
      const ratingd = totalRatings / ratings.length;
      product.update({rating: ratingd});
      console.log("El rating  de este producto es " + ratingd);
    }*/
  }
  
  export default Rating;