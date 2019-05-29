export default (done, res) => {
  if (res.HighestSeverity === 'ERROR') {
    done(new Error(JSON.stringify(res)));
    return true;
  }
  return false;
};
