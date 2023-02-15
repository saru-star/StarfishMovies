import React from "react";
import "./Content.css";
import RowData from '../../constants/URLs'
import Row from '../row/Row'

function Content() {

  return <div className="content_wrapper">{
    RowData.map((el)=>{
        return <Row title={el.title} url={el.url}/>
    }
    )
  }</div>;
}
export default Content;

