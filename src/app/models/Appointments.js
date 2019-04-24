module.exports = (sequelize, DataTypes) => {
  const Appointment = sequelize.define('Appointment', {
    date: DataTypes.DATE
  })

  Appointment.associate = models => {
    Appointment.belongsTo(models.User, { foreighKey: 'user_id' })
    Appointment.belongsTo(models.User, { foreighKey: 'provider_id' })
  }
  return Appointment
}
