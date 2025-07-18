import {calculateInvestmentResults, formatter} from '../util/investment.js';

function Results({userInput}) {
    const resultsData=calculateInvestmentResults(userInput);
    const initialInvestment = resultsData[0].valueEndOfYear - resultsData[0].interest - resultsData[0].annualInvestment;
    console.log(resultsData);
    return (
       <table id='result'>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Intrest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
            <tbody>
                {resultsData.map(yearData => {
                    const totalInterest = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initialInvestment;
                    const totalAmountInvested = yearData.valueEndOfYear - totalInterest;
                    return <tr key={yearData.year}> 
                        <td>{yearData.year}</td>
                        <td>{formatter.format(yearData.valueEndOfYear)}</td>
                        <td>{formatter.format(yearData.interest)}</td>
                        <td>{formatter.format(totalInterest)}</td>
                        <td>{formatter.format(totalAmountInvested)}</td>
                    </tr>
                })}
            </tbody>
       </table> 
    );
}

export default Results;