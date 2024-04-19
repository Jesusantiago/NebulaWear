import { 
  Table, 
  Column, 
  Model, 
  DataType,
  IsEmail,
} from "sequelize-typescript";

@Table({
  timestamps: false,
  tableName: "users",
  modelName: "User",
})
class User extends Model {
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
}

export default User;
