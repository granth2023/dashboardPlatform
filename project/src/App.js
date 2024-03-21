// import logo from './logo.svg';
import './App.css';
import Accordion from './components/accordion';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';
import ImageSlider from './components/imageSlider';
import LoadMoreData from './components/loadMoreButton';
import TreeView from './components/tree-view';
import menus from '../src/components/tree-view/data.js';
import ScrollIndicator from './components/scroll-indicator';
import TabTest from './components/tabs/tab-test';
import ModalTest from './components/custom-modal/modal-test';

function App() {
  return (
    <div className="App">
     {/* <Accordion/> 
     <RandomColor/>
     <StarRating noOfStars={10}/>
    <ImageSlider url={'https://picsum.photos/v2/list'} p
    age= {"1"} 
    limit={"10"}/>
 
    <LoadMoreData/> */}
{/* 
    <TreeView menus={menus}/> */}
    {/* <ScrollIndicator  url = {'https://dummyjson.com/products?limit=100'}/> */}
    {/* <TabTest/> */}
    <ModalTest/>
    </div>
  );
}

export default App;
