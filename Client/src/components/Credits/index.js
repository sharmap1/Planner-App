import React from 'react';

export class Credits extends React.Component{
    constructor(props) {
        super(props);
            this.state = {
                'term': ''
            }
        this.handleCreditClose = this.handleCreditClose.bin(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleCreditClose(e){
        this.props.hideCreditFunction('False')
    }
    handleChange(e){
        this.setState({
            'term': e.target.value
        })
    } 

    render(){
        return(
            <div className="credits_container">
                <div className="credits_topbar">
                    <div className="mainsettings cell" onClick={this.handleClickOnSetting}>
                        <img src={require()} alt="Credits"/>
                    </div>
                    <div className="setting-title cell">
                        <span>C R E D I T S</span>
                    </div>
                    <div className="topbar">
                        <button onClick={this.handleSettingClose} className="btn btn-success btn-ghost">X</button>
                    </div>
                </div>
                <br/>
                <div className="maker_info">
                    <div className="maker_info_titl">
                        <h1> T H I S &nbsp; I S &nbsp; M A D E &nbsp; B Y </h1>
                    </div>
                    <div className="maker_info_content">
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
