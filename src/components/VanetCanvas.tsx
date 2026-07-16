import { useEffect, useRef } from 'react'

interface Vehicle {
  x: number
  lane: number
  speed: number
  trust: number
  id: number
  w: number
}

interface RSU {
  xRatio: number
}

const LANE_COUNT = 4
const VEHICLE_COUNT = 10

export default function VanetCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let t = 0

    /* ---------- setup ---------- */
    const vehicles: Vehicle[] = []
    const rsus: RSU[] = [{ xRatio: 0.2 }, { xRatio: 0.5 }, { xRatio: 0.8 }]

    for (let i = 0; i < VEHICLE_COUNT; i++) {
      const lane = i % LANE_COUNT
      const dir = lane < 2 ? 1 : -1
      vehicles.push({
        x: Math.random() * 1400,
        lane,
        speed: (0.45 + Math.random() * 0.65) * dir,
        trust: 0.55 + Math.random() * 0.45,
        id: i,
        w: 26 + Math.random() * 8,
      })
    }

    function resize() {
      if (!canvas) return
      canvas.width = canvas.offsetWidth * devicePixelRatio
      canvas.height = canvas.offsetHeight * devicePixelRatio
      ctx!.scale(devicePixelRatio, devicePixelRatio)
    }
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    /* ---------- draw loop ---------- */
    function draw() {
      if (!canvas || !ctx) return
      t += 0.016
      const W = canvas.offsetWidth
      const H = canvas.offsetHeight

      ctx.clearRect(0, 0, W, H)

      /* — background — */
      ctx.fillStyle = '#080a0e'
      ctx.fillRect(0, 0, W, H)

      /* — subtle dot grid — */
      ctx.fillStyle = 'rgba(139,147,161,0.12)'
      for (let gx = 0; gx < W; gx += 40)
        for (let gy = 0; gy < H; gy += 40) {
          ctx.fillRect(gx, gy, 2, 2)
        }

      /* — road geometry — */
      const roadTop = H * 0.60
      const roadBot = H * 1.02
      const laneH = (roadBot - roadTop) / LANE_COUNT
      const laneY = Array.from({ length: LANE_COUNT }, (_, i) => roadTop + laneH * i + laneH / 2)
      const rsuPositions = rsus.map((r) => ({ x: W * r.xRatio, y: H * 0.81 }))

      /* road surface */
      const rdGrad = ctx.createLinearGradient(0, roadTop, 0, roadBot)
      rdGrad.addColorStop(0, 'rgba(18,22,32,0.95)')
      rdGrad.addColorStop(1, 'rgba(12,15,22,0.95)')
      ctx.fillStyle = rdGrad
      ctx.fillRect(0, roadTop, W, roadBot - roadTop)

      /* road edge lines */
      ;[roadTop, roadBot].forEach((y) => {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(W, y)
        ctx.strokeStyle = 'rgba(255,255,255,0.18)'
        ctx.lineWidth = 1.5
        ctx.setLineDash([])
        ctx.stroke()
      })

      /* lane dividers */
      for (let i = 1; i < LANE_COUNT; i++) {
        const y = roadTop + laneH * i
        const isCenter = i === LANE_COUNT / 2
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(W, y)
        if (isCenter) {
          ctx.setLineDash([])
          ctx.strokeStyle = 'rgba(245,166,35,0.45)'
          ctx.lineWidth = 2
        } else {
          ctx.setLineDash([22, 22])
          ctx.strokeStyle = 'rgba(255,255,255,0.10)'
          ctx.lineWidth = 1
        }
        ctx.stroke()
        ctx.setLineDash([])
      }

      /* — RSU towers — */
      rsuPositions.forEach((pos, ri) => {
        /* signal rings */
        for (let p = 0; p < 3; p++) {
          const phase = (t * 0.7 + rsus[ri].xRatio * 6 + p * 1.05) % (Math.PI * 2)
          const prog = (1 - Math.cos(phase)) / 2
          const radius = 180 * prog
          const alpha = (1 - prog) * 0.25
          ctx.beginPath()
          ctx.arc(pos.x, pos.y, radius, 0, Math.PI * 2)
          ctx.strokeStyle = `rgba(91,169,255,${alpha})`
          ctx.lineWidth = 1.2
          ctx.setLineDash([])
          ctx.stroke()
        }

        /* pole */
        ctx.beginPath()
        ctx.moveTo(pos.x, roadTop - 14)
        ctx.lineTo(pos.x, roadBot + 14)
        ctx.strokeStyle = 'rgba(255,255,255,0.35)'
        ctx.lineWidth = 1.5
        ctx.stroke()

        /* node dot */
        ctx.beginPath()
        ctx.arc(pos.x, pos.y, 5, 0, Math.PI * 2)
        ctx.fillStyle = '#5aa9ff'
        ctx.fill()

        /* label */
        ctx.font = '500 9px "JetBrains Mono", monospace'
        ctx.fillStyle = 'rgba(91,169,255,0.65)'
        ctx.textAlign = 'center'
        ctx.fillText(`RSU-${ri + 1}`, pos.x, roadTop - 22)

        /* EDGE label above */
        ctx.font = '500 8px "JetBrains Mono", monospace'
        ctx.fillStyle = 'rgba(245,166,35,0.45)'
        ctx.fillText('EDGE', pos.x, roadTop - 33)
      })

      /* — vehicle movement — */
      vehicles.forEach((v) => {
        v.x += v.speed
        if (v.x > W + 70) v.x = -70
        if (v.x < -70) v.x = W + 70
      })

      /* — V2I connection lines — */
      vehicles.forEach((v) => {
        const vy = laneY[v.lane]
        rsuPositions.forEach((pos) => {
          const dx = v.x - pos.x
          const dy = vy - pos.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist > 190) return

          const strength = 1 - dist / 190
          const flicker = 0.6 + 0.4 * Math.sin(t * 4 + v.id * 1.3)
          const alpha = strength * 0.5 * flicker

          /* connection beam */
          ctx.beginPath()
          ctx.moveTo(v.x, vy)
          ctx.lineTo(pos.x, pos.y)
          ctx.strokeStyle = `rgba(91,169,255,${alpha})`
          ctx.lineWidth = 1
          ctx.setLineDash([3, 7])
          ctx.stroke()
          ctx.setLineDash([])

          /* data packet traveling along beam */
          const packetT = ((t * 1.2 + v.id * 0.4) % 1)
          const px = v.x + (pos.x - v.x) * packetT
          const py = vy + (pos.y - vy) * packetT
          ctx.beginPath()
          ctx.arc(px, py, 2.5, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(91,169,255,${alpha * 1.8})`
          ctx.fill()
        })
      })

      /* — vehicles — */
      vehicles.forEach((v) => {
        const vy = laneY[v.lane]
        const carH = 13
        const facingRight = v.speed > 0

        ctx.save()
        ctx.translate(v.x, vy)
        if (!facingRight) ctx.scale(-1, 1)

        /* car shadow */
        ctx.beginPath()
        // @ts-ignore
        ctx.roundRect(-v.w / 2, -carH / 2, v.w, carH, 3)
        ctx.fillStyle = 'rgba(0,0,0,0.4)'
        ctx.fill()

        /* car body */
        const bodyGrad = ctx.createLinearGradient(-v.w / 2, -carH / 2, v.w / 2, carH / 2)
        bodyGrad.addColorStop(0, 'rgba(110,170,255,0.95)')
        bodyGrad.addColorStop(1, 'rgba(55,110,210,0.95)')
        ctx.fillStyle = bodyGrad
        ctx.beginPath()
        // @ts-ignore
        ctx.roundRect(-v.w / 2, -carH / 2, v.w, carH, 3)
        ctx.fill()

        /* windshield glint */
        ctx.fillStyle = 'rgba(255,255,255,0.25)'
        ctx.beginPath()
        // @ts-ignore
        ctx.roundRect(-v.w / 2 + 3, -carH / 2 + 2, v.w * 0.35, carH - 4, 1)
        ctx.fill()

        /* headlights */
        ctx.fillStyle = 'rgba(255,255,255,0.85)'
        ctx.fillRect(v.w / 2 - 4, -carH / 2 + 2, 3, 2.5)
        ctx.fillRect(v.w / 2 - 4, carH / 2 - 4.5, 3, 2.5)

        ctx.restore()

        /* trust indicator dot above car */
        const trustColor =
          v.trust > 0.82 ? '#4ade80' : v.trust > 0.65 ? '#facc15' : '#f87171'
        ctx.beginPath()
        ctx.arc(v.x, vy - carH / 2 - 7, 3, 0, Math.PI * 2)
        ctx.fillStyle = trustColor
        ctx.fill()
      })

      /* — gradient vignette fades — */
      // Fade into road from above (soften the top edge of the road)
      const fadeTop = ctx.createLinearGradient(0, roadTop - H * 0.18, 0, roadTop + H * 0.04)
      fadeTop.addColorStop(0, 'rgba(8,10,14,1)')
      fadeTop.addColorStop(1, 'rgba(8,10,14,0)')
      ctx.fillStyle = fadeTop
      ctx.fillRect(0, 0, W, roadTop + H * 0.04)

      // Full top-of-screen blackout so only the road strip shows below text
      const topCover = ctx.createLinearGradient(0, 0, 0, roadTop * 0.9)
      topCover.addColorStop(0, 'rgba(8,10,14,1)')
      topCover.addColorStop(1, 'rgba(8,10,14,0)')
      ctx.fillStyle = topCover
      ctx.fillRect(0, 0, W, roadTop * 0.9)

      animId = requestAnimationFrame(draw)
    }

    draw()
    return () => {
      cancelAnimationFrame(animId)
      ro.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      aria-hidden="true"
    />
  )
}
