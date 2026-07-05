'use client';

import { cn } from '@/lib/utils';
import styles from './nucleus.module.css';

interface NucleusProps {
  size?: 'hero' | 'section' | 'card' | 'micro';
  className?: string;
  orbitText?: boolean;
  animate?: boolean;
}

export function Nucleus({ size = 'micro', className, orbitText = false, animate = true }: NucleusProps) {
  return (
    <div
      className={cn(
        styles.nucleus,
        styles[`nucleus--${size}`],
        !animate && styles['nucleus--static'],
        className
      )}
      aria-hidden="true"
    >
      {/* Gold core */}
      <svg className={cn(styles.nucleus__layer, styles.nucleus__core)} viewBox="0 0 500 500">
        <defs>
          <radialGradient id="coreGrad" cx="38%" cy="33%">
            <stop offset="0%" stopColor="#E8C870" />
            <stop offset="55%" stopColor="#C9A84C" />
            <stop offset="100%" stopColor="#A8893A" />
          </radialGradient>
        </defs>
        <polygon
          points="307,250 278.5,200.6 221.5,200.6 193,250 221.5,299.4 278.5,299.4"
          fill="url(#coreGrad)"
        />
        <polygon
          points="290,250 270,215 230,215 210,250 230,285 270,285"
          fill="rgba(255,255,255,0.12)"
        />
      </svg>

      {/* Ring 1: solid navy (inner ring, complete) */}
      <svg className={cn(styles.nucleus__layer, styles['nucleus__ring-1'])} viewBox="0 0 500 500">
        <polygon
          points="345.5,250 297.75,167.3 202.25,167.3 154.5,250 202.25,332.7 297.75,332.7"
          fill="none"
          stroke="#0E1C3D"
          strokeWidth="49"
          strokeLinejoin="round"
        />
      </svg>

      {/* Ring 2: dashed gold */}
      <svg className={cn(styles.nucleus__layer, styles['nucleus__ring-2'])} viewBox="0 0 500 500">
        <polygon
          points="380,250 340,130 160,130 120,250 160,370 340,370"
          fill="none"
          stroke="rgba(201,168,76,0.65)"
          strokeWidth="1.2"
          strokeDasharray="14 6"
        />
      </svg>

      {/* Ring 3: dashed navy */}
      <svg className={cn(styles.nucleus__layer, styles['nucleus__ring-3'])} viewBox="0 0 500 500">
        <polygon
          points="420,250 385,105 115,105 80,250 115,395 385,395"
          fill="none"
          stroke="rgba(14,28,61,0.38)"
          strokeWidth="0.9"
          strokeDasharray="7 11"
        />
      </svg>

      {/* Ring 4: ultra-faint aura */}
      <svg className={cn(styles.nucleus__layer, styles['nucleus__ring-4'])} viewBox="0 0 500 500">
        <polygon
          points="460,250 435,72 65,72 40,250 65,428 435,428"
          fill="none"
          stroke="rgba(201,168,76,0.10)"
          strokeWidth="0.7"
          strokeDasharray="4 18"
        />
      </svg>

      {/* Orbital text path */}
      {orbitText && (
        <svg
          className={cn(styles.nucleus__layer, styles['nucleus__orbit-text'])}
          viewBox="0 0 500 500"
          aria-hidden="true"
        >
          <path
            id="orbit-path-500"
            d="M380,250 L340,130 L160,130 L120,250 L160,370 L340,370 Z"
            fill="none"
          />
          <text
            fontSize="7.5"
            fill="#C9A84C"
            fontFamily="Inter, sans-serif"
            letterSpacing="3.5"
            fontWeight="500"
          >
            <textPath href="#orbit-path-500" startOffset="0%">
              WEB DESIGN · APP DEVELOPMENT · DIGITAL SOLUTIONS · SOFTWARE SYSTEMS ·
            </textPath>
          </text>
        </svg>
      )}
    </div>
  );
}
