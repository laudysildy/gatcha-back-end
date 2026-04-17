const Gacha = require('../../models/gacha-schema');
const Reward = require('../../models/reward-schema');

exports.gacha = async (userId) => {
  const today = new Date();
  today.setHours(0,0,0,0);

  const count = await Gacha.countDocuments({
    userId,
    createdAt: { $gte: today }
  });

  if (count >= 5) {
    throw new Error("Limit harian tercapai");
  }

  const rewards = await Reward.find({
    $expr: { $lt: ["$claimed", "$quota"] }
  });

  let result = null;

  if (rewards.length > 0 && Math.random() < 0.5) {
    const randomReward = rewards[Math.floor(Math.random() * rewards.length)];
    randomReward.claimed += 1;
    await randomReward.save();
    result = randomReward.name;
  }

  await Gacha.create({
    userId,
    reward: result
  });

  return {
    message: result ? "Selamat!" : "Zonk",
    reward: result
  };
};

exports.getHistory = async (userId) => {
  return await Gacha.find({ userId }).sort({ createdAt: -1 });
};
