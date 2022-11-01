import React, { useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import { addNewLeg, getAllLegs } from './services/leg/leg.service'
import {
  EntryType,
  ExpiryType,
  LegTgSLType,
  LegType,
  MomentumType,
  PositionType,
  ReentryType,
  StrikeType,
  TrailStopLossType,
} from './services/leg/leg.interface'

function App() {
  useEffect(() => {
    getAllLegs()
      .then((legs) => console.log(legs))
      .catch((error) => console.log({ method: 'POST', error }))
  }, [])

  const handleAddLeg = () => {
    addNewLeg({
      EntryType: EntryType.EntryByPremium,
      ExpiryKind: ExpiryType.Monthly,
      InstrumentKind: LegType.CE,
      LegMomentum: {
        Type: MomentumType.PointsDown,
        Value: 10,
      },
      LegReentrySL: {
        Type: ReentryType.ASAP,
        Value: 40,
      },
      LegReentryTP: {
        Type: ReentryType.ASAPReverse,
        Value: 1,
      },
      LegTarget: {
        Type: LegTgSLType.Percentage,
        Value: 10,
      },
      LegTrailSL: {
        Type: TrailStopLossType.None,
        Value: {
          intrumentMove: 2,
          stopLossMove: 5,
        },
      },
      LogStopLoss: {
        Type: LegTgSLType.Points,
        Value: 15,
      },
      Lots: 1,
      PositionType: PositionType.Buy,
      StrikeParameter: StrikeType.ATM,
    })
      .then((id) =>
        alert(`New Leg with document id ${id} has been added successfully`)
      )
      .catch((error) => console.log({ method: 'GET', error }))
  }
  return (
    <div className='App'>
      <header className='App-header'>
        <button
          onClick={handleAddLeg}
          style={{
            border: '1px solid #FFFF',
            backgroundColor: 'transparent',
            color: 'white',
            // margin: '25px',
          }}
        >
          ADD NEW LEG
        </button>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
