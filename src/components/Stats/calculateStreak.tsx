import { Stats } from "../../App";

export const calculateMaxStreak = (stats: Stats[]) => {
    let maxStreak = 0;
    let currentStreakCount = 0;

    for (const stat of stats) {
        if (stat?.isWin) {
            currentStreakCount++;
            if (currentStreakCount > maxStreak) {
                maxStreak = currentStreakCount;
            }
        } else {
            currentStreakCount = 0;
        }
    }
    return maxStreak;
};

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
