import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <main className="layout layout__auth">
      <Outlet />
    </main>
  )
}
