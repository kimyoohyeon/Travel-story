import Head from "next/head";
import { useRouter } from "next/router";

const PostPage = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Travel Story</title>
      </Head>
      <div>Login</div>
    </>
  );
};

export default PostPage;
