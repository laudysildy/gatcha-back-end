const service = require('./rewards-service');

exports.getRewards = async (req, res, next) => {
  try {
    const data = await service.getRewards();
    res.json(data);
  } catch (err) {
    next(err);
  }
};

exports.getWinners = async (req, res, next) => {
  try {
    const data = await service.getWinners();
    res.json(data);
  } catch (err) {
    next(err);
  }
};
