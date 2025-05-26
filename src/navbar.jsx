import ContextBox from "./utility/context-box.jsx";
import PropTypes from "prop-types";

const Navbar = ({navTabs, selectedIndex, setActiveTabIndex}) => {
  return (
    <ContextBox>
      <div className={"flex w-full items-center justify-end gap-8 pr-8 text-[var(--bright-text)]"}>
        {navTabs.map(({name}, index) => (
          <p key={index} onClick={() => setActiveTabIndex(index)} className={`cursor-pointer ${selectedIndex === index ? "text-[var(--secondary-text)] border-b-2 border-[var(--secondary-text)]" : "text-[var(--bright-text)]"}`}>
            {name}
          </p>
        ))}
      </div>
    </ContextBox>
  )
}

Navbar.propTypes = {
  navTabs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string
    })).isRequired,
  setActiveTabIndex: PropTypes.func.isRequired,
  selectedIndex: PropTypes.number.isRequired,
}

export default Navbar;