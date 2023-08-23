function PopupProcessHistory() {
  return (
    <>
      <table className="popup-table">
        <caption>table caption</caption>
        <colgroup>
          <col span={4} style={{ width: '25%' }} />
        </colgroup>
        <thead>
          <tr>
            <th scope="col">상태</th>
            <th scope="col">처리자</th>
            <th scope="col">처리일시</th>
            <th scope="col">의견</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>등록</td>
            <td>홍길동</td>
            <td>2023-07-01 10:40:00</td>
            <td></td>
          </tr>
          <tr>
            <td>접수</td>
            <td>김아무개</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>결재완료</td>
            <td>김철수</td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

function PopupProcessHistoryBLK() {
  return (
    <>
      <table className="popup-table">
        <caption>table caption</caption>
        <colgroup>
          <col span={4} style={{ width: '25%' }} />
        </colgroup>
        <thead>
          <tr>
            <th scope="col">상태</th>
            <th scope="col">처리자</th>
            <th scope="col">처리일시</th>
            <th scope="col">의견</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>등록</td>
            <td>홍길동</td>
            <td>2023-07-01 10:40:00</td>
            <td></td>
          </tr>
          <tr>
            <td>결재완료</td>
            <td>김철수</td>
            <td>2023-07-01 10:40:00</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export { PopupProcessHistory, PopupProcessHistoryBLK };
