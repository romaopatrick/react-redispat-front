import { MouseEventHandler } from "react"
import "./SidenavItem.scss"

export interface ISidenavItemProps {
    itemlabel: string,
    selected?: boolean
    onClick?: MouseEventHandler
}

const SidenavItem: React.FC<ISidenavItemProps> = (props: ISidenavItemProps) => {
    return (
        <div onClick={props.onClick} className={"sideitem_area " + (props.selected ? "selected" : "")}>
            <p>{props.itemlabel}</p>
        </div>
    )
}

export default SidenavItem