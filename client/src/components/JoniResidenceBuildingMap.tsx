import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'

/** Comma-separated pairs from image-map.net → SVG polygon `points` */
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
  const [isHovered, setIsHovered] = useState(false)

  const points = useMemo(
    () =>
      imageMapCoordsToPolygonPoints(
        '340,359,2093,382,2098,475,2367,482,2369,515,2382,511,2382,572,2346,588,2349,660,2430,658,2430,719,2349,746,2349,800,2428,798,2432,857,2349,882,2351,936,2432,938,2434,992,2349,1015,2351,1074,2430,1076,2432,1133,2353,1144,2349,1214,2423,1212,2430,1266,2349,1275,2351,1354,2457,1361,2459,1594,157,1591,157,1406,130,1406,126,1354,168,1347,171,1275,157,1275,128,1266,126,1216,171,1214,171,1144,123,1121,126,1065,173,1069,173,1001,126,990,123,934,173,929,171,868,128,841,123,787,175,789,171,732,123,705,130,649,171,651,180,615,126,556,123,497,139,488,137,461,361,461,343,425'
      ),
    []
  )

  const { cx, cy } = useMemo(() => {
    const pairs = points.split(' ').map((p) => {
      const [x, y] = p.split(',').map(Number)
      return { x, y }
    })
    return {
      cx: pairs.reduce((s, p) => s + p.x, 0) / pairs.length,
      cy: pairs.reduce((s, p) => s + p.y, 0) / pairs.length,
    }
  }, [points])

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
        <polygon
          points={points}
          fill={isHovered ? 'rgba(101, 116, 50, 0.35)' : 'transparent'}
          stroke={isHovered ? '#657432' : 'transparent'}
          strokeWidth={isHovered ? 4 : 0}
          className="cursor-pointer transition-all duration-300"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => navigate('/joniresidence-apartments')}
        />

        {isHovered && (
          <g style={{ pointerEvents: 'none' }}>
            <rect
              x={cx - 130}
              y={cy - 40}
              width={260}
              height={50}
              rx={10}
              fill="#657432"
            />
            <text
              x={cx}
              y={cy - 10}
              textAnchor="middle"
              fill="#F8F2DD"
              fontSize={26}
              fontWeight={600}
              fontFamily="system-ui, sans-serif"
            >
              Joni Residence
            </text>
          </g>
        )}
      </svg>
    </div>
  )
}
