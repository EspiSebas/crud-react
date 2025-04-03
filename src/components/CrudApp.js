import React,{useState} from 'react'
import { CrudForm } from './CrudForm'
import { CrudTable } from './CrudTable'

export const CrudApp = (props) => {
  const [informacion, setInformacion] = useState(""); 
  const infoSend = (data) => {
    setInformacion(data); 
  };

  return (
    <div>
        <div>
        <CrudTable infoSend={infoSend} url={props.url} namePage={props.namePage} />
        </div><br></br>
        <CrudForm data={informacion} url={props.url} namePage={props.namePage}/>
      
    </div>
  )
}
