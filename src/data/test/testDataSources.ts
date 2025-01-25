// ================================================================= //
// TEST DATA SOURCE GATES FOR APPS ||||||||||||||||||||||||||||||||| //
// ================================================================= //

import { fakeGrowthRate } from './fakeGrowthRate'

//////////////////////////
// [==================] //
// [ INTERFACE VARS ==] //
// [==================] //
const STARTING_APP_STORE_USERS = 0;
const STARTING_WEBAPP_USERS = 0;
const TARGET_USERS = 1000000;
//////////////////////////



///////////////////////////////////////////////////////////////////////
// [===============================================================] //
// [ TERMINAL: APPLE APPLICATIONS |||||||||||||||||||||||||||||||||] //
// [===============================================================] //


    // ------------------------------------- //
    // [ SOURCE 1: USER COUNT |||||||||||||] //
    // ------------------------------------- //
        // VARIABLES ----------------------- ::
        let appStoreUserCount = STARTING_APP_STORE_USERS
        // FETCH USER COUNT ---------------- ::
        export const fetchAppStoreUserCount = async (): Promise<number> => {
            const dailyGrowth = fakeGrowthRate(appStoreUserCount, TARGET_USERS);
            appStoreUserCount += dailyGrowth;
            if (appStoreUserCount > TARGET_USERS) appStoreUserCount = TARGET_USERS;
            // ----------------------------- ::
            // [ SOURCE 1 OUTPUT ||||||||||] ::
            return appStoreUserCount;
            // ----------------------------- ::
          };
        // --------------------------------- ::
    // ------------------------------------- //


///////////////////////////////////////////////////////////////////////







///////////////////////////////////////////////////////////////////////
// [===============================================================] //
// [ TERMINAL: WEB APPLICATIONS |||||||||||||||||||||||||||||||||||] //
// [===============================================================] //


    // ------------------------------------- //
    // [ SOURCE 1: USER COUNT |||||||||||||] //
    // ------------------------------------- //
        // VARIABLES ----------------------- ::
        let webAppUsers = STARTING_WEBAPP_USERS
        // FETCH USER COUNT ---------------- ::
        export const fetchWebAppUserCount = async (): Promise<number> => {
            const dailyGrowth = fakeGrowthRate(webAppUsers, TARGET_USERS);
            webAppUsers += dailyGrowth;
            if (webAppUsers > TARGET_USERS) webAppUsers = TARGET_USERS;
            // ----------------------------- ::
            // [ SOURCE 1 OUTPUT ||||||||||] ::
            return webAppUsers;
            // ----------------------------- ::
          };
        // --------------------------------- ::
    // ------------------------------------- //

///////////////////////////////////////////////////////////////////////
