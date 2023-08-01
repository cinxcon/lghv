function PopupNotiMethod() {
  return (
    <>
      <table className="popup-table">
        <caption>table caption</caption>
        <colgroup>
          <col span={3} style={{ width: '33%' }} />
        </colgroup>
        <thead>
          <tr>
            <th scope="col">대상</th>
            <th scope="col">SMS</th>
            <th scope="col">E-MAIL</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>등록자/부서</td>
            <td>
              <input type="checkbox" name="a" id="sms" checked="checked" readOnly />
              <label htmlFor="sms" className="hide">SMS</label>
            </td>
            <td>
              <input type="checkbox" name="a" id="email" disabled />
              <label htmlFor="email" className="hide">E-MAIL</label>
            </td>
          </tr>
          <tr>
            <td>검토자</td>
            <td>
              <input type="checkbox" name="b" id="sms" disabled />
              <label htmlFor="sms" className="hide">SMS</label>
            </td>
            <td>
              <input type="checkbox" name="b" id="email" checked="checked" readOnly />
              <label htmlFor="email" className="hide">E-MAIL</label>
            </td>
          </tr>
        </tbody>
      </table>
      <ul className="list-primary">
        <li>가입자의 경우, 헬로비전 가입자에게 보내는 것임으로 신중하게 선택하시기 바랍니다.</li>
        <li>가입자의 경우, 헬로비전 가입자에게 보내는 것임으로 신중하게 선택하시기 바랍니다.</li>
      </ul>
    </>
  )
}

export default PopupNotiMethod;
