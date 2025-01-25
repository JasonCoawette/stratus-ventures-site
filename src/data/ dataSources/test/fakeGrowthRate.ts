export const fakeGrowthRate = (currentUsers: number, targetUsers: number): number => {
    const DAYS_IN_YEAR = 365;
    const remainingUsers = targetUsers - currentUsers;
    const averageDailyGrowth = remainingUsers / DAYS_IN_YEAR;
    const randomFactor = Math.random() * 0.5 + 0.75;
    return Math.ceil(averageDailyGrowth * randomFactor);
  };
  