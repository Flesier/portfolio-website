import { toast } from 'sonner'
import { useState } from 'react'

interface Toast {
  id: string
  title?: string
  description?: string
  action?: React.ReactNode
}

export function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([])

  return {
    toast,
    toasts,
    dismiss: toast.dismiss,
    error: toast.error,
    success: toast.success,
  }
}