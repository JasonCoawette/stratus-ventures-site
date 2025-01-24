"use client";

import { createContext, useContext, useState } from 'react';
import { TimePeriodValue, timePeriodLabels } from '@/lib/utils/time';

interface TimePeriodContextType {
 timePeriod: TimePeriodValue;
 label: string;
 setTimePeriod: (period: TimePeriodValue) => void;
}

const TimePeriodContext = createContext<TimePeriodContextType | undefined>(undefined);

export function TimePeriodProvider({ children }: { children: React.ReactNode }) {
  const [timePeriod, setTimePeriod] = useState<TimePeriodValue>('today');

  const value = {
    timePeriod,
    label: timePeriodLabels[timePeriod],
    setTimePeriod
  };

  return (
    <TimePeriodContext.Provider value={value}>
      {children}
    </TimePeriodContext.Provider>
  );
}

export const useTimePeriod = () => {
  const context = useContext(TimePeriodContext);
  if (!context) throw new Error('useTimePeriod must be used within TimePeriodProvider');
  return context;
}