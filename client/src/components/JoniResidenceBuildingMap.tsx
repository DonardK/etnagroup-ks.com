import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTouchDevice } from '../hooks/useTouchDevice'

interface FloorArea {
  id: string
  label: string
  path: string
  coordsRaw: string
}

const FLOORS: FloorArea[] = [
  {
    id: '1',
    label: 'Kati 1',
    path: '/joniresidence-kati-1',
    coordsRaw:
      '169,1269,2343,1271,2339,1362,479,1366,479,1403,124,1405,124,1348,172,1348',
  },
  {
    id: '2',
    label: 'Kati 2',
    path: '/joniresidence-kati-2',
    coordsRaw:
      '127,1262,2429,1265,2427,1217,2345,1215,2343,1140,172,1136,172,1208,129,1208',
  },
  {
    id: '3',
    label: 'Kati 3',
    path: '/joniresidence-kati-3',
    coordsRaw:
      '127,1124,2427,1131,2422,1075,2343,1077,2343,998,169,1000,169,1063,120,1068',
  },
  {
    id: '4',
    label: 'Kati 4',
    path: '/joniresidence-kati-4',
    coordsRaw:
      '122,984,2427,993,2429,937,2345,935,2341,860,172,869,174,926,124,928',
  },
  {
    id: '5',
    label: 'Kati 5',
    path: '/joniresidence-kati-5',
    coordsRaw:
      '2424,851,131,853,122,788,167,790,169,733,2343,733,2341,794,2427,797',
  },
  {
    id: '6',
    label: 'Kati 6',
    path: '/joniresidence-kati-6',
    coordsRaw:
      '2427,717,131,713,124,652,163,654,160,575,2341,581,2343,661,2427,663',
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

export const JoniResidenceBuildingMap = () => {
  const navigate = useNavigate()
  const alwaysShowZones = useTouchDevice()
  const [hoveredFloor, setHoveredFloor] = useState<string | null>(null)

  const floorsWithPoints = useMemo(
    () =>
      FLOORS.map((floor) => ({
        ...floor,
        points: imageMapCoordsToPolygonPoints(floor.coordsRaw),
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
        src={`${import.meta.env.BASE_URL}SVG Residences/Joni Residence.svg`}
        alt="Joni Residence"
        className="block h-auto w-full"
        draggable={false}
      />

      <svg
        className="absolute left-0 top-0 z-10 h-full w-full"
        viewBox="0 0 2560 1700"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        {floorsWithPoints.map((floor) => {
          const isHighlighted = alwaysShowZones || hoveredFloor === floor.id
          const { cx, cy } = getCentroid(floor.points)

          return (
            <g key={floor.id}>
              <polygon
                points={floor.points}
                fill={isHighlighted ? 'rgba(101, 116, 50, 0.35)' : 'transparent'}
                stroke={isHighlighted ? '#657432' : 'transparent'}
                strokeWidth={isHighlighted ? 4 : 0}
                className="cursor-pointer transition-all duration-300"
                onMouseEnter={() => setHoveredFloor(floor.id)}
                onMouseLeave={() => setHoveredFloor(null)}
                onClick={() => navigate(floor.path)}
              />

              {isHighlighted && (
                <g style={{ pointerEvents: 'none' }}>
                  <rect
                    x={cx - 140}
                    y={cy - 80}
                    width={280}
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
                    {floor.label}
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
