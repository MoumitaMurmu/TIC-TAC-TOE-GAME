import { FaTimes, FaRegCircle, FaPenAlt } from "react-icons/fa";

const Icon = ({user_icon}) =>{
      switch(user_icon){
        case "circle": 
              return <FaRegCircle className="icon" />
        case "cross":
                return <FaTimes  className="icon"/>
        default: 
                return <FaPenAlt  className="icon"/>
      }
}


export default Icon;