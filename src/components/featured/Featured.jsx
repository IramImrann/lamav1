import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import "react-circular-progressbar/dist/styles.css";
import './featured.scss'

const Featured = () => {
  return (
    <div className="featured">
        <div className="top">
            <h1 className="title">Total Revenue</h1>
            <MoreVertIcon fontSize="small" />

        </div>{/**End of top section */}
        <div className="bottom">
            <div className="featuredChart">
               <CircularProgressbar value={70} text="70%" strokeWidth={5}/>

            </div>
            <p className="title">Total Sales Made Today</p>
            <p className="amount">$420</p>
            <p className="desc">Previous transection Processing. Last payment may not include</p>
            <div className="summary">
                <div className="item">
                    <div className="itemTitle">Target</div>
                    <div className="itemResult negative">
                        <div className="result">
                            <KeyboardArrowDownIcon fontSize="small"/>
                            <div className="resultAmount">$12K</div>
                        </div>{/**End of result */}
                    </div>{/**End of item Results */}
                </div>{/**End of item */}
                <div className="item">
                    <div className="itemTitle">Last Week</div>
                    <div className="itemResult positive" >
                        <div className="result">
                            <KeyboardArrowUpIcon fontSize="small"/>
                            <div className="resultAmount">$12K</div>
                        </div>{/**End of result */}
                    </div>{/**End of item Results */}
                </div>{/**End of item */}
                <div className="item">
                    <div className="itemTitle">Last Month</div>
                    <div className="itemResult positive">
                        <div className="result">
                            <KeyboardArrowUpIcon fontSize="small"/>
                            <div className="resultAmount">$12K</div>
                        </div>{/**End of result */}
                    </div>{/**End of item Results */}
                </div>{/**End of item */}

            </div>{/**End of Summary */}


        </div>{/**End of bottom section */}

    </div>//End of featured section
  )
}

export default Featured