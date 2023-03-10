import {signIn, signOut, useSession} from "next-auth/react";

export const Header = () => {
    const { data: sessionData } = useSession();

    return (
      <div aria-label="header">
        <div>{sessionData?.user?.name ? `${sessionData.user.name}, here are your notes` : ''}</div>
        <div aria-label="logout">{sessionData?.user ? (
          <button onClick={() => void signOut()}>
            <img
              src={sessionData?.user?.image ?? ''}
              alt={sessionData?.user?.name ?? ''}
            />
            Sign Out
          </button>
        ) : (
          <button onClick={() => void signIn()}>
            Sign In
          </button>
        )}</div>
      </div>
    )
}
