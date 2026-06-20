import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTouchDevice } from '../hooks/useTouchDevice'

interface BuildingBlock {
  id: string
  label: string
  path: string
  points: string
}

const BLOCKS: BuildingBlock[] = [
  {
    id: 'b',
    label: 'Blloku B',
    path: '/tianiresidence-blloku-b',
    points:
      '1712,425 1732,418 1729,401 1827,401 1827,302 3227,307 3227,429 3403,432 3403,534 3372,557 3372,629 3440,629 3437,683 3396,717 3372,717 3369,836 3403,839 3433,869 3430,924 3410,941 3372,944 3372,1029 3399,1032 3433,1056 3433,1110 3410,1124 3372,1124 3376,1202 3443,1202 3440,1256 3399,1276 3376,1273 3376,1392 3440,1392 3440,1449 3399,1459 3372,1459 3372,1578 3437,1582 3437,1639 3403,1643 3372,1643 3376,1768 3437,1771 3437,1826 3406,1829 3406,1870 3301,1877 3311,2086 1715,2083',
  },
  {
    id: 'a',
    label: 'Blloku A',
    path: '/tianiresidence-blloku-a',
    points:
      '1823,342 861,338 861,694 763,694 766,1729 478,1732 481,2081 1715,2085 1708,423 1729,423 1729,399 1823,399',
  },
]

export const TianiResidenceBuildingMap = () => {
  const navigate = useNavigate()
  const alwaysShowZones = useTouchDevice()
  const [hoveredBlock, setHoveredBlock] = useState<string | null>(null)

  const getCentroid = (points: string) => {
    const pairs = points.split(' ').map((p) => {
      const [x, y] = p.split(',').map(Number)
      return { x, y }
    })
    const cx = pairs.reduce((sum, p) => sum + p.x, 0) / pairs.length
    const cy = pairs.reduce((sum, p) => sum + p.y, 0) / pairs.length
    return { cx, cy }
  }

  return (
    <div className="relative mx-auto w-full max-w-5xl">
      <img
        src={`${import.meta.env.BASE_URL}SVG Residences/Tiani Residence.svg`}
        alt="Tiani Residence"
        className="block h-auto w-full"
        draggable={false}
      />

      <svg
        className="absolute left-0 top-0 z-10 h-full w-full"
        viewBox="0 0 3840 2160"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        {BLOCKS.map((block) => {
          const isHighlighted = alwaysShowZones || hoveredBlock === block.id
          const { cx, cy } = getCentroid(block.points)

          return (
            <g key={block.id}>
              <polygon
                points={block.points}
                fill={isHighlighted ? 'rgba(101, 116, 50, 0.35)' : 'transparent'}
                stroke={isHighlighted ? '#657432' : 'transparent'}
                strokeWidth={isHighlighted ? 4 : 0}
                className="cursor-pointer transition-all duration-300"
                onMouseEnter={() => setHoveredBlock(block.id)}
                onMouseLeave={() => setHoveredBlock(null)}
                onClick={() => navigate(block.path)}
              />

              {isHighlighted && (
                <g style={{ pointerEvents: 'none' }}>
                  <rect
                    x={cx - block.label.length * 24}
                    y={cy - 80}
                    width={block.label.length * 48}
                    height={100}
                    rx={20}
                    fill="#657432"
                  />
                  <text
                    x={cx}
                    y={cy - 20}
                    textAnchor="middle"
                    fill="#F8F2DD"
                    fontSize={52}
                    fontWeight={600}
                    fontFamily="system-ui, sans-serif"
                  >
                    {block.label}
                  </text>
                </g>
              )}
            </g>
          )
        })}
      </svg>
    </div>
  )
}
