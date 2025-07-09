import { Fragment } from "react/jsx-runtime"
import type { LayoutType } from "../../types/layout.type"
import { Header } from "../../components/header/header.component"
import { Foooter } from "../../components/footer/footer.component"

export function Layout({ children }: LayoutType) {
  // ---------------------------------------------------------------------------
  return (
    <Fragment>
      <Header />
      <main>{children}</main>
      <Foooter />
    </Fragment>
  )
}
