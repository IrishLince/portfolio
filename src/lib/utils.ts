import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Mobile detection helper - cached result
let isMobileCached: boolean | null = null
export function isMobileDevice(): boolean {
  if (typeof window === 'undefined') return false
  if (isMobileCached !== null) return isMobileCached
  
  isMobileCached = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
    window.innerWidth < 768 ||
    ('ontouchstart' in window)
  
  return isMobileCached
}

// Check for reduced motion preference - cached result
let prefersReducedMotionCached: boolean | null = null
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false
  if (prefersReducedMotionCached !== null) return prefersReducedMotionCached
  
  prefersReducedMotionCached = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false
  return prefersReducedMotionCached
}