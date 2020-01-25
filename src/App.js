import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Box from './components/Box';
import PageNum from './components/pagenum';
import Page from './components/page.js';
import {HashRouter, Route} from 'react-router-dom';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      pageNum: 1,
      page: [],
      currentPage: 0,
      data: [],
      ph: ''
    }
    this.getPageNum = this.getPageNum.bind(this);
  }

  pagen = 0;

  getPageNum = (num)=>{
    console.log('Inside pageNum', num);
    this.setState({pageNum:num, currentPage: num});
    this.pagen = num;
    console.log(this)
    console.log('getPageNum: this.state.pageNum =', this.state.pageNum);
   // console.log('this.props.view = ', this.props.view());
  }

  shouldComponentUpdate(nextProp, nextState){
      let pageData = this.getBoxData(4,20);
      this.route = <Route
      path={"/"+ String(nextState.currentPage)} 
      component={() => <Page data={pageData} num={nextState.currentPage}></Page>}
      />;
      return true;

  }

  getBoxData = ( boxesPerPage, numberOfBoxes) =>{
   // boxesPerPage = 4;
   // numberOfBoxes = 20;
    let data = [];

    for(let i=1; i<=numberOfBoxes; i++){
      data.push('Box' + String(i));
    }
    let currentPage = Number(window.location.href[window.location.href.length-1]);
    let startIndex = boxesPerPage * (currentPage-1) +1;
    let pageData = data.slice(startIndex-1, startIndex+ boxesPerPage -1);
    return pageData;
  }

  componentDidMount(){
    //Set the number of pages
    let numberOfPages = 4;
    let pages = [];
    for(let i = 1; i<=numberOfPages; i++ ){
         pages.push(i);
    }

    let currentPage = Number(window.location.href[window.location.href.length-1]);
 //   let pageData = this.getBoxData(6,20);
    this.setState({page: pages, currentPage: currentPage});
    console.log('pagen: ',this.pagen);
    //console.log('startIndex', startIndex);
    console.log('currentPage', currentPage);
  }

  render(){
    
  return (
    <HashRouter>
    <div className="App">
      {this.route}
          <div id="numrow">
        {this.state.page.map( num => {
          return <PageNum getPageNum={this.getPageNum} num={num}></PageNum>;
        })}
      </div>
    </div>
    </HashRouter>
  );
  }
}

export default App;
