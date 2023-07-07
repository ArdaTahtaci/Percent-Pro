import React, { useState } from 'react'
import CanvasJSReact from '@canvasjs/react-charts'
import { Button } from 'react-bootstrap';
import Element from './Element';
import alertify from 'alertifyjs';


var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default function Chart() {

    const [showRes, setShowRes] = useState(false)
    const [elements, setElements] = useState([])
    const [dataPoints, setDataPoints] = useState([])
    const [chartTitle, setChartTitle] = useState("")

    const options = {
        exportEnabled: true,
        animationEnabled: true,
        title: {
            text: chartTitle
        },
        data: [{
            type: "pie",
            startAngle: 75,
            toolTipContent: "<b>{label}</b>: {y}%",
            showInLegend: "true",
            legendText: "{label}",
            indexLabelFontSize: 16,
            indexLabel: "{label} - {y}%",
            dataPoints: dataPoints
        }]
    }

    const add = (e) => {
        e.preventDefault()
        const newElement = {
            val: e.target[0].value,
            name: e.target[1].value
        }
        const arr = elements
        arr.push(newElement)
        setElements(arr)
        alertify.success("Eklendi")

    }

    const calculate = () => {
        const percentages = []
        const dataPointsOfAll = []

        let total = 0
        elements.forEach((el) => total = parseInt(el.val) + total)
        elements.forEach((el) => {
            let num = (el.val * 100) / total + ""
            num = num.substring(0, 5)
            percentages.push(num)
        })
        elements.forEach((el, index) => dataPointsOfAll.push({
            y: percentages[index],
            label: el.name
        }))
        setDataPoints(dataPointsOfAll)
        setShowRes(dataPointsOfAll)

    }
    const handleChange = (e) => {
        setChartTitle(e.target.value)
    }

    return (
        <div>
            <div className='d-flex'>
                <label className='ms-2'>--{">"}</label>
                <input onChange={(e) => handleChange(e)} style={{ marginLeft: "20px" }} placeholder='chart title' />

            </div>

            <Element add={add} />

            <Button className='btn-sm my-2' onClick={calculate}><span className='mx-2'>Hesapla</span></Button>

            <div className='my-4'>
                {showRes && <CanvasJSChart options={options} />}
            </div>

        </div>
    )
}
