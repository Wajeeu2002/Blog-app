import './globals.css'
//components
import Nav from './component/Nav'
export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}
export default function RootLayout({ children }) {
  return (
  <html lang="en">
   <body >
       <Nav />
        {children}
    </body>
  </html>
  )
}
