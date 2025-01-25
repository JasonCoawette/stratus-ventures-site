// ================================================================= //
// DATA GATEWAY FOR STRATUS VENTURES |||||||||||||||||||||||||||||||| //
// ================================================================= //

import Redis from 'ioredis';
import { fetchWebAppUserCount, fetchAppStoreUserCount } from '@/data/test/testDataSources';
const redis = new Redis(process.env.REDIS_URL || '');


///////////////////////////////////////////////////////////////////////
// [===============================================================] //
// [ GATE: USER COUNT |||||||||||||||||||||||||||||||||||||||||||||] //
// [===============================================================] //

    export const getUsers = async (): Promise<number> => {
        const cacheKey = 'total_users';
        // Check redis cache ----------- ::
        const cachedValue = await redis.get(cacheKey);
        if (cachedValue) {
            return parseInt(cachedValue, 10);
        }
        // ----------------------------- ::
        // [ DATA SOURCES |||||||||||||] ::
        // ----------------------------- ::
        const webAppUserCount = await fetchWebAppUserCount();
        const appStoreUserCount = await fetchAppStoreUserCount();
        // ----------------------------- ::
        // [ MERGE DATA |||||||||||||||] ::
        const totalUsers = webAppUserCount + appStoreUserCount;
        // ----------------------------- ::
        // Cache the result for 1 minute ::
        await redis.set(cacheKey, totalUsers, 'EX', 60);
        // ----------------------------- ::
        // [ GATE OUTPUT ||||||||||||] ::
        return totalUsers;
        // ----------------------------- ::
    };

///////////////////////////////////////////////////////////////////////
