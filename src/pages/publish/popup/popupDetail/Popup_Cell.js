const LoadCell = ({ onItemSelected, isWinOpen }) => {
  const data = [
    { cell: 'DG1', address: '태백~도계 국간망', dtn: 83, net: 29, voip: 8, atv: 12, total: 132 }
  ];
  const templateSearch = () => {
    // 템플릿 검색
  }

  const handleConfirmClick = () => {
  // 템플릿 선택
  }

  return (
    <>
    <div className='pop-search-wrap'>
        <table className='popup-table left'>
        <caption>제목, 등록번호, 등록자, 등록부서, 등록일, 종료일, 구역명, 완료예정일, 구분 항목의 검색 영역</caption>
            <colgroup>
                <col style={{ width: '9%' }} />
                <col style={{ width: '32%' }} />
                <col style={{ width: '10%' }} />
                <col style={{ width: '20%' }} />
                <col style={{ width: '9%' }} />
                <col style={{ width: '20%' }} />
            </colgroup>
        <tbody>
            <tr>
            <th scope="row"><label htmlFor='category'>인프라팀</label></th>
            <td>
                <select name="category" id="category">
                <option value="">선택</option>
                </select>
            </td>
            <th scope="row"><label htmlFor='category'>SO</label></th>
            <td>
                <select name="category" id="category">
                <option value="">선택</option>
                </select>
            </td>
            <th scope="row"><label htmlFor='category'>국사</label></th>
            <td>
                <select name="category" id="category">
                <option value="">선택</option>
                </select>
            </td>
            </tr>
            <tr>
                <th scope="row"><label htmlFor='category'>CELL</label></th>
            <td>
                <input type='text' name='category' id='name_search' style={{ width: '45%' }} />
                <button onClick={templateSearch} className='btn btn-black'>선택</button>
                <button onClick={templateSearch} className='btn btn-white'>삭제</button>
            </td>
            <th scope="row"><label htmlFor="addr_search">주소 검색</label></th>
            <td colSpan={3}>
                <input type='text' name='addr-search' id='addr_search' style={{ width: '91%' }} />
                <button onClick={templateSearch} className='btn btn-black btn-search'>검색</button>
            </td>
            </tr>
            </tbody>
        </table>
    </div>
    <div className='approval-conts'>
        <div className="result-pageview mb15">
            <div>
                <span className='total-view'>총 <b>109</b>개</span>
                <span className='select-wrap'>
                <select name="pageViewCnt">
                    <option value="20" selected="selected">20개씩 보기</option>
                    <option value="30">30개씩 보기</option>
                    <option value="50">50개씩 보기</option>
                    <option value="100">100개씩 보기</option>
                </select>
                </span>
            </div>
            <div className='btn-wrap'>
                <button type="button" className='btn btn-low'>해당 없음</button>
                <button type="button" className='btn btn-low'>전사</button>
                <button type="button" className='btn btn-low'>확인</button>
            </div>
        </div>
        <table className="popup-table center">
            <caption>제목, 등록번호, 등록자, 등록부서, 등록일, 종료일, 구역명, 완료예정일, 구분 항목의 검색 영역</caption>
            <colgroup>
                <col style={{ width: '5%' }} />
                <col style={{ width: '10%' }} />
                <col style={{ width: '35%' }} />
                <col style={{ width: '10%' }} />
                <col style={{ width: '10%' }} />
                <col style={{ width: '10%' }} />
                <col style={{ width: '10%' }} />
                <col style={{ width: '10%' }} />
            </colgroup>
            <thead>
            <tr>
                <th rowSpan={2}></th>
                <th rowSpan={2}>CELL</th>
                <th rowSpan={2}>주소</th>
                <th colSpan={4}>가입자 모수</th>
                <th rowSpan={2}>합</th>
            </tr>
            <tr>
                <th>DTN</th>
                <th>NET</th>
                <th>VOIP</th>
                <th>ATV</th>
            </tr>
            </thead>
            <tbody>
            {data.map((row, index) => (
            <tr key={row.id} onClick={handleConfirmClick}>
                <td>
                    <input type="checkbox" name={`service ${index}`} id={`ser_${index}`} value="" />
                    <label htmlFor={`ser_${index}`} style={{ margin: '0' }}></label>
                </td>
                <td>{row.cell}</td>
                <td>{row.address}</td>
                <td>{row.dtn}</td>
                <td>{row.net}</td>
                <td>{row.voip}</td>
                <td>{row.atv}</td>
                <td>{row.total}</td>
            </tr>))}
            </tbody>
        </table>
    </div>
    </>
  );
};

// function OpenWindow() {
//     return ReactDOM.createPortal(LoadCell, document.getElementById("open-window"));
// }
export default LoadCell;
