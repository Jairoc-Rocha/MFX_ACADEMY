import {
  formatMoney,
  formatPercent,
  getMonthDescription,
} from "../helpers/helpers";

const Investment = ({ children: investment }) => {
  const investmentClassName =
    investment.balance > 0 ? "text-green-600" : "text-red-600";

  return (
    <div className="border p-4">
      <h2 className="text-center font-semibold text-xl">
        {investment.description}
      </h2>

      <h3 className="text-center font-semibold text-xl">
        Rendimento total:
        <span className={investmentClassName}>
          {formatMoney(investment.balance)} (
          {formatPercent(investment.totalPercentage)})
        </span>
      </h3>

      <ul>
        {investment.reports.map((report, index) => {
          const reportClassName =
            report.percentage === 0
              ? "text-black-600"
              : report.percentage > 0
              ? "text-green-600"
              : "text-red-600";

          const lineColorClassName =
            index % 2 === 1 ? "bg-gray-200" : "bg-white";

          return (
            <li
              key={report.id}
              className={`flex flex-row items-center justify-between ${lineColorClassName}`}
            >
              <span className="font-mono">
                {getMonthDescription(report.month)}/{report.year}
              </span>
              <span className={`flex-1 ml-4 ${reportClassName}`}>
                {formatMoney(report.value)}
              </span>
              <span className={reportClassName}>
                {formatPercent(report.percentage)}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Investment;
