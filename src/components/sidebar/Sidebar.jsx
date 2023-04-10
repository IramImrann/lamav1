import React from 'react'
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined'; 
import DirectionsCarOutlinedIcon from '@mui/icons-material/DirectionsCarOutlined';
import './sidebar.scss'
const Sidebar = () => {
  return (
    <div className='sidebar'>
        {/** Top sidebar content*/}
        <div className="top">
            <span className="logo">Usama Amazing Motors</span>
            
        </div>{/**End of the top sidebar */}
        <hr/>
        <div className="center">
            <ul>
              <p className="title">MAIN</p>
                <li><DashboardCustomizeOutlinedIcon className='icon'/>
                <span className="dashboard">Dashboard</span>
                </li>
                <p className="title">CAPITAL</p>
                <li><CurrencyExchangeOutlinedIcon className='icon'/>
                <span className="dashboard">Cash Flow</span>
                </li>
                <p className="title">INVENTORY</p>
                <li>
              
                  <DirectionsCarOutlinedIcon className='icon'/><span className="dashboard">Inventory</span>
                  </li>
                
            </ul>
        </div>{/**End of center sidebar content */}
       {/** <div className="bottom">Color Options</div>*/} 
    </div>
  )
}

export default Sidebar