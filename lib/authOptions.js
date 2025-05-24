import dbConnect, { collectionName } from "@/lib/dbConnect";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { username, password } = credentials;
        // const user = { id: "1", name: "jsmith", email: "jsmit@gmail.com" };
        const user = await dbConnect("authuser").findOne({ username });
        const isPasswordOk = password == user.password;
        if (isPasswordOk) {
          return user;
        }
        return null;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (account) {
        try {
          //console.log("FROM SIGNIN CALLBACK ", {user, profile,account, email, credentials})
          const { providerAccountId, provider } = account;
          const { email: usr_mail, image, name } = user;
          const payload = {
            role:'user',
            providerAccountId,
            provider,
            usr_mail,
            image,
            name,
          };
          const userCollection = dbConnect(collectionName.AUTH_USER)
          const isUserExist = await userCollection.findOne({providerAccountId})
          
          if(!isUserExist){
            await userCollection.insertOne(payload)
          }

        } catch (error) {
          console.log(error)
          return false
        }
      }

      return true;
    },
    async session({ session, token, user }) {
      if (token) {
        session.username = token.username;
        session.role = token.role;
      }
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if (user) {
        token.username = user.username;
        token.role = user.role;
      }
      return token;
    },
  },
};
