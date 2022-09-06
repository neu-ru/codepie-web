import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';

interface Props {}
const FeedDetail: NextPage<Props> = () => {
  const router = useRouter();
  const { fid } = router.query;

  return <p>Post: {fid}</p>;
};

export default FeedDetail;

export const getServerSideProps: GetServerSideProps<Props, { fid: string }> =
  async (context) => {
    const fid = context.params?.fid;
    // ...
    return { props: {} };
  };
