import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Box from './components/Box';
import PageNum from './components/pagenum';
import Page from './components/page.js';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      pageNum: 1,
      page: [],
      currentPage: 0,
      data: []
    }
    this.getPageNum = this.getPageNum.bind(this);
  }

  pagen = 0;

  getPageNum = (num)=>{
    console.log('Inside pageNum', num);
    this.setState({pageNum:num});
    this.pagen = num;
    console.log(this)
    console.log('getPageNum: this.state.pageNum =', this.state.pageNum);
    console.log('this.props.view = ', this.props.view());
  }

  componentDidMount(){
    let data = ['Box1', 'Box2', 'Box3', 'Box4','Box5', 'Box6', 'Box7', 'Box8', 'Box9', 'Box10', 'Box11', 'Box12', 'Box13'];

    let pageData = [];
    let currentPage = Number(window.location.href[window.location.href.length-1]);
    let startIndex = 4* (currentPage-1) +1;
    pageData = data.slice(startIndex-1, startIndex+3);
    let page = [1,2,3,4];
    this.setState({page: page, data: pageData, currentPage: currentPage});
    console.log('pagen: ',this.pagen);
    console.log('startIndex', startIndex);
    console.log('currentPage', currentPage);
  }

  render(){
    
  return (
    <div className="App">
      <Page data={this.state.data} num={this.state.currentPage}></Page>
      <div id="numrow">
        {this.state.page.map( num => {
          return <PageNum getPageNum={this.getPageNum} num={num}></PageNum>;
        })}
      </div>

    </div>
  );
  }
}

export default App;
