import GoogleProvider from 'next-auth/providers/google';

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization: { // doesn't automatic select the last google account to login
                params: {
                    prompt: 'consent',
                    access_type: 'offline',
                    response_type: 'code'
                }
            }
        })
    ],
    callback: {
        // Invoked on successful sign in
        async signIn({ profile }) {
            // 1. Connect to the database
            // 2. Checke if user exists
            // 3. if not, create user
            // 4. Return true to allow sign in
        },
        // Session callback function that modifies the session object
        async session({ session }) {
            // 1. Get user from database
            // 2. Assign user id from the session
            // 3. Return session
        }
    }
}