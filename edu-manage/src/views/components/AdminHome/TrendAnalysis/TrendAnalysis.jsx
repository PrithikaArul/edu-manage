import {useState,useEffect} from 'react';
import { Typography } from "@mui/material";
import { Chart } from 'primereact/chart';
import './TrendAnalysis.css';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';



export const TrendAnalysis = () => {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});
    const [barChartData, setBarChartData] = useState({});
    const [barChartOptions, setBarChartOptions] = useState({});

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        //Line Chart Data
        const data = {
            labels: ['2019', '2021', '2022', '2023', '2024'],
            datasets: [
                {
                    label: 'Passed-Out',
                    data: [20,35,38,45,50],
                    fill:false,
                    backgroundColor: "#098DB8",
                    borderColor: "#098DB8",
                    fontColor:"black",
                    borderWidth:2
                },
                {
                    label: 'Admitted',
                    data: [25,30,41,50,57],
                    fill: false,
                    backgroundColor: "#B80967",
                    borderColor: "#B80967",
                    borderWidth:2

                }
            ]
        };

        //Bar Chart Data
        const barCharData = {
            labels: ['CSE', 'ECE', 'IT', 'Mech', 'Civil'],
            datasets: [
                {
                    label: 'Students',
                    data: [20,35,38,45,50],
                    fill:false,
                    backgroundColor:"#AB47BC",
                    borderColor: "#AB47BC",
                    fontColor:"black",
                    categoryPercentage:0.4,
                    barPercentage:0.6,
                    borderRadius:5
                },
                {
                    label: 'Professors',
                    data: [25,30,41,50,57],
                    fill: false,
                    backgroundColor: "#E24AAA",
                    borderColor: "#E24AAA",
                    categoryPercentage:0.4,
                    barPercentage:0.6,
                    borderRadius:5                  
                }
            ]
        };

        //Line Chart Options
        const options = {
            maintainAspectRatio: false,
            aspectRatio: 0.6,
            ticks:{
                maxTicksLimit: 5,
                textColor:"black"
            },
            plugins: {
                legend: {
                    position:'top',
                    align:'end',
                    labels: {
                        color: "black",
                        boxWidth:7,
                        boxHeight:7,
                    },
                    width:2
                }
            },
            scales: {
                x: {
                    border:{
                        display:false
                    },
                    grid: {
                        display: false,
                        dash:[5,15]
                    },
                    border:{
                    }
                    
                },
                y: {
                    border:{
                        display:false
                    },
                    grid: {
                        color: surfaceBorder
                    }
                }
            }
        };

        //Bar Chart Options
        const barChartOptions = {
            maintainAspectRatio: false,
            aspectRatio: 0.6,
            ticks:{
                maxTicksLimit: 5
            },
            plugins: {
                legend: {
                    position:'top',
                    align:'end',
                    labels: {
                        color: "black",
                        boxWidth:10,
                        boxHeight:10
                    },
                    width:2
                }
            },
            scales: {
                indexAxis: 'x', 
  responsive: true,
                x: {
                    border:{
                        display:false
                    },
                    ticks: {
                        color: textColorSecondary,
                        font: {
                            weight: 500
                        }
                    },
                    grid: {
                        display: false,
                        drawBorder: false
                    }
                },
                y: {
                    border:{
                        display:false
                    },
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                    }
                },
                minBarThickness: 2

            }
        };

        setChartData(data);
        setBarChartData(barCharData);
        setChartOptions(options);
        setBarChartOptions(barChartOptions);
    }, []);

return(
    <div>
        <Grid container spacing={2}>
            <Grid item size={{xs:8}}>
                <Typography variant="h6" fontWeight={600} color="#5E5E5E" sx={{ marginTop: 2, marginLeft: 2 }}>
              Trend Analysis
                </Typography>
            </Grid>
            <Grid item size={{xs:4}} sx={{ display: 'flex', justifyContent: 'flex-end',paddingRight:10 }}>
                <a href={"#"} style={{ color: '#286F67' }}>View</a>
            </Grid>
        </Grid>
        
        <Grid container display={"flex"} flexDirection={{xs:"column",md:"row"}} spacing={7} style={{marginTop:10}}>
            <Grid item size={{md:6}} width={{xs:350,md:650}}  marginLeft={{xs:4, md:6}} key="line-chart" >
                <Typography variant="h7" fontWeight={550} color="#5E5E5E" marginLeft={{md:27, xs:10}} sx={{ marginTop: 2}}>
              College Performance Metrics
                </Typography>
                <Card sx={{borderRadius:5,marginTop:2}}>
                <Chart style={{marginBottom:-20, marginTop:-20}} type="line" data={chartData} options={chartOptions} />
               </Card>
        </Grid>
        <Grid item size={{md:6}} width={{xs:350,md:650}} marginLeft={{xs:4}} key="bar-chart" >
            <Typography variant="h7" fontWeight={550} marginLeft={{md:32, xs:12}} color="#5E5E5E" sx={{ marginTop: 2}}>
              Attendance Overview
                </Typography>
            <Card sx={{borderRadius:5,marginTop:2}}>
                <Chart style={{marginBottom:-20, marginTop:-20}} type="bar" data={barChartData} options={barChartOptions} />
            </Card>
        </Grid>
        </Grid>
    </div>
)

}