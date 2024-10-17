// this file is based on @react-hooks-library/core with some fixes
import { useEffect, useState } from 'react'

/**
 * Breakpoints from Tailwind V2
 *
 * @see https://tailwindcss.com/docs/breakpoints
 */
export const breakpointsTailwind = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536
}

/**
 * Reactive media query hook that returns the truthy value of the media query.
 *
 * @param {string} query
 * @returns {boolean} boolean value of the query
 *
 * @see https://react-hooks-library.vercel.app/core/useMediaQuery
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(typeof window === 'undefined' ? false : window.matchMedia(query).matches)

  useEffect(() => {
    setMatches(window.matchMedia(query).matches)
  }, [])

  useEffect(() => {
    const mediaQuery = window.matchMedia(query)
    const handler = (event: MediaQueryListEvent) => {
      setMatches(event.matches)
    }

    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, [query])

  return matches
}

function match(query: string): boolean {
  if (typeof window === 'undefined') return false
  return window.matchMedia(query).matches
}

/**
 * Reactive hooks and utilities to be used with user provided breakpoints.
 *
 * @param {string} breakpoints
 * @returns functions to be used as hooks
 *
 * @see https://react-hooks-library.vercel.app/core/BreakPointHooks
 */
export function BreakPointHooks<BreakPoints extends Record<string, number>>(
  breakpoints: BreakPoints
) {
  type BreakPointsKey = keyof BreakPoints

  return {
    /**
     * Hook that returns a boolean if screen width is greater than given breakpoint.
     *
     * @param k {string} breakpoint
     * @returns boolean
     *
     * @see https://react-hooks-library.vercel.app/core/BreakPointHooks
     **/
    useGreater: (k: BreakPointsKey) => {
      return useMediaQuery(`(min-width: ${breakpoints[k]}px)`)
    },

    /**
     * Hook that returns a boolean if screen width is smaller than given breakpoint.
     *
     * @param k {string} breakpoint
     * @param k {string} breakpoint
     *
     * @returns boolean
     *
     * @see https://react-hooks-library.vercel.app/core/BreakPointHooks
     **/
    useSmaller: (k: BreakPointsKey) => {
      return useMediaQuery(`(max-width: ${breakpoints[k]}px)`)
    },

    /**
     * Hook that returns a boolean if screen width is between two given breakpoint.
     *
     * @param a {string} breakpoint
     * @param b {string} breakpoint
     *
     * @returns boolean
     *
     * @see https://react-hooks-library.vercel.app/core/BreakPointHooks
     **/
    useBetween: (a: BreakPointsKey, b: BreakPointsKey) => {
      return useMediaQuery(
        `(min-width: ${breakpoints[a]}px) and (max-width: ${breakpoints[b]}px)`
      )
    },

    /**
     * Utility function that returns a boolean if screen width is greater than given breakpoint.
     *
     * @param k {string} breakpoint
     *
     * @see https://react-hooks-library.vercel.app/core/BreakPointHooks
     **/
    isGreater(k: BreakPointsKey) {
      return match(`(min-width: ${breakpoints[k]}px)`)
    },

    /**
     * Utility function that returns a boolean if screen width is smaller than given breakpoint.
     *
     * @param k {string} breakpoint
     *
     * @see https://react-hooks-library.vercel.app/core/BreakPointHooks
     **/
    isSmaller(k: BreakPointsKey) {
      return match(`(max-width: ${breakpoints[k]}px)`)
    },

    /**
     * Utility function that returns a boolean if screen width is between two given breakpoint.
     *
     * @param k {string} breakpoint
     *
     * @see https://react-hooks-library.vercel.app/core/BreakPointHooks
     **/
    isInBetween(a: BreakPointsKey, b: BreakPointsKey) {
      return match(
        `(min-width: ${breakpoints[a]}px) and (max-width: ${breakpoints[b]}px)`
      )
    }
  }
}

export const { useGreater, useBetween, useSmaller } = BreakPointHooks(breakpointsTailwind);
