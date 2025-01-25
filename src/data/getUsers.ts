// ================================================================= //
// DATA GATEWAY FOR STRATUS VENTURES |||||||||||||||||||||||||||||||| //
// ================================================================= //

import { fetchWebAppUserCount, fetchAppStoreUserCount} from './ dataSources/test/testDataSources';

///////////////////////////////////////////////////////////////////////
// [===============================================================] //
// [ GATE: USER COUNT |||||||||||||||||||||||||||||||||||||||||||||] //
// [===============================================================] //

    export const getUsers = async (): Promise<number> => {
  
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
