'use client'
import { ThemeProvider } from "./theme-provider"
import { Toaster } from "@/components/ui/toaster"

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <head />
//       <body>
//         <main>{children}</main>
//         <Toaster />
//       </body>
//     </html>
//   )
// }


function Providers({children}:{children:React.ReactNode}) {
  return (
    <>
    <Toaster />
     <ThemeProvider attribute="class"
          defaultTheme="system" 
          enableSystem 
          disableTransitionOnChange
        >
         {children}
      </ThemeProvider>
    </>
  )
}

export default Providers