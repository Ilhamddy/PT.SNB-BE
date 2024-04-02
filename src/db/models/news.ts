import { DataTypes, Model, Optional } from "sequelize";
import connection from "../../config/dbConnect";

interface RoleAttributes {
  id?: number;
  title?: string | null;
  description?: string | null;
  image?: string | null;
  userId?: string | null;

  createdAt: Date;
  updatedAt: Date;
}

// Define input and output interfaces without createdAt and updatedAt
export interface roleInput extends Optional<RoleAttributes, "id"> {}
export interface roleOutput extends Required<RoleAttributes> {}

class News extends Model<RoleAttributes, roleInput> implements RoleAttributes {
  public id!: number;
  public title!: string;
  public description!: string;
  public image!: string;
  public userId!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  // createdAt and updatedAt are automatically managed, so they don't need to be defined here
  public static associate(models: any) {
    News.belongsTo(models.User, { foreignKey: 'userId' });
    
    
  }
}

News.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    title: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    description: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    image: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    // userId: {
    //   allowNull: true,
    //   type: DataTypes.STRING,
    // },
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

export default News;
