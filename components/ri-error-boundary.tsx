"use client"

import { Component, ReactNode } from "react"

interface ErrorBoundaryProps {
  children: ReactNode
  fallback?: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
  error: Error | null
}

export default class RIErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("RI Presentation Error:", error)
    console.error("Error Info:", errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-white via-[#f5f1ec] to-[#c88715]/10 p-8">
            <div className="max-w-md space-y-4 text-center">
              <h2 className="text-2xl font-serif font-bold text-[#354037]">Erro ao Carregar Apresentação</h2>
              <p className="text-sm text-[#4a463f]/80">
                Houve um problema ao processar os dados da apresentação. Por favor, recarregue a página.
              </p>
              {process.env.NODE_ENV === "development" && (
                <details className="mt-4 text-left">
                  <summary className="cursor-pointer text-xs font-mono text-[#ac4e15]">
                    Detalhes do erro (desenvolvimento)
                  </summary>
                  <pre className="mt-2 overflow-auto rounded bg-[#354037]/10 p-3 text-[0.65rem]">
                    {this.state.error?.message}
                  </pre>
                </details>
              )}
              <button
                onClick={() => window.location.reload()}
                className="mt-4 rounded-full bg-gradient-to-r from-[#ac4e15] to-[#C88715] px-6 py-2 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
              >
                Recarregar Página
              </button>
            </div>
          </div>
        )
      )
    }

    return this.props.children
  }
}
