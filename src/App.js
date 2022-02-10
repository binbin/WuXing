import {useRef,useState} from 'react';

import "./App.css";

import sizhudefeng from "./sizhudefeng";

function App() {

  // console.log(sizhudefeng);
  const [df, setDf] = useState([]);
  const textElement = useRef();
  const handleBtn=()=>{
    const text=textElement.current.value
    const temp_line = text.split("\n"),
      data = [];
    temp_line.forEach((item)=>{
      const line_text=item.replace(/\s+/g,'')
      const n =line_text.split("")
      data.push({
        gzYear: n[0] + n[1],
        gzMonth: n[2] + n[3],
        gzDay: n[4] + n[5],
        gzTime: n[6] + n[7],
      });
    })
    setDf(data.map((item) => sizhudefeng(item)));

  }

  
  return (
    <div className="container">
      <h1>计算喜用神</h1>
      <div className="operater">
        <span className="label label-info">
          请在每一行中输入"天干地支数据",如：壬寅 壬寅 甲午 甲戌
        </span>
        <textarea
          ref={textElement}
          style={{ width: "100%", minHeight: "200px" }}
        ></textarea>
        <button
          className="btn btn-primary btn-group-lg pull-right"
          size="default"
          type="button"
          style={{ cursor: "pointer" }}
          onClick={handleBtn}
        >
          计算
        </button>
      </div>
      {df.length>0 ? (
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th>金</th>
              <th>木</th>
              <th>水</th>
              <th>火</th>
              <th>土</th>
            </tr>
            {df.map((item) => {
              return (
                <tr>
                  <td>{item["金"].toFixed(2)}</td>
                  <td>{item["木"].toFixed(2)}</td>
                  <td>{item["水"].toFixed(2)}</td>
                  <td>{item["火"].toFixed(2)}</td>
                  <td>{item["土"].toFixed(2)}</td>
                </tr>
              );
            })}
          </thead>
          <tbody></tbody>
        </table>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
