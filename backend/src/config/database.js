module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'secret',
  database: 'meetup',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
