import { useTransition, useState } from 'react'
import { useRouter } from 'next/navigation'
import { sendOtp, verifyOtp } from '@/server/auth'

export function useAuth() {
 const router = useRouter()
 const [isPending, startTransition] = useTransition()
 const [step, setStep] = useState<'email' | 'verify'>('email')
 const [message, setMessage] = useState<{type: 'success' | 'error' | null, text: string}>({ type: null, text: '' })
 const [email, setEmail] = useState('')
 const [otp, setOtp] = useState('')

 async function handleSendOtp() {
    startTransition(async () => {
      try {
        await sendOtp(email)
        setStep('verify')
        setMessage({ type: 'success', text: 'Code sent!' })
      } catch (error: unknown) {
        if (error instanceof Error) {
          setMessage({ type: 'error', text: error.message })
        } else {
          setMessage({ type: 'error', text: 'An unexpected error occurred' })
        }
      }
    })
  }
 
  async function handleVerifyOtp() {
    startTransition(async () => {
      try {
        const { user } = await verifyOtp(email, otp)
        setMessage({ type: 'success', text: 'Verified!' })
        router.push('/dashboard')
      } catch (error: unknown) {
        if (error instanceof Error) {
          setMessage({ type: 'error', text: error.message })
        } else {
          setMessage({ type: 'error', text: 'An unexpected error occurred' })
        }
      }
    })
  }

 return {
   isPending,
   step,
   message,
   email, 
   setEmail,
   otp,
   setOtp,
   handleSendOtp,
   handleVerifyOtp
 }
}