"use server";

import { Redis } from '@upstash/redis'


// ------------------------------------------- //
// INITIALIZE REDIS CLIENT [=================] ::
// ------------------------------------------- //
export const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
})
// ------------------------------------------- //



// ------------------------------------------- //
// REQUEST RESULT [==========================] ::
// ------------------------------------------- //
type Result<T> = {
  data?: T
  error?: string
  success: boolean
}
// ------------------------------------------- //



// ------------------------------------------- //
// GET A SINGLE ITEM [=======================] ::
// ------------------------------------------- //
export async function get<T>(key: string): Promise<Result<T>> {
  try {
    const data = await redis.get(key)
    
    if (!data) {
      return {
        success: false,
        error: `No data found for key: ${key}`
      }
    }

    return {
      data: data as T,
      success: true
    }
  } catch (error) {
    console.error(`Error fetching ${key}:`, error)
    return {
      success: false,
      error: `Failed to fetch data: ${error instanceof Error ? error.message : 'Unknown error'}`
    }
  }
}
// ------------------------------------------- //



// ------------------------------------------- //
// SET A SINGLE ITEM [=======================] ::
// ------------------------------------------- //
export async function set<T>(
  key: string,
  value: T,
): Promise<Result<T>> {
  try {
    await redis.set(key, value)

    return {
      data: value,
      success: true
    }
  } catch (error) {
    console.error(`Error setting ${key}:`, error)
    return {
      success: false,
      error: `Failed to set data: ${error instanceof Error ? error.message : 'Unknown error'}`
    }
  }
}
// ------------------------------------------- //



// ------------------------------------------- //
// SET WITH EXPIRY [=========================] ::
// ------------------------------------------- //
export async function setWithExpiry<T>(
  key: string,
  value: T,
  expirySeconds: number
): Promise<Result<T>> {
  try {
    await redis.set(key, value, { ex: expirySeconds })

    return {
      data: value,
      success: true
    }
  } catch (error) {
    console.error(`Error setting ${key} with expiry:`, error)
    return {
      success: false,
      error: `Failed to set data with expiry: ${error instanceof Error ? error.message : 'Unknown error'}`
    }
  }
}
// ------------------------------------------- //



// ------------------------------------------- //
// GET TTL FOR A KEY [=======================] ::
// ------------------------------------------- //
export async function getTTL(key: string): Promise<Result<number>> {
  try {
    const ttl = await redis.ttl(key)
    
    return {
      data: ttl,
      success: true
    }
  } catch (error) {
    console.error(`Error getting TTL for ${key}:`, error)
    return {
      success: false,
      error: `Failed to get TTL: ${error instanceof Error ? error.message : 'Unknown error'}`
    }
  }
}
// ------------------------------------------- //



// ------------------------------------------- //
// GET ALL KEYS BY PATTERN [=================] ::
// ------------------------------------------- //
export async function getKeysByPattern(pattern: string): Promise<Result<string[]>> {
  try {
    const keys = await redis.keys(pattern)
    
    return {
      data: keys,
      success: true
    }
  } catch (error) {
    console.error(`Error getting keys for pattern ${pattern}:`, error)
    return {
      success: false,
      error: `Failed to get keys: ${error instanceof Error ? error.message : 'Unknown error'}`
    }
  }
}
// ------------------------------------------- //



// ------------------------------------------- //
// DELETE A KEY [============================] ::
// ------------------------------------------- //
export async function remove(key: string): Promise<Result<void>> {
  try {
    await redis.del(key)
    
    return {
      success: true
    }
  } catch (error) {
    console.error(`Error removing ${key}:`, error)
    return {
      success: false,
      error: `Failed to remove key: ${error instanceof Error ? error.message : 'Unknown error'}`
    }
  }
}
// ------------------------------------------- //