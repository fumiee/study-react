export const api = (req, res) => {
  const page = req.query.page; //クエリパラメータの取得
  let result = [];
  if (page < 100) {
    result = [...Array(1).keys()].map((i) => i + page * 1);
  }

  //処理成功
  res.statusCode = 200;
  res.json(result);
};
