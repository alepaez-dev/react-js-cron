import * as React from "react";
import Cron, { CronError } from "react-js-cron";
import "./index.css";
import "antd/dist/antd.css";
import { InfoCircleOutlined } from '@ant-design/icons'
import { Divider, Input } from "antd";
import {
  FRENCH_LOCALE,
} from './constants'

export default function App() {
const defaultValue = '* * * * *'
  const [value, setValue] = React.useState(defaultValue)

  const [firstOption, setFirstOption] = React.useState(defaultValue)
  const [secondOption, setSecondOption] = React.useState(null)
  const [thirdOption, setThirdOption] = React.useState(null)
  const [error, onError] = React.useState()


  const options = React.useMemo( () => {
    return {
      firstOption,
      secondOption,
      thirdOption
    }
  }, [firstOption, secondOption, thirdOption])
  
  

  return (
    <div className="App">
      <h1>cron validor Ale Paez</h1>

      <div>
      <p>Default value: {defaultValue}</p>
      <p>Value: {value}</p>
      <p>Error: {error ? error.description : 'undefined'}</p>

      <Cron value={firstOption} setValue={setFirstOption} className='my-project-cron' clearButton={false} onError={onError}/>
      <Cron value={secondOption} setValue={setSecondOption} className='my-project-cron' clearButton={false} onError={onError}/>
      <Cron value={thirdOption} setValue={setThirdOption} className='my-project-cron' clearButton={false} onError={onError}/>
      <button onClick={() => console.log("options", options)}>Hola</button>

      <div>
        <InfoCircleOutlined style={{ marginRight: 5 }} />
        <span style={{ fontSize: 12 }}>
          The first value will always be used as default value 
        </span>
      </div>
    </div>
    </div>
  );
}