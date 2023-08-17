function ResultPageView() {
  return (
    <>
      <div>
        <span className='total-view'>총 <b>109</b>개</span>
        <span className='select-wrap'>
          <select name="pageViewCnt">
            <option value="20" selected="selected">20개씩 보기</option>
            <option value="40">40개씩 보기</option>
            <option value="60">60개씩 보기</option>
            <option value="100">100개씩 보기</option>
          </select>
        </span>
      </div>
    </>
  )
}

export default ResultPageView;
