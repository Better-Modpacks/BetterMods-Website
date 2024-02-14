import './HeroSection.scss';

export default function HeroSection() {
  function LargeText({ children }) {
    return (
      <h2>{children}</h2>
    )
  }
  function Text({ children }) {
    return (
      <p>{children}</p>
    )
  }

  return (
    <section id='hero'>
        <div className="content">
            <LargeText>Hello, check <span>our</span> best minecraft modpacks to <span>enhance</span> your gameplay</LargeText>
            <Text>Are you a fan of Minecraft? Do you want to explore the latest features and content? We create free modpacks for the newest versions of Minecraft, so you can enhance your gameplay and experience the game in a whole new way. Check out our collection and start your adventure today!</Text>
            <a href="/modpacks" aria-label='modpacks'>Check modpacks</a>
        </div>
    </section>
  )
}
