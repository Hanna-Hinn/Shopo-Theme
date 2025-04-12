function DataIteration({ datas = [], startLength, endLength, children }) {
  return (
    <>
      {datas &&
        datas.length >= endLength &&
        datas
          .slice(startLength, endLength)
          .map((value) => children({ datas: value }))}
    </>
  );
}

export default DataIteration;
