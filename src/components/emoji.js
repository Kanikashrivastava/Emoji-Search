import React, { Component } from 'react';
import data from '../components/emojiList.json';
import './emoji.css';
import smileEyes from './img/smiling-eyes-icon.png';
import openMouth from './img/open-mouth-icon.png';




class EmojiList extends Component {
    constructor() {
        super();
        this.state={
            search:""
        }
    }


    searchInput = (event) => {
        this.setState({search: event.target.value})
        console.log(event.target.value);
    }

  render() {
      const {search} = this.state;
      let filterlist = data.slice(0,20).filter(
        (emojiDetail)=>{
            return emojiDetail.title.toLowerCase().indexOf(search.toLowerCase()) !==-1 || emojiDetail.keywords.toLowerCase().indexOf(search.toLowerCase()) !==-1
        }
      );
    return (
      <div>
          <div className="input_box_div">
            <div>
                <p>
                    <img src={smileEyes} alt="Smiling eyes cat"/>
                    Emoji Search
                    <img src={openMouth} alt="Smiling eyes cat"/>
                </p>
            </div>
            <input type="text" placeholder="search here..." 
            value={this.state.search}
            onChange = {this.searchInput}
            className="input_box"/>
          </div>
        <ul>
        {filterlist.map((emojiDetail, index)=>{
            return <div key={index}>
                      <div  className="emoji_row">
                      <hr/>
                      <li>
                        <span className="symbol">{emojiDetail.symbol}</span>
                        <span>{emojiDetail.title}</span>
                      </li>
                      </div>
                      
                   </div>
        })}
        </ul>
       </div>
    );
  }
}

export default EmojiList;
