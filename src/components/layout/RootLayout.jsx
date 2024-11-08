import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <main className="layout layout__root">
      <Outlet />
    </main>
  )
}
