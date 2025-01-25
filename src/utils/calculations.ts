
// Calulate change
export function calculateChange(current: number, previous: number): number {
    if (!previous) return 0;
    if (previous === 0 && current > 0) return 1;
    if (previous === 0 && current === 0) return 0;
    return (current - previous) / Math.abs(previous);
}

// Calulate revenue

// Calulate conversion rate

// Calulate cell intensity for daily active users chart

// Calulate geo-location position for 3D globe