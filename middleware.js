import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";


export const middleware = async(req) =>{

  const token = await getToken({req})
  // console.log("MIddleware token",token)
 
    const isTokenOK = Boolean(token) 
    const isAdminUser = token?.role == 'admin'
    const isAdminSpecificRoute = req.nextUrl.pathname.startsWith('/products/add')
    
     if((isAdminSpecificRoute && !isAdminUser)){
      const callBackUrl = encodeURIComponent(req.nextUrl.pathname)
      return NextResponse.redirect(new URL(`/api/auth/signin?callbackUrl=${callBackUrl}`, req.url))  
    }
    return NextResponse.next();
}

// See "Matching Paths" below to learn more
// export const config = {
//   matcher: "/About/:path*",
// };