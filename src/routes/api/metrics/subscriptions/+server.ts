import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
    // Fake data - replace with real database query later
    const subscriptions = 850;
    
    return json({ count: subscriptions });
}; 