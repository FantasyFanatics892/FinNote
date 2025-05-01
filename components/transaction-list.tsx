import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ArrowUp, Coffee, CreditCard, Home, ShoppingBag } from "lucide-react"

const transactions = [
  {
    id: "1",
    description: "Gaji Bulanan",
    amount: 8000000,
    date: "2025-04-01",
    type: "income",
    category: "Gaji",
    icon: <ArrowUp className="h-4 w-4 text-emerald-500" />,
  },
  {
    id: "2",
    description: "Sewa Apartemen",
    amount: 3500000,
    date: "2025-04-02",
    type: "expense",
    category: "Rumah",
    icon: <Home className="h-4 w-4" />,
  },
  {
    id: "3",
    description: "Belanja Bulanan",
    amount: 850000,
    date: "2025-04-03",
    type: "expense",
    category: "Belanja",
    icon: <ShoppingBag className="h-4 w-4" />,
  },
  {
    id: "4",
    description: "Tagihan Kartu Kredit",
    amount: 1200000,
    date: "2025-04-05",
    type: "expense",
    category: "Tagihan",
    icon: <CreditCard className="h-4 w-4" />,
  },
  {
    id: "5",
    description: "Kafe",
    amount: 75000,
    date: "2025-04-06",
    type: "expense",
    category: "Makanan",
    icon: <Coffee className="h-4 w-4" />,
  },
]

export default function TransactionList() {
  return (
    <div className="space-y-4">
      {transactions.map((transaction) => (
        <div key={transaction.id} className="flex items-center gap-4">
          <Avatar className="h-9 w-9">
            <AvatarImage src="/placeholder.svg" alt={transaction.category} />
            <AvatarFallback className="bg-muted">{transaction.icon}</AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">{transaction.description}</p>
            <p className="text-xs text-muted-foreground">
              {new Date(transaction.date).toLocaleDateString("id-ID", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant={transaction.type === "income" ? "outline" : "secondary"} className="rounded-sm">
              {transaction.category}
            </Badge>
            <p
              className={`text-sm font-medium ${transaction.type === "income" ? "text-emerald-500" : "text-rose-500"}`}
            >
              {transaction.type === "income" ? "+" : "-"}
              Rp {transaction.amount.toLocaleString("id-ID")}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
