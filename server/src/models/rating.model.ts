import { 
    Table, 
    Column, 
    Model, 
    DataType,
    BelongsTo,
    AllowNull,
    ForeignKey,
    BelongsToMany,
  } from "sequelize-typescript";
import Product from "./product.model";
  
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
    @ForeignKey(() => Product)
    @Column({ type: DataType.UUID })
    product_id!: string

    @BelongsTo(() => Product)
    product!: Product
  
    @Column({
      type: DataType.DECIMAL(2,10)
    })
    declare rating_value: number;
  }
  
  export default Rating;