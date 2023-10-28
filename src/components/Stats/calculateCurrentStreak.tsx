import { Stats } from "../../App";

export const calculateCurrentStreak = (stats: Stats[]) => {
    let currentStreak = 0;
    let currentStreakCount = 0;

    for (const stat of stats) {
        if (stat?.isWin) {
            currentStreakCount++;
            if (currentStreakCount > currentStreak) {
                currentStreak = currentStreakCount;
            }
        } else {
            currentStreakCount = 0;
        }
    }
    return currentStreakCount;
};
