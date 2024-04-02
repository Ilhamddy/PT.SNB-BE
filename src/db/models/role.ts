import { DataTypes, Model, Optional } from "sequelize";
import connection from "../../config/dbConnect";

interface RoleAttributes {
  id?: number;
  roleName?: string | null;
  active?: string | null;

  createdAt: Date;
  updatedAt: Date;
}

// Define input and output interfaces without createdAt and updatedAt
export interface roleInput extends Optional<RoleAttributes, "id"> {}
export interface roleOutput extends Required<RoleAttributes> {}

class Role extends Model<RoleAttributes, roleInput> implements RoleAttributes {
  public id!: number;
  public roleName!: string;
  public active!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  // createdAt and updatedAt are automatically managed, so they don't need to be defined here

  public static associate(models: any) {
    Role.hasMany(models.User, { foreignKey: 'roleId' });
  }
  
}

Role.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.BIGINT,
    },
    roleName: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    active: {
      allowNull: true,
      type: DataTypes.BOOLEAN,
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

export default Role;
