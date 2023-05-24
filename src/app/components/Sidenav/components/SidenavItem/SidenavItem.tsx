import "./SidenavItem.scss"

export interface ISidenavItemProps {
    itemlabel: string,
}

const SidenavItem: React.FC<ISidenavItemProps> = (props: ISidenavItemProps) => {
    return (
        <div className="sideitem_aria">
            <p>{props.itemlabel}</p>
        </div>
    )
}

export default SidenavItem