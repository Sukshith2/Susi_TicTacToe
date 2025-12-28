export function GameOver({winner, GameRematch}) {
    return (
        <div id="game-over">
            <h2>Game Over</h2>
            {winner && <p> {winner} You won the Match!...</p>}
            {!winner && <p> Game is draw</p>}
            <button onClick={GameRematch}>Rematch</button>
        </div>
    )
}