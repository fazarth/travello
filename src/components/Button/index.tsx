import cn from "classnames"
import style from "./Button.module.css"

type Props = {  
  children: string
  classaName?: string
  fullwidth?: boolean
  outlined?: boolean
}

const Button = ({ children, classaName = '', fullwidth, outlined } : Props) => {
  return (
      <button className={cn(style.button, classaName, {
        [style.fullwidth]: fullwidth,
        [style.outlined]: outlined
      })}>
          {children}
      </button>
  )
}

export default Button