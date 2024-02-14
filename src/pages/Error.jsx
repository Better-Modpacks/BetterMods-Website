export default function Error() {
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
        <section id="error">
            <div className="content">
                <LargeText>Page not found, <span>404</span> </LargeText>
                <Text>The page you are looking for could not be found, please try again later</Text>
                <a href="/" aria-label='modpacks'>Go home</a>
            </div>
        </section>
    )
}
