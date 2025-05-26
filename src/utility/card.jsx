import * as React from "react";
import PropTypes from "prop-types";

const Card = ({imagePath, title, description, gitLink}) => {
  return (
    <div className={"flex flex-col gap-4 w-full p-4"}>
      <div className={"aspect-video w-full overflow-hidden"}>
        <img src={imagePath} alt="Me"/>
      </div>
      <p className={"text-[var(--bright-text)] text-4xl"}>{title}</p>
      <p className={"text-[var(--gray-text)]"}>{description}</p>
      <div className={"flex gap-4"}>
        <div className={"flex items-center gap-4 text-[15px] p-2 border-2 border-[var(--secondary-bg)] rounded-2xl hover:bg-[var(--secondary-bg)] hover:text-[var(--primary-bg)] hover:border-[var(--secondary-text)] hover:cursor-pointer" } onClick={() => window.open(gitLink, "_blank")}>
          <i className="fa-brands fa-github text-[var(--secondary-text)]"></i>
          <p className={"text-[var(--secondary-text)]"}>Github</p>
        </div>
      </div>
    </div>
  )
}

Card.propTypes = {
  imagePath: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  gitLink: PropTypes.string.isRequired,
}

export default Card;