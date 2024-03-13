import { css, html } from 'react-strict-dom';




const styles = css.create({
    root: {
        fontSize: 14,
        color: 'rgb(60,60,60)'
    }
});

function App() {
    return (
        <html.main>
            <html.h1>Hello OpenSource World! - Scott Beeker</html.h1>
            <html.div />
        </html.main>
    )
}
