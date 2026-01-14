import React, { Component } from 'react'
import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        <div className="flex min-h-screen items-center justify-center bg-[#F8F2DD]">
          <div className="max-w-md rounded-2xl bg-[#F8F2DD] p-8 text-center shadow-xl border border-[#657432]/20">
            <div className="mb-4 text-6xl">⚠️</div>
            <h2 className="mb-2 text-2xl font-bold text-[#657432]">
              Oops! Something went wrong
            </h2>
            <p className="mb-6 text-[#657432]/80">
              We're sorry for the inconvenience. Please try refreshing the page.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="rounded-full bg-[#657432] px-6 py-3 font-semibold text-[#F8F2DD] transition-all hover:bg-[#657432]/80"
            >
              Refresh Page
            </button>
            {import.meta.env.DEV && this.state.error && (
              <div className="mt-6 rounded-lg bg-red-50 p-4 text-left">
                <p className="text-sm font-mono text-red-900">
                  {this.state.error.toString()}
                </p>
              </div>
            )}
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
