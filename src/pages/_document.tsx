import {
  createDOMRenderer,
  renderToStyleElements,
} from "@fluentui/react-components"
import { AppProps } from "next/dist/shared/lib/router/router"
import { AppType } from "next/dist/shared/lib/utils"
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document"

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const renderer = createDOMRenderer()
    const originalRenderPage = ctx.renderPage

    ctx.renderPage = () =>
      originalRenderPage({
        //@ts-ignore
        enhanceApp: (App: AppType) => {
          // eslint-disable-next-line react/display-name
          const RenderInjector = (props: AppProps) => {
            //@ts-ignore
            return <App {...props} renderer={renderer} />
          }

          return RenderInjector
        },
      })

    const initialProps = await Document.getInitialProps(ctx)
    const styles = renderToStyleElements(renderer)

    return {
      ...initialProps,
      //@ts-ignore
      styles: [...initialProps.styles, ...styles],
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
