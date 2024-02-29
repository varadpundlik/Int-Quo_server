module.exports = (sequelize, DataTypes) => {
  const Interview = sequelize.define(
    "Interview",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      job_role: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      compensation: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      conducted_on: {
        type: DataTypes.DATE,
      },
      status: {
        type: DataTypes.ENUM("On-campus", "Off-campus"),
        allowNull: false,
      },
      result: {
        type: DataTypes.ENUM("Selected", "Rejected"),
      },
    },
    {
      paranoid: true,
    }
  );

  Interview.associate();

  return Interview;
};
