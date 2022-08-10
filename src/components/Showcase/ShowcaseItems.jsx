export function Showcaseitems(props) {
    return (
        <div className="showcase-item">
            <div className="showcase-image">
                <img src={props.product.imageUrl} alt="" />
            </div>
        </div>
    )
}