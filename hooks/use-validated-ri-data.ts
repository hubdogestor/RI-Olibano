"use client"

import { useEffect, useState } from "react"
import { validateRIDataSafe, type RIData } from "@/lib/validators"

interface UseValidatedRIDataResult {
  data: RIData | null
  isLoading: boolean
  error: Error | null
}

/**
 * Hook para validar dados de RI com Zod
 * Executa validação apenas uma vez na inicialização
 */
export function useValidatedRIData(riData: unknown): UseValidatedRIDataResult {
  const [data, setData] = useState<RIData | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    try {
      const result = validateRIDataSafe(riData)

      if (!result.success) {
        const errorMessage = result.error.issues
          .map((err) => `${err.path.join(".")}: ${err.message}`)
          .join("; ")
        setError(new Error(`Erro na validação dos dados da RI: ${errorMessage}`))
      } else {
        setData(result.data)
        setError(null)
      }
    } catch (err) {
      setError(err instanceof Error ? err : new Error("Erro desconhecido na validação"))
    } finally {
      setIsLoading(false)
    }
  }, [riData])

  return { data, isLoading, error }
}
