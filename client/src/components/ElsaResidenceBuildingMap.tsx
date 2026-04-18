import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface BuildingBlock {
  id: string
  label: string
  path: string
  /** Comma-separated x,y pairs from image-map.net */
  coordsRaw: string
}

const BLOCKS: BuildingBlock[] = [
  {
    id: 'a',
    label: 'Blloku A',
    path: '/elsaresidence-bllokua',
    coordsRaw:
      '3093,2774,3348,2654,3348,2511,3589,2394,3690,2495,3907,2398,3926,2417,3949,2410,4282,2755,4282,3759,4127,3845,3527,4117,3476,4109,3476,4086,3418,4043,3418,4000,3383,3966,3383,3931,3321,3880,3321,3849,3290,3822,3286,3795,3228,3741,3228,3713,3197,3675,3131,3609,3135,3566,3085,3508',
  },
  {
    id: 'b',
    label: 'Blloku B',
    path: '/elsaresidence-bllokub',
    coordsRaw:
      '1353,3117,1372,3908,744,4199,639,4102,624,4067,593,4001,531,3939,531,3920,461,3831,438,3780,407,3726,353,3672,326,3610,283,3551,221,3447,178,3396,178,2636,546,2466,570,2489,744,2411,1302,2989,1306,3063',
  },
  {
    id: 'c',
    label: 'Blloku C',
    path: '/elsaresidence-bllokuc',
    coordsRaw:
      '1802,3712,2368,3456,2364,3119,2418,3091,2418,2634,2368,2576,2364,2510,1810,1923,1632,2001,1612,1982,1236,2148,1232,2777,1806,3374',
  },
  {
    id: 'd',
    label: 'Blloku D',
    path: '/elsaresidence-bllokud',
    coordsRaw:
      '2860,3238,3089,3133,3093,2769,3348,2652,3348,2513,3484,2443,3484,2063,3383,1958,3368,1970,3019,1598,3019,1582,2918,1470,2872,1439,2825,1431,2302,1671,2302,2296,2860,2893,2860,2892',
  },
  {
    id: 'e',
    label: 'Blloku E',
    path: '/elsaresidence-bllokue',
    coordsRaw:
      '1484,36,1341,98,1310,67,1074,175,1074,276,1023,299,1023,334,992,346,988,1013,1325,1366,1380,1447,1411,1486,1457,1567,1488,1606,1535,1684,1562,1719,1581,1746,1767,1940,1806,1916,2054,2180,2302,2072,2302,1668,2554,1564,2554,1269,2457,1172,2426,1180,2407,1153,2364,1114,2360,1094,2058,776,2077,765,1988,676,1988,590,1953,555,1949,520,1903,478,1895,454,1542,81,1527,81',
  },
]

function imageMapCoordsToPolygonPoints(raw: string): string {
  const nums = raw.split(',').map((s) => Number(s.trim()))
  const parts: string[] = []
  for (let i = 0; i < nums.length; i += 2) {
    parts.push(`${nums[i]},${nums[i + 1]}`)
  }
  return parts.join(' ')
}

export const ElsaResidenceBuildingMap = () => {
  const navigate = useNavigate()
  const [hoveredBlock, setHoveredBlock] = useState<string | null>(null)

  const blocksWithPoints = useMemo(
    () =>
      BLOCKS.map((b) => ({
        ...b,
        points: imageMapCoordsToPolygonPoints(b.coordsRaw),
      })),
    []
  )

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
        {blocksWithPoints.map((block) => {
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
                <g style={{ pointerEvents: 'none' }}>
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
