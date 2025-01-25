'use server'

import { createClient } from "@/lib/supabase/client"
const supabase = createClient()

export async function sendOtp(email: string) {
 try {
   const { error } = await supabase.auth.signInWithOtp({
     email,
     options: { shouldCreateUser: false }
   })
   if (error) throw new Error(error.message)
   return { success: true }
 } catch (error) {
   throw error
 }
}

export async function verifyOtp(email: string, otp: string) {
 try {
   const { data, error } = await supabase.auth.verifyOtp({
     email,
     token: otp,
     type: "magiclink"
   })
   if (error) throw error
   return { success: true, user: data.user }
 } catch (error) {
   throw error
 }
}