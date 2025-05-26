// components/ui/use-toast.ts
import { useCallback, useState } from "react"

let listeners: ((toast: Toast) => void)[] = []

export type Toast = {
  id?: string
  title?: string
  description?: string
  action?: React.ReactNode
  duration?: number
  variant?: "default" | "destructive"
}

export function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([])

  const toast = useCallback((toast: Toast) => {
    const newToast = {
      ...toast,
      id: toast.id ?? Math.random().toString(),
    }

    listeners.forEach((listener) => listener(newToast))
    setToasts((prev) => [...prev, newToast])
  }, [])

  return {
    toast,
    toasts,
  }
}

