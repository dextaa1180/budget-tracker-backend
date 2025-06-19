module.export = (sequelize, DataTypes) => {
    const Category = sequelize.difine('Category', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true
        },
        created_a: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        tableName: 'categories',
        timestamp: true,
    })

    Category.associate = (models) => {
        Category.hasMany(models.transaction, { foreignKey: 'category_id', as: 'transaction'})
    }
}