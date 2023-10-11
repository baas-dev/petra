// import { authenticate } from "@/services/authService"

import jwt_decode from "jwt-decode"
import moment from "moment"
import NextAuth, { AuthOptions, Session, User } from "next-auth"
import { JWT } from "next-auth/jwt"
import CredentialsProvider from "next-auth/providers/credentials"

import BACKEND from "@/app/API"

interface AuthenticateResult {
  AccessToken: string
  RefreshToken: string
  User: {
    ID: string
    Role: string
    Name: string
    Email: string
  }
}

const api = new BACKEND()

const VerifyCode = async (email: string, code: string) => {
  let res = await api.CREATE({
    Route: "auth/login/verify",
    Body: JSON.stringify({ email, code }),
  })

  return res
}

async function Authenticate(
  email: string,
  code: string
): Promise<AuthenticateResult | null> {
  let res = await VerifyCode(email, code)
    .then((val) => {
      return val.data
    })
    .catch((err) => {
      return null
    })

  return res
}

const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        code: { label: "Code", type: "text" },
      },
      async authorize(credentials, req) {
        if (typeof credentials !== "undefined") {
          let res = await Authenticate(credentials.email, credentials.code)

          // this is working
          // need to set jwt through callbacks?
          let user: User = {
            id: res?.User.ID,
            name: res?.User.Name,
            email: res?.User.Email,
            role: res?.User.Role,
          }

          if (res?.AccessToken) {
            let decoded: any = jwt_decode(res.AccessToken)
            console.log(decoded.exp)
            return {
              ...user,
              token: res.AccessToken,
              refreshToken: res.RefreshToken,
              exp: decoded.exp,
            }
          }
          return user
        }
        return null
      },
    }),
  ],
  session: { strategy: "jwt" },
  callbacks: {
    jwt: async ({ token, user }: { token: JWT; user: User }) => {
      // console.log("all here", user)
      // // user is only available the first time a user signs in authorized

      if (user) {
        return {
          ...token,
          ...user,
        }
      }

      return token
    },
    session: async ({ session, token }: { session: Session; token }) => {
      if (token.token) {
        session.user = {
          id: token.id,
          role: token.role,
          name: token.name,
          email: token.email,
        }
        session.token = token.token
        session.accessTokenExpires = token.exp
        session.refreshToken = token.refreshToken
      }

      return session
    },
  },
}
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
