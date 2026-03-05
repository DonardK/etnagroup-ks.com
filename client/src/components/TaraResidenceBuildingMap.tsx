import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const TaraResidenceBuildingMap = () => {
  const navigate = useNavigate()
  const [isHovered, setIsHovered] = useState(false)

  const points =
    '1040,144 2793,130 2789,181 2759,249 2755,269 3054,269 3050,344 2989,429 2993,449 3088,446 3088,524 2999,635 3111,632 3111,703 3047,768 3050,812 3169,805 3169,1771 3128,1778 3118,2002 593,1999 586,1768 624,1765 624,1653 705,1663 705,1602 624,1585 624,1473 705,1490 705,1432 624,1405 624,1290 705,1320 702,1263 624,1229 624,1107 708,1151 702,1093 620,1042 620,927 695,971 708,971 705,920 624,859 624,744 685,788 705,791 705,751 624,680 624,564 674,605 857,602 763,500 759,418 864,415 857,391 796,317 796,235 1061,235 1037,198'

  const getCentroid = () => {
    const pairs = points.split(' ').map((p) => {
      const [x, y] = p.split(',').map(Number)
      return { x, y }
    })
    const cx = pairs.reduce((sum, p) => sum + p.x, 0) / pairs.length
    const cy = pairs.reduce((sum, p) => sum + p.y, 0) / pairs.length
    return { cx, cy }
  }

  const { cx, cy } = getCentroid()

  return (
    <div className="relative mx-auto w-full max-w-5xl">
      <img
        src={`${import.meta.env.BASE_URL}SVG Residences/Tara Residence.svg`}
        alt="Tara Residence"
        className="block h-auto w-full"
        draggable={false}
      />

      <svg
        className="absolute left-0 top-0 z-10 h-full w-full"
        viewBox="0 0 3840 2160"
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
          onClick={() => navigate('/tararesidence-apartments')}
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
              Tara Residence
            </text>
          </g>
        )}
      </svg>
    </div>
  )
}
