import React from 'react';
import './app-tabs.css';

const AppTabs = () => {
  return(
    <div className="tabs">
      <div className="tabs__items">
      <button className="tabs__item">Profile</button>
      <button className="tabs__item">Account</button>
      <button className="tabs__item">Price Plans</button>
      </div>
    </div>
  )
}

export default AppTabs;
// const Tabs = [
//     { name: "Profile", zip: "1"},
//     { name: "Account", zip: "2" },
//     { name: "Price Plans", zip: "3" }
//   ];
  
//   class AppProfileContent extends Component {
//     render() {
//       return (
//           <div>
//               {this.props.zip}
//           </div>
//         );
//     }
//   }

//   class AppTabs extends Component {
//     constructor() {
//       super();
//       this.state = {
//         activeTab: 0
//       };
//     }
//     render() {
//       const activeTab = this.state.activeTab;
//       return (
//         <div className="container__tabs">
//           {Tabs.map((tab, index) => (
//               <label className="tabs__item"key={index}
//               onClick={() => {
//                 this.setState({ activeTab: index });
//               }}>{tab.name}</label>
//           ))}
//           <AppProfileContent key={activeTab} zip={Tabs[activeTab].zip} />
//         </div>
//       );
//     }
//   }
// export default AppTabs;



// const TabsContent = ({ title, content }) => (
//     <div className="tabcontent">
//       <h3>{title}</h3>
//       <p>{content}</p> 
//     </div>
//   );
  
//   function Tabs({ items }) {
//     const [ active, setActive ] = React.useState(null);
  
//     const openTab = e => setActive(+e.target.dataset.index);
  
//     return (
//       <div>
//         <div className="tab">
//           {items.map((n, i) => (
//             <button
//               className={`tablinks ${i === active ? 'active' : ''}`}
//               onClick={openTab}
//               data-index={i}
//             >{n.title}</button>
//           ))}
//         </div>
//         {items[active] && <TabsContent{...items[active]} />}
//       </div>
//     );
//   }
  
//   const items = [
//     { title: 'London', content: 'London is the capital city of England.' },
//     { title: 'Paris', content: 'Paris is the capital of France.' },
//     { title: 'Tokyo', content: 'Tokyo is the capital of Japan.' },
//   ];
  


