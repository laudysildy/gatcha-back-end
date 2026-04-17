const service = require('./gacha-service');

exports.gacha = async (req, res, next) => {
  try {
    const { userId } = req.body;
    const result = await service.gacha(userId);
    res.json(result);
  } catch (err) {
    next(err);
  }
};

exports.history = async (req, res, next) => {
  try {
    const { userId } = req.query;
    const data = await service.getHistory(userId);
    res.json(data);
  } catch (err) {
    next(err);
  }
};
