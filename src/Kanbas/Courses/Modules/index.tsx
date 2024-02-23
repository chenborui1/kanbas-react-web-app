import ModuleList from "./List";
function Modules() {
  return (
    
    <div>
         <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
        <div >
          <button className="btn btn-secondary m-1">Collapse All</button>
          <button className="btn btn-secondary m-1">View Progress</button>
          <div className="btn-group">
            <button className="btn btn-secondary ">Publish All</button>
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
        </div>
     
        
        
      </div> <hr/>
      <ModuleList />
    </div>
  );
}
export default Modules;