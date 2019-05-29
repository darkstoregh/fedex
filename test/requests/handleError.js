export default (done, res) => {
  if (res.HighestSeverity === 'ERROR') {
    console.log(res);
    done(new Error(JSON.stringify(res)));
    return true;
  }
  return false;
};
