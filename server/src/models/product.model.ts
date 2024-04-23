import { 
    Table, 
    Column, 
    Model, 
    DataType,
  } from "sequelize-typescript";
  
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

    @Column({
        type: DataType.STRING,
      })
    declare category: string;

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

  }
  
  export default Product;