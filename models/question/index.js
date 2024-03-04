module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define(
    "Question",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      question: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      user_answer: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ai_answer: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      difficulty: {
        type: DataTypes.ENUM("Easy", "Medium", "Hard"),
        allowNull: false,
      },
      topic: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      subtopic: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      paranoid: true,
    }
  );

    Question.associate = (models) => {
        Question.belongsTo(models.Interview, {
            foreignKey: {
                name: "interview_id",
                allowNull: false,
            },
        });
    }

  return Question;
};
