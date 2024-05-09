import { 
  Table, 
  Column, 
  Model, 
  DataType,
  IsEmail,
  HasMany,
} from "sequelize-typescript";
import Rating from "./rating.model";
import Order from "./order.model";

@Table({
  timestamps: false,
  tableName: "users",
  modelName: "User",
})
class User extends Model {
  @Column({
    primaryKey: true,
    type: DataType.STRING,
  })
  declare id: string;

  @Column({
    type: DataType.STRING,
  })
  declare name: string;
  
  @Column({
    type: DataType.STRING,
  })
  declare lastname: string;

  @Column({
    type: DataType.STRING,
  })
  declare address: string;

  @Column({
    type: DataType.STRING,
  })
  declare phone: string;

  @IsEmail
  @Column({
    type: DataType.STRING,
  })
  declare email: string;

  @Column({
    type: DataType.STRING,
  })
  declare password: string;

  @Column({
    type: DataType.ENUM('client', 'admin'),
    defaultValue: 'client',
  })
  declare role: 'client' | 'admin';

  @Column({
    type: DataType.STRING
  })
  declare reset_token: string

  @HasMany(() => Rating, {
    onDelete: 'CASCADE',
  })
  ratings: Rating[];

  @HasMany(() => Order, {
    onDelete: 'CASCADE',
  })
  orders: Order[];
}

export default User;
