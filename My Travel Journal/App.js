import React from "react"
import Card from "./components/Card"
import Header from "./components/Header"
import data from "./data"

export default function App() {
    const cards = data.map(item => {
        return(
            <Card
                {...item}
            />
        )
    })
    return (
        <div>
        {cards}
        <Header/>
        </div>
    )
}