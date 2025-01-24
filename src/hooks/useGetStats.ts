import { useState, useEffect } from "react";
import { useTimePeriod } from "../lib/context/TimePeriodContext";

type StatsType = 'totalUsers' | 'downloads' | 'activeSessions';

interface Stats {
    value: number;
    change: number;
    timePeriod: string;
}

export function useGetStats(type: StatsType) {
    const { timePeriod } = useTimePeriod();
    const [stats, setStats] = useState<Stats>({
        value: 0,
        change: 0,
        timePeriod: ''
    });

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const response = await fetch(`/api/stats/${type}?period=${timePeriod}`);
                const data = await response.json();
                setStats(data);
            } catch (error) {
                console.error(`Failed to fetch ${type} stats:`, error);
            }
    };

        fetchStats();

        const interval = setInterval(fetchStats, 30000);
        return () => clearInterval(interval);
        
    }, [type, timePeriod]);

    return stats;
}