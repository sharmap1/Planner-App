import React from 'react';

export class Credits extends React.Component{
    
    render(){
        return(
            <div className="credits_container">
                <div className="credits_topbar">
                    <div className="setting-title cell">
                        <span>C R E D I T S</span>
                    </div>
                </div>
                <br/>
                <div className="maker_info">
                    <div className="maker_info_titl">
                        <h1> T H I S &nbsp; I S &nbsp; M A D E &nbsp; B Y </h1>
                    </div>
                    <div className="maker_info_content">
                        <br/>
                        <h3>Prasamsha S.</h3>
                        <h4>Github - <a href="https://www.github.com/sharmap1">www.github.com/sharmap1</a></h4>
                        <br/>
                        <h3>Frederica B.</h3>
                        <h4>Github - <a href="https://www.github.com/redricasa">www.github.com/redricasa</a></h4>
                        <br/>
                        <h3>Devontae G.</h3>
                        <h4>Github - <a href="https://www.github.com/dtae53">www.github.com/dtae53</a></h4>
                        <br/>
                        <h3>Jeff C.</h3>
                        <h4>Github - <a href="https://www.github.com/zuprocj">www.github.com/zuprocj</a></h4>
                        <br/>
                    </div>
                </div>
            

            </div>
        )
    }
}

export default Credits;
