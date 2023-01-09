import CodeBlock from '@/components/CodeBlock';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React from 'react';

const Home = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [highlights, setHighlights] = React.useState<number[]>([]);

  return (
    <div>
      <CodeBlock
        reviewLines={[1, 2]}
        highlightLines={highlights}
        code={mock2}
        onChangeHighlights={(selects) => {
          setHighlights(selects);
        }}
      />
    </div>
  );

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
    </div>
  );
};

export default Home;

const mock =
  'function a() {\n  return 1;\n}\nfunction a() {\n  return 1;\n}\nfunction a() {\n  return 1;\n}\nfunction a() {\n  return 1;\n}';

const mock2 = `function a() {
  return 1;
}

function a() {
  return 1;
}

function a() {
  return 1;
}`;
