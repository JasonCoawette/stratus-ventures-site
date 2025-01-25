// ================================================================= //
// DATA GATEWAY FOR STRATUS VENTURES |||||||||||||||||||||||||||||||| //
// ================================================================= //

import Redis from 'ioredis';    
import { fetchWebAppUserCount, fetchAppStoreUserCount} from './ dataSources/test/testDataSources';


///////////////////////////////////////////////////////////////////////
// [===============================================================] //
// [ GATE: USER COUNT |||||||||||||||||||||||||||||||||||||||||||||] //
// [===============================================================] //

    export const getUsers = async (): Promise<number> => {
        const cacheKey = 'total_users';
  
        // ----------------------------- ::
        // [ DATA SOURCES |||||||||||||] ::
        // ----------------------------- ::
        const webAppUserCount = await fetchWebAppUserCount();
        const appStoreUserCount = await fetchAppStoreUserCount();
        // ----------------------------- ::
        // [ MERGE DATA |||||||||||||||] ::
        const totalUsers = webAppUserCount + appStoreUserCount;
        // ----------------------------- ::

        // ----------------------------- ::
        // [ GATE OUTPUT ||||||||||||] ::
        return totalUsers;
        // ----------------------------- ::
    };

///////////////////////////////////////////////////////////////////////
