function TooltipMsgWorkType() {
  return (
    <table className='approval-table'>
      <caption>작업 유형</caption>
      <colgroup>
        <col style={{ width: '25%' }} />
        <col style={{ width: '75%' }} />
      </colgroup>
      <tbody>
        <tr>
          <th scope='row'>기반</th>
          <td>UPS 발전기, 축전지, 소방공조</td>
        </tr>
        <tr>
          <th scope='row'>시스템</th>
          <td>방송, 인터넷, 전화, APP, 다운로드, Vision, Cloud, Tving, 시스템의 증설/이설 작업 일체</td>
        </tr>
        <tr>
          <th scope='row'>H/E</th>
          <td>분배단, 광, 송수신기, OFD, 지상차 Ant, NMS</td>
        </tr>
        <tr>
          <th scope='row'>전송망</th>
          <td>지장이설, 광다대화, 함체 작업, 접지, 차단기, (U)ps, 셀분할, 신설망, 노이즈</td>
        </tr>
        <tr>
          <th scope='row'>기간망</th>
          <td>임차밍(자가포함)</td>
        </tr>
      </tbody>
    </table>
  )
}

export default TooltipMsgWorkType;
