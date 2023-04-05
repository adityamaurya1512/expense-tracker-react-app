
import './Chart.css';
import ChartBar from './ChartBar'
const Chart=(props)=>{
     console.log(props,'oooooooooooooooooo')
    const dataPointValues=props.dataPoints.map((dataPoint)=>{
       return dataPoint.value;
    })
    const totalMax=Math.max(...dataPointValues)
    return(
        <div className="chart">
            {
                props.dataPoints.map((dataPoint)=>(
                    <ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={totalMax} label={dataPoint.label}>
                        
                    </ChartBar>
                ))
            }
        </div>
    )

}
export default Chart;