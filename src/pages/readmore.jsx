import Head from "next/head";
import styles from "src/styles/Home.module.css";
import { Header } from "src/components/Header";
import { useCallback, useEffect, useState } from "react";

const Home = () => {
  const [posts, setPosts] = useState([]); //表示するデータ
  const [hasMore, setHasMore] = useState(true); //再読み込み判定
  const [page, setPage] = useState(1);

  const loadMore = useCallback(async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${page}`
    );
    const data = await res.json();

    if (res.status === 404) {
      setHasMore(false);
      return;
    }

    //取得データをリストに追加
    setPosts([...posts, data]);
    setPage((page) => page + 1);
  }, [page, posts]);

  useEffect(() => {
    loadMore();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //ロード中に表示する項目
  const loader = (
    <div className="loader" key={0}>
      Loading ...
    </div>
  );

  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      {posts?.map((item) => {
        return <li key={item.id}>{item.title}</li>;
      })}
      <button onClick={loadMore}>もっとみる</button>
    </div>
  );
};

export default Home;
