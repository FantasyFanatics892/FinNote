"use client"

import { useTheme } from "next-themes"

export function LineChart() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <div className="h-[300px] w-full">
      <canvas
        id="line-chart"
        width="100%"
        height="100%"
        style={{ width: "100%", height: "100%" }}
        ref={(canvas) => {
          if (canvas) {
            const ctx = canvas.getContext("2d")
            if (ctx) {
              // Clear canvas
              ctx.clearRect(0, 0, canvas.width, canvas.height)

              // Set colors based on theme
              const gridColor = isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
              const textColor = isDark ? "rgba(255, 255, 255, 0.7)" : "rgba(0, 0, 0, 0.7)"

              // Draw grid
              ctx.strokeStyle = gridColor
              ctx.lineWidth = 1

              // Vertical grid lines
              for (let i = 0; i <= 6; i++) {
                const x = 50 + (i * (canvas.width - 100)) / 6
                ctx.beginPath()
                ctx.moveTo(x, 30)
                ctx.lineTo(x, canvas.height - 30)
                ctx.stroke()
              }

              // Horizontal grid lines
              for (let i = 0; i <= 4; i++) {
                const y = 30 + (i * (canvas.height - 60)) / 4
                ctx.beginPath()
                ctx.moveTo(50, y)
                ctx.lineTo(canvas.width - 50, y)
                ctx.stroke()
              }

              // X-axis labels (months)
              const months = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul"]
              ctx.fillStyle = textColor
              ctx.font = "12px sans-serif"
              ctx.textAlign = "center"

              for (let i = 0; i < 7; i++) {
                const x = 50 + (i * (canvas.width - 100)) / 6
                ctx.fillText(months[i], x, canvas.height - 10)
              }

              // Y-axis labels (amounts in millions)
              const amounts = ["0", "5", "10", "15", "20"]
              ctx.textAlign = "right"

              for (let i = 0; i < 5; i++) {
                const y = canvas.height - 30 - (i * (canvas.height - 60)) / 4
                ctx.fillText(`${amounts[i]}M`, 45, y + 5)
              }

              // Income line
              const incomeData = [5, 8, 7, 10, 12, 9, 15]
              ctx.strokeStyle = "#10b981" // emerald-500
              ctx.lineWidth = 3
              ctx.beginPath()

              for (let i = 0; i < 7; i++) {
                const x = 50 + (i * (canvas.width - 100)) / 6
                const y = canvas.height - 30 - (incomeData[i] / 20) * (canvas.height - 60)

                if (i === 0) {
                  ctx.moveTo(x, y)
                } else {
                  ctx.lineTo(x, y)
                }
              }

              ctx.stroke()

              // Expense line
              const expenseData = [3, 5, 4, 7, 6, 8, 5]
              ctx.strokeStyle = "#f43f5e" // rose-500
              ctx.lineWidth = 3
              ctx.beginPath()

              for (let i = 0; i < 7; i++) {
                const x = 50 + (i * (canvas.width - 100)) / 6
                const y = canvas.height - 30 - (expenseData[i] / 20) * (canvas.height - 60)

                if (i === 0) {
                  ctx.moveTo(x, y)
                } else {
                  ctx.lineTo(x, y)
                }
              }

              ctx.stroke()

              // Legend
              ctx.fillStyle = textColor
              ctx.textAlign = "left"
              ctx.font = "14px sans-serif"

              // Income legend
              ctx.strokeStyle = "#10b981"
              ctx.lineWidth = 3
              ctx.beginPath()
              ctx.moveTo(canvas.width - 150, 20)
              ctx.lineTo(canvas.width - 120, 20)
              ctx.stroke()
              ctx.fillText("Pemasukan", canvas.width - 115, 25)

              // Expense legend
              ctx.strokeStyle = "#f43f5e"
              ctx.lineWidth = 3
              ctx.beginPath()
              ctx.moveTo(canvas.width - 150, 45)
              ctx.lineTo(canvas.width - 120, 45)
              ctx.stroke()
              ctx.fillText("Pengeluaran", canvas.width - 115, 50)
            }
          }
        }}
      />
    </div>
  )
}

export function BarChart() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <div className="h-[300px] w-full">
      <canvas
        id="bar-chart"
        width="100%"
        height="100%"
        style={{ width: "100%", height: "100%" }}
        ref={(canvas) => {
          if (canvas) {
            const ctx = canvas.getContext("2d")
            if (ctx) {
              // Clear canvas
              ctx.clearRect(0, 0, canvas.width, canvas.height)

              // Set colors based on theme
              const gridColor = isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
              const textColor = isDark ? "rgba(255, 255, 255, 0.7)" : "rgba(0, 0, 0, 0.7)"

              // Draw grid
              ctx.strokeStyle = gridColor
              ctx.lineWidth = 1

              // Horizontal grid lines
              for (let i = 0; i <= 4; i++) {
                const y = 30 + (i * (canvas.height - 60)) / 4
                ctx.beginPath()
                ctx.moveTo(50, y)
                ctx.lineTo(canvas.width - 20, y)
                ctx.stroke()
              }

              // X-axis labels (months)
              const months = ["Jan", "Feb", "Mar", "Apr"]
              ctx.fillStyle = textColor
              ctx.font = "12px sans-serif"
              ctx.textAlign = "center"

              const barWidth = 30
              const groupWidth = 100

              for (let i = 0; i < 4; i++) {
                const x = 100 + i * groupWidth
                ctx.fillText(months[i], x, canvas.height - 10)
              }

              // Y-axis labels (amounts in millions)
              const amounts = ["0", "5", "10", "15", "20"]
              ctx.textAlign = "right"

              for (let i = 0; i < 5; i++) {
                const y = canvas.height - 30 - (i * (canvas.height - 60)) / 4
                ctx.fillText(`${amounts[i]}M`, 45, y + 5)
              }

              // Income data
              const incomeData = [12, 15, 10, 18]

              // Expense data
              const expenseData = [8, 10, 7, 12]

              // Draw bars
              for (let i = 0; i < 4; i++) {
                const x = 85 + i * groupWidth

                // Income bar
                const incomeHeight = (incomeData[i] / 20) * (canvas.height - 60)
                ctx.fillStyle = "#10b981" // emerald-500
                ctx.fillRect(x, canvas.height - 30 - incomeHeight, barWidth, incomeHeight)

                // Expense bar
                const expenseHeight = (expenseData[i] / 20) * (canvas.height - 60)
                ctx.fillStyle = "#f43f5e" // rose-500
                ctx.fillRect(x + barWidth + 5, canvas.height - 30 - expenseHeight, barWidth, expenseHeight)
              }

              // Legend
              ctx.fillStyle = textColor
              ctx.textAlign = "left"
              ctx.font = "14px sans-serif"

              // Income legend
              ctx.fillStyle = "#10b981"
              ctx.fillRect(canvas.width - 150, 10, 15, 15)
              ctx.fillStyle = textColor
              ctx.fillText("Pemasukan", canvas.width - 130, 22)

              // Expense legend
              ctx.fillStyle = "#f43f5e"
              ctx.fillRect(canvas.width - 150, 35, 15, 15)
              ctx.fillStyle = textColor
              ctx.fillText("Pengeluaran", canvas.width - 130, 47)
            }
          }
        }}
      />
    </div>
  )
}

export function PieChart() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <div className="h-[300px] w-full">
      <canvas
        id="pie-chart"
        width="100%"
        height="100%"
        style={{ width: "100%", height: "100%" }}
        ref={(canvas) => {
          if (canvas) {
            const ctx = canvas.getContext("2d")
            if (ctx) {
              // Clear canvas
              ctx.clearRect(0, 0, canvas.width, canvas.height)

              // Set colors based on theme
              const textColor = isDark ? "rgba(255, 255, 255, 0.7)" : "rgba(0, 0, 0, 0.7)"

              // Data
              const data = [
                { label: "Rumah", value: 35, color: "#10b981" }, // emerald-500
                { label: "Makanan", value: 25, color: "#f43f5e" }, // rose-500
                { label: "Transportasi", value: 15, color: "#3b82f6" }, // blue-500
                { label: "Hiburan", value: 10, color: "#f59e0b" }, // amber-500
                { label: "Lainnya", value: 15, color: "#8b5cf6" }, // violet-500
              ]

              // Calculate total
              const total = data.reduce((sum, item) => sum + item.value, 0)

              // Draw pie chart
              let startAngle = 0
              const centerX = canvas.width / 2 - 50
              const centerY = canvas.height / 2
              const radius = Math.min(centerX, centerY) - 20

              for (const item of data) {
                const sliceAngle = (2 * Math.PI * item.value) / total

                ctx.beginPath()
                ctx.moveTo(centerX, centerY)
                ctx.arc(centerX, centerY, radius, startAngle, startAngle + sliceAngle)
                ctx.closePath()

                ctx.fillStyle = item.color
                ctx.fill()

                startAngle += sliceAngle
              }

              // Draw legend
              ctx.fillStyle = textColor
              ctx.textAlign = "left"
              ctx.font = "14px sans-serif"

              let legendY = centerY - 80

              for (const item of data) {
                ctx.fillStyle = item.color
                ctx.fillRect(centerX + radius + 30, legendY, 15, 15)

                ctx.fillStyle = textColor
                ctx.fillText(`${item.label} (${item.value}%)`, centerX + radius + 50, legendY + 12)

                legendY += 25
              }
            }
          }
        }}
      />
    </div>
  )
}
