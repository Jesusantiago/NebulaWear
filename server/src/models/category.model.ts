import { 
  Table, 
  Column, 
  Model, 
  DataType,
} from "sequelize-typescript";

@Table({
  timestamps: false,
  tableName: "categories",
  modelName: "Category"
})
class Category extends Model {
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
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  declare isFeatured: boolean;
}

export default Category;