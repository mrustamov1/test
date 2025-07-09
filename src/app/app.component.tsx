import { AppRoutes } from "./routes/app.routes"
import { LanguageProvider } from "../context/language.context"
import { Layout } from "../ui-component/layout/layout.component"
import { ResizeProvider } from "../context/dimension.context"
import { LiveChat } from "../components/live-chat/live-chat.component"
import { SkeletonProvider } from "../context/skeleton.context"
export function App() {
  return (
    <ResizeProvider>
      <LanguageProvider>
        <SkeletonProvider>
          <Layout>
            <AppRoutes />
            <LiveChat />
          </Layout>
        </SkeletonProvider>
      </LanguageProvider>
    </ResizeProvider>
  )
}
