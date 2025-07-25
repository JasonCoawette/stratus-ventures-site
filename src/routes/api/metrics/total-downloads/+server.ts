import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
    // Fake data - replace with real database query later
    const downloads = 50000;
    
    return json({ count: downloads });
}; 