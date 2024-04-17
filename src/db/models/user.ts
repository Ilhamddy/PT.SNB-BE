import { DataTypes, Model, Optional } from "sequelize";
import connection from "../../config/dbConnect";
import News from "./news";

interface UserAttributes {
  id?: number;
  name?: string | null;
  email?: string | null;
  contact?: number | null;
  address?: string | null;
  roleId?: number | null;
  password?: string | null;
  createdAt: Date;
  updatedAt: Date;
}

// Define input and output interfaces without createdAt and updatedAt
export interface userInput extends Optional<UserAttributes, "id"> {}
export interface userOutput extends Required<UserAttributes> {}

class User extends Model<UserAttributes, userInput> implements UserAttributes {
  public id!: number;
  public name!: string;
  public email!: string;
  public contact!: number;
  public address!: string;
  public roleId!: number;

  public password!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;


  public static associate(models: any) {
    // User.belongsTo(models.Role, { foreignKey: 'roleId' });
    User.hasMany(models.News, { foreignKey: 'userId' });
    
  }
  // createdAt and updatedAt are automatically managed, so they don't need to be defined here
}


User.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.BIGINT,
    },
    name: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    email: {
      allowNull: true,
      type: DataTypes.STRING,
      unique: true,
    },
    contact: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    // roleId: {
    //   allowNull: false,
    //   type: DataTypes.INTEGER,
    // },
    address: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    password: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    // Explicitly define createdAt and updatedAt to satisfy TypeScript
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    timestamps: true, // This ensures Sequelize manages createdAt and updatedAt
    sequelize: connection,
    underscored: false,
  }

  
);

// User.hasMany(News, { foreignKey: 'userId' });

// User.associate = (models) => {
//   User.belongsTo(models.role, { foreignKey: 'roleId' });
// }

export default User;
