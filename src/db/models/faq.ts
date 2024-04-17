import { DataTypes, Model, Optional } from "sequelize";
import connection from "../../config/dbConnect";

interface FaqAtttributes {
  id?: number;
  title?: string | null;
  description?: string | null;
  userId?: number | null;
  createdAt: Date;
  updatedAt: Date;
}

// Define input and output interfaces without createdAt and updatedAt
export interface faqInput extends Optional<FaqAtttributes, "id"> {}
export interface faqOutput extends Required<FaqAtttributes> {}

class Faq extends Model<FaqAtttributes, faqInput> implements FaqAtttributes {
  public id!: number;
  public title!: string;
  public description!: string;
  public userId!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;


  // public static associate(models: any) {
  //   Faq.hasMany(models.User, { foreignKey: 'userId' });
    
  // }
  // createdAt and updatedAt are automatically managed, so they don't need to be defined here
}

Faq.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.BIGINT,
    },
    title: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    description: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    userId: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
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



export default Faq;
