import React,{useEffect} from 'react';
import mermaid from 'mermaid';


function Diagram(props) {
    useEffect(()=>{
        var ouput = document.getElementById('output');
        //mermaid.initialize({sequence: { showSequenceNumbers: true },startOnLoad:true});
        mermaid.initialize({startOnLoad:true});
        var graphdef =`sequenceDiagram
        A->> B: Query
        B->> C: Forward query
        Note right of C: Thinking...
        C->> B: Response
        B->> A: Forward response`;
        var insertSvg = function(svgCode){
            ouput.innerHTML = svgCode;
        };
        mermaid.render('theGraph',graphdef,insertSvg);
    });
  
    return (
        <div>
            <div id="output"/>
            <textarea
                rows="4"
            />
        </div>
    );
  }
export default Diagram;
