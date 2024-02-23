import ModuleList from "../Modules/List";
import { FaFileImport, FaHome, FaBell, FaComment, FaClipboardList, FaBullhorn, FaChartBar, FaTasks } from "react-icons/fa";

function Home() {
  return (
    <div style={{ display: 'flex' }}>
      {/* Left Column */}
      <div style={{ flex: 3, paddingRight: '20px' }}>
        
        <div style={{ marginBottom: '10px' }}>
          <button className="btn btn-secondary m-1">Collapse All</button>
          <button className="btn btn-secondary m-1">View Progress</button>
          <div className="btn-group">
            <button className="btn btn-secondary">Publish All</button>
            <button className="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
              <span className="visually-hidden">Toggle Dropdown</span>
            </button>
            <ul className="dropdown-menu">
              {/* Dropdown menu items go here */}
              <li><a className="dropdown-item" href="#">Item 1</a></li>
              <li><a className="dropdown-item" href="#">Item 2</a></li>
              <li><a className="dropdown-item" href="#">Item 3</a></li>
            </ul>
          </div>
          <button className="btn btn-danger m-1">Module</button>
        </div> <hr/>
        <ModuleList />
      </div>

      {/* Right Column */}
      <div style={{ flex: 1 }}>
      <div style={{ right: 50 }}>
      <div>
          <div style={{ marginBottom: '10px' }}>
               {/* Vertically Aligned Buttons with fixed size */}
               <div className="d-flex flex-column gap-2" style={{ width: '200px' }}>
              <button className="btn btn-secondary d-flex align-items-center" style={{ width: '115%' }} title="Import Existing Content">
                <FaFileImport style={{ marginRight: '5px' }} /> Import Existing Content
              </button>
              <button className="btn btn-secondary d-flex align-items-center" style={{ width: '115%' }} title="Import from Commons">
                <FaFileImport style={{ marginRight: '5px' }} /> Import from Commons
              </button>
              <button className="btn btn-secondary d-flex align-items-center" style={{ width: '115%' }} title="Choose Home Page">
                <FaHome style={{ marginRight: '5px' }} /> Choose Home Page
              </button>
              <button className="btn btn-secondary d-flex align-items-center" style={{ width: '115%' }} title="View Course Stream">
                <FaBell style={{ marginRight: '5px' }} /> View Course Stream
              </button>
              <button className="btn btn-secondary d-flex align-items-center" style={{ width: '115%' }} title="New Announcement">
                <FaComment style={{ marginRight: '5px' }} /> New Announcement
              </button>
              <button className="btn btn-secondary d-flex align-items-center" style={{ width: '115%' }} title="New Analytics">
                <FaChartBar style={{ marginRight: '5px' }} /> New Analytics
              </button>
              <button className="btn btn-secondary d-flex align-items-center" style={{ width: '115%' }} title="View Course Notifications">
                <FaBell style={{ marginRight: '5px' }} /> View Course Notifications
              </button>
            </div> </div>
          <h2>To Do</h2>
          <hr />
          <div>
            <input type="checkbox" /> Import content for Module 1
          </div>
          <div>
            <input type="checkbox" /> Review and approve new announcements
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
