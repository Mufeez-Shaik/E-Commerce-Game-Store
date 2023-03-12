import '../App.css';

function Header(props) {
    return (
        <div className='flex header-card'>
            <div onClick={() => props.handleShow(false)} >GAMING SITE</div>
            <div onClick={() => props.handleShow(true)}> CART
                <sup> {props.count} </sup>
            </div>
        </div>
    );
}

export default Header;
