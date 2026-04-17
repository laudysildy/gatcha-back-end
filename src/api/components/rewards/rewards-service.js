const Reward = require('../../models/reward-schema');
const Gacha = require('../../models/gacha-schema');

const maskName = (name) => {
  return name.replace(/.(?=.{2})/g, '*');
};

exports.getRewards = async () => {
  const rewards = await Reward.find();
  return rewards.map(r => ({
    name: r.name,
    remaining: r.quota - r.claimed
  }));
};

exports.getWinners = async () => {
  const winners = await Gacha.find({ reward: { $ne: null } });

  return winners.map(w => ({
    user: maskName(w.userId),
    reward: w.reward
  }));
};
