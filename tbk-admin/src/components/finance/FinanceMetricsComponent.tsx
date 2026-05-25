import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, DollarSign, Receipt, BarChart3, Calendar } from "lucide-react";

interface FinanceMetricsComponentProps {
  totalIncomeData: {
    totalIncome: number;
    growthPercentage: number;
    isGrowthPositive: boolean;
  };
  totalExpensesData: {
    totalExpenses: number;
    growthPercentage: number;
    isGrowthPositive: boolean;
  };
  netProfitLossData: {
    netAmount: number;
    isProfit: boolean;
    profitMargin: number;
    growthPercentage: number;
  };
  averageMonthlyData: {
    averageMonthlyProfit: number;
  };
}

export default function FinanceMetricsComponent({
  totalIncomeData,
  totalExpensesData,
  netProfitLossData,
  averageMonthlyData
}: FinanceMetricsComponentProps) {
  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">

      {/* ── Total Income — Gold / Primary ── */}
      <Card className="bg-gradient-primary text-primary-foreground border-0 shadow-medium">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1 sm:pb-2">
          <div>
            <CardTitle className="text-xs sm:text-sm font-medium opacity-90">Total Income (Selected Period)</CardTitle>
            <p className="text-[10px] opacity-70 mt-0.5">Confirmed bookings · Default: current year · Excludes cancelled</p>
          </div>
          <div className="p-2 rounded-lg bg-white/15 shrink-0">
            <DollarSign className="h-3.5 w-3.5 sm:h-4 sm:w-4 opacity-90" />
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="text-xl sm:text-2xl font-bold font-mono">
            ₹{Number(totalIncomeData.totalIncome).toLocaleString('en-IN')}
          </div>
          <p className="text-[10px] sm:text-xs opacity-80 mt-1 flex items-center gap-1">
            {totalIncomeData.isGrowthPositive ? (
              <TrendingUp className="inline h-2.5 w-2.5 sm:h-3 sm:w-3" />
            ) : (
              <TrendingDown className="inline h-2.5 w-2.5 sm:h-3 sm:w-3" />
            )}
            {totalIncomeData.isGrowthPositive ? '+' : ''}
            {totalIncomeData.growthPercentage}% from last period
          </p>
        </CardContent>
      </Card>

      {/* ── Total Expenses — Destructive / Rose ── */}
      <Card className="bg-destructive text-destructive-foreground border-0 shadow-medium">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1 sm:pb-2">
          <div>
            <CardTitle className="text-xs sm:text-sm font-medium opacity-90">Total Expenses (Selected Period)</CardTitle>
            <p className="text-[10px] opacity-70 mt-0.5">INDIVIDUAL + SPLIT expenses · Default: current year</p>
          </div>
          <div className="p-2 rounded-lg bg-white/15 shrink-0">
            <Receipt className="h-3.5 w-3.5 sm:h-4 sm:w-4 opacity-90" />
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="text-xl sm:text-2xl font-bold font-mono">
            ₹{Number(totalExpensesData.totalExpenses).toLocaleString('en-IN')}
          </div>
          <p className="text-[10px] sm:text-xs opacity-80 mt-1 flex items-center gap-1">
            {totalExpensesData.isGrowthPositive ? (
              <TrendingUp className="inline h-2.5 w-2.5 sm:h-3 sm:w-3" />
            ) : (
              <TrendingDown className="inline h-2.5 w-2.5 sm:h-3 sm:w-3" />
            )}
            {totalExpensesData.isGrowthPositive ? '+' : ''}
            {totalExpensesData.growthPercentage}% from last period
          </p>
        </CardContent>
      </Card>

      {/* ── Net Revenue — Success Green or Destructive if loss ── */}
      <Card className={`border-0 shadow-medium ${netProfitLossData.isProfit ? 'bg-success text-success-foreground' : 'bg-destructive text-destructive-foreground'}`}>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1 sm:pb-2">
          <div>
            <CardTitle className="text-xs sm:text-sm font-medium opacity-90">
              Net Revenue (Income − Expenses)
            </CardTitle>
            <p className="text-[10px] opacity-70 mt-0.5">Income minus expenses · For selected period</p>
          </div>
          <div className="p-2 rounded-lg bg-white/15 shrink-0">
            {netProfitLossData.isProfit ?
              <TrendingUp className="h-3.5 w-3.5 sm:h-4 sm:w-4 opacity-90" /> :
              <TrendingDown className="h-3.5 w-3.5 sm:h-4 sm:w-4 opacity-90" />
            }
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="text-xl sm:text-2xl font-bold font-mono">
            {netProfitLossData.isProfit ? '₹' : '-₹'}
            {Math.abs(Number(netProfitLossData.netAmount)).toLocaleString('en-IN')}
          </div>
          <p className="text-[10px] sm:text-xs opacity-80 mt-1">
            Margin: {netProfitLossData.profitMargin}%
          </p>
        </CardContent>
      </Card>

      {/* ── Avg Monthly Net Profit — Warning / Amber ── */}
      <Card className="bg-warning text-warning-foreground border-0 shadow-medium">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1 sm:pb-2">
          <div>
            <CardTitle className="text-xs sm:text-sm font-medium opacity-90">Avg Monthly Net Profit</CardTitle>
            <p className="text-[10px] opacity-70 mt-0.5">Average net profit per month · Across selected period</p>
          </div>
          <div className="p-2 rounded-lg bg-white/15 shrink-0">
            <BarChart3 className="h-3.5 w-3.5 sm:h-4 sm:w-4 opacity-90" />
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="text-xl sm:text-2xl font-bold font-mono">
            ₹{Number(averageMonthlyData.averageMonthlyProfit).toLocaleString('en-IN')}
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
