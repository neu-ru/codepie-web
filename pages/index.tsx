import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const Home = () => {
  const router = useRouter();
  const { data: session } = useSession();
  return (
    <div>
      <div style={{ whiteSpace: 'pre' }}>
        {JSON.stringify(session, null, 2)}
      </div>
      <div>
        <button onClick={() => router.push('/login')}>로그인</button>
      </div>
      <div>
        <button onClick={() => signOut()}>로그아웃</button>
      </div>
      <div>
        <button onClick={() => router.push('/feedDetail')}>피드상세</button>
      </div>
    </div>
  );
};

export default Home;
