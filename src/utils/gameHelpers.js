export const calcLevel = (xp) => Math.floor(xp / 500) + 1;
export const calcXPProgress = (xp) => ((xp % 500) / 500) * 100;
export const calcRank = (allPlayers, userId) => {
    const sorted = [...allPlayers].sort((a, b) => (b.xp ?? 0) - (a.xp ?? 0));
    const idx = sorted.findIndex(p => p.id === userId);
    return idx >= 0 ? idx + 1 : null;
};
export const formatScore = (score) => new Intl.NumberFormat("az-AZ").format(score);