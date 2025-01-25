export type TimePeriodValue = 'today' | 'last_week' | 'last_month' | 'last_year';

export const timePeriodLabels: Record<TimePeriodValue, string> = {
 today: 'Today so far',
 last_week: 'Since last week',
 last_month: 'Since last month',
 last_year: 'Since last year'
};

interface TimeRange {
 currentStart: Date;
 previousStart: Date;
}

export function getTimeRanges(period: TimePeriodValue): TimeRange {
 const now = new Date();
 
 switch(period) {
   case 'today':
     return {
       currentStart: new Date(now.setHours(0,0,0,0)),
       previousStart: new Date(now.setDate(now.getDate() - 1))
     };
   case 'last_week':
     return {
       currentStart: new Date(now.setDate(now.getDate() - 7)),
       previousStart: new Date(now.setDate(now.getDate() - 14))
     };
   case 'last_month':
     return {
       currentStart: new Date(now.setMonth(now.getMonth() - 1)),
       previousStart: new Date(now.setMonth(now.getMonth() - 2))
     };
   case 'last_year':
     return {
       currentStart: new Date(now.setFullYear(now.getFullYear() - 1)),
       previousStart: new Date(now.setFullYear(now.getFullYear() - 2))
     };
 }
}

export const getTimePeriodLabel = (period: TimePeriodValue) => timePeriodLabels[period];