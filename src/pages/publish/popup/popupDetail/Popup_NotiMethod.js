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
              <input type="checkbox" name="department" id="sms_department" />
              <label htmlFor="sms_department" >SMS</label>
            </td>
            <td>
              <input type="checkbox" name="department" id="email_department" />
              <label htmlFor="email_department" >E-MAIL</label>
            </td>
          </tr>
          <tr>
            <td>검토자</td>
            <td>
              <input type="checkbox" name="reviewer" id="sms_reviewer" />
              <label htmlFor="sms_reviewer" >SMS</label>
            </td>
            <td>
              <input type="checkbox" name="reviewer" id="email_reviewer" />
              <label htmlFor="email_reviewer" >E-MAIL</label>
            </td>
          </tr>
          <tr>
            <td>가입자</td>
            <td>
              <input type="checkbox" name="subscriber" id="sms_subscriber" />
              <label htmlFor="sms_subscriber" >SMS</label>
            </td>
            <td>
              <input type="checkbox" name="subscriber" id="email_subscriber" />
              <label htmlFor="email_subscriber" >E-MAIL</label>
            </td>
          </tr>
          <tr>
            <td>NOC / DMC</td>
            <td>
              <input type="checkbox" name="DMC" id="sms_DMC" />
              <label htmlFor="sms_DMC" >SMS</label>
            </td>
            <td>
              <input type="checkbox" name="DMC" id="email_DMC" />
              <label htmlFor="email_DMC" >E-MAIL</label>
            </td>
          </tr>
        </tbody>
      </table>
      <ul className="list-primary">
        <li>※ 가입자의 경우, 헬로비전 가입자에게 보내는 것임으로 신중하게 선택하시길 바랍니다.</li>
      </ul>
    </>
  )
}

export default PopupNotiMethod;
