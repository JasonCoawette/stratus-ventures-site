import { useMemo } from 'react';

export function useDaysInYear(year: number) {
    return useMemo(() => {
        const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
        return isLeapYear ? 366 : 365;
    }, [year]);
}