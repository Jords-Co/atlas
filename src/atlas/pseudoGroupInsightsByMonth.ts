/**
 * Pseudo Group Insights by Month.
 * 
 * @author <cabal@digerati.design>
 */
export const pseudoGroupInsightsByMonth = () => {
    const insightMonths = document.querySelectorAll('[dd-insight="month"]');
    if (!insightMonths) {
        return;
    }
    let previousMonth = '',
        currentMonth,
        newMonth;
    insightMonths.forEach((insightMonth) => {
        currentMonth = insightMonth.textContent,
            newMonth = currentMonth !== previousMonth;
        if (newMonth) {
            insightMonth.style.display = 'block';
        }
        previousMonth = currentMonth;
    });
};

