import './Welcome.css';

export function Welcome ({titulo}) {
    return(
        < >
            <div style={{ fontSize: '3rem', textAlign: 'center'}}>
            <p className="titleContainer"> {titulo}</p>
            </div>
        </>
    )
}

