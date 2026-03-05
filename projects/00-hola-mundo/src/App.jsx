import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
    const formatUName = (userName) => `@${userName}`
    return (
        <section className='App'>
            <TwitterFollowCard formatUserName={formatUName} userName={"AbyLeyvaMX"} name="AbyLeyva" isFollowing />
            <TwitterFollowCard formatUserName={formatUName} userName={"alex"} name="Alex" isFollowing={false} />
            <TwitterFollowCard formatUserName={formatUName} userName={"adaly"} name="Adaly" isFollowing={false} />
            <TwitterFollowCard formatUserName={formatUName} userName={"ale"} name="Ale" isFollowing />
        </section>
    )
}