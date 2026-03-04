import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface BuildingBlock {
  id: string
  label: string
  path: string
  points: string
}

const BLOCKS: BuildingBlock[] = [
  {
    id: 'ef',
    label: 'Blloku E dhe F',
    path: '/elsaresidence-blloku-ef',
    points:
      '1849,417 1496,29 1341,95 1314,64 1074,177 1074,278 1023,301 1023,336 992,351 988,1014 1333,1371 1380,1453 1411,1488 1457,1569 1492,1608 1535,1689 1581,1747 2015,2197 2298,2065 2298,1670 2550,1557 2550,1267 2465,1173 2430,1181 2356,1096 2066,786 2077,770 1992,677 1988,592 1949,526',
  },
  {
    id: 'bcd',
    label: 'Blloku B, C dhe D',
    path: '/elsaresidence-blloku-bcd',
    points:
      '748,4197 3085,3131 3093,2778 3345,2658 3345,2511 3480,2435 3484,2067 3383,1958 2918,1471 2872,1444 2825,1433 2302,1665 2298,2290 2201,2336 1802,1921 1635,2006 1616,1987 1240,2158 1236,2774 1139,2821 752,2410 574,2487 546,2468 178,2635 174,3267 186,3282 178,3399 225,3449 287,3554 372,3689 461,3829 558,3969 636,4093',
  },
  {
    id: 'a',
    label: 'Blloku A',
    path: '/elsaresidence-blloku-a',
    points:
      '3472,4084 3414,4003 3379,3933 3290,3801 3224,3708 3135,3568 3085,3506 3093,2777 3345,2653 3348,2514 3589,2393 3690,2498 3907,2397 3926,2417 3945,2409 4282,2754 4290,3766 3523,4115 3476,4111',
  },
]

export const ElsaResidenceBuildingMap = () => {
  const navigate = useNavigate()
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
        src={`${import.meta.env.BASE_URL}SVG Residences/Elsa Residence.svg`}
        alt="Elsa Residence"
        className="block h-auto w-full"
        draggable={false}
      />

      <svg
        className="absolute left-0 top-0 z-10 h-full w-full"
        viewBox="0 0 4391 4320"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        {BLOCKS.map((block) => {
          const isHovered = hoveredBlock === block.id
          const { cx, cy } = getCentroid(block.points)

          return (
            <g key={block.id}>
              <polygon
                points={block.points}
                fill={isHovered ? 'rgba(101, 116, 50, 0.35)' : 'transparent'}
                stroke={isHovered ? '#657432' : 'transparent'}
                strokeWidth={isHovered ? 4 : 0}
                className="cursor-pointer transition-all duration-300"
                onMouseEnter={() => setHoveredBlock(block.id)}
                onMouseLeave={() => setHoveredBlock(null)}
                onClick={() => navigate(block.path)}
              />

              {isHovered && (
                <g
                  style={{ pointerEvents: 'none' }}
                  className="animate-fade-in"
                >
                  <rect
                    x={cx - block.label.length * 14}
                    y={cy - 50}
                    width={block.label.length * 28}
                    height={60}
                    rx={12}
                    fill="#657432"
                  />
                  <text
                    x={cx}
                    y={cy - 14}
                    textAnchor="middle"
                    fill="#F8F2DD"
                    fontSize={32}
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
