import ModuleList from "./ModuleList";
import { AiOutlinePlus } from "react-icons/ai";
import { FaEllipsisVertical } from "react-icons/fa6";
function Modules() {
  return (
    <div className="my-2 mx-2">
      <div
        className="my-2 px-2"
        style={{
          textAlign: "end",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <button className="btn btn-secondary">Collapse All</button>
        <button className="btn btn-secondary">View Progress</button>
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i
              className="fa-regular fa-circle-check"
              style={{ color: "green" }}
            ></i>{" "}
            Publish All
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Publish All
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Publish all items and modules
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                UnPublish
              </a>
            </li>
          </ul>
        </div>
        <button className="btn btn-danger">
          {" "}
          <AiOutlinePlus /> Module
        </button>
        <button className="btn btn-secondary">
          {" "}
          <FaEllipsisVertical />{" "}
        </button>
      </div>
      <ModuleList />
    </div>
  );
}
export default Modules;
